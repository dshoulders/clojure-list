// Compiled by ClojureScript 1.9.562 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__37052_37062 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__37053_37063 = null;
var count__37054_37064 = (0);
var i__37055_37065 = (0);
while(true){
if((i__37055_37065 < count__37054_37064)){
var vec__37056_37066 = cljs.core._nth.call(null,chunk__37053_37063,i__37055_37065);
var k_37067 = cljs.core.nth.call(null,vec__37056_37066,(0),null);
var rxn_37068 = cljs.core.nth.call(null,vec__37056_37066,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_37068);

var G__37069 = seq__37052_37062;
var G__37070 = chunk__37053_37063;
var G__37071 = count__37054_37064;
var G__37072 = (i__37055_37065 + (1));
seq__37052_37062 = G__37069;
chunk__37053_37063 = G__37070;
count__37054_37064 = G__37071;
i__37055_37065 = G__37072;
continue;
} else {
var temp__4657__auto___37073 = cljs.core.seq.call(null,seq__37052_37062);
if(temp__4657__auto___37073){
var seq__37052_37074__$1 = temp__4657__auto___37073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37052_37074__$1)){
var c__31301__auto___37075 = cljs.core.chunk_first.call(null,seq__37052_37074__$1);
var G__37076 = cljs.core.chunk_rest.call(null,seq__37052_37074__$1);
var G__37077 = c__31301__auto___37075;
var G__37078 = cljs.core.count.call(null,c__31301__auto___37075);
var G__37079 = (0);
seq__37052_37062 = G__37076;
chunk__37053_37063 = G__37077;
count__37054_37064 = G__37078;
i__37055_37065 = G__37079;
continue;
} else {
var vec__37059_37080 = cljs.core.first.call(null,seq__37052_37074__$1);
var k_37081 = cljs.core.nth.call(null,vec__37059_37080,(0),null);
var rxn_37082 = cljs.core.nth.call(null,vec__37059_37080,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_37082);

var G__37083 = cljs.core.next.call(null,seq__37052_37074__$1);
var G__37084 = null;
var G__37085 = (0);
var G__37086 = (0);
seq__37052_37062 = G__37083;
chunk__37053_37063 = G__37084;
count__37054_37064 = G__37085;
i__37055_37065 = G__37086;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37100 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36672__auto___37113 = re_frame.interop.now.call(null);
var duration__36673__auto___37114 = (end__36672__auto___37113 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__37101_37115 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__37102_37116 = null;
var count__37103_37117 = (0);
var i__37104_37118 = (0);
while(true){
if((i__37104_37118 < count__37103_37117)){
var vec__37105_37119 = cljs.core._nth.call(null,chunk__37102_37116,i__37104_37118);
var k__36674__auto___37120 = cljs.core.nth.call(null,vec__37105_37119,(0),null);
var cb__36675__auto___37121 = cljs.core.nth.call(null,vec__37105_37119,(1),null);
try{cb__36675__auto___37121.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37114,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37108){if((e37108 instanceof java.lang.Exception)){
var e__36676__auto___37122 = e37108;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37120,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37122);
} else {
throw e37108;

}
}
var G__37123 = seq__37101_37115;
var G__37124 = chunk__37102_37116;
var G__37125 = count__37103_37117;
var G__37126 = (i__37104_37118 + (1));
seq__37101_37115 = G__37123;
chunk__37102_37116 = G__37124;
count__37103_37117 = G__37125;
i__37104_37118 = G__37126;
continue;
} else {
var temp__4657__auto___37127 = cljs.core.seq.call(null,seq__37101_37115);
if(temp__4657__auto___37127){
var seq__37101_37128__$1 = temp__4657__auto___37127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37101_37128__$1)){
var c__31301__auto___37129 = cljs.core.chunk_first.call(null,seq__37101_37128__$1);
var G__37130 = cljs.core.chunk_rest.call(null,seq__37101_37128__$1);
var G__37131 = c__31301__auto___37129;
var G__37132 = cljs.core.count.call(null,c__31301__auto___37129);
var G__37133 = (0);
seq__37101_37115 = G__37130;
chunk__37102_37116 = G__37131;
count__37103_37117 = G__37132;
i__37104_37118 = G__37133;
continue;
} else {
var vec__37109_37134 = cljs.core.first.call(null,seq__37101_37128__$1);
var k__36674__auto___37135 = cljs.core.nth.call(null,vec__37109_37134,(0),null);
var cb__36675__auto___37136 = cljs.core.nth.call(null,vec__37109_37134,(1),null);
try{cb__36675__auto___37136.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37114,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37112){if((e37112 instanceof java.lang.Exception)){
var e__36676__auto___37137 = e37112;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37135,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37137);
} else {
throw e37112;

}
}
var G__37138 = cljs.core.next.call(null,seq__37101_37128__$1);
var G__37139 = null;
var G__37140 = (0);
var G__37141 = (0);
seq__37101_37115 = G__37138;
chunk__37102_37116 = G__37139;
count__37103_37117 = G__37140;
i__37104_37118 = G__37141;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37100;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37142 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37142;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args37143 = [];
var len__31595__auto___37146 = arguments.length;
var i__31596__auto___37147 = (0);
while(true){
if((i__31596__auto___37147 < len__31595__auto___37146)){
args37143.push((arguments[i__31596__auto___37147]));

var G__37148 = (i__31596__auto___37147 + (1));
i__31596__auto___37147 = G__37148;
continue;
} else {
}
break;
}

var G__37145 = args37143.length;
switch (G__37145) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37143.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args37150 = [];
var len__31595__auto___37179 = arguments.length;
var i__31596__auto___37180 = (0);
while(true){
if((i__31596__auto___37180 < len__31595__auto___37179)){
args37150.push((arguments[i__31596__auto___37180]));

var G__37181 = (i__31596__auto___37180 + (1));
i__31596__auto___37180 = G__37181;
continue;
} else {
}
break;
}

var G__37152 = args37150.length;
switch (G__37152) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37150.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37153 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37183 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37183;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37184 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37184;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37185 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37185;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36672__auto___37186 = re_frame.interop.now.call(null);
var duration__36673__auto___37187 = (end__36672__auto___37186 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__37154_37188 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__37155_37189 = null;
var count__37156_37190 = (0);
var i__37157_37191 = (0);
while(true){
if((i__37157_37191 < count__37156_37190)){
var vec__37158_37192 = cljs.core._nth.call(null,chunk__37155_37189,i__37157_37191);
var k__36674__auto___37193 = cljs.core.nth.call(null,vec__37158_37192,(0),null);
var cb__36675__auto___37194 = cljs.core.nth.call(null,vec__37158_37192,(1),null);
try{cb__36675__auto___37194.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37187,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37161){if((e37161 instanceof java.lang.Exception)){
var e__36676__auto___37195 = e37161;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37193,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37195);
} else {
throw e37161;

}
}
var G__37196 = seq__37154_37188;
var G__37197 = chunk__37155_37189;
var G__37198 = count__37156_37190;
var G__37199 = (i__37157_37191 + (1));
seq__37154_37188 = G__37196;
chunk__37155_37189 = G__37197;
count__37156_37190 = G__37198;
i__37157_37191 = G__37199;
continue;
} else {
var temp__4657__auto___37200 = cljs.core.seq.call(null,seq__37154_37188);
if(temp__4657__auto___37200){
var seq__37154_37201__$1 = temp__4657__auto___37200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37154_37201__$1)){
var c__31301__auto___37202 = cljs.core.chunk_first.call(null,seq__37154_37201__$1);
var G__37203 = cljs.core.chunk_rest.call(null,seq__37154_37201__$1);
var G__37204 = c__31301__auto___37202;
var G__37205 = cljs.core.count.call(null,c__31301__auto___37202);
var G__37206 = (0);
seq__37154_37188 = G__37203;
chunk__37155_37189 = G__37204;
count__37156_37190 = G__37205;
i__37157_37191 = G__37206;
continue;
} else {
var vec__37162_37207 = cljs.core.first.call(null,seq__37154_37201__$1);
var k__36674__auto___37208 = cljs.core.nth.call(null,vec__37162_37207,(0),null);
var cb__36675__auto___37209 = cljs.core.nth.call(null,vec__37162_37207,(1),null);
try{cb__36675__auto___37209.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37187,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37165){if((e37165 instanceof java.lang.Exception)){
var e__36676__auto___37210 = e37165;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37208,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37210);
} else {
throw e37165;

}
}
var G__37211 = cljs.core.next.call(null,seq__37154_37201__$1);
var G__37212 = null;
var G__37213 = (0);
var G__37214 = (0);
seq__37154_37188 = G__37211;
chunk__37155_37189 = G__37212;
count__37156_37190 = G__37213;
i__37157_37191 = G__37214;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37153;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37215 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37215;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37216 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37216;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37217 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37217;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37166 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37218 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37218;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37219 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37219;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___37220 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___37220)){
var not_reactive_37221 = temp__4657__auto___37220;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_37221);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37222 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37222;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_37166){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_37166))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_37166){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_37166))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_37166){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_37166))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36672__auto___37223 = re_frame.interop.now.call(null);
var duration__36673__auto___37224 = (end__36672__auto___37223 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__37167_37225 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__37168_37226 = null;
var count__37169_37227 = (0);
var i__37170_37228 = (0);
while(true){
if((i__37170_37228 < count__37169_37227)){
var vec__37171_37229 = cljs.core._nth.call(null,chunk__37168_37226,i__37170_37228);
var k__36674__auto___37230 = cljs.core.nth.call(null,vec__37171_37229,(0),null);
var cb__36675__auto___37231 = cljs.core.nth.call(null,vec__37171_37229,(1),null);
try{cb__36675__auto___37231.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37224,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37174){if((e37174 instanceof java.lang.Exception)){
var e__36676__auto___37232 = e37174;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37230,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37232);
} else {
throw e37174;

}
}
var G__37233 = seq__37167_37225;
var G__37234 = chunk__37168_37226;
var G__37235 = count__37169_37227;
var G__37236 = (i__37170_37228 + (1));
seq__37167_37225 = G__37233;
chunk__37168_37226 = G__37234;
count__37169_37227 = G__37235;
i__37170_37228 = G__37236;
continue;
} else {
var temp__4657__auto___37237 = cljs.core.seq.call(null,seq__37167_37225);
if(temp__4657__auto___37237){
var seq__37167_37238__$1 = temp__4657__auto___37237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37167_37238__$1)){
var c__31301__auto___37239 = cljs.core.chunk_first.call(null,seq__37167_37238__$1);
var G__37240 = cljs.core.chunk_rest.call(null,seq__37167_37238__$1);
var G__37241 = c__31301__auto___37239;
var G__37242 = cljs.core.count.call(null,c__31301__auto___37239);
var G__37243 = (0);
seq__37167_37225 = G__37240;
chunk__37168_37226 = G__37241;
count__37169_37227 = G__37242;
i__37170_37228 = G__37243;
continue;
} else {
var vec__37175_37244 = cljs.core.first.call(null,seq__37167_37238__$1);
var k__36674__auto___37245 = cljs.core.nth.call(null,vec__37175_37244,(0),null);
var cb__36675__auto___37246 = cljs.core.nth.call(null,vec__37175_37244,(1),null);
try{cb__36675__auto___37246.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37224,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37178){if((e37178 instanceof java.lang.Exception)){
var e__36676__auto___37247 = e37178;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37245,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37247);
} else {
throw e37178;

}
}
var G__37248 = cljs.core.next.call(null,seq__37167_37238__$1);
var G__37249 = null;
var G__37250 = (0);
var G__37251 = (0);
seq__37167_37225 = G__37248;
chunk__37168_37226 = G__37249;
count__37169_37227 = G__37250;
i__37170_37228 = G__37251;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37166;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37252 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37252;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37253 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37253;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___37254 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___37254)){
var not_reactive_37255 = temp__4657__auto___37254;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_37255);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37256 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37256;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__37261){
var vec__37262 = p__37261;
var k = cljs.core.nth.call(null,vec__37262,(0),null);
var v = cljs.core.nth.call(null,vec__37262,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36677__auto___37265 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__36677__auto___37265;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__31602__auto__ = [];
var len__31595__auto___37324 = arguments.length;
var i__31596__auto___37325 = (0);
while(true){
if((i__31596__auto___37325 < len__31595__auto___37324)){
args__31602__auto__.push((arguments[i__31596__auto___37325]));

var G__37326 = (i__31596__auto___37325 + (1));
i__31596__auto___37325 = G__37326;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((1) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31603__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__37268 = cljs.core.count.call(null,input_args);
switch (G__37268) {
case (0):
return ((function (G__37268,computation_fn,input_args,err_header){
return (function() {
var G__37328 = null;
var G__37328__1 = (function (_){
return re_frame.db.app_db;
});
var G__37328__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__37328 = function(_,___$1){
switch(arguments.length){
case 1:
return G__37328__1.call(this,_);
case 2:
return G__37328__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37328.cljs$core$IFn$_invoke$arity$1 = G__37328__1;
G__37328.cljs$core$IFn$_invoke$arity$2 = G__37328__2;
return G__37328;
})()
;})(G__37268,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__37269 = input_args;
var marker = cljs.core.nth.call(null,vec__37269,(0),null);
var vec = cljs.core.nth.call(null,vec__37269,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__37269,marker,vec,G__37268,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__37269,marker,vec,G__37268,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__37268,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__37268,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37298 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36672__auto___37329 = re_frame.interop.now.call(null);
var duration__36673__auto___37330 = (end__36672__auto___37329 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__37299_37331 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__37300_37332 = null;
var count__37301_37333 = (0);
var i__37302_37334 = (0);
while(true){
if((i__37302_37334 < count__37301_37333)){
var vec__37303_37335 = cljs.core._nth.call(null,chunk__37300_37332,i__37302_37334);
var k__36674__auto___37336 = cljs.core.nth.call(null,vec__37303_37335,(0),null);
var cb__36675__auto___37337 = cljs.core.nth.call(null,vec__37303_37335,(1),null);
try{cb__36675__auto___37337.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37330,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37306){if((e37306 instanceof java.lang.Exception)){
var e__36676__auto___37338 = e37306;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37336,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37338);
} else {
throw e37306;

}
}
var G__37339 = seq__37299_37331;
var G__37340 = chunk__37300_37332;
var G__37341 = count__37301_37333;
var G__37342 = (i__37302_37334 + (1));
seq__37299_37331 = G__37339;
chunk__37300_37332 = G__37340;
count__37301_37333 = G__37341;
i__37302_37334 = G__37342;
continue;
} else {
var temp__4657__auto___37343 = cljs.core.seq.call(null,seq__37299_37331);
if(temp__4657__auto___37343){
var seq__37299_37344__$1 = temp__4657__auto___37343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37299_37344__$1)){
var c__31301__auto___37345 = cljs.core.chunk_first.call(null,seq__37299_37344__$1);
var G__37346 = cljs.core.chunk_rest.call(null,seq__37299_37344__$1);
var G__37347 = c__31301__auto___37345;
var G__37348 = cljs.core.count.call(null,c__31301__auto___37345);
var G__37349 = (0);
seq__37299_37331 = G__37346;
chunk__37300_37332 = G__37347;
count__37301_37333 = G__37348;
i__37302_37334 = G__37349;
continue;
} else {
var vec__37307_37350 = cljs.core.first.call(null,seq__37299_37344__$1);
var k__36674__auto___37351 = cljs.core.nth.call(null,vec__37307_37350,(0),null);
var cb__36675__auto___37352 = cljs.core.nth.call(null,vec__37307_37350,(1),null);
try{cb__36675__auto___37352.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37330,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37310){if((e37310 instanceof java.lang.Exception)){
var e__36676__auto___37353 = e37310;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37351,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37353);
} else {
throw e37310;

}
}
var G__37354 = cljs.core.next.call(null,seq__37299_37344__$1);
var G__37355 = null;
var G__37356 = (0);
var G__37357 = (0);
seq__37299_37331 = G__37354;
chunk__37300_37332 = G__37355;
count__37301_37333 = G__37356;
i__37302_37334 = G__37357;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37298;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37311 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36672__auto___37358 = re_frame.interop.now.call(null);
var duration__36673__auto___37359 = (end__36672__auto___37358 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__37312_37360 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__37313_37361 = null;
var count__37314_37362 = (0);
var i__37315_37363 = (0);
while(true){
if((i__37315_37363 < count__37314_37362)){
var vec__37316_37364 = cljs.core._nth.call(null,chunk__37313_37361,i__37315_37363);
var k__36674__auto___37365 = cljs.core.nth.call(null,vec__37316_37364,(0),null);
var cb__36675__auto___37366 = cljs.core.nth.call(null,vec__37316_37364,(1),null);
try{cb__36675__auto___37366.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37359,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37319){if((e37319 instanceof java.lang.Exception)){
var e__36676__auto___37367 = e37319;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37365,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37367);
} else {
throw e37319;

}
}
var G__37368 = seq__37312_37360;
var G__37369 = chunk__37313_37361;
var G__37370 = count__37314_37362;
var G__37371 = (i__37315_37363 + (1));
seq__37312_37360 = G__37368;
chunk__37313_37361 = G__37369;
count__37314_37362 = G__37370;
i__37315_37363 = G__37371;
continue;
} else {
var temp__4657__auto___37372 = cljs.core.seq.call(null,seq__37312_37360);
if(temp__4657__auto___37372){
var seq__37312_37373__$1 = temp__4657__auto___37372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37312_37373__$1)){
var c__31301__auto___37374 = cljs.core.chunk_first.call(null,seq__37312_37373__$1);
var G__37375 = cljs.core.chunk_rest.call(null,seq__37312_37373__$1);
var G__37376 = c__31301__auto___37374;
var G__37377 = cljs.core.count.call(null,c__31301__auto___37374);
var G__37378 = (0);
seq__37312_37360 = G__37375;
chunk__37313_37361 = G__37376;
count__37314_37362 = G__37377;
i__37315_37363 = G__37378;
continue;
} else {
var vec__37320_37379 = cljs.core.first.call(null,seq__37312_37373__$1);
var k__36674__auto___37380 = cljs.core.nth.call(null,vec__37320_37379,(0),null);
var cb__36675__auto___37381 = cljs.core.nth.call(null,vec__37320_37379,(1),null);
try{cb__36675__auto___37381.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36673__auto___37359,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e37323){if((e37323 instanceof java.lang.Exception)){
var e__36676__auto___37382 = e37323;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36674__auto___37380,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36676__auto___37382);
} else {
throw e37323;

}
}
var G__37383 = cljs.core.next.call(null,seq__37312_37373__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__37312_37360 = G__37383;
chunk__37313_37361 = G__37384;
count__37314_37362 = G__37385;
i__37315_37363 = G__37386;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37311;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq37266){
var G__37267 = cljs.core.first.call(null,seq37266);
var seq37266__$1 = cljs.core.next.call(null,seq37266);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__37267,seq37266__$1);
});


//# sourceMappingURL=subs.js.map?rel=1497293539587