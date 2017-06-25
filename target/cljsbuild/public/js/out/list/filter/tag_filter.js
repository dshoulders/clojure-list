// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.filter.tag_filter');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('list.styles.base_styles');
list.filter.tag_filter.filter_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap"], null);
list.filter.tag_filter.deselected_tag_styles = cljs.core.merge.call(null,list.styles.base_styles.tag_styles,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"4px",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"4px"], null));
list.filter.tag_filter.selected_tag_styles = cljs.core.merge.call(null,list.filter.tag_filter.deselected_tag_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#0087ff"], null));
list.filter.tag_filter.all_tags = (function list$filter$tag_filter$all_tags(items){
return cljs.core.reduce.call(null,(function (acc,item){
return cljs.core.concat.call(null,acc,cljs.core.re_seq.call(null,/\B#\w*[a-zA-Z]+\w*/,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(item)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),items);
});
list.filter.tag_filter.clean_tags = (function list$filter$tag_filter$clean_tags(tags){
return cljs.core.distinct.call(null,cljs.core.filter.call(null,(function (p1__33866_SHARP_){
return cljs.core.not_EQ_.call(null,"",p1__33866_SHARP_);
}),tags));
});
list.filter.tag_filter.view = (function list$filter$tag_filter$view(){
var items = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null)));
var all_tags = list.filter.tag_filter.all_tags.call(null,items);
var tags = list.filter.tag_filter.clean_tags.call(null,all_tags);
var selected_tag = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-tag","search-tag",855560448)], null)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.filter.tag_filter.filter_styles], null)], null),(function (){var iter__31271__auto__ = ((function (items,all_tags,tags,selected_tag){
return (function list$filter$tag_filter$view_$_iter__33871(s__33872){
return (new cljs.core.LazySeq(null,((function (items,all_tags,tags,selected_tag){
return (function (){
var s__33872__$1 = s__33872;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33872__$1);
if(temp__4657__auto__){
var s__33872__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33872__$2)){
var c__31269__auto__ = cljs.core.chunk_first.call(null,s__33872__$2);
var size__31270__auto__ = cljs.core.count.call(null,c__31269__auto__);
var b__33874 = cljs.core.chunk_buffer.call(null,size__31270__auto__);
if((function (){var i__33873 = (0);
while(true){
if((i__33873 < size__31270__auto__)){
var tag = cljs.core._nth.call(null,c__31269__auto__,i__33873);
cljs.core.chunk_append.call(null,b__33874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,selected_tag,tag))?list.filter.tag_filter.selected_tag_styles:list.filter.tag_filter.deselected_tag_styles),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33873,tag,c__31269__auto__,size__31270__auto__,b__33874,s__33872__$2,temp__4657__auto__,items,all_tags,tags,selected_tag){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-tag","search-tag",855560448),tag], null));
});})(i__33873,tag,c__31269__auto__,size__31270__auto__,b__33874,s__33872__$2,temp__4657__auto__,items,all_tags,tags,selected_tag))
], null),tag], null));

var G__33875 = (i__33873 + (1));
i__33873 = G__33875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33874),list$filter$tag_filter$view_$_iter__33871.call(null,cljs.core.chunk_rest.call(null,s__33872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33874),null);
}
} else {
var tag = cljs.core.first.call(null,s__33872__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,selected_tag,tag))?list.filter.tag_filter.selected_tag_styles:list.filter.tag_filter.deselected_tag_styles),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,s__33872__$2,temp__4657__auto__,items,all_tags,tags,selected_tag){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-tag","search-tag",855560448),tag], null));
});})(tag,s__33872__$2,temp__4657__auto__,items,all_tags,tags,selected_tag))
], null),tag], null),list$filter$tag_filter$view_$_iter__33871.call(null,cljs.core.rest.call(null,s__33872__$2)));
}
} else {
return null;
}
break;
}
});})(items,all_tags,tags,selected_tag))
,null,null));
});})(items,all_tags,tags,selected_tag))
;
return iter__31271__auto__.call(null,tags);
})());
});

//# sourceMappingURL=tag_filter.js.map?rel=1497901324444