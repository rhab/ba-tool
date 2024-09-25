goog.provide('replicant.dom');
replicant.dom.remove_listener = (function replicant$dom$remove_listener(el,event){
var temp__5811__auto__ = (function (){var G__38886 = el;
var G__38886__$1 = (((G__38886 == null))?null:G__38886.replicantHandlers);
if((G__38886__$1 == null)){
return null;
} else {
return (G__38886__$1[event]);
}
})();
if(cljs.core.truth_(temp__5811__auto__)){
var old_handler = temp__5811__auto__;
return el.removeEventListener(event,old_handler);
} else {
return null;
}
});
replicant.dom.on_next_frame = (function replicant$dom$on_next_frame(f){
return requestAnimationFrame((function (){
return requestAnimationFrame(f);
}));
});
replicant.dom._on_transition_end = (function replicant$dom$_on_transition_end(el,f){
var vec__38897 = replicant.transition.get_transition_stats(window.getComputedStyle(el).getPropertyValue("transition-duration"));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38897,(0),null);
var dur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38897,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
var complete = cljs.core.volatile_BANG_((0));
var timer = cljs.core.volatile_BANG_(null);
var started = (new Date());
var callback = (function() { 
var replicant$dom$_on_transition_end_$_listener__delegate = function (_args){
var cn = complete.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (complete.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));
if((((n <= cn)) || ((dur < ((new Date()) - started))))){
el.removeEventListener("transitionend",replicant$dom$_on_transition_end_$_listener);

clearTimeout(cljs.core.deref(timer));

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return null;
}
};
var replicant$dom$_on_transition_end_$_listener = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__39061__i = 0, G__39061__a = new Array(arguments.length -  0);
while (G__39061__i < G__39061__a.length) {G__39061__a[G__39061__i] = arguments[G__39061__i + 0]; ++G__39061__i;}
  _args = new cljs.core.IndexedSeq(G__39061__a,0,null);
} 
return replicant$dom$_on_transition_end_$_listener__delegate.call(this,_args);};
replicant$dom$_on_transition_end_$_listener.cljs$lang$maxFixedArity = 0;
replicant$dom$_on_transition_end_$_listener.cljs$lang$applyTo = (function (arglist__39062){
var _args = cljs.core.seq(arglist__39062);
return replicant$dom$_on_transition_end_$_listener__delegate(_args);
});
replicant$dom$_on_transition_end_$_listener.cljs$core$IFn$_invoke$arity$variadic = replicant$dom$_on_transition_end_$_listener__delegate;
return replicant$dom$_on_transition_end_$_listener;
})()
;
el.addEventListener("transitionend",callback);

return cljs.core.vreset_BANG_(timer,setTimeout(callback,(dur + (200))));
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {replicant.protocols.IRender}
 * @implements {cljs.core.IWithMeta}
*/
replicant.dom.t_replicant$dom38909 = (function (meta38910){
this.meta38910 = meta38910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(replicant.dom.t_replicant$dom38909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38911,meta38910__$1){
var self__ = this;
var _38911__$1 = this;
return (new replicant.dom.t_replicant$dom38909(meta38910__$1));
}));

