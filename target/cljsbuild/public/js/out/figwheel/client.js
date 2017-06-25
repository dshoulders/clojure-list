// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args44234 = [];
var len__31595__auto___44237 = arguments.length;
var i__31596__auto___44238 = (0);
while(true){
if((i__31596__auto___44238 < len__31595__auto___44237)){
args44234.push((arguments[i__31596__auto___44238]));

var G__44239 = (i__31596__auto___44238 + (1));
i__31596__auto___44238 = G__44239;
continue;
} else {
}
break;
}

var G__44236 = args44234.length;
switch (G__44236) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44234.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31602__auto__ = [];
var len__31595__auto___44242 = arguments.length;
var i__31596__auto___44243 = (0);
while(true){
if((i__31596__auto___44243 < len__31595__auto___44242)){
args__31602__auto__.push((arguments[i__31596__auto___44243]));

var G__44244 = (i__31596__auto___44243 + (1));
i__31596__auto___44243 = G__44244;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44241){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44241));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31602__auto__ = [];
var len__31595__auto___44246 = arguments.length;
var i__31596__auto___44247 = (0);
while(true){
if((i__31596__auto___44247 < len__31595__auto___44246)){
args__31602__auto__.push((arguments[i__31596__auto___44247]));

var G__44248 = (i__31596__auto___44247 + (1));
i__31596__auto___44247 = G__44248;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44245){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44245));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44249){
var map__44252 = p__44249;
var map__44252__$1 = ((((!((map__44252 == null)))?((((map__44252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44252):map__44252);
var message = cljs.core.get.call(null,map__44252__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44252__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30482__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30470__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30470__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30470__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33382__auto___44414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___44414,ch){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___44414,ch){
return (function (state_44383){
var state_val_44384 = (state_44383[(1)]);
if((state_val_44384 === (7))){
var inst_44379 = (state_44383[(2)]);
var state_44383__$1 = state_44383;
var statearr_44385_44415 = state_44383__$1;
(statearr_44385_44415[(2)] = inst_44379);

(statearr_44385_44415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (1))){
var state_44383__$1 = state_44383;
var statearr_44386_44416 = state_44383__$1;
(statearr_44386_44416[(2)] = null);

(statearr_44386_44416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (4))){
var inst_44336 = (state_44383[(7)]);
var inst_44336__$1 = (state_44383[(2)]);
var state_44383__$1 = (function (){var statearr_44387 = state_44383;
(statearr_44387[(7)] = inst_44336__$1);

return statearr_44387;
})();
if(cljs.core.truth_(inst_44336__$1)){
var statearr_44388_44417 = state_44383__$1;
(statearr_44388_44417[(1)] = (5));

} else {
var statearr_44389_44418 = state_44383__$1;
(statearr_44389_44418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (15))){
var inst_44343 = (state_44383[(8)]);
var inst_44358 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44343);
var inst_44359 = cljs.core.first.call(null,inst_44358);
var inst_44360 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44359);
var inst_44361 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44360)].join('');
var inst_44362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44361);
var state_44383__$1 = state_44383;
var statearr_44390_44419 = state_44383__$1;
(statearr_44390_44419[(2)] = inst_44362);

(statearr_44390_44419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (13))){
var inst_44367 = (state_44383[(2)]);
var state_44383__$1 = state_44383;
var statearr_44391_44420 = state_44383__$1;
(statearr_44391_44420[(2)] = inst_44367);

(statearr_44391_44420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (6))){
var state_44383__$1 = state_44383;
var statearr_44392_44421 = state_44383__$1;
(statearr_44392_44421[(2)] = null);

(statearr_44392_44421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (17))){
var inst_44365 = (state_44383[(2)]);
var state_44383__$1 = state_44383;
var statearr_44393_44422 = state_44383__$1;
(statearr_44393_44422[(2)] = inst_44365);

(statearr_44393_44422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (3))){
var inst_44381 = (state_44383[(2)]);
var state_44383__$1 = state_44383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44383__$1,inst_44381);
} else {
if((state_val_44384 === (12))){
var inst_44342 = (state_44383[(9)]);
var inst_44356 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44342,opts);
var state_44383__$1 = state_44383;
if(cljs.core.truth_(inst_44356)){
var statearr_44394_44423 = state_44383__$1;
(statearr_44394_44423[(1)] = (15));

} else {
var statearr_44395_44424 = state_44383__$1;
(statearr_44395_44424[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (2))){
var state_44383__$1 = state_44383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44383__$1,(4),ch);
} else {
if((state_val_44384 === (11))){
var inst_44343 = (state_44383[(8)]);
var inst_44348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44349 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44343);
var inst_44350 = cljs.core.async.timeout.call(null,(1000));
var inst_44351 = [inst_44349,inst_44350];
var inst_44352 = (new cljs.core.PersistentVector(null,2,(5),inst_44348,inst_44351,null));
var state_44383__$1 = state_44383;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44383__$1,(14),inst_44352);
} else {
if((state_val_44384 === (9))){
var inst_44343 = (state_44383[(8)]);
var inst_44369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44370 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44343);
var inst_44371 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44370);
var inst_44372 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44371)].join('');
var inst_44373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44372);
var state_44383__$1 = (function (){var statearr_44396 = state_44383;
(statearr_44396[(10)] = inst_44369);

return statearr_44396;
})();
var statearr_44397_44425 = state_44383__$1;
(statearr_44397_44425[(2)] = inst_44373);

(statearr_44397_44425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (5))){
var inst_44336 = (state_44383[(7)]);
var inst_44338 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44339 = (new cljs.core.PersistentArrayMap(null,2,inst_44338,null));
var inst_44340 = (new cljs.core.PersistentHashSet(null,inst_44339,null));
var inst_44341 = figwheel.client.focus_msgs.call(null,inst_44340,inst_44336);
var inst_44342 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44341);
var inst_44343 = cljs.core.first.call(null,inst_44341);
var inst_44344 = figwheel.client.autoload_QMARK_.call(null);
var state_44383__$1 = (function (){var statearr_44398 = state_44383;
(statearr_44398[(8)] = inst_44343);

(statearr_44398[(9)] = inst_44342);

return statearr_44398;
})();
if(cljs.core.truth_(inst_44344)){
var statearr_44399_44426 = state_44383__$1;
(statearr_44399_44426[(1)] = (8));

} else {
var statearr_44400_44427 = state_44383__$1;
(statearr_44400_44427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (14))){
var inst_44354 = (state_44383[(2)]);
var state_44383__$1 = state_44383;
var statearr_44401_44428 = state_44383__$1;
(statearr_44401_44428[(2)] = inst_44354);

(statearr_44401_44428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (16))){
var state_44383__$1 = state_44383;
var statearr_44402_44429 = state_44383__$1;
(statearr_44402_44429[(2)] = null);

(statearr_44402_44429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (10))){
var inst_44375 = (state_44383[(2)]);
var state_44383__$1 = (function (){var statearr_44403 = state_44383;
(statearr_44403[(11)] = inst_44375);

return statearr_44403;
})();
var statearr_44404_44430 = state_44383__$1;
(statearr_44404_44430[(2)] = null);

(statearr_44404_44430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44384 === (8))){
var inst_44342 = (state_44383[(9)]);
var inst_44346 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44342,opts);
var state_44383__$1 = state_44383;
if(cljs.core.truth_(inst_44346)){
var statearr_44405_44431 = state_44383__$1;
(statearr_44405_44431[(1)] = (11));

} else {
var statearr_44406_44432 = state_44383__$1;
(statearr_44406_44432[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___44414,ch))
;
return ((function (switch__33270__auto__,c__33382__auto___44414,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33271__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33271__auto____0 = (function (){
var statearr_44410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44410[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33271__auto__);

(statearr_44410[(1)] = (1));

return statearr_44410;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33271__auto____1 = (function (state_44383){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_44383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e44411){if((e44411 instanceof Object)){
var ex__33274__auto__ = e44411;
var statearr_44412_44433 = state_44383;
(statearr_44412_44433[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44434 = state_44383;
state_44383 = G__44434;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33271__auto__ = function(state_44383){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33271__auto____1.call(this,state_44383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33271__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33271__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___44414,ch))
})();
var state__33384__auto__ = (function (){var statearr_44413 = f__33383__auto__.call(null);
(statearr_44413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___44414);

return statearr_44413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___44414,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44435_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44435_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_44438 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44438){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44437){if((e44437 instanceof Error)){
var e = e44437;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44438], null));
} else {
var e = e44437;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44438))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44439){
var map__44448 = p__44439;
var map__44448__$1 = ((((!((map__44448 == null)))?((((map__44448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44448):map__44448);
var opts = map__44448__$1;
var build_id = cljs.core.get.call(null,map__44448__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44448,map__44448__$1,opts,build_id){
return (function (p__44450){
var vec__44451 = p__44450;
var seq__44452 = cljs.core.seq.call(null,vec__44451);
var first__44453 = cljs.core.first.call(null,seq__44452);
var seq__44452__$1 = cljs.core.next.call(null,seq__44452);
var map__44454 = first__44453;
var map__44454__$1 = ((((!((map__44454 == null)))?((((map__44454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44454):map__44454);
var msg = map__44454__$1;
var msg_name = cljs.core.get.call(null,map__44454__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44452__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44451,seq__44452,first__44453,seq__44452__$1,map__44454,map__44454__$1,msg,msg_name,_,map__44448,map__44448__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44451,seq__44452,first__44453,seq__44452__$1,map__44454,map__44454__$1,msg,msg_name,_,map__44448,map__44448__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44448,map__44448__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44462){
var vec__44463 = p__44462;
var seq__44464 = cljs.core.seq.call(null,vec__44463);
var first__44465 = cljs.core.first.call(null,seq__44464);
var seq__44464__$1 = cljs.core.next.call(null,seq__44464);
var map__44466 = first__44465;
var map__44466__$1 = ((((!((map__44466 == null)))?((((map__44466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44466):map__44466);
var msg = map__44466__$1;
var msg_name = cljs.core.get.call(null,map__44466__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44464__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44468){
var map__44480 = p__44468;
var map__44480__$1 = ((((!((map__44480 == null)))?((((map__44480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44480):map__44480);
var on_compile_warning = cljs.core.get.call(null,map__44480__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44480__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44480,map__44480__$1,on_compile_warning,on_compile_fail){
return (function (p__44482){
var vec__44483 = p__44482;
var seq__44484 = cljs.core.seq.call(null,vec__44483);
var first__44485 = cljs.core.first.call(null,seq__44484);
var seq__44484__$1 = cljs.core.next.call(null,seq__44484);
var map__44486 = first__44485;
var map__44486__$1 = ((((!((map__44486 == null)))?((((map__44486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44486):map__44486);
var msg = map__44486__$1;
var msg_name = cljs.core.get.call(null,map__44486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44484__$1;
var pred__44488 = cljs.core._EQ_;
var expr__44489 = msg_name;
if(cljs.core.truth_(pred__44488.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44489))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44488.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44489))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44480,map__44480__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__,msg_hist,msg_names,msg){
return (function (state_44717){
var state_val_44718 = (state_44717[(1)]);
if((state_val_44718 === (7))){
var inst_44637 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44637)){
var statearr_44719_44769 = state_44717__$1;
(statearr_44719_44769[(1)] = (8));

} else {
var statearr_44720_44770 = state_44717__$1;
(statearr_44720_44770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (20))){
var inst_44711 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44721_44771 = state_44717__$1;
(statearr_44721_44771[(2)] = inst_44711);

(statearr_44721_44771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (27))){
var inst_44707 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44722_44772 = state_44717__$1;
(statearr_44722_44772[(2)] = inst_44707);

(statearr_44722_44772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (1))){
var inst_44630 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44630)){
var statearr_44723_44773 = state_44717__$1;
(statearr_44723_44773[(1)] = (2));

} else {
var statearr_44724_44774 = state_44717__$1;
(statearr_44724_44774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (24))){
var inst_44709 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44725_44775 = state_44717__$1;
(statearr_44725_44775[(2)] = inst_44709);

(statearr_44725_44775[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (4))){
var inst_44715 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44717__$1,inst_44715);
} else {
if((state_val_44718 === (15))){
var inst_44713 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44726_44776 = state_44717__$1;
(statearr_44726_44776[(2)] = inst_44713);

(statearr_44726_44776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (21))){
var inst_44666 = (state_44717[(2)]);
var inst_44667 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44668 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44667);
var state_44717__$1 = (function (){var statearr_44727 = state_44717;
(statearr_44727[(7)] = inst_44666);

return statearr_44727;
})();
var statearr_44728_44777 = state_44717__$1;
(statearr_44728_44777[(2)] = inst_44668);

(statearr_44728_44777[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (31))){
var inst_44696 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44696)){
var statearr_44729_44778 = state_44717__$1;
(statearr_44729_44778[(1)] = (34));

} else {
var statearr_44730_44779 = state_44717__$1;
(statearr_44730_44779[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (32))){
var inst_44705 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44731_44780 = state_44717__$1;
(statearr_44731_44780[(2)] = inst_44705);

(statearr_44731_44780[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (33))){
var inst_44692 = (state_44717[(2)]);
var inst_44693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44693);
var state_44717__$1 = (function (){var statearr_44732 = state_44717;
(statearr_44732[(8)] = inst_44692);

return statearr_44732;
})();
var statearr_44733_44781 = state_44717__$1;
(statearr_44733_44781[(2)] = inst_44694);

(statearr_44733_44781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (13))){
var inst_44651 = figwheel.client.heads_up.clear.call(null);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(16),inst_44651);
} else {
if((state_val_44718 === (22))){
var inst_44672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44673 = figwheel.client.heads_up.append_warning_message.call(null,inst_44672);
var state_44717__$1 = state_44717;
var statearr_44734_44782 = state_44717__$1;
(statearr_44734_44782[(2)] = inst_44673);

(statearr_44734_44782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (36))){
var inst_44703 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44735_44783 = state_44717__$1;
(statearr_44735_44783[(2)] = inst_44703);

(statearr_44735_44783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (29))){
var inst_44683 = (state_44717[(2)]);
var inst_44684 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44685 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44684);
var state_44717__$1 = (function (){var statearr_44736 = state_44717;
(statearr_44736[(9)] = inst_44683);

return statearr_44736;
})();
var statearr_44737_44784 = state_44717__$1;
(statearr_44737_44784[(2)] = inst_44685);

(statearr_44737_44784[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (6))){
var inst_44632 = (state_44717[(10)]);
var state_44717__$1 = state_44717;
var statearr_44738_44785 = state_44717__$1;
(statearr_44738_44785[(2)] = inst_44632);

(statearr_44738_44785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (28))){
var inst_44679 = (state_44717[(2)]);
var inst_44680 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44681 = figwheel.client.heads_up.display_warning.call(null,inst_44680);
var state_44717__$1 = (function (){var statearr_44739 = state_44717;
(statearr_44739[(11)] = inst_44679);

return statearr_44739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(29),inst_44681);
} else {
if((state_val_44718 === (25))){
var inst_44677 = figwheel.client.heads_up.clear.call(null);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(28),inst_44677);
} else {
if((state_val_44718 === (34))){
var inst_44698 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(37),inst_44698);
} else {
if((state_val_44718 === (17))){
var inst_44657 = (state_44717[(2)]);
var inst_44658 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44659 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44658);
var state_44717__$1 = (function (){var statearr_44740 = state_44717;
(statearr_44740[(12)] = inst_44657);

return statearr_44740;
})();
var statearr_44741_44786 = state_44717__$1;
(statearr_44741_44786[(2)] = inst_44659);

(statearr_44741_44786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (3))){
var inst_44649 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44649)){
var statearr_44742_44787 = state_44717__$1;
(statearr_44742_44787[(1)] = (13));

} else {
var statearr_44743_44788 = state_44717__$1;
(statearr_44743_44788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (12))){
var inst_44645 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44744_44789 = state_44717__$1;
(statearr_44744_44789[(2)] = inst_44645);

(statearr_44744_44789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (2))){
var inst_44632 = (state_44717[(10)]);
var inst_44632__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44717__$1 = (function (){var statearr_44745 = state_44717;
(statearr_44745[(10)] = inst_44632__$1);

return statearr_44745;
})();
if(cljs.core.truth_(inst_44632__$1)){
var statearr_44746_44790 = state_44717__$1;
(statearr_44746_44790[(1)] = (5));

} else {
var statearr_44747_44791 = state_44717__$1;
(statearr_44747_44791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (23))){
var inst_44675 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44675)){
var statearr_44748_44792 = state_44717__$1;
(statearr_44748_44792[(1)] = (25));

} else {
var statearr_44749_44793 = state_44717__$1;
(statearr_44749_44793[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (35))){
var state_44717__$1 = state_44717;
var statearr_44750_44794 = state_44717__$1;
(statearr_44750_44794[(2)] = null);

(statearr_44750_44794[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (19))){
var inst_44670 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44670)){
var statearr_44751_44795 = state_44717__$1;
(statearr_44751_44795[(1)] = (22));

} else {
var statearr_44752_44796 = state_44717__$1;
(statearr_44752_44796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (11))){
var inst_44641 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44753_44797 = state_44717__$1;
(statearr_44753_44797[(2)] = inst_44641);

(statearr_44753_44797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (9))){
var inst_44643 = figwheel.client.heads_up.clear.call(null);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(12),inst_44643);
} else {
if((state_val_44718 === (5))){
var inst_44634 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44717__$1 = state_44717;
var statearr_44754_44798 = state_44717__$1;
(statearr_44754_44798[(2)] = inst_44634);

(statearr_44754_44798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (14))){
var inst_44661 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44661)){
var statearr_44755_44799 = state_44717__$1;
(statearr_44755_44799[(1)] = (18));

} else {
var statearr_44756_44800 = state_44717__$1;
(statearr_44756_44800[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (26))){
var inst_44687 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44717__$1 = state_44717;
if(cljs.core.truth_(inst_44687)){
var statearr_44757_44801 = state_44717__$1;
(statearr_44757_44801[(1)] = (30));

} else {
var statearr_44758_44802 = state_44717__$1;
(statearr_44758_44802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (16))){
var inst_44653 = (state_44717[(2)]);
var inst_44654 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44655 = figwheel.client.heads_up.display_exception.call(null,inst_44654);
var state_44717__$1 = (function (){var statearr_44759 = state_44717;
(statearr_44759[(13)] = inst_44653);

return statearr_44759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(17),inst_44655);
} else {
if((state_val_44718 === (30))){
var inst_44689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44690 = figwheel.client.heads_up.display_warning.call(null,inst_44689);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(33),inst_44690);
} else {
if((state_val_44718 === (10))){
var inst_44647 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44760_44803 = state_44717__$1;
(statearr_44760_44803[(2)] = inst_44647);

(statearr_44760_44803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (18))){
var inst_44663 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44664 = figwheel.client.heads_up.display_exception.call(null,inst_44663);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(21),inst_44664);
} else {
if((state_val_44718 === (37))){
var inst_44700 = (state_44717[(2)]);
var state_44717__$1 = state_44717;
var statearr_44761_44804 = state_44717__$1;
(statearr_44761_44804[(2)] = inst_44700);

(statearr_44761_44804[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44718 === (8))){
var inst_44639 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44717__$1 = state_44717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44717__$1,(11),inst_44639);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33270__auto__,c__33382__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto____0 = (function (){
var statearr_44765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44765[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto__);

(statearr_44765[(1)] = (1));

return statearr_44765;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto____1 = (function (state_44717){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_44717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e44766){if((e44766 instanceof Object)){
var ex__33274__auto__ = e44766;
var statearr_44767_44805 = state_44717;
(statearr_44767_44805[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44806 = state_44717;
state_44717 = G__44806;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto__ = function(state_44717){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto____1.call(this,state_44717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__,msg_hist,msg_names,msg))
})();
var state__33384__auto__ = (function (){var statearr_44768 = f__33383__auto__.call(null);
(statearr_44768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_44768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__,msg_hist,msg_names,msg))
);

return c__33382__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33382__auto___44869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___44869,ch){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___44869,ch){
return (function (state_44852){
var state_val_44853 = (state_44852[(1)]);
if((state_val_44853 === (1))){
var state_44852__$1 = state_44852;
var statearr_44854_44870 = state_44852__$1;
(statearr_44854_44870[(2)] = null);

(statearr_44854_44870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44853 === (2))){
var state_44852__$1 = state_44852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44852__$1,(4),ch);
} else {
if((state_val_44853 === (3))){
var inst_44850 = (state_44852[(2)]);
var state_44852__$1 = state_44852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44852__$1,inst_44850);
} else {
if((state_val_44853 === (4))){
var inst_44840 = (state_44852[(7)]);
var inst_44840__$1 = (state_44852[(2)]);
var state_44852__$1 = (function (){var statearr_44855 = state_44852;
(statearr_44855[(7)] = inst_44840__$1);

return statearr_44855;
})();
if(cljs.core.truth_(inst_44840__$1)){
var statearr_44856_44871 = state_44852__$1;
(statearr_44856_44871[(1)] = (5));

} else {
var statearr_44857_44872 = state_44852__$1;
(statearr_44857_44872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44853 === (5))){
var inst_44840 = (state_44852[(7)]);
var inst_44842 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44840);
var state_44852__$1 = state_44852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44852__$1,(8),inst_44842);
} else {
if((state_val_44853 === (6))){
var state_44852__$1 = state_44852;
var statearr_44858_44873 = state_44852__$1;
(statearr_44858_44873[(2)] = null);

(statearr_44858_44873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44853 === (7))){
var inst_44848 = (state_44852[(2)]);
var state_44852__$1 = state_44852;
var statearr_44859_44874 = state_44852__$1;
(statearr_44859_44874[(2)] = inst_44848);

(statearr_44859_44874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44853 === (8))){
var inst_44844 = (state_44852[(2)]);
var state_44852__$1 = (function (){var statearr_44860 = state_44852;
(statearr_44860[(8)] = inst_44844);

return statearr_44860;
})();
var statearr_44861_44875 = state_44852__$1;
(statearr_44861_44875[(2)] = null);

(statearr_44861_44875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33382__auto___44869,ch))
;
return ((function (switch__33270__auto__,c__33382__auto___44869,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33271__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33271__auto____0 = (function (){
var statearr_44865 = [null,null,null,null,null,null,null,null,null];
(statearr_44865[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33271__auto__);

(statearr_44865[(1)] = (1));

return statearr_44865;
});
var figwheel$client$heads_up_plugin_$_state_machine__33271__auto____1 = (function (state_44852){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_44852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e44866){if((e44866 instanceof Object)){
var ex__33274__auto__ = e44866;
var statearr_44867_44876 = state_44852;
(statearr_44867_44876[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44877 = state_44852;
state_44852 = G__44877;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33271__auto__ = function(state_44852){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33271__auto____1.call(this,state_44852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33271__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33271__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___44869,ch))
})();
var state__33384__auto__ = (function (){var statearr_44868 = f__33383__auto__.call(null);
(statearr_44868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___44869);

return statearr_44868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___44869,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__){
return (function (state_44898){
var state_val_44899 = (state_44898[(1)]);
if((state_val_44899 === (1))){
var inst_44893 = cljs.core.async.timeout.call(null,(3000));
var state_44898__$1 = state_44898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44898__$1,(2),inst_44893);
} else {
if((state_val_44899 === (2))){
var inst_44895 = (state_44898[(2)]);
var inst_44896 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44898__$1 = (function (){var statearr_44900 = state_44898;
(statearr_44900[(7)] = inst_44895);

return statearr_44900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44898__$1,inst_44896);
} else {
return null;
}
}
});})(c__33382__auto__))
;
return ((function (switch__33270__auto__,c__33382__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33271__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33271__auto____0 = (function (){
var statearr_44904 = [null,null,null,null,null,null,null,null];
(statearr_44904[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33271__auto__);

(statearr_44904[(1)] = (1));

return statearr_44904;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33271__auto____1 = (function (state_44898){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_44898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e44905){if((e44905 instanceof Object)){
var ex__33274__auto__ = e44905;
var statearr_44906_44908 = state_44898;
(statearr_44906_44908[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44909 = state_44898;
state_44898 = G__44909;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33271__auto__ = function(state_44898){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33271__auto____1.call(this,state_44898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33271__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33271__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__))
})();
var state__33384__auto__ = (function (){var statearr_44907 = f__33383__auto__.call(null);
(statearr_44907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_44907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__))
);

return c__33382__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__,figwheel_version,temp__4657__auto__){
return (function (state_44932){
var state_val_44933 = (state_44932[(1)]);
if((state_val_44933 === (1))){
var inst_44926 = cljs.core.async.timeout.call(null,(2000));
var state_44932__$1 = state_44932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44932__$1,(2),inst_44926);
} else {
if((state_val_44933 === (2))){
var inst_44928 = (state_44932[(2)]);
var inst_44929 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_44930 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44929);
var state_44932__$1 = (function (){var statearr_44934 = state_44932;
(statearr_44934[(7)] = inst_44928);

return statearr_44934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44932__$1,inst_44930);
} else {
return null;
}
}
});})(c__33382__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33270__auto__,c__33382__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto____0 = (function (){
var statearr_44938 = [null,null,null,null,null,null,null,null];
(statearr_44938[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto__);

(statearr_44938[(1)] = (1));

return statearr_44938;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto____1 = (function (state_44932){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_44932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e44939){if((e44939 instanceof Object)){
var ex__33274__auto__ = e44939;
var statearr_44940_44942 = state_44932;
(statearr_44940_44942[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44943 = state_44932;
state_44932 = G__44943;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto__ = function(state_44932){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto____1.call(this,state_44932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33384__auto__ = (function (){var statearr_44941 = f__33383__auto__.call(null);
(statearr_44941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_44941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__,figwheel_version,temp__4657__auto__))
);

return c__33382__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44944){
var map__44948 = p__44944;
var map__44948__$1 = ((((!((map__44948 == null)))?((((map__44948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44948):map__44948);
var file = cljs.core.get.call(null,map__44948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44950 = "";
var G__44950__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44950),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44950);
var G__44950__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44950__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44950__$1);
if(cljs.core.truth_((function (){var and__30470__auto__ = line;
if(cljs.core.truth_(and__30470__auto__)){
return column;
} else {
return and__30470__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44950__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44950__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44951){
var map__44958 = p__44951;
var map__44958__$1 = ((((!((map__44958 == null)))?((((map__44958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44958):map__44958);
var ed = map__44958__$1;
var formatted_exception = cljs.core.get.call(null,map__44958__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44958__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44958__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44960_44964 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44961_44965 = null;
var count__44962_44966 = (0);
var i__44963_44967 = (0);
while(true){
if((i__44963_44967 < count__44962_44966)){
var msg_44968 = cljs.core._nth.call(null,chunk__44961_44965,i__44963_44967);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44968);

var G__44969 = seq__44960_44964;
var G__44970 = chunk__44961_44965;
var G__44971 = count__44962_44966;
var G__44972 = (i__44963_44967 + (1));
seq__44960_44964 = G__44969;
chunk__44961_44965 = G__44970;
count__44962_44966 = G__44971;
i__44963_44967 = G__44972;
continue;
} else {
var temp__4657__auto___44973 = cljs.core.seq.call(null,seq__44960_44964);
if(temp__4657__auto___44973){
var seq__44960_44974__$1 = temp__4657__auto___44973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44960_44974__$1)){
var c__31301__auto___44975 = cljs.core.chunk_first.call(null,seq__44960_44974__$1);
var G__44976 = cljs.core.chunk_rest.call(null,seq__44960_44974__$1);
var G__44977 = c__31301__auto___44975;
var G__44978 = cljs.core.count.call(null,c__31301__auto___44975);
var G__44979 = (0);
seq__44960_44964 = G__44976;
chunk__44961_44965 = G__44977;
count__44962_44966 = G__44978;
i__44963_44967 = G__44979;
continue;
} else {
var msg_44980 = cljs.core.first.call(null,seq__44960_44974__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44980);

var G__44981 = cljs.core.next.call(null,seq__44960_44974__$1);
var G__44982 = null;
var G__44983 = (0);
var G__44984 = (0);
seq__44960_44964 = G__44981;
chunk__44961_44965 = G__44982;
count__44962_44966 = G__44983;
i__44963_44967 = G__44984;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44985){
var map__44988 = p__44985;
var map__44988__$1 = ((((!((map__44988 == null)))?((((map__44988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44988):map__44988);
var w = map__44988__$1;
var message = cljs.core.get.call(null,map__44988__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target\\cljsbuild\\public\\js\\out\\figwheel\\client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target\\cljsbuild\\public\\js\\out\\figwheel\\client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30470__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30470__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30470__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__45000 = cljs.core.seq.call(null,plugins);
var chunk__45001 = null;
var count__45002 = (0);
var i__45003 = (0);
while(true){
if((i__45003 < count__45002)){
var vec__45004 = cljs.core._nth.call(null,chunk__45001,i__45003);
var k = cljs.core.nth.call(null,vec__45004,(0),null);
var plugin = cljs.core.nth.call(null,vec__45004,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45010 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45000,chunk__45001,count__45002,i__45003,pl_45010,vec__45004,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45010.call(null,msg_hist);
});})(seq__45000,chunk__45001,count__45002,i__45003,pl_45010,vec__45004,k,plugin))
);
} else {
}

var G__45011 = seq__45000;
var G__45012 = chunk__45001;
var G__45013 = count__45002;
var G__45014 = (i__45003 + (1));
seq__45000 = G__45011;
chunk__45001 = G__45012;
count__45002 = G__45013;
i__45003 = G__45014;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45000);
if(temp__4657__auto__){
var seq__45000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45000__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__45000__$1);
var G__45015 = cljs.core.chunk_rest.call(null,seq__45000__$1);
var G__45016 = c__31301__auto__;
var G__45017 = cljs.core.count.call(null,c__31301__auto__);
var G__45018 = (0);
seq__45000 = G__45015;
chunk__45001 = G__45016;
count__45002 = G__45017;
i__45003 = G__45018;
continue;
} else {
var vec__45007 = cljs.core.first.call(null,seq__45000__$1);
var k = cljs.core.nth.call(null,vec__45007,(0),null);
var plugin = cljs.core.nth.call(null,vec__45007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45019 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45000,chunk__45001,count__45002,i__45003,pl_45019,vec__45007,k,plugin,seq__45000__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45019.call(null,msg_hist);
});})(seq__45000,chunk__45001,count__45002,i__45003,pl_45019,vec__45007,k,plugin,seq__45000__$1,temp__4657__auto__))
);
} else {
}

var G__45020 = cljs.core.next.call(null,seq__45000__$1);
var G__45021 = null;
var G__45022 = (0);
var G__45023 = (0);
seq__45000 = G__45020;
chunk__45001 = G__45021;
count__45002 = G__45022;
i__45003 = G__45023;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args45024 = [];
var len__31595__auto___45031 = arguments.length;
var i__31596__auto___45032 = (0);
while(true){
if((i__31596__auto___45032 < len__31595__auto___45031)){
args45024.push((arguments[i__31596__auto___45032]));

var G__45033 = (i__31596__auto___45032 + (1));
i__31596__auto___45032 = G__45033;
continue;
} else {
}
break;
}

var G__45026 = args45024.length;
switch (G__45026) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45024.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__45027_45035 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__45028_45036 = null;
var count__45029_45037 = (0);
var i__45030_45038 = (0);
while(true){
if((i__45030_45038 < count__45029_45037)){
var msg_45039 = cljs.core._nth.call(null,chunk__45028_45036,i__45030_45038);
figwheel.client.socket.handle_incoming_message.call(null,msg_45039);

var G__45040 = seq__45027_45035;
var G__45041 = chunk__45028_45036;
var G__45042 = count__45029_45037;
var G__45043 = (i__45030_45038 + (1));
seq__45027_45035 = G__45040;
chunk__45028_45036 = G__45041;
count__45029_45037 = G__45042;
i__45030_45038 = G__45043;
continue;
} else {
var temp__4657__auto___45044 = cljs.core.seq.call(null,seq__45027_45035);
if(temp__4657__auto___45044){
var seq__45027_45045__$1 = temp__4657__auto___45044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45027_45045__$1)){
var c__31301__auto___45046 = cljs.core.chunk_first.call(null,seq__45027_45045__$1);
var G__45047 = cljs.core.chunk_rest.call(null,seq__45027_45045__$1);
var G__45048 = c__31301__auto___45046;
var G__45049 = cljs.core.count.call(null,c__31301__auto___45046);
var G__45050 = (0);
seq__45027_45035 = G__45047;
chunk__45028_45036 = G__45048;
count__45029_45037 = G__45049;
i__45030_45038 = G__45050;
continue;
} else {
var msg_45051 = cljs.core.first.call(null,seq__45027_45045__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_45051);

var G__45052 = cljs.core.next.call(null,seq__45027_45045__$1);
var G__45053 = null;
var G__45054 = (0);
var G__45055 = (0);
seq__45027_45035 = G__45052;
chunk__45028_45036 = G__45053;
count__45029_45037 = G__45054;
i__45030_45038 = G__45055;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31602__auto__ = [];
var len__31595__auto___45060 = arguments.length;
var i__31596__auto___45061 = (0);
while(true){
if((i__31596__auto___45061 < len__31595__auto___45060)){
args__31602__auto__.push((arguments[i__31596__auto___45061]));

var G__45062 = (i__31596__auto___45061 + (1));
i__31596__auto___45061 = G__45062;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45057){
var map__45058 = p__45057;
var map__45058__$1 = ((((!((map__45058 == null)))?((((map__45058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45058):map__45058);
var opts = map__45058__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45056){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45056));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e45064){if((e45064 instanceof Error)){
var e = e45064;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e45064;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__45068){
var map__45069 = p__45068;
var map__45069__$1 = ((((!((map__45069 == null)))?((((map__45069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45069):map__45069);
var msg_name = cljs.core.get.call(null,map__45069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1497293639336