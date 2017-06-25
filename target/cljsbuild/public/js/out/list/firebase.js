// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.firebase');
goog.require('cljs.core');
goog.require('re_frame.core');
list.firebase.list_address = "lists/recipes-dev/";
list.firebase.to_list = (function list$firebase$to_list(items){
return cljs.core.reduce_kv.call(null,(function (item_list,key,val){
return cljs.core.conj.call(null,item_list,val);
}),cljs.core.PersistentVector.EMPTY,items);
});
list.firebase.get_new_id = (function list$firebase$get_new_id(){
return firebase.database().ref().child(list.firebase.list_address).push().key;
});
list.firebase.init_firebase = (function list$firebase$init_firebase(config){
return firebase.initializeApp(config);
});
list.firebase.receive_items = (function list$firebase$receive_items(items){
var item_list = list.firebase.to_list.call(null,items);
cljs.core.swap_BANG_.call(null,list.firebase.state,cljs.core.assoc,new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),item_list));

return cljs.core.swap_BANG_.call(null,list.firebase.state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),item_list);
});
list.firebase.get_items = (function list$firebase$get_items(){
return firebase.database().ref(list.firebase.list_address).once("value",(function (snapshot){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"receive-items","receive-items",-1791572134),cljs.core.js__GT_clj.call(null,snapshot.val(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
}));
});
list.firebase.save_item = (function list$firebase$save_item(item_data){
var is_new_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item_data) == null);
var id = ((is_new_QMARK_)?list.firebase.get_new_id.call(null):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item_data));
var item = cljs.core.assoc.call(null,item_data,new cljs.core.Keyword(null,"id","id",-1388402092),id);
return firebase.database().ref([cljs.core.str.cljs$core$IFn$_invoke$arity$1(list.firebase.list_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')).set(cljs.core.clj__GT_js.call(null,item)).then(((function (is_new_QMARK_,id,item){
return (function (){
if(is_new_QMARK_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",715813891),item], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-item","update-item",-83118838),item], null));
}
});})(is_new_QMARK_,id,item))
);
});
list.firebase.update_item = (function list$firebase$update_item(item){
return firebase.database().ref([cljs.core.str.cljs$core$IFn$_invoke$arity$1(list.firebase.list_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))].join('')).set(cljs.core.clj__GT_js.call(null,item)).then((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-item","update-item",-83118838),item], null));
}));
});
list.firebase.remove_item = (function list$firebase$remove_item(item){
return firebase.database().ref([cljs.core.str.cljs$core$IFn$_invoke$arity$1(list.firebase.list_address),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))].join('')).remove().then((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",2128630697),item], null));
}));
});

//# sourceMappingURL=firebase.js.map?rel=1498418314567