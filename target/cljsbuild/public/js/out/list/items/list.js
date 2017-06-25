// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.items.list');
goog.require('cljs.core');
goog.require('accountant.core');
goog.require('re_frame.core');
goog.require('list.styles.base_styles');
list.items.list.item_styles = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"15px",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862),"0px 0px 3px 0px rgba(0, 0, 0, 0.20)",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"3px"], null);
list.items.list.title_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"22px",new cljs.core.Keyword(null,"color","color",1011675173),"lightseagreen"], null);
list.items.list.note_styles = cljs.core.merge.call(null,list.styles.base_styles.break_long_words,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"7px"], null));
/**
 * true if coll contains elm
 */
list.items.list.in_QMARK_ = (function list$items$list$in_QMARK_(coll,elm){
return cljs.core.some.call(null,(function (p1__34259_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__34259_SHARP_);
}),coll);
});
list.items.list.mark_tags = (function list$items$list$mark_tags(notes){
return clojure.string.replace.call(null,notes,/(https?:\/\/\S*)|(\B#\w*[a-zA-Z]+\w*)/,(function (p1__34260_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__34260_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|")].join('');
}));
});
list.items.list.split_marks = (function list$items$list$split_marks(marked_string){
return clojure.string.split.call(null,marked_string,/\|/);
});
list.items.list.sort_by_title = (function list$items$list$sort_by_title(items){
return cljs.core.sort_by.call(null,(function (p1__34261_SHARP_){
return clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__34261_SHARP_));
}),items);
});
list.items.list.filter_visible = (function list$items$list$filter_visible(visible_item_ids,items){
return cljs.core.filter.call(null,(function (p1__34262_SHARP_){
return list.items.list.in_QMARK_.call(null,visible_item_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34262_SHARP_));
}),items);
});
list.items.list.notes_html = (function list$items$list$notes_html(notes_part){
if(clojure.string.starts_with_QMARK_.call(null,notes_part,"http")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),notes_part], null),notes_part], null);
} else {
if(clojure.string.starts_with_QMARK_.call(null,notes_part,"#")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.styles.base_styles.tag_styles], null),notes_part], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),notes_part], null);
}
}
});
list.items.list.notes_display = (function list$items$list$notes_display(notes){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__31271__auto__ = (function list$items$list$notes_display_$_iter__34267(s__34268){
return (new cljs.core.LazySeq(null,(function (){
var s__34268__$1 = s__34268;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34268__$1);
if(temp__4657__auto__){
var s__34268__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34268__$2)){
var c__31269__auto__ = cljs.core.chunk_first.call(null,s__34268__$2);
var size__31270__auto__ = cljs.core.count.call(null,c__31269__auto__);
var b__34270 = cljs.core.chunk_buffer.call(null,size__31270__auto__);
if((function (){var i__34269 = (0);
while(true){
if((i__34269 < size__31270__auto__)){
var notes_part = cljs.core._nth.call(null,c__31269__auto__,i__34269);
cljs.core.chunk_append.call(null,b__34270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.items.list.notes_html,notes_part], null));

var G__34271 = (i__34269 + (1));
i__34269 = G__34271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34270),list$items$list$notes_display_$_iter__34267.call(null,cljs.core.chunk_rest.call(null,s__34268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34270),null);
}
} else {
var notes_part = cljs.core.first.call(null,s__34268__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.items.list.notes_html,notes_part], null),list$items$list$notes_display_$_iter__34267.call(null,cljs.core.rest.call(null,s__34268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31271__auto__.call(null,list.items.list.split_marks.call(null,list.items.list.mark_tags.call(null,notes)));
})());
});
list.items.list.view = (function list$items$list$view(){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
var visible_item_ids = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible-item-ids","visible-item-ids",197941386)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item-list","div.item-list",1097614321),(function (){var iter__31271__auto__ = ((function (items,visible_item_ids){
return (function list$items$list$view_$_iter__34276(s__34277){
return (new cljs.core.LazySeq(null,((function (items,visible_item_ids){
return (function (){
var s__34277__$1 = s__34277;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34277__$1);
if(temp__4657__auto__){
var s__34277__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34277__$2)){
var c__31269__auto__ = cljs.core.chunk_first.call(null,s__34277__$2);
var size__31270__auto__ = cljs.core.count.call(null,c__31269__auto__);
var b__34279 = cljs.core.chunk_buffer.call(null,size__31270__auto__);
if((function (){var i__34278 = (0);
while(true){
if((i__34278 < size__31270__auto__)){
var item = cljs.core._nth.call(null,c__31269__auto__,i__34278);
cljs.core.chunk_append.call(null,b__34279,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.list.item_styles], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.list.title_styles,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (i__34278,item,c__31269__auto__,size__31270__auto__,b__34279,s__34277__$2,temp__4657__auto__,items,visible_item_ids){
return (function (){
return accountant.core.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/item/edit/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))].join(''));
});})(i__34278,item,c__31269__auto__,size__31270__auto__,b__34279,s__34277__$2,temp__4657__auto__,items,visible_item_ids))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.list.note_styles], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.items.list.notes_display,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__34280 = (i__34278 + (1));
i__34278 = G__34280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34279),list$items$list$view_$_iter__34276.call(null,cljs.core.chunk_rest.call(null,s__34277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34279),null);
}
} else {
var item = cljs.core.first.call(null,s__34277__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.list.item_styles], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.list.title_styles,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (item,s__34277__$2,temp__4657__auto__,items,visible_item_ids){
return (function (){
return accountant.core.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/item/edit/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))].join(''));
});})(item,s__34277__$2,temp__4657__auto__,items,visible_item_ids))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.list.note_styles], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.items.list.notes_display,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),list$items$list$view_$_iter__34276.call(null,cljs.core.rest.call(null,s__34277__$2)));
}
} else {
return null;
}
break;
}
});})(items,visible_item_ids))
,null,null));
});})(items,visible_item_ids))
;
return iter__31271__auto__.call(null,list.items.list.sort_by_title.call(null,list.items.list.filter_visible.call(null,cljs.core.deref.call(null,visible_item_ids),cljs.core.deref.call(null,items))));
})()], null);
});

//# sourceMappingURL=list.js.map?rel=1497905555714