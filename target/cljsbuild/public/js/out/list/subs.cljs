(ns list.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

;; first param is current app state. 2nd param is query vector

(re-frame/reg-sub
 :page
 (fn [db _]
   (:page db)))

(re-frame/reg-sub
 :items
 (fn [db]
   (:items db)))

(re-frame/reg-sub
  :item
  (fn [db [_ id]]
    (let [filtered-items (filter #(= (:id %) id) (:items db))]
      (first filtered-items))))

(re-frame/reg-sub
  :visible-item-ids
  (fn [db _]
    (:visible-item-ids db)))

(re-frame/reg-sub
  :search-text
  (fn [db _]
    (:search-text db)))

(re-frame/reg-sub
  :search-tag
  (fn [db _]
    (:search-tag db)))
