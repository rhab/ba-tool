goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_28948 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_28948(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_28950 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_28950(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__27885 = coll;
var G__27886 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__27885,G__27886) : shadow.dom.lazy_native_coll_seq.call(null, G__27885,G__27886));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__27913 = arguments.length;
switch (G__27913) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__27922 = arguments.length;
switch (G__27922) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__27926 = arguments.length;
switch (G__27926) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__27939 = arguments.length;
switch (G__27939) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__27947 = arguments.length;
switch (G__27947) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__27980 = arguments.length;
switch (G__27980) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e27994){if((e27994 instanceof Object)){
var e = e27994;
return console.log("didnt support attachEvent",el,e);
} else {
throw e27994;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28009 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28010 = null;
var count__28011 = (0);
var i__28012 = (0);
while(true){
if((i__28012 < count__28011)){
var el = chunk__28010.cljs$core$IIndexed$_nth$arity$2(null, i__28012);
var handler_28988__$1 = ((function (seq__28009,chunk__28010,count__28011,i__28012,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28009,chunk__28010,count__28011,i__28012,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_28988__$1);


var G__28994 = seq__28009;
var G__28995 = chunk__28010;
var G__28996 = count__28011;
var G__28997 = (i__28012 + (1));
seq__28009 = G__28994;
chunk__28010 = G__28995;
count__28011 = G__28996;
i__28012 = G__28997;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__28009);
if(temp__5811__auto__){
var seq__28009__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28009__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28009__$1);
var G__28998 = cljs.core.chunk_rest(seq__28009__$1);
var G__28999 = c__5525__auto__;
var G__29000 = cljs.core.count(c__5525__auto__);
var G__29001 = (0);
seq__28009 = G__28998;
chunk__28010 = G__28999;
count__28011 = G__29000;
i__28012 = G__29001;
continue;
} else {
var el = cljs.core.first(seq__28009__$1);
var handler_29002__$1 = ((function (seq__28009,chunk__28010,count__28011,i__28012,el,seq__28009__$1,temp__5811__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28009,chunk__28010,count__28011,i__28012,el,seq__28009__$1,temp__5811__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29002__$1);


var G__29003 = cljs.core.next(seq__28009__$1);
var G__29004 = null;
var G__29005 = (0);
var G__29006 = (0);
seq__28009 = G__29003;
chunk__28010 = G__29004;
count__28011 = G__29005;
i__28012 = G__29006;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28049 = arguments.length;
switch (G__28049) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28073 = cljs.core.seq(events);
var chunk__28074 = null;
var count__28075 = (0);
var i__28076 = (0);
while(true){
if((i__28076 < count__28075)){
var vec__28134 = chunk__28074.cljs$core$IIndexed$_nth$arity$2(null, i__28076);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29012 = seq__28073;
var G__29013 = chunk__28074;
var G__29014 = count__28075;
var G__29015 = (i__28076 + (1));
seq__28073 = G__29012;
chunk__28074 = G__29013;
count__28075 = G__29014;
i__28076 = G__29015;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__28073);
if(temp__5811__auto__){
var seq__28073__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28073__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28073__$1);
var G__29016 = cljs.core.chunk_rest(seq__28073__$1);
var G__29017 = c__5525__auto__;
var G__29018 = cljs.core.count(c__5525__auto__);
var G__29019 = (0);
seq__28073 = G__29016;
chunk__28074 = G__29017;
count__28075 = G__29018;
i__28076 = G__29019;
continue;
} else {
var vec__28144 = cljs.core.first(seq__28073__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29021 = cljs.core.next(seq__28073__$1);
var G__29022 = null;
var G__29023 = (0);
var G__29024 = (0);
seq__28073 = G__29021;
chunk__28074 = G__29022;
count__28075 = G__29023;
i__28076 = G__29024;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28168 = cljs.core.seq(styles);
var chunk__28169 = null;
var count__28170 = (0);
var i__28171 = (0);
while(true){
if((i__28171 < count__28170)){
var vec__28203 = chunk__28169.cljs$core$IIndexed$_nth$arity$2(null, i__28171);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28203,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29032 = seq__28168;
var G__29033 = chunk__28169;
var G__29034 = count__28170;
var G__29035 = (i__28171 + (1));
seq__28168 = G__29032;
chunk__28169 = G__29033;
count__28170 = G__29034;
i__28171 = G__29035;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__28168);
if(temp__5811__auto__){
var seq__28168__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28168__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28168__$1);
var G__29037 = cljs.core.chunk_rest(seq__28168__$1);
var G__29038 = c__5525__auto__;
var G__29039 = cljs.core.count(c__5525__auto__);
var G__29040 = (0);
seq__28168 = G__29037;
chunk__28169 = G__29038;
count__28170 = G__29039;
i__28171 = G__29040;
continue;
} else {
var vec__28213 = cljs.core.first(seq__28168__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28213,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29041 = cljs.core.next(seq__28168__$1);
var G__29042 = null;
var G__29043 = (0);
var G__29044 = (0);
seq__28168 = G__29041;
chunk__28169 = G__29042;
count__28170 = G__29043;
i__28171 = G__29044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28234_29045 = key;
var G__28234_29046__$1 = (((G__28234_29045 instanceof cljs.core.Keyword))?G__28234_29045.fqn:null);
switch (G__28234_29046__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29051 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_29051,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_29051,"aria-");
}
})())){
el.setAttribute(ks_29051,value);
} else {
(el[ks_29051] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28316){
var map__28319 = p__28316;
var map__28319__$1 = cljs.core.__destructure_map(map__28319);
var props = map__28319__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28319__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28323 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28329 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28329,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28329;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28340 = arguments.length;
switch (G__28340) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5811__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5811__auto__)){
var n = temp__5811__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5811__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5811__auto__)){
var n = temp__5811__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28357){
var vec__28360 = p__28357;
var seq__28361 = cljs.core.seq(vec__28360);
var first__28362 = cljs.core.first(seq__28361);
var seq__28361__$1 = cljs.core.next(seq__28361);
var nn = first__28362;
var first__28362__$1 = cljs.core.first(seq__28361__$1);
var seq__28361__$2 = cljs.core.next(seq__28361__$1);
var np = first__28362__$1;
var nc = seq__28361__$2;
var node = vec__28360;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28376 = nn;
var G__28377 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28376,G__28377) : create_fn.call(null, G__28376,G__28377));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28380 = nn;
var G__28381 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28380,G__28381) : create_fn.call(null, G__28380,G__28381));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28383 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(1),null);
var seq__28388_29102 = cljs.core.seq(node_children);
var chunk__28389_29103 = null;
var count__28390_29104 = (0);
var i__28391_29105 = (0);
while(true){
if((i__28391_29105 < count__28390_29104)){
var child_struct_29106 = chunk__28389_29103.cljs$core$IIndexed$_nth$arity$2(null, i__28391_29105);
var children_29107 = shadow.dom.dom_node(child_struct_29106);
if(cljs.core.seq_QMARK_(children_29107)){
var seq__28423_29108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29107));
var chunk__28425_29109 = null;
var count__28426_29110 = (0);
var i__28427_29111 = (0);
while(true){
if((i__28427_29111 < count__28426_29110)){
var child_29114 = chunk__28425_29109.cljs$core$IIndexed$_nth$arity$2(null, i__28427_29111);
if(cljs.core.truth_(child_29114)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29114);


var G__29115 = seq__28423_29108;
var G__29116 = chunk__28425_29109;
var G__29117 = count__28426_29110;
var G__29118 = (i__28427_29111 + (1));
seq__28423_29108 = G__29115;
chunk__28425_29109 = G__29116;
count__28426_29110 = G__29117;
i__28427_29111 = G__29118;
continue;
} else {
var G__29119 = seq__28423_29108;
var G__29120 = chunk__28425_29109;
var G__29121 = count__28426_29110;
var G__29122 = (i__28427_29111 + (1));
seq__28423_29108 = G__29119;
chunk__28425_29109 = G__29120;
count__28426_29110 = G__29121;
i__28427_29111 = G__29122;
continue;
}
} else {
var temp__5811__auto___29124 = cljs.core.seq(seq__28423_29108);
if(temp__5811__auto___29124){
var seq__28423_29125__$1 = temp__5811__auto___29124;
if(cljs.core.chunked_seq_QMARK_(seq__28423_29125__$1)){
var c__5525__auto___29126 = cljs.core.chunk_first(seq__28423_29125__$1);
var G__29127 = cljs.core.chunk_rest(seq__28423_29125__$1);
var G__29128 = c__5525__auto___29126;
var G__29129 = cljs.core.count(c__5525__auto___29126);
var G__29130 = (0);
seq__28423_29108 = G__29127;
chunk__28425_29109 = G__29128;
count__28426_29110 = G__29129;
i__28427_29111 = G__29130;
continue;
} else {
var child_29132 = cljs.core.first(seq__28423_29125__$1);
if(cljs.core.truth_(child_29132)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29132);


var G__29133 = cljs.core.next(seq__28423_29125__$1);
var G__29134 = null;
var G__29135 = (0);
var G__29136 = (0);
seq__28423_29108 = G__29133;
chunk__28425_29109 = G__29134;
count__28426_29110 = G__29135;
i__28427_29111 = G__29136;
continue;
} else {
var G__29138 = cljs.core.next(seq__28423_29125__$1);
var G__29139 = null;
var G__29140 = (0);
var G__29141 = (0);
seq__28423_29108 = G__29138;
chunk__28425_29109 = G__29139;
count__28426_29110 = G__29140;
i__28427_29111 = G__29141;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29107);
}


var G__29143 = seq__28388_29102;
var G__29144 = chunk__28389_29103;
var G__29145 = count__28390_29104;
var G__29146 = (i__28391_29105 + (1));
seq__28388_29102 = G__29143;
chunk__28389_29103 = G__29144;
count__28390_29104 = G__29145;
i__28391_29105 = G__29146;
continue;
} else {
var temp__5811__auto___29147 = cljs.core.seq(seq__28388_29102);
if(temp__5811__auto___29147){
var seq__28388_29148__$1 = temp__5811__auto___29147;
if(cljs.core.chunked_seq_QMARK_(seq__28388_29148__$1)){
var c__5525__auto___29150 = cljs.core.chunk_first(seq__28388_29148__$1);
var G__29151 = cljs.core.chunk_rest(seq__28388_29148__$1);
var G__29152 = c__5525__auto___29150;
var G__29153 = cljs.core.count(c__5525__auto___29150);
var G__29154 = (0);
seq__28388_29102 = G__29151;
chunk__28389_29103 = G__29152;
count__28390_29104 = G__29153;
i__28391_29105 = G__29154;
continue;
} else {
var child_struct_29155 = cljs.core.first(seq__28388_29148__$1);
var children_29156 = shadow.dom.dom_node(child_struct_29155);
if(cljs.core.seq_QMARK_(children_29156)){
var seq__28438_29157 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29156));
var chunk__28440_29158 = null;
var count__28441_29159 = (0);
var i__28442_29160 = (0);
while(true){
if((i__28442_29160 < count__28441_29159)){
var child_29162 = chunk__28440_29158.cljs$core$IIndexed$_nth$arity$2(null, i__28442_29160);
if(cljs.core.truth_(child_29162)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29162);


var G__29164 = seq__28438_29157;
var G__29165 = chunk__28440_29158;
var G__29166 = count__28441_29159;
var G__29167 = (i__28442_29160 + (1));
seq__28438_29157 = G__29164;
chunk__28440_29158 = G__29165;
count__28441_29159 = G__29166;
i__28442_29160 = G__29167;
continue;
} else {
var G__29168 = seq__28438_29157;
var G__29169 = chunk__28440_29158;
var G__29170 = count__28441_29159;
var G__29171 = (i__28442_29160 + (1));
seq__28438_29157 = G__29168;
chunk__28440_29158 = G__29169;
count__28441_29159 = G__29170;
i__28442_29160 = G__29171;
continue;
}
} else {
var temp__5811__auto___29172__$1 = cljs.core.seq(seq__28438_29157);
if(temp__5811__auto___29172__$1){
var seq__28438_29174__$1 = temp__5811__auto___29172__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28438_29174__$1)){
var c__5525__auto___29175 = cljs.core.chunk_first(seq__28438_29174__$1);
var G__29176 = cljs.core.chunk_rest(seq__28438_29174__$1);
var G__29177 = c__5525__auto___29175;
var G__29178 = cljs.core.count(c__5525__auto___29175);
var G__29179 = (0);
seq__28438_29157 = G__29176;
chunk__28440_29158 = G__29177;
count__28441_29159 = G__29178;
i__28442_29160 = G__29179;
continue;
} else {
var child_29181 = cljs.core.first(seq__28438_29174__$1);
if(cljs.core.truth_(child_29181)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29181);


var G__29182 = cljs.core.next(seq__28438_29174__$1);
var G__29183 = null;
var G__29184 = (0);
var G__29185 = (0);
seq__28438_29157 = G__29182;
chunk__28440_29158 = G__29183;
count__28441_29159 = G__29184;
i__28442_29160 = G__29185;
continue;
} else {
var G__29187 = cljs.core.next(seq__28438_29174__$1);
var G__29188 = null;
var G__29189 = (0);
var G__29190 = (0);
seq__28438_29157 = G__29187;
chunk__28440_29158 = G__29188;
count__28441_29159 = G__29189;
i__28442_29160 = G__29190;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29156);
}


var G__29191 = cljs.core.next(seq__28388_29148__$1);
var G__29192 = null;
var G__29193 = (0);
var G__29194 = (0);
seq__28388_29102 = G__29191;
chunk__28389_29103 = G__29192;
count__28390_29104 = G__29193;
i__28391_29105 = G__29194;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28466 = cljs.core.seq(node);
var chunk__28467 = null;
var count__28468 = (0);
var i__28469 = (0);
while(true){
if((i__28469 < count__28468)){
var n = chunk__28467.cljs$core$IIndexed$_nth$arity$2(null, i__28469);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29199 = seq__28466;
var G__29200 = chunk__28467;
var G__29201 = count__28468;
var G__29202 = (i__28469 + (1));
seq__28466 = G__29199;
chunk__28467 = G__29200;
count__28468 = G__29201;
i__28469 = G__29202;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__28466);
if(temp__5811__auto__){
var seq__28466__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28466__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28466__$1);
var G__29204 = cljs.core.chunk_rest(seq__28466__$1);
var G__29205 = c__5525__auto__;
var G__29206 = cljs.core.count(c__5525__auto__);
var G__29207 = (0);
seq__28466 = G__29204;
chunk__28467 = G__29205;
count__28468 = G__29206;
i__28469 = G__29207;
continue;
} else {
var n = cljs.core.first(seq__28466__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29208 = cljs.core.next(seq__28466__$1);
var G__29209 = null;
var G__29210 = (0);
var G__29211 = (0);
seq__28466 = G__29208;
chunk__28467 = G__29209;
count__28468 = G__29210;
i__28469 = G__29211;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28490 = arguments.length;
switch (G__28490) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28500 = arguments.length;
switch (G__28500) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28513 = arguments.length;
switch (G__28513) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29228 = arguments.length;
var i__5727__auto___29230 = (0);
while(true){
if((i__5727__auto___29230 < len__5726__auto___29228)){
args__5732__auto__.push((arguments[i__5727__auto___29230]));

var G__29231 = (i__5727__auto___29230 + (1));
i__5727__auto___29230 = G__29231;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28535_29233 = cljs.core.seq(nodes);
var chunk__28536_29234 = null;
var count__28537_29235 = (0);
var i__28538_29236 = (0);
while(true){
if((i__28538_29236 < count__28537_29235)){
var node_29237 = chunk__28536_29234.cljs$core$IIndexed$_nth$arity$2(null, i__28538_29236);
fragment.appendChild(shadow.dom._to_dom(node_29237));


var G__29238 = seq__28535_29233;
var G__29239 = chunk__28536_29234;
var G__29240 = count__28537_29235;
var G__29241 = (i__28538_29236 + (1));
seq__28535_29233 = G__29238;
chunk__28536_29234 = G__29239;
count__28537_29235 = G__29240;
i__28538_29236 = G__29241;
continue;
} else {
var temp__5811__auto___29242 = cljs.core.seq(seq__28535_29233);
if(temp__5811__auto___29242){
var seq__28535_29243__$1 = temp__5811__auto___29242;
if(cljs.core.chunked_seq_QMARK_(seq__28535_29243__$1)){
var c__5525__auto___29244 = cljs.core.chunk_first(seq__28535_29243__$1);
var G__29245 = cljs.core.chunk_rest(seq__28535_29243__$1);
var G__29246 = c__5525__auto___29244;
var G__29247 = cljs.core.count(c__5525__auto___29244);
var G__29248 = (0);
seq__28535_29233 = G__29245;
chunk__28536_29234 = G__29246;
count__28537_29235 = G__29247;
i__28538_29236 = G__29248;
continue;
} else {
var node_29249 = cljs.core.first(seq__28535_29243__$1);
fragment.appendChild(shadow.dom._to_dom(node_29249));


var G__29251 = cljs.core.next(seq__28535_29243__$1);
var G__29252 = null;
var G__29253 = (0);
var G__29254 = (0);
seq__28535_29233 = G__29251;
chunk__28536_29234 = G__29252;
count__28537_29235 = G__29253;
i__28538_29236 = G__29254;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28532){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28532));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28543_29258 = cljs.core.seq(scripts);
var chunk__28544_29259 = null;
var count__28545_29260 = (0);
var i__28546_29261 = (0);
while(true){
if((i__28546_29261 < count__28545_29260)){
var vec__28557_29262 = chunk__28544_29259.cljs$core$IIndexed$_nth$arity$2(null, i__28546_29261);
var script_tag_29263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557_29262,(0),null);
var script_body_29264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557_29262,(1),null);
eval(script_body_29264);


var G__29268 = seq__28543_29258;
var G__29269 = chunk__28544_29259;
var G__29270 = count__28545_29260;
var G__29271 = (i__28546_29261 + (1));
seq__28543_29258 = G__29268;
chunk__28544_29259 = G__29269;
count__28545_29260 = G__29270;
i__28546_29261 = G__29271;
continue;
} else {
var temp__5811__auto___29273 = cljs.core.seq(seq__28543_29258);
if(temp__5811__auto___29273){
var seq__28543_29274__$1 = temp__5811__auto___29273;
if(cljs.core.chunked_seq_QMARK_(seq__28543_29274__$1)){
var c__5525__auto___29275 = cljs.core.chunk_first(seq__28543_29274__$1);
var G__29276 = cljs.core.chunk_rest(seq__28543_29274__$1);
var G__29277 = c__5525__auto___29275;
var G__29278 = cljs.core.count(c__5525__auto___29275);
var G__29279 = (0);
seq__28543_29258 = G__29276;
chunk__28544_29259 = G__29277;
count__28545_29260 = G__29278;
i__28546_29261 = G__29279;
continue;
} else {
var vec__28563_29280 = cljs.core.first(seq__28543_29274__$1);
var script_tag_29281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28563_29280,(0),null);
var script_body_29282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28563_29280,(1),null);
eval(script_body_29282);


var G__29283 = cljs.core.next(seq__28543_29274__$1);
var G__29284 = null;
var G__29285 = (0);
var G__29286 = (0);
seq__28543_29258 = G__29283;
chunk__28544_29259 = G__29284;
count__28545_29260 = G__29285;
i__28546_29261 = G__29286;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28571){
var vec__28572 = p__28571;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28572,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28572,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28584 = arguments.length;
switch (G__28584) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28600 = cljs.core.seq(style_keys);
var chunk__28601 = null;
var count__28602 = (0);
var i__28603 = (0);
while(true){
if((i__28603 < count__28602)){
var it = chunk__28601.cljs$core$IIndexed$_nth$arity$2(null, i__28603);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29311 = seq__28600;
var G__29312 = chunk__28601;
var G__29313 = count__28602;
var G__29314 = (i__28603 + (1));
seq__28600 = G__29311;
chunk__28601 = G__29312;
count__28602 = G__29313;
i__28603 = G__29314;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__28600);
if(temp__5811__auto__){
var seq__28600__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28600__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28600__$1);
var G__29316 = cljs.core.chunk_rest(seq__28600__$1);
var G__29317 = c__5525__auto__;
var G__29318 = cljs.core.count(c__5525__auto__);
var G__29319 = (0);
seq__28600 = G__29316;
chunk__28601 = G__29317;
count__28602 = G__29318;
i__28603 = G__29319;
continue;
} else {
var it = cljs.core.first(seq__28600__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29321 = cljs.core.next(seq__28600__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__28600 = G__29321;
chunk__28601 = G__29322;
count__28602 = G__29323;
i__28603 = G__29324;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28615,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28639 = k28615;
var G__28639__$1 = (((G__28639 instanceof cljs.core.Keyword))?G__28639.fqn:null);
switch (G__28639__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28615,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28642){
var vec__28643 = p__28642;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28643,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28643,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28614){
var self__ = this;
var G__28614__$1 = this;
return (new cljs.core.RecordIter((0),G__28614__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28616,other28617){
var self__ = this;
var this28616__$1 = this;
return (((!((other28617 == null)))) && ((((this28616__$1.constructor === other28617.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28616__$1.x,other28617.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28616__$1.y,other28617.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28616__$1.__extmap,other28617.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28615){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28664 = k28615;
var G__28664__$1 = (((G__28664 instanceof cljs.core.Keyword))?G__28664.fqn:null);
switch (G__28664__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28615);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28614){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28666 = cljs.core.keyword_identical_QMARK_;
var expr__28667 = k__5309__auto__;
if(cljs.core.truth_((pred__28666.cljs$core$IFn$_invoke$arity$2 ? pred__28666.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28667) : pred__28666.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__28667)))){
return (new shadow.dom.Coordinate(G__28614,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28666.cljs$core$IFn$_invoke$arity$2 ? pred__28666.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28667) : pred__28666.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__28667)))){
return (new shadow.dom.Coordinate(self__.x,G__28614,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28614),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28614){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28614,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28631){
var extmap__5342__auto__ = (function (){var G__28684 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28631,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28631)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28684);
} else {
return G__28684;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28631),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28631),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28694,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28704 = k28694;
var G__28704__$1 = (((G__28704 instanceof cljs.core.Keyword))?G__28704.fqn:null);
switch (G__28704__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28694,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28706){
var vec__28707 = p__28706;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28707,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28707,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28693){
var self__ = this;
var G__28693__$1 = this;
return (new cljs.core.RecordIter((0),G__28693__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28695,other28696){
var self__ = this;
var this28695__$1 = this;
return (((!((other28696 == null)))) && ((((this28695__$1.constructor === other28696.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28695__$1.w,other28696.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28695__$1.h,other28696.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28695__$1.__extmap,other28696.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28694){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28735 = k28694;
var G__28735__$1 = (((G__28735 instanceof cljs.core.Keyword))?G__28735.fqn:null);
switch (G__28735__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28694);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28693){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28737 = cljs.core.keyword_identical_QMARK_;
var expr__28738 = k__5309__auto__;
if(cljs.core.truth_((pred__28737.cljs$core$IFn$_invoke$arity$2 ? pred__28737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28738) : pred__28737.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__28738)))){
return (new shadow.dom.Size(G__28693,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28737.cljs$core$IFn$_invoke$arity$2 ? pred__28737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28738) : pred__28737.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__28738)))){
return (new shadow.dom.Size(self__.w,G__28693,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28693),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28693){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28693,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28700){
var extmap__5342__auto__ = (function (){var G__28747 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28700,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28700)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28747);
} else {
return G__28747;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28700),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28700),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__29521 = (i + (1));
var G__29522 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29521;
ret = G__29522;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28770){
var vec__28771 = p__28770;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28771,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28778 = arguments.length;
switch (G__28778) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5809__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5809__auto__)){
var child = temp__5809__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29540 = ps;
var G__29541 = (i + (1));
el__$1 = G__29540;
i = G__29541;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28809 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28814_29552 = cljs.core.seq(props);
var chunk__28815_29553 = null;
var count__28816_29554 = (0);
var i__28817_29555 = (0);
while(true){
if((i__28817_29555 < count__28816_29554)){
var vec__28835_29583 = chunk__28815_29553.cljs$core$IIndexed$_nth$arity$2(null, i__28817_29555);
var k_29584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835_29583,(0),null);
var v_29585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835_29583,(1),null);
el.setAttributeNS((function (){var temp__5811__auto__ = cljs.core.namespace(k_29584);
if(cljs.core.truth_(temp__5811__auto__)){
var ns = temp__5811__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29584),v_29585);


var G__29589 = seq__28814_29552;
var G__29593 = chunk__28815_29553;
var G__29594 = count__28816_29554;
var G__29595 = (i__28817_29555 + (1));
seq__28814_29552 = G__29589;
chunk__28815_29553 = G__29593;
count__28816_29554 = G__29594;
i__28817_29555 = G__29595;
continue;
} else {
var temp__5811__auto___29605 = cljs.core.seq(seq__28814_29552);
if(temp__5811__auto___29605){
var seq__28814_29606__$1 = temp__5811__auto___29605;
if(cljs.core.chunked_seq_QMARK_(seq__28814_29606__$1)){
var c__5525__auto___29608 = cljs.core.chunk_first(seq__28814_29606__$1);
var G__29609 = cljs.core.chunk_rest(seq__28814_29606__$1);
var G__29610 = c__5525__auto___29608;
var G__29611 = cljs.core.count(c__5525__auto___29608);
var G__29612 = (0);
seq__28814_29552 = G__29609;
chunk__28815_29553 = G__29610;
count__28816_29554 = G__29611;
i__28817_29555 = G__29612;
continue;
} else {
var vec__28841_29613 = cljs.core.first(seq__28814_29606__$1);
var k_29614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841_29613,(0),null);
var v_29615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841_29613,(1),null);
el.setAttributeNS((function (){var temp__5811__auto____$1 = cljs.core.namespace(k_29614);
if(cljs.core.truth_(temp__5811__auto____$1)){
var ns = temp__5811__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29614),v_29615);


var G__29617 = cljs.core.next(seq__28814_29606__$1);
var G__29618 = null;
var G__29619 = (0);
var G__29620 = (0);
seq__28814_29552 = G__29617;
chunk__28815_29553 = G__29618;
count__28816_29554 = G__29619;
i__28817_29555 = G__29620;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__28848 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(1),null);
var seq__28853_29636 = cljs.core.seq(node_children);
var chunk__28855_29637 = null;
var count__28856_29638 = (0);
var i__28857_29639 = (0);
while(true){
if((i__28857_29639 < count__28856_29638)){
var child_struct_29640 = chunk__28855_29637.cljs$core$IIndexed$_nth$arity$2(null, i__28857_29639);
if((!((child_struct_29640 == null)))){
if(typeof child_struct_29640 === 'string'){
var text_29641 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29641),child_struct_29640].join(''));
} else {
var children_29642 = shadow.dom.svg_node(child_struct_29640);
if(cljs.core.seq_QMARK_(children_29642)){
var seq__28897_29644 = cljs.core.seq(children_29642);
var chunk__28899_29645 = null;
var count__28900_29646 = (0);
var i__28901_29647 = (0);
while(true){
if((i__28901_29647 < count__28900_29646)){
var child_29648 = chunk__28899_29645.cljs$core$IIndexed$_nth$arity$2(null, i__28901_29647);
if(cljs.core.truth_(child_29648)){
node.appendChild(child_29648);


var G__29649 = seq__28897_29644;
var G__29650 = chunk__28899_29645;
var G__29651 = count__28900_29646;
var G__29652 = (i__28901_29647 + (1));
seq__28897_29644 = G__29649;
chunk__28899_29645 = G__29650;
count__28900_29646 = G__29651;
i__28901_29647 = G__29652;
continue;
} else {
var G__29654 = seq__28897_29644;
var G__29655 = chunk__28899_29645;
var G__29656 = count__28900_29646;
var G__29657 = (i__28901_29647 + (1));
seq__28897_29644 = G__29654;
chunk__28899_29645 = G__29655;
count__28900_29646 = G__29656;
i__28901_29647 = G__29657;
continue;
}
} else {
var temp__5811__auto___29658 = cljs.core.seq(seq__28897_29644);
if(temp__5811__auto___29658){
var seq__28897_29660__$1 = temp__5811__auto___29658;
if(cljs.core.chunked_seq_QMARK_(seq__28897_29660__$1)){
var c__5525__auto___29661 = cljs.core.chunk_first(seq__28897_29660__$1);
var G__29662 = cljs.core.chunk_rest(seq__28897_29660__$1);
var G__29663 = c__5525__auto___29661;
var G__29664 = cljs.core.count(c__5525__auto___29661);
var G__29665 = (0);
seq__28897_29644 = G__29662;
chunk__28899_29645 = G__29663;
count__28900_29646 = G__29664;
i__28901_29647 = G__29665;
continue;
} else {
var child_29666 = cljs.core.first(seq__28897_29660__$1);
if(cljs.core.truth_(child_29666)){
node.appendChild(child_29666);


var G__29667 = cljs.core.next(seq__28897_29660__$1);
var G__29668 = null;
var G__29669 = (0);
var G__29670 = (0);
seq__28897_29644 = G__29667;
chunk__28899_29645 = G__29668;
count__28900_29646 = G__29669;
i__28901_29647 = G__29670;
continue;
} else {
var G__29672 = cljs.core.next(seq__28897_29660__$1);
var G__29673 = null;
var G__29674 = (0);
var G__29675 = (0);
seq__28897_29644 = G__29672;
chunk__28899_29645 = G__29673;
count__28900_29646 = G__29674;
i__28901_29647 = G__29675;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29642);
}
}


var G__29676 = seq__28853_29636;
var G__29677 = chunk__28855_29637;
var G__29678 = count__28856_29638;
var G__29679 = (i__28857_29639 + (1));
seq__28853_29636 = G__29676;
chunk__28855_29637 = G__29677;
count__28856_29638 = G__29678;
i__28857_29639 = G__29679;
continue;
} else {
var G__29680 = seq__28853_29636;
var G__29681 = chunk__28855_29637;
var G__29682 = count__28856_29638;
var G__29683 = (i__28857_29639 + (1));
seq__28853_29636 = G__29680;
chunk__28855_29637 = G__29681;
count__28856_29638 = G__29682;
i__28857_29639 = G__29683;
continue;
}
} else {
var temp__5811__auto___29684 = cljs.core.seq(seq__28853_29636);
if(temp__5811__auto___29684){
var seq__28853_29686__$1 = temp__5811__auto___29684;
if(cljs.core.chunked_seq_QMARK_(seq__28853_29686__$1)){
var c__5525__auto___29688 = cljs.core.chunk_first(seq__28853_29686__$1);
var G__29690 = cljs.core.chunk_rest(seq__28853_29686__$1);
var G__29691 = c__5525__auto___29688;
var G__29692 = cljs.core.count(c__5525__auto___29688);
var G__29693 = (0);
seq__28853_29636 = G__29690;
chunk__28855_29637 = G__29691;
count__28856_29638 = G__29692;
i__28857_29639 = G__29693;
continue;
} else {
var child_struct_29697 = cljs.core.first(seq__28853_29686__$1);
if((!((child_struct_29697 == null)))){
if(typeof child_struct_29697 === 'string'){
var text_29699 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29699),child_struct_29697].join(''));
} else {
var children_29700 = shadow.dom.svg_node(child_struct_29697);
if(cljs.core.seq_QMARK_(children_29700)){
var seq__28910_29701 = cljs.core.seq(children_29700);
var chunk__28912_29702 = null;
var count__28913_29703 = (0);
var i__28914_29704 = (0);
while(true){
if((i__28914_29704 < count__28913_29703)){
var child_29707 = chunk__28912_29702.cljs$core$IIndexed$_nth$arity$2(null, i__28914_29704);
if(cljs.core.truth_(child_29707)){
node.appendChild(child_29707);


var G__29708 = seq__28910_29701;
var G__29709 = chunk__28912_29702;
var G__29710 = count__28913_29703;
var G__29711 = (i__28914_29704 + (1));
seq__28910_29701 = G__29708;
chunk__28912_29702 = G__29709;
count__28913_29703 = G__29710;
i__28914_29704 = G__29711;
continue;
} else {
var G__29713 = seq__28910_29701;
var G__29714 = chunk__28912_29702;
var G__29715 = count__28913_29703;
var G__29716 = (i__28914_29704 + (1));
seq__28910_29701 = G__29713;
chunk__28912_29702 = G__29714;
count__28913_29703 = G__29715;
i__28914_29704 = G__29716;
continue;
}
} else {
var temp__5811__auto___29717__$1 = cljs.core.seq(seq__28910_29701);
if(temp__5811__auto___29717__$1){
var seq__28910_29718__$1 = temp__5811__auto___29717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28910_29718__$1)){
var c__5525__auto___29719 = cljs.core.chunk_first(seq__28910_29718__$1);
var G__29720 = cljs.core.chunk_rest(seq__28910_29718__$1);
var G__29721 = c__5525__auto___29719;
var G__29722 = cljs.core.count(c__5525__auto___29719);
var G__29723 = (0);
seq__28910_29701 = G__29720;
chunk__28912_29702 = G__29721;
count__28913_29703 = G__29722;
i__28914_29704 = G__29723;
continue;
} else {
var child_29724 = cljs.core.first(seq__28910_29718__$1);
if(cljs.core.truth_(child_29724)){
node.appendChild(child_29724);


var G__29725 = cljs.core.next(seq__28910_29718__$1);
var G__29726 = null;
var G__29727 = (0);
var G__29728 = (0);
seq__28910_29701 = G__29725;
chunk__28912_29702 = G__29726;
count__28913_29703 = G__29727;
i__28914_29704 = G__29728;
continue;
} else {
var G__29729 = cljs.core.next(seq__28910_29718__$1);
var G__29730 = null;
var G__29731 = (0);
var G__29732 = (0);
seq__28910_29701 = G__29729;
chunk__28912_29702 = G__29730;
count__28913_29703 = G__29731;
i__28914_29704 = G__29732;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29700);
}
}


var G__29733 = cljs.core.next(seq__28853_29686__$1);
var G__29734 = null;
var G__29735 = (0);
var G__29736 = (0);
seq__28853_29636 = G__29733;
chunk__28855_29637 = G__29734;
count__28856_29638 = G__29735;
i__28857_29639 = G__29736;
continue;
} else {
var G__29739 = cljs.core.next(seq__28853_29686__$1);
var G__29740 = null;
var G__29741 = (0);
var G__29742 = (0);
seq__28853_29636 = G__29739;
chunk__28855_29637 = G__29740;
count__28856_29638 = G__29741;
i__28857_29639 = G__29742;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29758 = arguments.length;
var i__5727__auto___29759 = (0);
while(true){
if((i__5727__auto___29759 < len__5726__auto___29758)){
args__5732__auto__.push((arguments[i__5727__auto___29759]));

var G__29760 = (i__5727__auto___29759 + (1));
i__5727__auto___29759 = G__29760;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq28937){
var G__28938 = cljs.core.first(seq28937);
var seq28937__$1 = cljs.core.next(seq28937);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28938,seq28937__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
