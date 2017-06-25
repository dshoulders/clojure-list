// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.items.edit');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('accountant.core');
goog.require('list.styles.base_styles');
goog.require('list.firebase');
list.items.edit.empty_item = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),list.items.edit.id,new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
list.items.edit.font_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),list.styles.base_styles.default_font_family], null);
list.items.edit.input_style = cljs.core.merge.call(null,list.styles.base_styles.input_styles,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"22px",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),new cljs.core.Keyword(null,"normal","normal",-1519123858).cljs$core$IFn$_invoke$arity$1(list.styles.base_styles.font_weights)], null));
list.items.edit.textarea_style = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"16px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"15px"], null),list.items.edit.font_style);
list.items.edit.action_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"flex-end"], null);
list.items.edit.save_style = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"15px"], null),list.items.edit.font_style,list.styles.base_styles.button_styles);
list.items.edit.cancel_style = cljs.core.merge.call(null,list.items.edit.font_style,list.styles.base_styles.button_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#808080"], null));
list.items.edit.delete_style = cljs.core.merge.call(null,list.items.edit.font_style,list.styles.base_styles.button_styles,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#C53434",new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"auto"], null));
list.items.edit.view = (function list$items$edit$view(id){
var item = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),id], null)));
var temp_item = reagent.core.atom.call(null,cljs.core.merge.call(null,list.items.edit.empty_item,item));
return ((function (item,temp_item){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.edit.input_style,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Title",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (item,temp_item){
return (function (p1__35262_SHARP_){
return cljs.core.swap_BANG_.call(null,temp_item,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__35262_SHARP_.target.value);
});})(item,temp_item))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,temp_item))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.edit.textarea_style,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Notes",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (item,temp_item){
return (function (p1__35263_SHARP_){
return cljs.core.swap_BANG_.call(null,temp_item,cljs.core.assoc,new cljs.core.Keyword(null,"notes","notes",-1039600523),p1__35263_SHARP_.target.value);
});})(item,temp_item))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,temp_item))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.edit.action_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.edit.delete_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,temp_item){
return (function (){
list.firebase.remove_item.call(null,cljs.core.deref.call(null,temp_item));

return accountant.core.navigate_BANG_.call(null,"/");
});})(item,temp_item))
], null),"Delete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.edit.cancel_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,temp_item){
return (function (){
return accountant.core.navigate_BANG_.call(null,"/");
});})(item,temp_item))
], null),"Canel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),list.items.edit.save_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,temp_item){
return (function (){
list.firebase.save_item.call(null,cljs.core.deref.call(null,temp_item));

return accountant.core.navigate_BANG_.call(null,"/");
});})(item,temp_item))
], null),"Save"], null)], null)], null);
});
;})(item,temp_item))
});

//# sourceMappingURL=edit.js.map?rel=1498418314662