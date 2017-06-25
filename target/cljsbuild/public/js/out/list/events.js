// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('list.db');
list.events.to_list = (function list$events$to_list(items){
return cljs.core.reduce_kv.call(null,(function (item_list,key,val){
return cljs.core.conj.call(null,item_list,val);
}),cljs.core.PersistentVector.EMPTY,items);
});
list.events.includesInsensitive_QMARK_ = (function list$events$includesInsensitive_QMARK_(str,query){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,str),clojure.string.lower_case.call(null,query));
});
list.events.filter_items_by_text = (function list$events$filter_items_by_text(text,items){
return cljs.core.filter.call(null,(function (p1__35601_SHARP_){
return list.events.includesInsensitive_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__35601_SHARP_),text);
}),items);
});
list.events.filter_items_by_tag = (function list$events$filter_items_by_tag(tag,items){
return cljs.core.filter.call(null,(function (p1__35602_SHARP_){
return list.events.includesInsensitive_QMARK_.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(p1__35602_SHARP_),tag);
}),items);
});
list.events.replace_item = (function list$events$replace_item(item,items){
return cljs.core.map.call(null,(function (item_to_check){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item_to_check),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
return item;
} else {
return item_to_check;
}
}),items);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return list.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-page","set-page",1750905514),(function (db,p__35603){
var vec__35604 = p__35603;
var _ = cljs.core.nth.call(null,vec__35604,(0),null);
var page = cljs.core.nth.call(null,vec__35604,(1),null);
var params = cljs.core.nth.call(null,vec__35604,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,params], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"receive-items","receive-items",-1791572134),(function (db,p__35607){
var vec__35608 = p__35607;
var _ = cljs.core.nth.call(null,vec__35608,(0),null);
var items = cljs.core.nth.call(null,vec__35608,(1),null);
var item_list = list.events.to_list.call(null,items);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),item_list)),new cljs.core.Keyword(null,"items","items",1031954938),item_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-item","remove-item",2128630697),(function (db,p__35611){
var vec__35612 = p__35611;
var _ = cljs.core.nth.call(null,vec__35612,(0),null);
var item = cljs.core.nth.call(null,vec__35612,(1),null);
var item_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var filtered_items = cljs.core.filter.call(null,((function (item_id,vec__35612,_,item){
return (function (x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),item_id);
});})(item_id,vec__35612,_,item))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),filtered_items)),new cljs.core.Keyword(null,"items","items",1031954938),filtered_items);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db,p__35615){
var vec__35616 = p__35615;
var _ = cljs.core.nth.call(null,vec__35616,(0),null);
var item = cljs.core.nth.call(null,vec__35616,(1),null);
var items = cljs.core.conj.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db),item);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),items)),new cljs.core.Keyword(null,"items","items",1031954938),items);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-item","update-item",-83118838),(function (db,p__35619){
var vec__35620 = p__35619;
var _ = cljs.core.nth.call(null,vec__35620,(0),null);
var item = cljs.core.nth.call(null,vec__35620,(1),null);
var items = list.events.replace_item.call(null,item,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),items)),new cljs.core.Keyword(null,"items","items",1031954938),items);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"search-text","search-text",1559451259),(function (db,p__35623){
var vec__35624 = p__35623;
var _ = cljs.core.nth.call(null,vec__35624,(0),null);
var text = cljs.core.nth.call(null,vec__35624,(1),null);
var visible_item_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),list.events.filter_items_by_text.call(null,text,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-tag","search-tag",855560448),""),new cljs.core.Keyword(null,"search-text","search-text",1559451259),text),new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),visible_item_ids);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"search-tag","search-tag",855560448),(function (db,p__35627){
var vec__35628 = p__35627;
var _ = cljs.core.nth.call(null,vec__35628,(0),null);
var tag = cljs.core.nth.call(null,vec__35628,(1),null);
var visible_item_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),list.events.filter_items_by_tag.call(null,tag,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-tag","search-tag",855560448),tag),new cljs.core.Keyword(null,"search-text","search-text",1559451259),""),new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),visible_item_ids);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-filter","clear-filter",-447106109),(function (db,p__35631){
var vec__35632 = p__35631;
var _ = cljs.core.nth.call(null,vec__35632,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35632,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-tag","search-tag",855560448),""),new cljs.core.Keyword(null,"search-text","search-text",1559451259),""),new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)));
}));

//# sourceMappingURL=events.js.map?rel=1498422728784