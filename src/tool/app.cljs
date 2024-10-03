(ns tool.app
  (:require [clojure.string :as string]
            [clojure.walk :as walk]
            [gadget.inspector :as inspector]
            [cljsjs.d3]
            [replicant.dom :as r]))

;; (r/set-dispatch!
;;   (fn [replicant-data handler-data]
;;     (prn "Click!")))

;; (r/render
;;   (js/document.getElementById "app")
;;   [:h1 {:on {:click [:whatever]}} "Click me"])

(defonce ^:private !state (atom {:ui/banner-text "An annoying banner"}))

(def ejm "a n a\na l i n a\na m i n")

(defn event-handler2 [replicant-data handler-data]
     (prn "Click!"))

(defn edit-view [{:something/keys [draftdd]}]
  [:div
   [:h3 "This tool, (The Brauer Analysis Tool) allows you to perform a Brauer Analysis of some data. Enter a message below. Separate each letter with spaces and each word with a new line. Then press the 'Process' button. To see an example use the button 'Example'."]
   [:form {:on {:submit [[:dom/prevent-default]
                         [:db/assoc :something/saved [:db/get :something/draft]]
                         [:tool/process]
                         [:dom/set-input-text [:db/get :something/height-input-element] [:db/get :something/height]]]}}

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
    [:button {:on {:click [[:dom/reload]]}} "Clean"]
    [:button {:on {:click [[:db/assoc :something/draft ejm]
                           [:dom/set-input-text [:db/get :something/draft-input-element] ejm]]}}
     "Example"]]])

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
    (into [:ul] (map #(vector :li (str "S_" (first (keys %)) " = " (listar-vals (first (vals %))) (first (first (vals %))) )) sucesores))]
   [:button.collapsible "▷ Heights plot"]
   [:div.content
    [:div#plot]]])

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
        sucesores (map (genfn-seq-suc w) sec-suc)
        heights (if (state :something/height) (into [] (map #(string/split % #" ") (string/split (:something/height state) #"\n"))) nil)
        heights-data (map-indexed #(hash-map :x (inc %1) :y (second %2)) heights)
        heights-data-y (map #(js/parseInt (second %)) heights)  
        margin {:top 10 :right 40 :bottom 30 :left 30}
        width (- 450 (:left margin) (:right margin))
        height (- 400 (:top margin) (:bottom margin))
        svg (-> js/d3
                (.select "#plot")
                (.append "svg")
                (.attr "width" (+ width (:left margin) (:right margin)))
                (.attr "height" (+ height (:top margin) (:bottom margin)))
                (.append "g")
                (.attr "transform" (str "translate(" (:left margin) "," (:top margin) ")")))
        x (-> js/d3
              (.scaleLinear)
              (.domain [0 (count sec-suc)])
              (.range [0 width]))
        y (-> js/d3
              (.scaleLinear)
              (.domain [(* 1 (apply min heights-data-y)) (* 1.10 (apply max heights-data-y))])
              (.range [height 0]))]
    (swap! !state assoc :something/frecuencias w-freq :something/sec-suc sec-suc :something/sucesores sucesores)
    (swap! !state assoc :something/height (if (not heights) (apply str (interpose "\n" sec-suc)) (:something/height state)))
    (prn "w: " w "sec-suc: " sec-suc " w-freq: " w-freq " heig: " heights " heights-data " heights-data "heights-y: " (apply max heights-data-y))
    (-> svg
        (.append "g")
        (.attr "transform" (str "translate(0," height ")"))
        (.call (-> js/d3
                   (.axisBottom x))))
    (-> svg
        (.append "g")
        (.call (-> js/d3
                   (.axisLeft y))))
    (-> svg
        (.selectAll "whatever")
        (.data heights-data)
        (.enter)
        (.append "circle")
        (.attr "cx" #(x (:x %)))
        (.attr "cy" #(y (:y %)))
        (.attr "r" 7))
    ))

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
        :tool/example (swap! !state assoc :something/draft "a n a\na l i n a\na m i n")
        :dom/reload (js/location.reload)
        (prn "Unknown action" action))))
  (render! @!state))

(defn ^{:dev/after-load true :export true} start! []
  (render! @!state))

(defn ^:export init! []
  (inspector/inspect "App state" !state)
  (r/set-dispatch! event-handler)
  (start!))

