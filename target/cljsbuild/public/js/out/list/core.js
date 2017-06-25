// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('list.events');
goog.require('list.subs');
goog.require('list.routes');
goog.require('list.views');
goog.require('list.firebase');
if(typeof list.core.firebase_config !== 'undefined'){
} else {
list.core.firebase_config = ({"apiKey": "AIzaSyAgsiDBQDXhQvFleO8iII0NQHD2H-CwpO0", "authDomain": "tag-list.firebaseapp.com", "databaseURL": "https://tag-list.firebaseio.com", "projectId": "tag-list", "storageBucket": "tag-list.appspot.com", "messagingSenderId": "317872108912"});
}
list.core.mount_root = (function list$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.views.page_selector], null),document.getElementById("app"));
});
list.core.init_BANG_ = (function list$core$init_BANG_(){
list.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

list.core.mount_root.call(null);

list.firebase.init_firebase.call(null,list.core.firebase_config);

return list.firebase.get_items.call(null);
});

//# sourceMappingURL=core.js.map?rel=1498422728903