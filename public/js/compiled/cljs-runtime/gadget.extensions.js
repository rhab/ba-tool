goog.provide('gadget.extensions');
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"jwt","jwt",1504015441)], null),(function (_,p__39125){
var map__39129 = p__39125;
var map__39129__$1 = cljs.core.__destructure_map(map__39129);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39129__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.PersistentArrayMap.EMPTY,"JWT: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","string","gadget/string",-192737950),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(raw,/\./))),"..."].join('')], 0))], null)], null);
}));
gadget.extensions.base64json = (function gadget$extensions$base64json(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(atob(s)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {gadget.browsable.Browsable}
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
gadget.extensions.JWT = (function (header,data,sig,__meta,__extmap,__hash){
this.header = header;
this.data = data;
this.sig = sig;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(gadget.extensions.JWT.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(gadget.extensions.JWT.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k39131,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__39138 = k39131;
var G__39138__$1 = (((G__39138 instanceof cljs.core.Keyword))?G__39138.fqn:null);
switch (G__39138__$1) {
case "header":
return self__.header;

break;
case "data":
return self__.data;

break;
case "sig":
return self__.sig;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39131,else__5303__auto__);

}
}));

(gadget.extensions.JWT.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__39139){
var vec__39140 = p__39139;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39140,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39140,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(gadget.extensions.JWT.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#gadget.extensions.JWT{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134),self__.header],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sig","sig",-1920417200),self__.sig],null))], null),self__.__extmap));
}));

(gadget.extensions.JWT.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39130){
var self__ = this;
var G__39130__$1 = this;
return (new cljs.core.RecordIter((0),G__39130__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"sig","sig",-1920417200)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(gadget.extensions.JWT.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(gadget.extensions.JWT.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new gadget.extensions.JWT(self__.header,self__.data,self__.sig,self__.__meta,self__.__extmap,self__.__hash));
}));

(gadget.extensions.JWT.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(gadget.extensions.JWT.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1492980269 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(gadget.extensions.JWT.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39132,other39133){
var self__ = this;
var this39132__$1 = this;
return (((!((other39133 == null)))) && ((((this39132__$1.constructor === other39133.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39132__$1.header,other39133.header)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39132__$1.data,other39133.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39132__$1.sig,other39133.sig)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39132__$1.__extmap,other39133.__extmap)))))))))));
}));

(gadget.extensions.JWT.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"sig","sig",-1920417200),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new gadget.extensions.JWT(self__.header,self__.data,self__.sig,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(gadget.extensions.JWT.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k39131){
var self__ = this;
var this__5307__auto____$1 = this;
var G__39143 = k39131;
var G__39143__$1 = (((G__39143 instanceof cljs.core.Keyword))?G__39143.fqn:null);
switch (G__39143__$1) {
case "header":
case "data":
case "sig":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39131);

}
}));

(gadget.extensions.JWT.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__39130){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__39144 = cljs.core.keyword_identical_QMARK_;
var expr__39145 = k__5309__auto__;
if(cljs.core.truth_((pred__39144.cljs$core$IFn$_invoke$arity$2 ? pred__39144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"header","header",119441134),expr__39145) : pred__39144.call(null, new cljs.core.Keyword(null,"header","header",119441134),expr__39145)))){
return (new gadget.extensions.JWT(G__39130,self__.data,self__.sig,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39144.cljs$core$IFn$_invoke$arity$2 ? pred__39144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__39145) : pred__39144.call(null, new cljs.core.Keyword(null,"data","data",-232669377),expr__39145)))){
return (new gadget.extensions.JWT(self__.header,G__39130,self__.sig,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39144.cljs$core$IFn$_invoke$arity$2 ? pred__39144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sig","sig",-1920417200),expr__39145) : pred__39144.call(null, new cljs.core.Keyword(null,"sig","sig",-1920417200),expr__39145)))){
return (new gadget.extensions.JWT(self__.header,self__.data,G__39130,self__.__meta,self__.__extmap,null));
} else {
return (new gadget.extensions.JWT(self__.header,self__.data,self__.sig,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__39130),null));
}
}
}
}));

(gadget.extensions.JWT.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"header","header",119441134),self__.header,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sig","sig",-1920417200),self__.sig,null))], null),self__.__extmap));
}));

