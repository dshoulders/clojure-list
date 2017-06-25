// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30482__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30482__auto__){
return or__30482__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30482__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42893_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42893_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42898 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42899 = null;
var count__42900 = (0);
var i__42901 = (0);
while(true){
if((i__42901 < count__42900)){
var n = cljs.core._nth.call(null,chunk__42899,i__42901);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42902 = seq__42898;
var G__42903 = chunk__42899;
var G__42904 = count__42900;
var G__42905 = (i__42901 + (1));
seq__42898 = G__42902;
chunk__42899 = G__42903;
count__42900 = G__42904;
i__42901 = G__42905;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42898);
if(temp__4657__auto__){
var seq__42898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42898__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__42898__$1);
var G__42906 = cljs.core.chunk_rest.call(null,seq__42898__$1);
var G__42907 = c__31301__auto__;
var G__42908 = cljs.core.count.call(null,c__31301__auto__);
var G__42909 = (0);
seq__42898 = G__42906;
chunk__42899 = G__42907;
count__42900 = G__42908;
i__42901 = G__42909;
continue;
} else {
var n = cljs.core.first.call(null,seq__42898__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42910 = cljs.core.next.call(null,seq__42898__$1);
var G__42911 = null;
var G__42912 = (0);
var G__42913 = (0);
seq__42898 = G__42910;
chunk__42899 = G__42911;
count__42900 = G__42912;
i__42901 = G__42913;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42964_42975 = cljs.core.seq.call(null,deps);
var chunk__42965_42976 = null;
var count__42966_42977 = (0);
var i__42967_42978 = (0);
while(true){
if((i__42967_42978 < count__42966_42977)){
var dep_42979 = cljs.core._nth.call(null,chunk__42965_42976,i__42967_42978);
topo_sort_helper_STAR_.call(null,dep_42979,(depth + (1)),state);

var G__42980 = seq__42964_42975;
var G__42981 = chunk__42965_42976;
var G__42982 = count__42966_42977;
var G__42983 = (i__42967_42978 + (1));
seq__42964_42975 = G__42980;
chunk__42965_42976 = G__42981;
count__42966_42977 = G__42982;
i__42967_42978 = G__42983;
continue;
} else {
var temp__4657__auto___42984 = cljs.core.seq.call(null,seq__42964_42975);
if(temp__4657__auto___42984){
var seq__42964_42985__$1 = temp__4657__auto___42984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42964_42985__$1)){
var c__31301__auto___42986 = cljs.core.chunk_first.call(null,seq__42964_42985__$1);
var G__42987 = cljs.core.chunk_rest.call(null,seq__42964_42985__$1);
var G__42988 = c__31301__auto___42986;
var G__42989 = cljs.core.count.call(null,c__31301__auto___42986);
var G__42990 = (0);
seq__42964_42975 = G__42987;
chunk__42965_42976 = G__42988;
count__42966_42977 = G__42989;
i__42967_42978 = G__42990;
continue;
} else {
var dep_42991 = cljs.core.first.call(null,seq__42964_42985__$1);
topo_sort_helper_STAR_.call(null,dep_42991,(depth + (1)),state);

var G__42992 = cljs.core.next.call(null,seq__42964_42985__$1);
var G__42993 = null;
var G__42994 = (0);
var G__42995 = (0);
seq__42964_42975 = G__42992;
chunk__42965_42976 = G__42993;
count__42966_42977 = G__42994;
i__42967_42978 = G__42995;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42968){
var vec__42972 = p__42968;
var seq__42973 = cljs.core.seq.call(null,vec__42972);
var first__42974 = cljs.core.first.call(null,seq__42973);
var seq__42973__$1 = cljs.core.next.call(null,seq__42973);
var x = first__42974;
var xs = seq__42973__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42972,seq__42973,first__42974,seq__42973__$1,x,xs,get_deps__$1){
return (function (p1__42914_SHARP_){
return clojure.set.difference.call(null,p1__42914_SHARP_,x);
});})(vec__42972,seq__42973,first__42974,seq__42973__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__43008 = cljs.core.seq.call(null,provides);
var chunk__43009 = null;
var count__43010 = (0);
var i__43011 = (0);
while(true){
if((i__43011 < count__43010)){
var prov = cljs.core._nth.call(null,chunk__43009,i__43011);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43012_43020 = cljs.core.seq.call(null,requires);
var chunk__43013_43021 = null;
var count__43014_43022 = (0);
var i__43015_43023 = (0);
while(true){
if((i__43015_43023 < count__43014_43022)){
var req_43024 = cljs.core._nth.call(null,chunk__43013_43021,i__43015_43023);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43024,prov);

var G__43025 = seq__43012_43020;
var G__43026 = chunk__43013_43021;
var G__43027 = count__43014_43022;
var G__43028 = (i__43015_43023 + (1));
seq__43012_43020 = G__43025;
chunk__43013_43021 = G__43026;
count__43014_43022 = G__43027;
i__43015_43023 = G__43028;
continue;
} else {
var temp__4657__auto___43029 = cljs.core.seq.call(null,seq__43012_43020);
if(temp__4657__auto___43029){
var seq__43012_43030__$1 = temp__4657__auto___43029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43012_43030__$1)){
var c__31301__auto___43031 = cljs.core.chunk_first.call(null,seq__43012_43030__$1);
var G__43032 = cljs.core.chunk_rest.call(null,seq__43012_43030__$1);
var G__43033 = c__31301__auto___43031;
var G__43034 = cljs.core.count.call(null,c__31301__auto___43031);
var G__43035 = (0);
seq__43012_43020 = G__43032;
chunk__43013_43021 = G__43033;
count__43014_43022 = G__43034;
i__43015_43023 = G__43035;
continue;
} else {
var req_43036 = cljs.core.first.call(null,seq__43012_43030__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43036,prov);

var G__43037 = cljs.core.next.call(null,seq__43012_43030__$1);
var G__43038 = null;
var G__43039 = (0);
var G__43040 = (0);
seq__43012_43020 = G__43037;
chunk__43013_43021 = G__43038;
count__43014_43022 = G__43039;
i__43015_43023 = G__43040;
continue;
}
} else {
}
}
break;
}

var G__43041 = seq__43008;
var G__43042 = chunk__43009;
var G__43043 = count__43010;
var G__43044 = (i__43011 + (1));
seq__43008 = G__43041;
chunk__43009 = G__43042;
count__43010 = G__43043;
i__43011 = G__43044;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43008);
if(temp__4657__auto__){
var seq__43008__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43008__$1)){
var c__31301__auto__ = cljs.core.chunk_first.call(null,seq__43008__$1);
var G__43045 = cljs.core.chunk_rest.call(null,seq__43008__$1);
var G__43046 = c__31301__auto__;
var G__43047 = cljs.core.count.call(null,c__31301__auto__);
var G__43048 = (0);
seq__43008 = G__43045;
chunk__43009 = G__43046;
count__43010 = G__43047;
i__43011 = G__43048;
continue;
} else {
var prov = cljs.core.first.call(null,seq__43008__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43016_43049 = cljs.core.seq.call(null,requires);
var chunk__43017_43050 = null;
var count__43018_43051 = (0);
var i__43019_43052 = (0);
while(true){
if((i__43019_43052 < count__43018_43051)){
var req_43053 = cljs.core._nth.call(null,chunk__43017_43050,i__43019_43052);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43053,prov);

var G__43054 = seq__43016_43049;
var G__43055 = chunk__43017_43050;
var G__43056 = count__43018_43051;
var G__43057 = (i__43019_43052 + (1));
seq__43016_43049 = G__43054;
chunk__43017_43050 = G__43055;
count__43018_43051 = G__43056;
i__43019_43052 = G__43057;
continue;
} else {
var temp__4657__auto___43058__$1 = cljs.core.seq.call(null,seq__43016_43049);
if(temp__4657__auto___43058__$1){
var seq__43016_43059__$1 = temp__4657__auto___43058__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43016_43059__$1)){
var c__31301__auto___43060 = cljs.core.chunk_first.call(null,seq__43016_43059__$1);
var G__43061 = cljs.core.chunk_rest.call(null,seq__43016_43059__$1);
var G__43062 = c__31301__auto___43060;
var G__43063 = cljs.core.count.call(null,c__31301__auto___43060);
var G__43064 = (0);
seq__43016_43049 = G__43061;
chunk__43017_43050 = G__43062;
count__43018_43051 = G__43063;
i__43019_43052 = G__43064;
continue;
} else {
var req_43065 = cljs.core.first.call(null,seq__43016_43059__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43065,prov);

var G__43066 = cljs.core.next.call(null,seq__43016_43059__$1);
var G__43067 = null;
var G__43068 = (0);
var G__43069 = (0);
seq__43016_43049 = G__43066;
chunk__43017_43050 = G__43067;
count__43018_43051 = G__43068;
i__43019_43052 = G__43069;
continue;
}
} else {
}
}
break;
}

