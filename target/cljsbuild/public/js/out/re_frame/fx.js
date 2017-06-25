// Compiled by ClojureScript 1.9.562 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__36885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__36886 = null;
var count__36887 = (0);
var i__36888 = (0);
while(true){
if((i__36888 < count__36887)){
var vec__36889 = cljs.core._nth.call(null,chunk__36886,i__36888);
var effect_k = cljs.core.nth.call(null,vec__36889,(0),null);
var value = cljs.core.nth.call(null,vec__36889,(1),null);
var temp__4655__auto___36895 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___36895)){
var effect_fn_36896 = temp__4655__auto___36895;
effect_fn_36896.call(null,value);
} else {
}

var G__36897 = seq__36885;
var G__36898 = chunk__36886;
var G__36899 = count__36887;
var G__36900 = (i__36888 + (1));
seq__36885 = G__36897;
chunk__36886 = G__36898;
count__36887 = G__36899;
i__36888 = G__36900;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36885);
if(temp__4657__auto__){
var seq__36885__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36885__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__36885__$1);
var G__36901 = cljs.core.chunk_rest.call(null,seq__36885__$1);
var G__36902 = c__31301__auto__;
var G__36903 = cljs.core.count.call(null,c__31301__auto__);
var G__36904 = (0);
seq__36885 = G__36901;
chunk__36886 = G__36902;
count__36887 = G__36903;
i__36888 = G__36904;
continue;
} else {
var vec__36892 = cljs.core.first.call(null,seq__36885__$1);
var effect_k = cljs.core.nth.call(null,vec__36892,(0),null);
var value = cljs.core.nth.call(null,vec__36892,(1),null);
var temp__4655__auto___36905 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___36905)){
var effect_fn_36906 = temp__4655__auto___36905;
effect_fn_36906.call(null,value);
} else {
}

var G__36907 = cljs.core.next.call(null,seq__36885__$1);
var G__36908 = null;
var G__36909 = (0);
var G__36910 = (0);
seq__36885 = G__36907;
chunk__36886 = G__36908;
count__36887 = G__36909;
i__36888 = G__36910;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__36911 = cljs.core.seq.call(null,value);
var chunk__36912 = null;
var count__36913 = (0);
var i__36914 = (0);
while(true){
if((i__36914 < count__36913)){
var map__36915 = cljs.core._nth.call(null,chunk__36912,i__36914);
var map__36915__$1 = ((((!((map__36915 == null)))?((((map__36915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36915):map__36915);
var effect = map__36915__$1;
var ms = cljs.core.get.call(null,map__36915__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36915__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36911,chunk__36912,count__36913,i__36914,map__36915,map__36915__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36911,chunk__36912,count__36913,i__36914,map__36915,map__36915__$1,effect,ms,dispatch))
,ms);
}

var G__36919 = seq__36911;
var G__36920 = chunk__36912;
var G__36921 = count__36913;
var G__36922 = (i__36914 + (1));
seq__36911 = G__36919;
chunk__36912 = G__36920;
count__36913 = G__36921;
i__36914 = G__36922;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36911);
if(temp__4657__auto__){
var seq__36911__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36911__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__36911__$1);
var G__36923 = cljs.core.chunk_rest.call(null,seq__36911__$1);
var G__36924 = c__31301__auto__;
var G__36925 = cljs.core.count.call(null,c__31301__auto__);
var G__36926 = (0);
seq__36911 = G__36923;
chunk__36912 = G__36924;
count__36913 = G__36925;
i__36914 = G__36926;
continue;
} else {
var map__36917 = cljs.core.first.call(null,seq__36911__$1);
var map__36917__$1 = ((((!((map__36917 == null)))?((((map__36917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36917):map__36917);
var effect = map__36917__$1;
var ms = cljs.core.get.call(null,map__36917__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36917__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36911,chunk__36912,count__36913,i__36914,map__36917,map__36917__$1,effect,ms,dispatch,seq__36911__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36911,chunk__36912,count__36913,i__36914,map__36917,map__36917__$1,effect,ms,dispatch,seq__36911__$1,temp__4657__auto__))
,ms);
}

var G__36927 = cljs.core.next.call(null,seq__36911__$1);
var G__36928 = null;
var G__36929 = (0);
var G__36930 = (0);
seq__36911 = G__36927;
chunk__36912 = G__36928;
count__36913 = G__36929;
i__36914 = G__36930;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__36931 = cljs.core.seq.call(null,value);
var chunk__36932 = null;
var count__36933 = (0);
var i__36934 = (0);
while(true){
if((i__36934 < count__36933)){
var event = cljs.core._nth.call(null,chunk__36932,i__36934);
re_frame.router.dispatch.call(null,event);

var G__36935 = seq__36931;
var G__36936 = chunk__36932;
var G__36937 = count__36933;
var G__36938 = (i__36934 + (1));
seq__36931 = G__36935;
chunk__36932 = G__36936;
count__36933 = G__36937;
i__36934 = G__36938;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36931);
if(temp__4657__auto__){
var seq__36931__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36931__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__36931__$1);
var G__36939 = cljs.core.chunk_rest.call(null,seq__36931__$1);
var G__36940 = c__31301__auto__;
var G__36941 = cljs.core.count.call(null,c__31301__auto__);
var G__36942 = (0);
seq__36931 = G__36939;
chunk__36932 = G__36940;
count__36933 = G__36941;
i__36934 = G__36942;
continue;
} else {
var event = cljs.core.first.call(null,seq__36931__$1);
re_frame.router.dispatch.call(null,event);

var G__36943 = cljs.core.next.call(null,seq__36931__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36931 = G__36943;
chunk__36932 = G__36944;
count__36933 = G__36945;
i__36934 = G__36946;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__36947 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__36948 = null;
var count__36949 = (0);
var i__36950 = (0);
while(true){
if((i__36950 < count__36949)){
var event = cljs.core._nth.call(null,chunk__36948,i__36950);
clear_event.call(null,event);

var G__36951 = seq__36947;
var G__36952 = chunk__36948;
var G__36953 = count__36949;
var G__36954 = (i__36950 + (1));
seq__36947 = G__36951;
chunk__36948 = G__36952;
count__36949 = G__36953;
i__36950 = G__36954;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36947);
if(temp__4657__auto__){
var seq__36947__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36947__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__36947__$1);
var G__36955 = cljs.core.chunk_rest.call(null,seq__36947__$1);
var G__36956 = c__31301__auto__;
var G__36957 = cljs.core.count.call(null,c__31301__auto__);
var G__36958 = (0);
seq__36947 = G__36955;
chunk__36948 = G__36956;
count__36949 = G__36957;
i__36950 = G__36958;
continue;
} else {
var event = cljs.core.first.call(null,seq__36947__$1);
clear_event.call(null,event);

var G__36959 = cljs.core.next.call(null,seq__36947__$1);
var G__36960 = null;
var G__36961 = (0);
var G__36962 = (0);
seq__36947 = G__36959;
chunk__36948 = G__36960;
count__36949 = G__36961;
i__36950 = G__36962;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1497293538896