(gadget.extensions.JWT.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__39130){
var self__ = this;
var this__5299__auto____$1 = this;
return (new gadget.extensions.JWT(self__.header,self__.data,self__.sig,G__39130,self__.__extmap,self__.__hash));
}));

(gadget.extensions.JWT.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(gadget.extensions.JWT.prototype.gadget$browsable$Browsable$ = cljs.core.PROTOCOL_SENTINEL);

(gadget.extensions.JWT.prototype.gadget$browsable$Browsable$entries$arity$1 = (function (jwt){
var self__ = this;
var jwt__$1 = this;
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(gadget.core.key_order(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"signature","signature",1463754794)], null)),jwt__$1);
}));

(gadget.extensions.JWT.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"sig","sig",-279885673,null)], null);
}));

(gadget.extensions.JWT.cljs$lang$type = true);

(gadget.extensions.JWT.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"gadget.extensions/JWT",null,(1),null));
}));

(gadget.extensions.JWT.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"gadget.extensions/JWT");
}));

/**
 * Positional factory function for gadget.extensions/JWT.
 */
gadget.extensions.__GT_JWT = (function gadget$extensions$__GT_JWT(header,data,sig){
return (new gadget.extensions.JWT(header,data,sig,null,null,null));
});

/**
 * Factory function for gadget.extensions/JWT, taking a map of keywords to field values.
 */
gadget.extensions.map__GT_JWT = (function gadget$extensions$map__GT_JWT(G__39134){
var extmap__5342__auto__ = (function (){var G__39150 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39134,new cljs.core.Keyword(null,"header","header",119441134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"sig","sig",-1920417200)], 0));
if(cljs.core.record_QMARK_(G__39134)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39150);
} else {
return G__39150;
}
})();
return (new gadget.extensions.JWT(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(G__39134),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__39134),new cljs.core.Keyword(null,"sig","sig",-1920417200).cljs$core$IFn$_invoke$arity$1(G__39134),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

gadget.extensions.parse_jwt = (function gadget$extensions$parse_jwt(token){
var vec__39154 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,/\./);
var header = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39154,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39154,(1),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39154,(2),null);
return (new gadget.extensions.JWT(gadget.extensions.base64json(header),gadget.extensions.base64json(data),sig,null,null,null));
});
gadget.datafy.datafy.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"jwt","jwt",1504015441),(function (token){
return gadget.extensions.parse_jwt(token);
}));
gadget.extensions.re_jwt = /^[A-Za-z0-9-_=]{4,}\.[A-Za-z0-9-_=]{4,}\.?[A-Za-z0-9-_.+\/=]*$/;
gadget.datafy.add_type_inference((function (v){
if(cljs.core.truth_((function (){var and__5000__auto__ = typeof v === 'string';
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.re_find(gadget.extensions.re_jwt,v);
if(cljs.core.truth_(and__5000__auto____$1)){
try{return gadget.extensions.parse_jwt(v);
}catch (e39157){var e = e39157;
return null;
}} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"jwt","jwt",1504015441);
} else {
return null;
}
}));
gadget.extensions.supports_intl_QMARK_ = (function (){var and__5000__auto__ = window.Intl;
if(cljs.core.truth_(and__5000__auto__)){
return window.Intl.DateTimeFormat;
} else {
return and__5000__auto__;
}
})();
gadget.extensions.date_key_order = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iso","iso",-1366207543),new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"timezone","timezone",1831928099),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {gadget.browsable.Browsable}
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
gadget.extensions.Instant = (function (timestamp,iso,locale_date_string,year,month,date,time,timezone,__meta,__extmap,__hash){
this.timestamp = timestamp;
this.iso = iso;
this.locale_date_string = locale_date_string;
this.year = year;
this.month = month;
this.date = date;
this.time = time;
this.timezone = timezone;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(gadget.extensions.Instant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(gadget.extensions.Instant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k39159,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__39163 = k39159;
var G__39163__$1 = (((G__39163 instanceof cljs.core.Keyword))?G__39163.fqn:null);
switch (G__39163__$1) {
case "timestamp":
return self__.timestamp;

break;
case "iso":
return self__.iso;

break;
case "locale-date-string":
return self__.locale_date_string;

break;
case "year":
return self__.year;

break;
case "month":
return self__.month;

break;
case "date":
return self__.date;

break;
case "time":
return self__.time;

break;
case "timezone":
return self__.timezone;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39159,else__5303__auto__);

}
}));

(gadget.extensions.Instant.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__39164){
var vec__39165 = p__39164;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39165,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39165,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(gadget.extensions.Instant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#gadget.extensions.Instant{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iso","iso",-1366207543),self__.iso],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),self__.locale_date_string],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393),self__.year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"month","month",-1960248533),self__.month],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timezone","timezone",1831928099),self__.timezone],null))], null),self__.__extmap));
}));

(gadget.extensions.Instant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39158){
var self__ = this;
var G__39158__$1 = this;
return (new cljs.core.RecordIter((0),G__39158__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"iso","iso",-1366207543),new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(gadget.extensions.Instant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(gadget.extensions.Instant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,self__.month,self__.date,self__.time,self__.timezone,self__.__meta,self__.__extmap,self__.__hash));
}));

