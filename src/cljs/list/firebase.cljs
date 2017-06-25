(ns list.firebase
  (:require [re-frame.core :as re-frame]))


(def list-address "lists/recipes-dev/")

(defn to-list [items]
  (reduce-kv (fn [item-list key val]
              (conj item-list val))
            [] items))

(defn get-new-id []
  (.-key
    (.push
      (.child
        (.ref (.database js/firebase))
        list-address))))

(defn init-firebase [config]
  (.initializeApp js/firebase config))

(defn receive-items [items]
  (let [item-list (to-list items)]
    (swap! state assoc :visible-item-ids (map :id item-list))
    (swap! state assoc :items item-list)))

(defn get-items []
  (.once
    (.ref (.database js/firebase) list-address)
    "value" (fn [snapshot]
              (re-frame/dispatch
                [:receive-items
                  (js->clj (. snapshot val) :keywordize-keys true)]))))

(defn save-item [item-data]
  (let [is-new? (nil? (:id item-data))
        id (if is-new? (get-new-id) (:id item-data))
        item (assoc item-data :id id)]
    (.then
      (.set
        (.ref (.database js/firebase) (str list-address id))
        (clj->js item))
      (fn []
        (if
          is-new?
          (re-frame/dispatch [:add-item item])
          (re-frame/dispatch [:update-item item]))))))

(defn update-item [item]
  (.then
    (.set
      (.ref (.database js/firebase) (str list-address (:id item)))
      (clj->js item))
    (fn []
      (re-frame/dispatch [:update-item item]))))

(defn remove-item [item]
  (.then
    (.remove
      (.ref (.database js/firebase) (str list-address (:id item))))
    (fn []
      (re-frame/dispatch [:remove-item item]))))
