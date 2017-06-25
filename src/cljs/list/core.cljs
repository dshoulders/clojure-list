(ns list.core
    (:require [reagent.core :as reagent :refer [atom]]
              [re-frame.core :as re-frame]
              [list.events]
              [list.subs]
              [list.routes :as routes]
              [list.views :as views]
              [list.firebase :as fb]))

;; -------------------------
;; Initialize app

(defonce firebase-config #js {
                              :apiKey "AIzaSyAgsiDBQDXhQvFleO8iII0NQHD2H-CwpO0"
                              :authDomain "tag-list.firebaseapp.com"
                              :databaseURL "https://tag-list.firebaseio.com"
                              :projectId "tag-list"
                              :storageBucket "tag-list.appspot.com"
                              :messagingSenderId "317872108912"})

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/page-selector]
                  (.getElementById js/document "app")))


(defn init! []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root)
  (fb/init-firebase firebase-config)
  (fb/get-items))