(gadget.extensions.Instant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(gadget.extensions.Instant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1286383333 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(gadget.extensions.Instant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39160,other39161){
var self__ = this;
var this39160__$1 = this;
return (((!((other39161 == null)))) && ((((this39160__$1.constructor === other39161.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.timestamp,other39161.timestamp)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.iso,other39161.iso)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.locale_date_string,other39161.locale_date_string)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.year,other39161.year)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.month,other39161.month)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.date,other39161.date)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.time,other39161.time)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.timezone,other39161.timezone)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39160__$1.__extmap,other39161.__extmap)))))))))))))))))))));
}));

(gadget.extensions.Instant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"timezone","timezone",1831928099),null,new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),null,new cljs.core.Keyword(null,"iso","iso",-1366207543),null,new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"month","month",-1960248533),null,new cljs.core.Keyword(null,"year","year",335913393),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,self__.month,self__.date,self__.time,self__.timezone,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(gadget.extensions.Instant.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k39159){
var self__ = this;
var this__5307__auto____$1 = this;
var G__39168 = k39159;
var G__39168__$1 = (((G__39168 instanceof cljs.core.Keyword))?G__39168.fqn:null);
switch (G__39168__$1) {
case "timestamp":
case "iso":
case "locale-date-string":
case "year":
case "month":
case "date":
case "time":
case "timezone":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39159);

}
}));

(gadget.extensions.Instant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__39158){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__39169 = cljs.core.keyword_identical_QMARK_;
var expr__39170 = k__5309__auto__;
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"timestamp","timestamp",579478971),expr__39170)))){
return (new gadget.extensions.Instant(G__39158,self__.iso,self__.locale_date_string,self__.year,self__.month,self__.date,self__.time,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iso","iso",-1366207543),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"iso","iso",-1366207543),expr__39170)))){
return (new gadget.extensions.Instant(self__.timestamp,G__39158,self__.locale_date_string,self__.year,self__.month,self__.date,self__.time,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),expr__39170)))){
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,G__39158,self__.year,self__.month,self__.date,self__.time,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"year","year",335913393),expr__39170)))){
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,G__39158,self__.month,self__.date,self__.time,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"month","month",-1960248533),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"month","month",-1960248533),expr__39170)))){
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,G__39158,self__.date,self__.time,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"date","date",-1463434462),expr__39170)))){
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,self__.month,G__39158,self__.time,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"time","time",1385887882),expr__39170)))){
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,self__.month,self__.date,G__39158,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39169.cljs$core$IFn$_invoke$arity$2 ? pred__39169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timezone","timezone",1831928099),expr__39170) : pred__39169.call(null, new cljs.core.Keyword(null,"timezone","timezone",1831928099),expr__39170)))){
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,self__.month,self__.date,self__.time,G__39158,self__.__meta,self__.__extmap,null));
} else {
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,self__.month,self__.date,self__.time,self__.timezone,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__39158),null));
}
}
}
}
}
}
}
}
}));

