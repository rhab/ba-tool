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
   [:h2 "This tool, (The Brauer Analysis Tool) allows you to perform a Brauer Analysis of some data. Enter a message below."]
   [:form {:on {:submit [[:dom/prevent-default]
                         [:db/assoc :something/saved [:db/get :something/draft]]
                         [:tool/process]]}}
    [:span.wrap-input
     [:textarea#msg {:replicant/on-mount [[:db/assoc :something/draft-input-element :dom/node]]
                     :on {:input [[:db/assoc :something/draft :event/target.value]]}
                     :cols 50 :rows 10}]]
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

(defn display-results [{:something/keys [sec-suc saved]}]
  (prn "desde adento: " sec-suc)
  [:div
   [:button.collapsible "Valencies"]
   [:div.content
    (into [:ul] (map #(vector :li %) sec-suc))]])

(defn main-view [state]
  [:div {:style {:position "relative"}}
   [:h1 {:on {:click [:whatever]}} "BA - TOOL"]
   (edit-view state)
   (display-view state)
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

(defn process [state]
  (let [w (into [] (map #(string/split % #" ") (string/split (:something/draft state) #"\n")))
        sec-suc (distinct (flatten w))
        w-freq (frequencies (flatten w))
        valencias (map #(hash-map %1 (w-freq %1)) sec-suc)]
    (swap! !state assoc :frecuencias w-freq :something/sec-suc sec-suc)
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

