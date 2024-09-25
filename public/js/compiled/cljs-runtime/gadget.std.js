goog.provide('gadget.std');
gadget.std.debounce = (function gadget$std$debounce(f,ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__31270__auto___37305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_37248){
var state_val_37249 = (state_37248[(1)]);
if((state_val_37249 === (7))){
var inst_37215 = (state_37248[(7)]);
var inst_37234 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37215);
var state_37248__$1 = (function (){var statearr_37252 = state_37248;
(statearr_37252[(8)] = inst_37234);

return statearr_37252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37248__$1,(9),c);
} else {
if((state_val_37249 === (1))){
var state_37248__$1 = state_37248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37248__$1,(2),c);
} else {
if((state_val_37249 === (4))){
var inst_37246 = (state_37248[(2)]);
var state_37248__$1 = state_37248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37248__$1,inst_37246);
} else {
if((state_val_37249 === (6))){
var inst_37226 = (state_37248[(9)]);
var inst_37215 = inst_37226;
var state_37248__$1 = (function (){var statearr_37268 = state_37248;
(statearr_37268[(7)] = inst_37215);

return statearr_37268;
})();
var statearr_37269_37306 = state_37248__$1;
(statearr_37269_37306[(2)] = null);

(statearr_37269_37306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37249 === (3))){
var inst_37220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37221 = cljs.core.async.timeout(ms);
var inst_37222 = [c,inst_37221];
var inst_37223 = (new cljs.core.PersistentVector(null,2,(5),inst_37220,inst_37222,null));
var state_37248__$1 = state_37248;
return cljs.core.async.ioc_alts_BANG_(state_37248__$1,(5),inst_37223);
} else {
if((state_val_37249 === (2))){
var inst_37214 = (state_37248[(2)]);
var inst_37215 = inst_37214;
var state_37248__$1 = (function (){var statearr_37275 = state_37248;
(statearr_37275[(7)] = inst_37215);

return statearr_37275;
})();
var statearr_37277_37307 = state_37248__$1;
(statearr_37277_37307[(2)] = null);

(statearr_37277_37307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37249 === (9))){
var inst_37240 = (state_37248[(2)]);
var inst_37215 = inst_37240;
var state_37248__$1 = (function (){var statearr_37278 = state_37248;
(statearr_37278[(7)] = inst_37215);

return statearr_37278;
})();
var statearr_37279_37309 = state_37248__$1;
(statearr_37279_37309[(2)] = null);

(statearr_37279_37309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37249 === (5))){
var inst_37225 = (state_37248[(2)]);
var inst_37226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37225,(0),null);
var inst_37227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37225,(1),null);
var inst_37228 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37227,c);
var state_37248__$1 = (function (){var statearr_37280 = state_37248;
(statearr_37280[(9)] = inst_37226);

return statearr_37280;
})();
if(inst_37228){
var statearr_37281_37311 = state_37248__$1;
(statearr_37281_37311[(1)] = (6));

} else {
var statearr_37282_37312 = state_37248__$1;
(statearr_37282_37312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37249 === (8))){
var inst_37244 = (state_37248[(2)]);
var state_37248__$1 = state_37248;
var statearr_37283_37313 = state_37248__$1;
(statearr_37283_37313[(2)] = inst_37244);

(statearr_37283_37313[(1)] = (4));


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
});
return (function() {
var gadget$std$debounce_$_state_machine__30343__auto__ = null;
var gadget$std$debounce_$_state_machine__30343__auto____0 = (function (){
var statearr_37284 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37284[(0)] = gadget$std$debounce_$_state_machine__30343__auto__);

(statearr_37284[(1)] = (1));

return statearr_37284;
});
var gadget$std$debounce_$_state_machine__30343__auto____1 = (function (state_37248){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_37248);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e37286){var ex__30346__auto__ = e37286;
var statearr_37287_37315 = state_37248;
(statearr_37287_37315[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_37248[(4)]))){
var statearr_37288_37316 = state_37248;
(statearr_37288_37316[(1)] = cljs.core.first((state_37248[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37317 = state_37248;
state_37248 = G__37317;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
gadget$std$debounce_$_state_machine__30343__auto__ = function(state_37248){
switch(arguments.length){
case 0:
return gadget$std$debounce_$_state_machine__30343__auto____0.call(this);
case 1:
return gadget$std$debounce_$_state_machine__30343__auto____1.call(this,state_37248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadget$std$debounce_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = gadget$std$debounce_$_state_machine__30343__auto____0;
gadget$std$debounce_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = gadget$std$debounce_$_state_machine__30343__auto____1;
return gadget$std$debounce_$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_37296 = f__31271__auto__();
(statearr_37296[(6)] = c__31270__auto___37305);

return statearr_37296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return (function() { 
var G__37318__delegate = function (args){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var or__5002__auto__ = args;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
};
var G__37318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37319__i = 0, G__37319__a = new Array(arguments.length -  0);
while (G__37319__i < G__37319__a.length) {G__37319__a[G__37319__i] = arguments[G__37319__i + 0]; ++G__37319__i;}
  args = new cljs.core.IndexedSeq(G__37319__a,0,null);
} 
return G__37318__delegate.call(this,args);};
G__37318.cljs$lang$maxFixedArity = 0;
G__37318.cljs$lang$applyTo = (function (arglist__37320){
var args = cljs.core.seq(arglist__37320);
return G__37318__delegate(args);
});
G__37318.cljs$core$IFn$_invoke$arity$variadic = G__37318__delegate;
return G__37318;
})()
;
});
gadget.std.date_QMARK_ = (function gadget$std$date_QMARK_(v){
return (v instanceof Date);
});
gadget.std.state_data = (function gadget$std$state_data(state,label){
var map__37302 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),label], null));
var map__37302__$1 = cljs.core.__destructure_map(map__37302);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37302__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37302__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(ref)){
return cljs.core.deref(ref);
} else {
return data;
}
});
gadget.std.pad = (function gadget$std$pad(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});

//# sourceMappingURL=gadget.std.js.map