(replicant.dom.t_replicant$dom38909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38911){
var self__ = this;
var _38911__$1 = this;
return self__.meta38910;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$remove_attribute$arity$3 = (function (this$,el,attr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML",attr)){
(el.innerHTML = "");
} else {
el.removeAttribute(attr);
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$remove_all_children$arity$2 = (function (this$,el){
var self__ = this;
var this$__$1 = this;
(el.textContent = "");

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$remove_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.removeChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$insert_before$arity$4 = (function (this$,el,child_node,reference_node){
var self__ = this;
var this$__$1 = this;
el.insertBefore(child_node,reference_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$append_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.appendChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$remove_event_handler$arity$3 = (function (this$,el,event){
var self__ = this;
var this$__$1 = this;
var event_39085__$1 = cljs.core.name(event);
replicant.dom.remove_listener(el,event_39085__$1);

(el.replicantHandlers[event_39085__$1] = null);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$remove_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.remove(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$set_event_handler$arity$4 = (function (this$,el,event,handler){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(el.replicantHandlers)){
} else {
(el.replicantHandlers = ({}));
}

var event_39088__$1 = cljs.core.name(event);
replicant.dom.remove_listener(el,event_39088__$1);

(el.replicantHandlers[event_39088__$1] = handler);

el.addEventListener(event_39088__$1,handler);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$replace_child$arity$4 = (function (this$,el,insert_child,replace_child){
var self__ = this;
var this$__$1 = this;
el.replaceChild(insert_child,replace_child);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$on_transition_end$arity$3 = (function (this$,el,f){
var self__ = this;
var this$__$1 = this;
replicant.dom._on_transition_end(el,f);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$remove_style$arity$3 = (function (this$,el,style){
var self__ = this;
var this$__$1 = this;
el.style.removeProperty(cljs.core.name(style));

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$set_attribute$arity$5 = (function (this$,el,attr,v,opt){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML",attr)){
(el.innerHTML = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("value",attr)){
(el.value = v);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt))){
el.setAttributeNS(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt),attr,v);
} else {
el.setAttribute(attr,v);

}
}
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$create_text_node$arity$2 = (function (_this,text){
var self__ = this;
var _this__$1 = this;
return document.createTextNode(text);
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$set_style$arity$4 = (function (this$,el,style,v){
var self__ = this;
var this$__$1 = this;
el.style.setProperty(cljs.core.name(style),v);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$next_frame$arity$2 = (function (_this,f){
var self__ = this;
var _this__$1 = this;
return replicant.dom.on_next_frame(f);
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$add_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.add(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$get_child$arity$3 = (function (_this,el,idx){
var self__ = this;
var _this__$1 = this;
return (el.childNodes[idx]);
}));

(replicant.dom.t_replicant$dom38909.prototype.replicant$protocols$IRender$create_element$arity$3 = (function (_this,tag_name,options){
var self__ = this;
var _this__$1 = this;
var temp__5809__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5809__auto__)){
var ns = temp__5809__auto__;
return document.createElementNS(ns,tag_name);
} else {
return document.createElement(tag_name);
}
}));

(replicant.dom.t_replicant$dom38909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38910","meta38910",-1330132141,null)], null);
}));

(replicant.dom.t_replicant$dom38909.cljs$lang$type = true);

(replicant.dom.t_replicant$dom38909.cljs$lang$ctorStr = "replicant.dom/t_replicant$dom38909");

(replicant.dom.t_replicant$dom38909.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"replicant.dom/t_replicant$dom38909");
}));

/**
 * Positional factory function for replicant.dom/t_replicant$dom38909.
 */
replicant.dom.__GT_t_replicant$dom38909 = (function replicant$dom$__GT_t_replicant$dom38909(meta38910){
return (new replicant.dom.t_replicant$dom38909(meta38910));
});


replicant.dom.create_renderer = (function replicant$dom$create_renderer(){
return (new replicant.dom.t_replicant$dom38909(cljs.core.PersistentArrayMap.EMPTY));
});
if((typeof replicant !== 'undefined') && (typeof replicant.dom !== 'undefined') && (typeof replicant.dom.state !== 'undefined')){
} else {
replicant.dom.state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Render `hiccup` in DOM element `el`. Replaces any pre-existing content not
 *   created by this function. Subsequent calls with the same `el` will update the
 *   rendered DOM by comparing `hiccup` to the previous `hiccup`.
 */
replicant.dom.render = (function replicant$dom$render(el,hiccup){
var rendering_QMARK__39092 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null));
if(cljs.core.contains_QMARK_(cljs.core.deref(replicant.dom.state),el)){
} else {
(el.innerHTML = "");

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),el,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",336841071),replicant.dom.create_renderer(),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),true,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY], null)));
}

if(cljs.core.truth_(rendering_QMARK__39092)){
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__38952_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__38952_SHARP_,hiccup);
})));
} else {
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc_in(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null),true));

var map__38958_39097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),el);
var map__38958_39098__$1 = cljs.core.__destructure_map(map__38958_39097);
var renderer_39099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38958_39098__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var current_39100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38958_39098__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var unmounts_39101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38958_39098__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var map__38959_39102 = replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic(renderer_39099,el,hiccup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_39100,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unmounts","unmounts",173366521),unmounts_39101], null)], 0));
var map__38959_39103__$1 = cljs.core.__destructure_map(map__38959_39102);
var vdom_39104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38959_39103__$1,new cljs.core.Keyword(null,"vdom","vdom",953162958));
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update.cljs$core$IFn$_invoke$arity$4(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),el,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),vdom_39104,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),false], null)));

var temp__5811__auto___39107 = cljs.core.first(new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),el)));
if(cljs.core.truth_(temp__5811__auto___39107)){
var pending_39108 = temp__5811__auto___39107;
requestAnimationFrame((function (){
return (replicant.dom.render.cljs$core$IFn$_invoke$arity$2 ? replicant.dom.render.cljs$core$IFn$_invoke$arity$2(el,pending_39108) : replicant.dom.render.call(null, el,pending_39108));
}));

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__38953_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__38953_SHARP_));
})));
} else {
}
}

return el;
});
goog.exportSymbol('replicant.dom.render', replicant.dom.render);
replicant.dom.set_dispatch_BANG_ = (function replicant$dom$set_dispatch_BANG_(f){
return (replicant.core._STAR_dispatch_STAR_ = f);
});
goog.exportSymbol('replicant.dom.set_dispatch_BANG_', replicant.dom.set_dispatch_BANG_);

//# sourceMappingURL=replicant.dom.js.map
