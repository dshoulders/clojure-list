// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41438){
var map__41463 = p__41438;
var map__41463__$1 = ((((!((map__41463 == null)))?((((map__41463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41463):map__41463);
var m = map__41463__$1;
var n = cljs.core.get.call(null,map__41463__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41465_41487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41466_41488 = null;
var count__41467_41489 = (0);
var i__41468_41490 = (0);
while(true){
if((i__41468_41490 < count__41467_41489)){
var f_41491 = cljs.core._nth.call(null,chunk__41466_41488,i__41468_41490);
cljs.core.println.call(null,"  ",f_41491);

var G__41492 = seq__41465_41487;
var G__41493 = chunk__41466_41488;
var G__41494 = count__41467_41489;
var G__41495 = (i__41468_41490 + (1));
seq__41465_41487 = G__41492;
chunk__41466_41488 = G__41493;
count__41467_41489 = G__41494;
i__41468_41490 = G__41495;
continue;
} else {
var temp__4657__auto___41496 = cljs.core.seq.call(null,seq__41465_41487);
if(temp__4657__auto___41496){
var seq__41465_41497__$1 = temp__4657__auto___41496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41465_41497__$1)){
var c__31301__auto___41498 = cljs.core.chunk_first.call(null,seq__41465_41497__$1);
var G__41499 = cljs.core.chunk_rest.call(null,seq__41465_41497__$1);
var G__41500 = c__31301__auto___41498;
var G__41501 = cljs.core.count.call(null,c__31301__auto___41498);
var G__41502 = (0);
seq__41465_41487 = G__41499;
chunk__41466_41488 = G__41500;
count__41467_41489 = G__41501;
i__41468_41490 = G__41502;
continue;
} else {
var f_41503 = cljs.core.first.call(null,seq__41465_41497__$1);
cljs.core.println.call(null,"  ",f_41503);

var G__41504 = cljs.core.next.call(null,seq__41465_41497__$1);
var G__41505 = null;
var G__41506 = (0);
var G__41507 = (0);
seq__41465_41487 = G__41504;
chunk__41466_41488 = G__41505;
count__41467_41489 = G__41506;
i__41468_41490 = G__41507;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41508 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30482__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41508);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41508)))?cljs.core.second.call(null,arglists_41508):arglists_41508));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41469_41509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41470_41510 = null;
var count__41471_41511 = (0);
var i__41472_41512 = (0);
while(true){
if((i__41472_41512 < count__41471_41511)){
var vec__41473_41513 = cljs.core._nth.call(null,chunk__41470_41510,i__41472_41512);
var name_41514 = cljs.core.nth.call(null,vec__41473_41513,(0),null);
var map__41476_41515 = cljs.core.nth.call(null,vec__41473_41513,(1),null);
var map__41476_41516__$1 = ((((!((map__41476_41515 == null)))?((((map__41476_41515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41476_41515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41476_41515):map__41476_41515);
var doc_41517 = cljs.core.get.call(null,map__41476_41516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41518 = cljs.core.get.call(null,map__41476_41516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41514);

cljs.core.println.call(null," ",arglists_41518);

if(cljs.core.truth_(doc_41517)){
cljs.core.println.call(null," ",doc_41517);
} else {
}

var G__41519 = seq__41469_41509;
var G__41520 = chunk__41470_41510;
var G__41521 = count__41471_41511;
var G__41522 = (i__41472_41512 + (1));
seq__41469_41509 = G__41519;
chunk__41470_41510 = G__41520;
count__41471_41511 = G__41521;
i__41472_41512 = G__41522;
continue;
} else {
var temp__4657__auto___41523 = cljs.core.seq.call(null,seq__41469_41509);
if(temp__4657__auto___41523){
var seq__41469_41524__$1 = temp__4657__auto___41523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41469_41524__$1)){
var c__31301__auto___41525 = cljs.core.chunk_first.call(null,seq__41469_41524__$1);
var G__41526 = cljs.core.chunk_rest.call(null,seq__41469_41524__$1);
var G__41527 = c__31301__auto___41525;
var G__41528 = cljs.core.count.call(null,c__31301__auto___41525);
var G__41529 = (0);
seq__41469_41509 = G__41526;
chunk__41470_41510 = G__41527;
count__41471_41511 = G__41528;
i__41472_41512 = G__41529;
continue;
} else {
var vec__41478_41530 = cljs.core.first.call(null,seq__41469_41524__$1);
var name_41531 = cljs.core.nth.call(null,vec__41478_41530,(0),null);
var map__41481_41532 = cljs.core.nth.call(null,vec__41478_41530,(1),null);
var map__41481_41533__$1 = ((((!((map__41481_41532 == null)))?((((map__41481_41532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41481_41532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41481_41532):map__41481_41532);
var doc_41534 = cljs.core.get.call(null,map__41481_41533__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41535 = cljs.core.get.call(null,map__41481_41533__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41531);

cljs.core.println.call(null," ",arglists_41535);

if(cljs.core.truth_(doc_41534)){
cljs.core.println.call(null," ",doc_41534);
} else {
}

var G__41536 = cljs.core.next.call(null,seq__41469_41524__$1);
var G__41537 = null;
var G__41538 = (0);
var G__41539 = (0);
seq__41469_41509 = G__41536;
chunk__41470_41510 = G__41537;
count__41471_41511 = G__41538;
i__41472_41512 = G__41539;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41483 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41484 = null;
var count__41485 = (0);
var i__41486 = (0);
while(true){
if((i__41486 < count__41485)){
var role = cljs.core._nth.call(null,chunk__41484,i__41486);
var temp__4657__auto___41540__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41540__$1)){
var spec_41541 = temp__4657__auto___41540__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_41541));
} else {
}

var G__41542 = seq__41483;
var G__41543 = chunk__41484;
var G__41544 = count__41485;
var G__41545 = (i__41486 + (1));
seq__41483 = G__41542;
chunk__41484 = G__41543;
count__41485 = G__41544;
i__41486 = G__41545;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41483);
if(temp__4657__auto____$1){
var seq__41483__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41483__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__41483__$1);
var G__41546 = cljs.core.chunk_rest.call(null,seq__41483__$1);
var G__41547 = c__31301__auto__;
var G__41548 = cljs.core.count.call(null,c__31301__auto__);
var G__41549 = (0);
seq__41483 = G__41546;
chunk__41484 = G__41547;
count__41485 = G__41548;
i__41486 = G__41549;
continue;
} else {
var role = cljs.core.first.call(null,seq__41483__$1);
var temp__4657__auto___41550__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41550__$2)){
var spec_41551 = temp__4657__auto___41550__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_41551));
} else {
}

var G__41552 = cljs.core.next.call(null,seq__41483__$1);
var G__41553 = null;
var G__41554 = (0);
var G__41555 = (0);
seq__41483 = G__41552;
chunk__41484 = G__41553;
count__41485 = G__41554;
i__41486 = G__41555;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1497293549045