var G__43070 = cljs.core.next.call(null,seq__43008__$1);
var G__43071 = null;
var G__43072 = (0);
var G__43073 = (0);
seq__43008 = G__43070;
chunk__43009 = G__43071;
count__43010 = G__43072;
i__43011 = G__43073;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__43078_43082 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43079_43083 = null;
var count__43080_43084 = (0);
var i__43081_43085 = (0);
while(true){
if((i__43081_43085 < count__43080_43084)){
var ns_43086 = cljs.core._nth.call(null,chunk__43079_43083,i__43081_43085);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43086);

var G__43087 = seq__43078_43082;
var G__43088 = chunk__43079_43083;
var G__43089 = count__43080_43084;
var G__43090 = (i__43081_43085 + (1));
seq__43078_43082 = G__43087;
chunk__43079_43083 = G__43088;
count__43080_43084 = G__43089;
i__43081_43085 = G__43090;
continue;
} else {
var temp__4657__auto___43091 = cljs.core.seq.call(null,seq__43078_43082);
if(temp__4657__auto___43091){
var seq__43078_43092__$1 = temp__4657__auto___43091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43078_43092__$1)){
var c__31301__auto___43093 = cljs.core.chunk_first.call(null,seq__43078_43092__$1);
var G__43094 = cljs.core.chunk_rest.call(null,seq__43078_43092__$1);
var G__43095 = c__31301__auto___43093;
var G__43096 = cljs.core.count.call(null,c__31301__auto___43093);
var G__43097 = (0);
seq__43078_43082 = G__43094;
chunk__43079_43083 = G__43095;
count__43080_43084 = G__43096;
i__43081_43085 = G__43097;
continue;
} else {
var ns_43098 = cljs.core.first.call(null,seq__43078_43092__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43098);

var G__43099 = cljs.core.next.call(null,seq__43078_43092__$1);
var G__43100 = null;
var G__43101 = (0);
var G__43102 = (0);
seq__43078_43082 = G__43099;
chunk__43079_43083 = G__43100;
count__43080_43084 = G__43101;
i__43081_43085 = G__43102;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30482__auto__ = goog.require__;
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__43103__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43104__i = 0, G__43104__a = new Array(arguments.length -  0);
while (G__43104__i < G__43104__a.length) {G__43104__a[G__43104__i] = arguments[G__43104__i + 0]; ++G__43104__i;}
  args = new cljs.core.IndexedSeq(G__43104__a,0,null);
} 
return G__43103__delegate.call(this,args);};
G__43103.cljs$lang$maxFixedArity = 0;
G__43103.cljs$lang$applyTo = (function (arglist__43105){
var args = cljs.core.seq(arglist__43105);
return G__43103__delegate(args);
});
G__43103.cljs$core$IFn$_invoke$arity$variadic = G__43103__delegate;
return G__43103;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43106 = cljs.core._EQ_;
var expr__43107 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43106.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43107))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__43106,expr__43107){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__43106,expr__43107))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__43106,expr__43107){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e43109){if((e43109 instanceof Error)){
var e = e43109;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43109;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__43106,expr__43107))
} else {
if(cljs.core.truth_(pred__43106.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43107))){
return ((function (pred__43106,expr__43107){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__43106,expr__43107){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__43106,expr__43107))
);

return deferred.addErrback(((function (deferred,pred__43106,expr__43107){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__43106,expr__43107))
);
});
;})(pred__43106,expr__43107))
} else {
if(cljs.core.truth_(pred__43106.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__43107))){
return ((function (pred__43106,expr__43107){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e43110){if((e43110 instanceof Error)){
var e = e43110;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43110;

}
}})());
});
;})(pred__43106,expr__43107))
} else {
return ((function (pred__43106,expr__43107){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43106,expr__43107))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43111,callback){
var map__43114 = p__43111;
var map__43114__$1 = ((((!((map__43114 == null)))?((((map__43114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43114):map__43114);
var file_msg = map__43114__$1;
var request_url = cljs.core.get.call(null,map__43114__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__43114,map__43114__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43114,map__43114__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__){
return (function (state_43138){
var state_val_43139 = (state_43138[(1)]);
if((state_val_43139 === (7))){
var inst_43134 = (state_43138[(2)]);
var state_43138__$1 = state_43138;
var statearr_43140_43160 = state_43138__$1;
(statearr_43140_43160[(2)] = inst_43134);

(statearr_43140_43160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43139 === (1))){
var state_43138__$1 = state_43138;
var statearr_43141_43161 = state_43138__$1;
(statearr_43141_43161[(2)] = null);

(statearr_43141_43161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43139 === (4))){
var inst_43118 = (state_43138[(7)]);
var inst_43118__$1 = (state_43138[(2)]);
var state_43138__$1 = (function (){var statearr_43142 = state_43138;
(statearr_43142[(7)] = inst_43118__$1);

return statearr_43142;
})();
if(cljs.core.truth_(inst_43118__$1)){
var statearr_43143_43162 = state_43138__$1;
(statearr_43143_43162[(1)] = (5));

} else {
var statearr_43144_43163 = state_43138__$1;
(statearr_43144_43163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43139 === (6))){
var state_43138__$1 = state_43138;
var statearr_43145_43164 = state_43138__$1;
(statearr_43145_43164[(2)] = null);

(statearr_43145_43164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43139 === (3))){
var inst_43136 = (state_43138[(2)]);
var state_43138__$1 = state_43138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43138__$1,inst_43136);
} else {
if((state_val_43139 === (2))){
var state_43138__$1 = state_43138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43138__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43139 === (11))){
var inst_43130 = (state_43138[(2)]);
var state_43138__$1 = (function (){var statearr_43146 = state_43138;
(statearr_43146[(8)] = inst_43130);

return statearr_43146;
})();
var statearr_43147_43165 = state_43138__$1;
(statearr_43147_43165[(2)] = null);

(statearr_43147_43165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43139 === (9))){
var inst_43124 = (state_43138[(9)]);
var inst_43122 = (state_43138[(10)]);
var inst_43126 = inst_43124.call(null,inst_43122);
var state_43138__$1 = state_43138;
var statearr_43148_43166 = state_43138__$1;
(statearr_43148_43166[(2)] = inst_43126);

(statearr_43148_43166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43139 === (5))){
var inst_43118 = (state_43138[(7)]);
var inst_43120 = figwheel.client.file_reloading.blocking_load.call(null,inst_43118);
var state_43138__$1 = state_43138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43138__$1,(8),inst_43120);
} else {
if((state_val_43139 === (10))){
var inst_43122 = (state_43138[(10)]);
var inst_43128 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43122);
var state_43138__$1 = state_43138;
var statearr_43149_43167 = state_43138__$1;
(statearr_43149_43167[(2)] = inst_43128);

(statearr_43149_43167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43139 === (8))){
var inst_43118 = (state_43138[(7)]);
var inst_43124 = (state_43138[(9)]);
var inst_43122 = (state_43138[(2)]);
var inst_43123 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43124__$1 = cljs.core.get.call(null,inst_43123,inst_43118);
var state_43138__$1 = (function (){var statearr_43150 = state_43138;
(statearr_43150[(9)] = inst_43124__$1);

(statearr_43150[(10)] = inst_43122);

return statearr_43150;
})();
if(cljs.core.truth_(inst_43124__$1)){
var statearr_43151_43168 = state_43138__$1;
(statearr_43151_43168[(1)] = (9));

} else {
var statearr_43152_43169 = state_43138__$1;
(statearr_43152_43169[(1)] = (10));

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
});})(c__33382__auto__))
;
return ((function (switch__33270__auto__,c__33382__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33271__auto__ = null;
var figwheel$client$file_reloading$state_machine__33271__auto____0 = (function (){
var statearr_43156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43156[(0)] = figwheel$client$file_reloading$state_machine__33271__auto__);

(statearr_43156[(1)] = (1));

return statearr_43156;
});
var figwheel$client$file_reloading$state_machine__33271__auto____1 = (function (state_43138){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_43138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e43157){if((e43157 instanceof Object)){
var ex__33274__auto__ = e43157;
var statearr_43158_43170 = state_43138;
(statearr_43158_43170[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43171 = state_43138;
state_43138 = G__43171;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33271__auto__ = function(state_43138){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33271__auto____1.call(this,state_43138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33271__auto____0;
figwheel$client$file_reloading$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33271__auto____1;
return figwheel$client$file_reloading$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__))
})();
var state__33384__auto__ = (function (){var statearr_43159 = f__33383__auto__.call(null);
(statearr_43159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_43159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__))
);

return c__33382__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43172,callback){
var map__43175 = p__43172;
var map__43175__$1 = ((((!((map__43175 == null)))?((((map__43175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43175):map__43175);
var file_msg = map__43175__$1;
var namespace = cljs.core.get.call(null,map__43175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43175,map__43175__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43175,map__43175__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__43177){
var map__43180 = p__43177;
var map__43180__$1 = ((((!((map__43180 == null)))?((((map__43180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43180):map__43180);
var file_msg = map__43180__$1;
var namespace = cljs.core.get.call(null,map__43180__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43182){
var map__43185 = p__43182;
var map__43185__$1 = ((((!((map__43185 == null)))?((((map__43185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43185):map__43185);
var file_msg = map__43185__$1;
var namespace = cljs.core.get.call(null,map__43185__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30470__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30470__auto__){
var or__30482__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
var or__30482__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30482__auto____$1)){
return or__30482__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30470__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43187,callback){
var map__43190 = p__43187;
var map__43190__$1 = ((((!((map__43190 == null)))?((((map__43190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43190):map__43190);
var file_msg = map__43190__$1;
var request_url = cljs.core.get.call(null,map__43190__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33382__auto___43294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___43294,out){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___43294,out){
return (function (state_43276){
var state_val_43277 = (state_43276[(1)]);
if((state_val_43277 === (1))){
var inst_43250 = cljs.core.seq.call(null,files);
var inst_43251 = cljs.core.first.call(null,inst_43250);
var inst_43252 = cljs.core.next.call(null,inst_43250);
var inst_43253 = files;
var state_43276__$1 = (function (){var statearr_43278 = state_43276;
(statearr_43278[(7)] = inst_43253);

(statearr_43278[(8)] = inst_43251);

(statearr_43278[(9)] = inst_43252);

return statearr_43278;
})();
var statearr_43279_43295 = state_43276__$1;
(statearr_43279_43295[(2)] = null);

(statearr_43279_43295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (2))){
var inst_43259 = (state_43276[(10)]);
var inst_43253 = (state_43276[(7)]);
var inst_43258 = cljs.core.seq.call(null,inst_43253);
var inst_43259__$1 = cljs.core.first.call(null,inst_43258);
var inst_43260 = cljs.core.next.call(null,inst_43258);
var inst_43261 = (inst_43259__$1 == null);
var inst_43262 = cljs.core.not.call(null,inst_43261);
var state_43276__$1 = (function (){var statearr_43280 = state_43276;
(statearr_43280[(10)] = inst_43259__$1);

(statearr_43280[(11)] = inst_43260);

return statearr_43280;
})();
if(inst_43262){
var statearr_43281_43296 = state_43276__$1;
(statearr_43281_43296[(1)] = (4));

} else {
var statearr_43282_43297 = state_43276__$1;
(statearr_43282_43297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (3))){
var inst_43274 = (state_43276[(2)]);
var state_43276__$1 = state_43276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43276__$1,inst_43274);
} else {
if((state_val_43277 === (4))){
var inst_43259 = (state_43276[(10)]);
var inst_43264 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43259);
var state_43276__$1 = state_43276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43276__$1,(7),inst_43264);
} else {
if((state_val_43277 === (5))){
var inst_43270 = cljs.core.async.close_BANG_.call(null,out);
var state_43276__$1 = state_43276;
var statearr_43283_43298 = state_43276__$1;
(statearr_43283_43298[(2)] = inst_43270);

(statearr_43283_43298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (6))){
var inst_43272 = (state_43276[(2)]);
var state_43276__$1 = state_43276;
var statearr_43284_43299 = state_43276__$1;
(statearr_43284_43299[(2)] = inst_43272);

(statearr_43284_43299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (7))){
var inst_43260 = (state_43276[(11)]);
var inst_43266 = (state_43276[(2)]);
var inst_43267 = cljs.core.async.put_BANG_.call(null,out,inst_43266);
var inst_43253 = inst_43260;
var state_43276__$1 = (function (){var statearr_43285 = state_43276;
(statearr_43285[(12)] = inst_43267);

(statearr_43285[(7)] = inst_43253);

return statearr_43285;
})();
var statearr_43286_43300 = state_43276__$1;
(statearr_43286_43300[(2)] = null);

(statearr_43286_43300[(1)] = (2));


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
});})(c__33382__auto___43294,out))
;
return ((function (switch__33270__auto__,c__33382__auto___43294,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto____0 = (function (){
var statearr_43290 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43290[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto__);

(statearr_43290[(1)] = (1));

return statearr_43290;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto____1 = (function (state_43276){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_43276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e43291){if((e43291 instanceof Object)){
var ex__33274__auto__ = e43291;
var statearr_43292_43301 = state_43276;
(statearr_43292_43301[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43302 = state_43276;
state_43276 = G__43302;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto__ = function(state_43276){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto____1.call(this,state_43276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___43294,out))
})();
var state__33384__auto__ = (function (){var statearr_43293 = f__33383__auto__.call(null);
(statearr_43293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___43294);

return statearr_43293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___43294,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43303,opts){
var map__43307 = p__43303;
var map__43307__$1 = ((((!((map__43307 == null)))?((((map__43307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43307):map__43307);
var eval_body = cljs.core.get.call(null,map__43307__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30470__auto__ = eval_body;
if(cljs.core.truth_(and__30470__auto__)){
return typeof eval_body === 'string';
} else {
return and__30470__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e43309){var e = e43309;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__43310_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43310_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__43319){
var vec__43320 = p__43319;
var k = cljs.core.nth.call(null,vec__43320,(0),null);
var v = cljs.core.nth.call(null,vec__43320,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43323){
var vec__43324 = p__43323;
var k = cljs.core.nth.call(null,vec__43324,(0),null);
var v = cljs.core.nth.call(null,vec__43324,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43330,p__43331){
var map__43579 = p__43330;
var map__43579__$1 = ((((!((map__43579 == null)))?((((map__43579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43579):map__43579);
var opts = map__43579__$1;
var before_jsload = cljs.core.get.call(null,map__43579__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43579__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43579__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43580 = p__43331;
var map__43580__$1 = ((((!((map__43580 == null)))?((((map__43580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43580):map__43580);
var msg = map__43580__$1;
var files = cljs.core.get.call(null,map__43580__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43580__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43580__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43734){
var state_val_43735 = (state_43734[(1)]);
if((state_val_43735 === (7))){
var inst_43596 = (state_43734[(7)]);
var inst_43594 = (state_43734[(8)]);
var inst_43597 = (state_43734[(9)]);
var inst_43595 = (state_43734[(10)]);
var inst_43602 = cljs.core._nth.call(null,inst_43595,inst_43597);
var inst_43603 = figwheel.client.file_reloading.eval_body.call(null,inst_43602,opts);
var inst_43604 = (inst_43597 + (1));
var tmp43736 = inst_43596;
var tmp43737 = inst_43594;
var tmp43738 = inst_43595;
var inst_43594__$1 = tmp43737;
var inst_43595__$1 = tmp43738;
var inst_43596__$1 = tmp43736;
var inst_43597__$1 = inst_43604;
var state_43734__$1 = (function (){var statearr_43739 = state_43734;
(statearr_43739[(7)] = inst_43596__$1);

(statearr_43739[(8)] = inst_43594__$1);

(statearr_43739[(9)] = inst_43597__$1);

(statearr_43739[(10)] = inst_43595__$1);

(statearr_43739[(11)] = inst_43603);

return statearr_43739;
})();
var statearr_43740_43826 = state_43734__$1;
(statearr_43740_43826[(2)] = null);

(statearr_43740_43826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (20))){
var inst_43637 = (state_43734[(12)]);
var inst_43645 = figwheel.client.file_reloading.sort_files.call(null,inst_43637);
var state_43734__$1 = state_43734;
var statearr_43741_43827 = state_43734__$1;
(statearr_43741_43827[(2)] = inst_43645);

(statearr_43741_43827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (27))){
var state_43734__$1 = state_43734;
var statearr_43742_43828 = state_43734__$1;
(statearr_43742_43828[(2)] = null);

(statearr_43742_43828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (1))){
var inst_43586 = (state_43734[(13)]);
var inst_43583 = before_jsload.call(null,files);
var inst_43584 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43585 = (function (){return ((function (inst_43586,inst_43583,inst_43584,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43327_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43327_SHARP_);
});
;})(inst_43586,inst_43583,inst_43584,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43586__$1 = cljs.core.filter.call(null,inst_43585,files);
var inst_43587 = cljs.core.not_empty.call(null,inst_43586__$1);
var state_43734__$1 = (function (){var statearr_43743 = state_43734;
(statearr_43743[(13)] = inst_43586__$1);

(statearr_43743[(14)] = inst_43583);

(statearr_43743[(15)] = inst_43584);

return statearr_43743;
})();
if(cljs.core.truth_(inst_43587)){
var statearr_43744_43829 = state_43734__$1;
(statearr_43744_43829[(1)] = (2));

} else {
var statearr_43745_43830 = state_43734__$1;
(statearr_43745_43830[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (24))){
var state_43734__$1 = state_43734;
var statearr_43746_43831 = state_43734__$1;
(statearr_43746_43831[(2)] = null);

(statearr_43746_43831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (39))){
var inst_43687 = (state_43734[(16)]);
var state_43734__$1 = state_43734;
var statearr_43747_43832 = state_43734__$1;
(statearr_43747_43832[(2)] = inst_43687);

(statearr_43747_43832[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (46))){
var inst_43729 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
var statearr_43748_43833 = state_43734__$1;
(statearr_43748_43833[(2)] = inst_43729);

(statearr_43748_43833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (4))){
var inst_43631 = (state_43734[(2)]);
var inst_43632 = cljs.core.List.EMPTY;
var inst_43633 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43632);
var inst_43634 = (function (){return ((function (inst_43631,inst_43632,inst_43633,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43328_SHARP_){
var and__30470__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43328_SHARP_);
if(cljs.core.truth_(and__30470__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43328_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__43328_SHARP_)));
} else {
return and__30470__auto__;
}
});
;})(inst_43631,inst_43632,inst_43633,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43635 = cljs.core.filter.call(null,inst_43634,files);
var inst_43636 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43637 = cljs.core.concat.call(null,inst_43635,inst_43636);
var state_43734__$1 = (function (){var statearr_43749 = state_43734;
(statearr_43749[(17)] = inst_43633);

(statearr_43749[(12)] = inst_43637);

(statearr_43749[(18)] = inst_43631);

return statearr_43749;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43750_43834 = state_43734__$1;
(statearr_43750_43834[(1)] = (16));

} else {
var statearr_43751_43835 = state_43734__$1;
(statearr_43751_43835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (15))){
var inst_43621 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
var statearr_43752_43836 = state_43734__$1;
(statearr_43752_43836[(2)] = inst_43621);

(statearr_43752_43836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (21))){
var inst_43647 = (state_43734[(19)]);
var inst_43647__$1 = (state_43734[(2)]);
var inst_43648 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43647__$1);
var state_43734__$1 = (function (){var statearr_43753 = state_43734;
(statearr_43753[(19)] = inst_43647__$1);

return statearr_43753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43734__$1,(22),inst_43648);
} else {
if((state_val_43735 === (31))){
var inst_43732 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43734__$1,inst_43732);
} else {
if((state_val_43735 === (32))){
var inst_43687 = (state_43734[(16)]);
var inst_43692 = inst_43687.cljs$lang$protocol_mask$partition0$;
var inst_43693 = (inst_43692 & (64));
var inst_43694 = inst_43687.cljs$core$ISeq$;
var inst_43695 = (cljs.core.PROTOCOL_SENTINEL === inst_43694);
var inst_43696 = (inst_43693) || (inst_43695);
var state_43734__$1 = state_43734;
if(cljs.core.truth_(inst_43696)){
var statearr_43754_43837 = state_43734__$1;
(statearr_43754_43837[(1)] = (35));

} else {
var statearr_43755_43838 = state_43734__$1;
(statearr_43755_43838[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (40))){
var inst_43709 = (state_43734[(20)]);
var inst_43708 = (state_43734[(2)]);
var inst_43709__$1 = cljs.core.get.call(null,inst_43708,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43710 = cljs.core.get.call(null,inst_43708,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43711 = cljs.core.not_empty.call(null,inst_43709__$1);
var state_43734__$1 = (function (){var statearr_43756 = state_43734;
(statearr_43756[(21)] = inst_43710);

(statearr_43756[(20)] = inst_43709__$1);

return statearr_43756;
})();
if(cljs.core.truth_(inst_43711)){
var statearr_43757_43839 = state_43734__$1;
(statearr_43757_43839[(1)] = (41));

} else {
var statearr_43758_43840 = state_43734__$1;
(statearr_43758_43840[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (33))){
var state_43734__$1 = state_43734;
var statearr_43759_43841 = state_43734__$1;
(statearr_43759_43841[(2)] = false);

(statearr_43759_43841[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (13))){
var inst_43607 = (state_43734[(22)]);
var inst_43611 = cljs.core.chunk_first.call(null,inst_43607);
var inst_43612 = cljs.core.chunk_rest.call(null,inst_43607);
var inst_43613 = cljs.core.count.call(null,inst_43611);
var inst_43594 = inst_43612;
var inst_43595 = inst_43611;
var inst_43596 = inst_43613;
var inst_43597 = (0);
var state_43734__$1 = (function (){var statearr_43760 = state_43734;
(statearr_43760[(7)] = inst_43596);

(statearr_43760[(8)] = inst_43594);

(statearr_43760[(9)] = inst_43597);

(statearr_43760[(10)] = inst_43595);

return statearr_43760;
})();
var statearr_43761_43842 = state_43734__$1;
(statearr_43761_43842[(2)] = null);

(statearr_43761_43842[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (22))){
var inst_43651 = (state_43734[(23)]);
var inst_43650 = (state_43734[(24)]);
var inst_43647 = (state_43734[(19)]);
var inst_43655 = (state_43734[(25)]);
var inst_43650__$1 = (state_43734[(2)]);
var inst_43651__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43650__$1);
var inst_43652 = (function (){var all_files = inst_43647;
var res_SINGLEQUOTE_ = inst_43650__$1;
var res = inst_43651__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43651,inst_43650,inst_43647,inst_43655,inst_43650__$1,inst_43651__$1,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43329_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43329_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43651,inst_43650,inst_43647,inst_43655,inst_43650__$1,inst_43651__$1,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43653 = cljs.core.filter.call(null,inst_43652,inst_43650__$1);
var inst_43654 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43655__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43654);
var inst_43656 = cljs.core.not_empty.call(null,inst_43655__$1);
var state_43734__$1 = (function (){var statearr_43762 = state_43734;
(statearr_43762[(23)] = inst_43651__$1);

(statearr_43762[(24)] = inst_43650__$1);

(statearr_43762[(26)] = inst_43653);

(statearr_43762[(25)] = inst_43655__$1);

return statearr_43762;
})();
if(cljs.core.truth_(inst_43656)){
var statearr_43763_43843 = state_43734__$1;
(statearr_43763_43843[(1)] = (23));

} else {
var statearr_43764_43844 = state_43734__$1;
(statearr_43764_43844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (36))){
var state_43734__$1 = state_43734;
var statearr_43765_43845 = state_43734__$1;
(statearr_43765_43845[(2)] = false);

(statearr_43765_43845[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (41))){
var inst_43709 = (state_43734[(20)]);
var inst_43713 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43714 = cljs.core.map.call(null,inst_43713,inst_43709);
var inst_43715 = cljs.core.pr_str.call(null,inst_43714);
var inst_43716 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43715)].join('');
var inst_43717 = figwheel.client.utils.log.call(null,inst_43716);
var state_43734__$1 = state_43734;
var statearr_43766_43846 = state_43734__$1;
(statearr_43766_43846[(2)] = inst_43717);

(statearr_43766_43846[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (43))){
var inst_43710 = (state_43734[(21)]);
var inst_43720 = (state_43734[(2)]);
var inst_43721 = cljs.core.not_empty.call(null,inst_43710);
var state_43734__$1 = (function (){var statearr_43767 = state_43734;
(statearr_43767[(27)] = inst_43720);

return statearr_43767;
})();
if(cljs.core.truth_(inst_43721)){
var statearr_43768_43847 = state_43734__$1;
(statearr_43768_43847[(1)] = (44));

} else {
var statearr_43769_43848 = state_43734__$1;
(statearr_43769_43848[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (29))){
var inst_43651 = (state_43734[(23)]);
var inst_43650 = (state_43734[(24)]);
var inst_43647 = (state_43734[(19)]);
var inst_43653 = (state_43734[(26)]);
var inst_43655 = (state_43734[(25)]);
var inst_43687 = (state_43734[(16)]);
var inst_43683 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43686 = (function (){var all_files = inst_43647;
var res_SINGLEQUOTE_ = inst_43650;
var res = inst_43651;
var files_not_loaded = inst_43653;
var dependencies_that_loaded = inst_43655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43687,inst_43683,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43685){
var map__43770 = p__43685;
var map__43770__$1 = ((((!((map__43770 == null)))?((((map__43770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43770):map__43770);
var namespace = cljs.core.get.call(null,map__43770__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43687,inst_43683,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43687__$1 = cljs.core.group_by.call(null,inst_43686,inst_43653);
var inst_43689 = (inst_43687__$1 == null);
var inst_43690 = cljs.core.not.call(null,inst_43689);
var state_43734__$1 = (function (){var statearr_43772 = state_43734;
(statearr_43772[(28)] = inst_43683);

(statearr_43772[(16)] = inst_43687__$1);

return statearr_43772;
})();
if(inst_43690){
var statearr_43773_43849 = state_43734__$1;
(statearr_43773_43849[(1)] = (32));

} else {
var statearr_43774_43850 = state_43734__$1;
(statearr_43774_43850[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (44))){
var inst_43710 = (state_43734[(21)]);
var inst_43723 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43710);
var inst_43724 = cljs.core.pr_str.call(null,inst_43723);
var inst_43725 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43724)].join('');
var inst_43726 = figwheel.client.utils.log.call(null,inst_43725);
var state_43734__$1 = state_43734;
var statearr_43775_43851 = state_43734__$1;
(statearr_43775_43851[(2)] = inst_43726);

(statearr_43775_43851[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (6))){
var inst_43628 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
var statearr_43776_43852 = state_43734__$1;
(statearr_43776_43852[(2)] = inst_43628);

(statearr_43776_43852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (28))){
var inst_43653 = (state_43734[(26)]);
var inst_43680 = (state_43734[(2)]);
var inst_43681 = cljs.core.not_empty.call(null,inst_43653);
var state_43734__$1 = (function (){var statearr_43777 = state_43734;
(statearr_43777[(29)] = inst_43680);

return statearr_43777;
})();
if(cljs.core.truth_(inst_43681)){
var statearr_43778_43853 = state_43734__$1;
(statearr_43778_43853[(1)] = (29));

} else {
var statearr_43779_43854 = state_43734__$1;
(statearr_43779_43854[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (25))){
var inst_43651 = (state_43734[(23)]);
var inst_43667 = (state_43734[(2)]);
var inst_43668 = cljs.core.not_empty.call(null,inst_43651);
var state_43734__$1 = (function (){var statearr_43780 = state_43734;
(statearr_43780[(30)] = inst_43667);

return statearr_43780;
})();
if(cljs.core.truth_(inst_43668)){
var statearr_43781_43855 = state_43734__$1;
(statearr_43781_43855[(1)] = (26));

} else {
var statearr_43782_43856 = state_43734__$1;
(statearr_43782_43856[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (34))){
var inst_43703 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
if(cljs.core.truth_(inst_43703)){
var statearr_43783_43857 = state_43734__$1;
(statearr_43783_43857[(1)] = (38));

} else {
var statearr_43784_43858 = state_43734__$1;
(statearr_43784_43858[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (17))){
var state_43734__$1 = state_43734;
var statearr_43785_43859 = state_43734__$1;
(statearr_43785_43859[(2)] = recompile_dependents);

(statearr_43785_43859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (3))){
var state_43734__$1 = state_43734;
var statearr_43786_43860 = state_43734__$1;
(statearr_43786_43860[(2)] = null);

(statearr_43786_43860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (12))){
var inst_43624 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
var statearr_43787_43861 = state_43734__$1;
(statearr_43787_43861[(2)] = inst_43624);

(statearr_43787_43861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (2))){
var inst_43586 = (state_43734[(13)]);
var inst_43593 = cljs.core.seq.call(null,inst_43586);
var inst_43594 = inst_43593;
var inst_43595 = null;
var inst_43596 = (0);
var inst_43597 = (0);
var state_43734__$1 = (function (){var statearr_43788 = state_43734;
(statearr_43788[(7)] = inst_43596);

(statearr_43788[(8)] = inst_43594);

(statearr_43788[(9)] = inst_43597);

(statearr_43788[(10)] = inst_43595);

return statearr_43788;
})();
var statearr_43789_43862 = state_43734__$1;
(statearr_43789_43862[(2)] = null);

(statearr_43789_43862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (23))){
var inst_43651 = (state_43734[(23)]);
var inst_43650 = (state_43734[(24)]);
var inst_43647 = (state_43734[(19)]);
var inst_43653 = (state_43734[(26)]);
var inst_43655 = (state_43734[(25)]);
var inst_43658 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43660 = (function (){var all_files = inst_43647;
var res_SINGLEQUOTE_ = inst_43650;
var res = inst_43651;
var files_not_loaded = inst_43653;
var dependencies_that_loaded = inst_43655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43658,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43659){
var map__43790 = p__43659;
var map__43790__$1 = ((((!((map__43790 == null)))?((((map__43790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43790):map__43790);
var request_url = cljs.core.get.call(null,map__43790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43658,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43661 = cljs.core.reverse.call(null,inst_43655);
var inst_43662 = cljs.core.map.call(null,inst_43660,inst_43661);
var inst_43663 = cljs.core.pr_str.call(null,inst_43662);
var inst_43664 = figwheel.client.utils.log.call(null,inst_43663);
var state_43734__$1 = (function (){var statearr_43792 = state_43734;
(statearr_43792[(31)] = inst_43658);

return statearr_43792;
})();
var statearr_43793_43863 = state_43734__$1;
(statearr_43793_43863[(2)] = inst_43664);

(statearr_43793_43863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (35))){
var state_43734__$1 = state_43734;
var statearr_43794_43864 = state_43734__$1;
(statearr_43794_43864[(2)] = true);

(statearr_43794_43864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (19))){
var inst_43637 = (state_43734[(12)]);
var inst_43643 = figwheel.client.file_reloading.expand_files.call(null,inst_43637);
var state_43734__$1 = state_43734;
var statearr_43795_43865 = state_43734__$1;
(statearr_43795_43865[(2)] = inst_43643);

(statearr_43795_43865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (11))){
var state_43734__$1 = state_43734;
var statearr_43796_43866 = state_43734__$1;
(statearr_43796_43866[(2)] = null);

(statearr_43796_43866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (9))){
var inst_43626 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
var statearr_43797_43867 = state_43734__$1;
(statearr_43797_43867[(2)] = inst_43626);

(statearr_43797_43867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (5))){
var inst_43596 = (state_43734[(7)]);
var inst_43597 = (state_43734[(9)]);
var inst_43599 = (inst_43597 < inst_43596);
var inst_43600 = inst_43599;
var state_43734__$1 = state_43734;
if(cljs.core.truth_(inst_43600)){
var statearr_43798_43868 = state_43734__$1;
(statearr_43798_43868[(1)] = (7));

} else {
var statearr_43799_43869 = state_43734__$1;
(statearr_43799_43869[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (14))){
var inst_43607 = (state_43734[(22)]);
var inst_43616 = cljs.core.first.call(null,inst_43607);
var inst_43617 = figwheel.client.file_reloading.eval_body.call(null,inst_43616,opts);
var inst_43618 = cljs.core.next.call(null,inst_43607);
var inst_43594 = inst_43618;
var inst_43595 = null;
var inst_43596 = (0);
var inst_43597 = (0);
var state_43734__$1 = (function (){var statearr_43800 = state_43734;
(statearr_43800[(7)] = inst_43596);

(statearr_43800[(8)] = inst_43594);

(statearr_43800[(32)] = inst_43617);

(statearr_43800[(9)] = inst_43597);

(statearr_43800[(10)] = inst_43595);

return statearr_43800;
})();
var statearr_43801_43870 = state_43734__$1;
(statearr_43801_43870[(2)] = null);

(statearr_43801_43870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (45))){
var state_43734__$1 = state_43734;
var statearr_43802_43871 = state_43734__$1;
(statearr_43802_43871[(2)] = null);

(statearr_43802_43871[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (26))){
var inst_43651 = (state_43734[(23)]);
var inst_43650 = (state_43734[(24)]);
var inst_43647 = (state_43734[(19)]);
var inst_43653 = (state_43734[(26)]);
var inst_43655 = (state_43734[(25)]);
var inst_43670 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43672 = (function (){var all_files = inst_43647;
var res_SINGLEQUOTE_ = inst_43650;
var res = inst_43651;
var files_not_loaded = inst_43653;
var dependencies_that_loaded = inst_43655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43670,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43671){
var map__43803 = p__43671;
var map__43803__$1 = ((((!((map__43803 == null)))?((((map__43803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43803):map__43803);
var namespace = cljs.core.get.call(null,map__43803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43670,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43673 = cljs.core.map.call(null,inst_43672,inst_43651);
var inst_43674 = cljs.core.pr_str.call(null,inst_43673);
var inst_43675 = figwheel.client.utils.log.call(null,inst_43674);
var inst_43676 = (function (){var all_files = inst_43647;
var res_SINGLEQUOTE_ = inst_43650;
var res = inst_43651;
var files_not_loaded = inst_43653;
var dependencies_that_loaded = inst_43655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43670,inst_43672,inst_43673,inst_43674,inst_43675,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43651,inst_43650,inst_43647,inst_43653,inst_43655,inst_43670,inst_43672,inst_43673,inst_43674,inst_43675,state_val_43735,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43677 = setTimeout(inst_43676,(10));
var state_43734__$1 = (function (){var statearr_43805 = state_43734;
(statearr_43805[(33)] = inst_43675);

(statearr_43805[(34)] = inst_43670);

return statearr_43805;
})();
var statearr_43806_43872 = state_43734__$1;
(statearr_43806_43872[(2)] = inst_43677);

(statearr_43806_43872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (16))){
var state_43734__$1 = state_43734;
var statearr_43807_43873 = state_43734__$1;
(statearr_43807_43873[(2)] = reload_dependents);

(statearr_43807_43873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (38))){
var inst_43687 = (state_43734[(16)]);
var inst_43705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43687);
var state_43734__$1 = state_43734;
var statearr_43808_43874 = state_43734__$1;
(statearr_43808_43874[(2)] = inst_43705);

(statearr_43808_43874[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (30))){
var state_43734__$1 = state_43734;
var statearr_43809_43875 = state_43734__$1;
(statearr_43809_43875[(2)] = null);

(statearr_43809_43875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (10))){
var inst_43607 = (state_43734[(22)]);
var inst_43609 = cljs.core.chunked_seq_QMARK_.call(null,inst_43607);
var state_43734__$1 = state_43734;
if(inst_43609){
var statearr_43810_43876 = state_43734__$1;
(statearr_43810_43876[(1)] = (13));

} else {
var statearr_43811_43877 = state_43734__$1;
(statearr_43811_43877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (18))){
var inst_43641 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
if(cljs.core.truth_(inst_43641)){
var statearr_43812_43878 = state_43734__$1;
(statearr_43812_43878[(1)] = (19));

} else {
var statearr_43813_43879 = state_43734__$1;
(statearr_43813_43879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (42))){
var state_43734__$1 = state_43734;
var statearr_43814_43880 = state_43734__$1;
(statearr_43814_43880[(2)] = null);

(statearr_43814_43880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (37))){
var inst_43700 = (state_43734[(2)]);
var state_43734__$1 = state_43734;
var statearr_43815_43881 = state_43734__$1;
(statearr_43815_43881[(2)] = inst_43700);

(statearr_43815_43881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43735 === (8))){
var inst_43594 = (state_43734[(8)]);
var inst_43607 = (state_43734[(22)]);
var inst_43607__$1 = cljs.core.seq.call(null,inst_43594);
var state_43734__$1 = (function (){var statearr_43816 = state_43734;
(statearr_43816[(22)] = inst_43607__$1);

return statearr_43816;
})();
if(inst_43607__$1){
var statearr_43817_43882 = state_43734__$1;
(statearr_43817_43882[(1)] = (10));

} else {
var statearr_43818_43883 = state_43734__$1;
(statearr_43818_43883[(1)] = (11));

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
});})(c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33270__auto__,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto____0 = (function (){
var statearr_43822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43822[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto__);

(statearr_43822[(1)] = (1));

return statearr_43822;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto____1 = (function (state_43734){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_43734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e43823){if((e43823 instanceof Object)){
var ex__33274__auto__ = e43823;
var statearr_43824_43884 = state_43734;
(statearr_43824_43884[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43885 = state_43734;
state_43734 = G__43885;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto__ = function(state_43734){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto____1.call(this,state_43734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33384__auto__ = (function (){var statearr_43825 = f__33383__auto__.call(null);
(statearr_43825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_43825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__,map__43579,map__43579__$1,opts,before_jsload,on_jsload,reload_dependents,map__43580,map__43580__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33382__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43888,link){
var map__43891 = p__43888;
var map__43891__$1 = ((((!((map__43891 == null)))?((((map__43891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43891):map__43891);
var file = cljs.core.get.call(null,map__43891__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__43891,map__43891__$1,file){
return (function (p1__43886_SHARP_,p2__43887_SHARP_){
if(cljs.core._EQ_.call(null,p1__43886_SHARP_,p2__43887_SHARP_)){
return p1__43886_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__43891,map__43891__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43897){
var map__43898 = p__43897;
var map__43898__$1 = ((((!((map__43898 == null)))?((((map__43898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43898):map__43898);
var match_length = cljs.core.get.call(null,map__43898__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43898__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43893_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43893_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43900_SHARP_,p2__43901_SHARP_){
return cljs.core.assoc.call(null,p1__43900_SHARP_,cljs.core.get.call(null,p2__43901_SHARP_,key),p2__43901_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_43902 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_43902);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_43902);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43903,p__43904){
var map__43909 = p__43903;
var map__43909__$1 = ((((!((map__43909 == null)))?((((map__43909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43909):map__43909);
var on_cssload = cljs.core.get.call(null,map__43909__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__43910 = p__43904;
var map__43910__$1 = ((((!((map__43910 == null)))?((((map__43910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43910):map__43910);
var files_msg = map__43910__$1;
var files = cljs.core.get.call(null,map__43910__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1497293638232