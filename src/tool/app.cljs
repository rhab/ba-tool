(ns tool.app
  (:require [clojure.string :as string]
            [clojure.walk :as walk]
            [gadget.inspector :as inspector]
            [replicant.dom :as r]))

;; (r/set-dispatch!
;;   (fn [replicant-data handler-data]
;;     (prn "Click!")))

;; (r/render
;;   (js/document.getElementById "app")
;;   [:h1 {:on {:click [:whatever]}} "Click me"])

(defonce ^:private !state (atom {:ui/banner-text "An annoying banner"}))

(defn event-handler2 [replicant-data handler-data]
     (prn "Click!"))

(defn edit-view [{:something/keys [draftdd]}]
  [:div
   [:h3 "This tool, (The Brauer Analysis Tool) allows you to perform a Brauer Analysis of some data. Enter a message below. Separate each letter with spaces and each word with new line. Then press the 'Process' button. To see an example use the button 'Example'."]
   [:form {:on {:submit [[:dom/prevent-default]
                         [:db/assoc :something/saved [:db/get :something/draft]]
                         [:tool/process]]}}

    [:div.flex-container
     [:div
      [:h4 "Message"]
      [:textarea#msg {:replicant/on-mount [[:db/assoc :something/draft-input-element :dom/node]]
                      :on {:input [[:db/assoc :something/draft :event/target.value]]}
                      :cols 50 :rows 10}]]
     [:div
      [:h4 "Heights"]
      [:textarea#hei {:replicant/on-mount [[:db/assoc :something/height-input-element :dom/node]]
                      :on {:input [[:db/assoc :something/height :event/target.value]]}
                      :cols 50 :rows 10}]]]
    [:br]
    [:button {:type :submit} "Process"]
    [:button {:type :submit} "Clean"]
    [:button {:type :submit} "Example"]]])

(defn display-view [{:something/keys [draft saved]}]
  [:div
   [:h2 "On display"]
   [:ul
    [:li {:replicant/key "draft"} "Draft: " draft]
    [:li {:replicant/key "saved"} "Saved: " saved]]])

(defn listar-vals [lista]
  (cond
    (empty? lista) ""
    :else (str (first lista) " < " (listar-vals (rest lista)))))

(defn display-results [{:something/keys [sec-suc saved frecuencias sucesores]}]
  (prn "desde adento: " sec-suc frecuencias)
  [:div
   [:button.collapsible "▷ Valencies"]
   [:div.content
    (into [:ul] (map #(vector :li (str % ": " (frecuencias %))) sec-suc))]
   [:button.collapsible "▷ Succesor Sequences"]
   [:div.content
    (into [:ul] (map #(vector :li (str "S_" (first (keys %)) " = " (listar-vals (first (vals %))) (first (first (vals %))) )) sucesores))]])

(defn main-view [state]
  [:div {:style {:position "relative"}}
   [:h1 {:on {:click [:whatever]}} "BA - TOOL"]
   (edit-view state)
   ;; (display-view state)
   (display-results state)
   (prn state)])

(defn render! [state]
  (r/render
   (js/document.getElementById "app")
   (main-view state)))

(defn- enrich-action-from-event [{:replicant/keys [js-event node]} actions]
  (walk/postwalk
   (fn [x]
     (cond
       (keyword? x)
       (case x
         :event/target.value (-> js-event .-target .-value)
         :dom/node node
         x)
       :else x))
   actions))

(defn- enrich-action-from-state [state action]
  (walk/postwalk
   (fn [x]
     (cond
       (and (vector? x)
            (= :db/get (first x))) (get state (second x))
       :else x))
   action))

(defn suc-nota [lista nota id-pal]
  (cond
    (empty? lista) lista
    (= (first lista) nota) (cons (str "w_" id-pal) (suc-nota (rest lista) nota id-pal))
    :else (suc-nota (rest lista) nota id-pal)
    ))

(defn recorrer-vectores [lista nota pos]
  (cond
    (empty? lista) lista
    :else (cons (suc-nota (first lista) nota pos) (recorrer-vectores (rest lista) nota (inc pos)))
    ))

(defn genfn-seq-suc [w]
  (fn [nota] {nota (flatten (recorrer-vectores w nota 1))}))

(defn process [state]
  (let [w (into [] (map #(string/split % #" ") (string/split (:something/draft state) #"\n")))
        sec-suc (distinct (flatten w))
        w-freq (frequencies (flatten w))
        valencias (map #(hash-map %1 (w-freq %1)) sec-suc)
        sucesores (map (genfn-seq-suc w) sec-suc)]
    (swap! !state assoc :something/frecuencias w-freq :something/sec-suc sec-suc :something/sucesores sucesores)
    (prn "w: " w "sec-suc: " sec-suc " w-freq: " w-freq " val: " valencias)))

(defn event-handler [{:replicant/keys [^js js-event] :as replicant-data} actions]
  (doseq [action actions]
    (prn "Triggered action" action)
    (let [enriched-action (->> action
                               (enrich-action-from-event replicant-data)
                               (enrich-action-from-state @!state))
          [action-name & args] enriched-action]
      (prn "Enriched action" enriched-action)
      (case action-name
        :dom/prevent-default (.preventDefault js-event)
        :db/assoc (apply swap! !state assoc args)
        :db/dissoc (apply swap! !state dissoc args)
        :dom/set-input-text (set! (.-value (first args)) (second args))
        :dom/focus-element (.focus (first args))
        :tool/process (process @!state)
        (prn "Unknown action" action))))
  (render! @!state))

(defn ^{:dev/after-load true :export true} start! []
  (render! @!state))

(defn ^:export init! []
  (inspector/inspect "App state" !state)
  (r/set-dispatch! event-handler)
  (start!))

