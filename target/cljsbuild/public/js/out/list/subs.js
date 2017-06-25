// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function (db,_){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"items","items",1031954938),(function (db){
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"item","item",249373802),(function (db,p__33958){
var vec__33959 = p__33958;
var _ = cljs.core.nth.call(null,vec__33959,(0),null);
var id = cljs.core.nth.call(null,vec__33959,(1),null);
var filtered_items = cljs.core.filter.call(null,((function (vec__33959,_,id){
return (function (p1__33957_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33957_SHARP_),id);
});})(vec__33959,_,id))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.first.call(null,filtered_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386),(function (db,_){
return new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"search-text","search-text",1559451259),(function (db,_){
return new cljs.core.Keyword(null,"search-text","search-text",1559451259).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"search-tag","search-tag",855560448),(function (db,_){
return new cljs.core.Keyword(null,"search-tag","search-tag",855560448).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1498076486276