(gadget.extensions.Instant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iso","iso",-1366207543),self__.iso,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),self__.locale_date_string,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"year","year",335913393),self__.year,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"month","month",-1960248533),self__.month,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"date","date",-1463434462),self__.date,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"time","time",1385887882),self__.time,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"timezone","timezone",1831928099),self__.timezone,null))], null),self__.__extmap));
}));

(gadget.extensions.Instant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__39158){
var self__ = this;
var this__5299__auto____$1 = this;
return (new gadget.extensions.Instant(self__.timestamp,self__.iso,self__.locale_date_string,self__.year,self__.month,self__.date,self__.time,self__.timezone,G__39158,self__.__extmap,self__.__hash));
}));

(gadget.extensions.Instant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(gadget.extensions.Instant.prototype.gadget$browsable$Browsable$ = cljs.core.PROTOCOL_SENTINEL);

(gadget.extensions.Instant.prototype.gadget$browsable$Browsable$entries$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(gadget.core.key_order(gadget.extensions.date_key_order),m__$1);
}));

(gadget.extensions.Instant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"iso","iso",274323984,null),new cljs.core.Symbol(null,"locale-date-string","locale-date-string",1012335696,null),new cljs.core.Symbol(null,"year","year",1976444920,null),new cljs.core.Symbol(null,"month","month",-319717006,null),new cljs.core.Symbol(null,"date","date",177097065,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"timezone","timezone",-822507670,null)], null);
}));

(gadget.extensions.Instant.cljs$lang$type = true);

(gadget.extensions.Instant.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"gadget.extensions/Instant",null,(1),null));
}));

(gadget.extensions.Instant.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"gadget.extensions/Instant");
}));

/**
 * Positional factory function for gadget.extensions/Instant.
 */
gadget.extensions.__GT_Instant = (function gadget$extensions$__GT_Instant(timestamp,iso,locale_date_string,year,month,date,time,timezone){
return (new gadget.extensions.Instant(timestamp,iso,locale_date_string,year,month,date,time,timezone,null,null,null));
});

/**
 * Factory function for gadget.extensions/Instant, taking a map of keywords to field values.
 */
gadget.extensions.map__GT_Instant = (function gadget$extensions$map__GT_Instant(G__39162){
var extmap__5342__auto__ = (function (){var G__39172 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39162,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"iso","iso",-1366207543),new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], 0));
if(cljs.core.record_QMARK_(G__39162)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39172);
} else {
return G__39172;
}
})();
return (new gadget.extensions.Instant(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(G__39162),new cljs.core.Keyword(null,"iso","iso",-1366207543).cljs$core$IFn$_invoke$arity$1(G__39162),new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831).cljs$core$IFn$_invoke$arity$1(G__39162),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(G__39162),new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(G__39162),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(G__39162),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(G__39162),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(G__39162),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

gadget.datafy.datafy.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"date","date",-1463434462),(function (date){
var G__39173 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),date.getTime(),new cljs.core.Keyword(null,"iso","iso",-1366207543),date.toISOString(),new cljs.core.Keyword(null,"locale-date-string","locale-date-string",-628195831),date.toLocaleDateString("en-US",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"long",new cljs.core.Keyword(null,"year","year",335913393),"numeric",new cljs.core.Keyword(null,"month","month",-1960248533),"long",new cljs.core.Keyword(null,"day","day",-274800446),"numeric"], null))),new cljs.core.Keyword(null,"year","year",335913393),((1900) + date.getYear()),new cljs.core.Keyword(null,"month","month",-1960248533),(date.getMonth() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462),date.getDate(),new cljs.core.Keyword(null,"time","time",1385887882),[gadget.std.pad(date.getHours()),":",gadget.std.pad(date.getMinutes()),":",gadget.std.pad(date.getSeconds())].join('')], null);
var G__39173__$1 = (cljs.core.truth_(gadget.extensions.supports_intl_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39173,new cljs.core.Keyword(null,"timezone","timezone",1831928099),Intl.DateTimeFormat().resolvedOptions().timeZone):G__39173);
return gadget.extensions.map__GT_Instant(G__39173__$1);

}));
gadget.datafy.datafy.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"object","object",1474613949),(function (obj){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),Object.keys(obj)));
}));

//# sourceMappingURL=gadget.extensions.js.map
