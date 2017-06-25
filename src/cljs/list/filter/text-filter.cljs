(ns list.filter.text-filter
  (:require [re-frame.core :as re-frame]
            [list.styles.base-styles :as base-styles]))

(defn view []
  (let [search-text (re-frame/subscribe [:search-text])]
    [:input {
              :style base-styles/input-styles
              :on-input #(re-frame/dispatch [:search-text (-> % .-target .-value)])
              :value @search-text
              :placeholder "Search"}]))
