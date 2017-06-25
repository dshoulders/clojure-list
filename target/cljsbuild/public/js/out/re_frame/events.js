// Compiled by ClojureScript 1.9.562 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__36737_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__36737_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___36738 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___36738)){
var not_i_36739 = temp__4657__auto___36738;
if(cljs.core.fn_QMARK_.call(null,not_i_36739)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_36739);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_36739);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_36754 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36755 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36672__auto___36768 = re_frame.interop.now.call(null);
var duration__36673__auto___36769 = (end__36672__auto___36768 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__36756_36770 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__36757_36771 = null;
var count__36758_36772 = (0);
var i__36759_36773 = (0);
while(true){
if((i__36759_36773 < count__36758_36772)){
var vec__36760_36774 = cljs.core._nth.call(null,chunk__36757_36771,i__36759_36773);
var k__36674__auto___36775 = cljs.core.nth.call(null,vec__36760_36774,(0),null);
var cb__36675__auto___36776 = cljs.core.nth.call(null,vec__36760_36774,(1),null);
try{cb__36675__auto___36776.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___36769,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e36763){if((e36763 instanceof java.lang.Exception)){
var e__36676__auto___36777 = e36763;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___36775,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___36777);
} else {
throw e36763;

}
}
var G__36778 = seq__36756_36770;
var G__36779 = chunk__36757_36771;
var G__36780 = count__36758_36772;
var G__36781 = (i__36759_36773 + (1));
seq__36756_36770 = G__36778;
chunk__36757_36771 = G__36779;
count__36758_36772 = G__36780;
i__36759_36773 = G__36781;
continue;
} else {
var temp__4657__auto___36782 = cljs.core.seq.call(null,seq__36756_36770);
if(temp__4657__auto___36782){
var seq__36756_36783__$1 = temp__4657__auto___36782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36756_36783__$1)){
var c__31301__auto___36784 = cljs.core.chunk_first.call(null,seq__36756_36783__$1);
var G__36785 = cljs.core.chunk_rest.call(null,seq__36756_36783__$1);
var G__36786 = c__31301__auto___36784;
var G__36787 = cljs.core.count.call(null,c__31301__auto___36784);
var G__36788 = (0);
seq__36756_36770 = G__36785;
chunk__36757_36771 = G__36786;
count__36758_36772 = G__36787;
i__36759_36773 = G__36788;
continue;
} else {
var vec__36764_36789 = cljs.core.first.call(null,seq__36756_36783__$1);
var k__36674__auto___36790 = cljs.core.nth.call(null,vec__36764_36789,(0),null);
var cb__36675__auto___36791 = cljs.core.nth.call(null,vec__36764_36789,(1),null);
try{cb__36675__auto___36791.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___36769,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e36767){if((e36767 instanceof java.lang.Exception)){
var e__36676__auto___36792 = e36767;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___36790,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___36792);
} else {
throw e36767;

}
}
var G__36793 = cljs.core.next.call(null,seq__36756_36783__$1);
var G__36794 = null;
var G__36795 = (0);
var G__36796 = (0);
seq__36756_36770 = G__36793;
chunk__36757_36771 = G__36794;
count__36758_36772 = G__36795;
i__36759_36773 = G__36796;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36755;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_36754;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1497293538404