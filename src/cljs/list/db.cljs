(ns list.db)

(def default-db
  {:page [:home {}]
   :items []
   :visible-item-ids #{}
   :search-text ""
   :search-tag ""})
