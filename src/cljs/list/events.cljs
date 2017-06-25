(ns list.events
  (:require [re-frame.core :as re-frame]
            [list.db :as db]))

;; Utils

(defn to-list [items]
  (reduce-kv
    (fn [item-list key val]
      (conj item-list val))
    []
    items))

(defn includesInsensitive? [str query]
  (clojure.string/includes?
    (clojure.string/lower-case str)
    (clojure.string/lower-case query)))

(defn filter-items-by-text [text items]
  (filter #(includesInsensitive? (:title %) text) items))

(defn filter-items-by-tag [tag items]
  (filter #(includesInsensitive? (:notes %) tag) items))

(defn replace-item [item items]
  (map
    (fn [item-to-check]
      (if (= (:id item-to-check) (:id item)) item item-to-check))
    items))

;; Events
;; first param is current app state. 2nd param is event vector [:event-name ...args]

(re-frame/reg-event-db
  :initialize-db
  (fn  [_ _]
    db/default-db))

(re-frame/reg-event-db
 :set-page
 (fn [db [_ page params]]
   (assoc db :page [page params])))

(re-frame/reg-event-db
  :receive-items
  (fn [db [_ items]]
    (let [item-list (to-list items)]
      (->
        db
        (assoc :visible-item-ids (map :id item-list))
        (assoc :items item-list)))))

(re-frame/reg-event-db
  :remove-item
  (fn [db [_ item]]
    (let [item-id (:id item)
          filtered-items (filter
                            (fn [x]
                              (not= (:id x) item-id))
                            (:items db))]
      (->
        db
        (assoc :visible-item-ids (map :id filtered-items))
        (assoc :items filtered-items)))))

(re-frame/reg-event-db
  :add-item
  (fn [db [_ item]]
    (let [items (conj (:items db) item)]
      (->
        db
        (assoc :visible-item-ids (map :id items))
        (assoc :items items)))))

(re-frame/reg-event-db
  :update-item
  (fn [db [_ item]]
    (let [items (replace-item item (:items db))]
      (->
        db
        (assoc :visible-item-ids (map :id items))
        (assoc :items items)))))

(re-frame/reg-event-db
 :search-text
 (fn [db [_ text]]
   (let [visible-item-ids (map :id (filter-items-by-text text (:items db)))]
     (->
       db
        (assoc :search-tag "")
        (assoc :search-text text)
        (assoc :visible-item-ids visible-item-ids)))))

(re-frame/reg-event-db
 :search-tag
 (fn [db [_ tag]]
   (let [visible-item-ids (map :id (filter-items-by-tag tag (:items db)))]
     (->
       db
        (assoc :search-tag tag)
        (assoc :search-text "")
        (assoc :visible-item-ids visible-item-ids)))))

(re-frame/reg-event-db
  :clear-filter
  (fn [db [_ _]]
    (->
      db
      (assoc :search-tag "")
      (assoc :search-text "")
      (assoc :visible-item-ids (map :id (:items db))))))
