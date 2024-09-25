goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35176){
var map__35181 = p__35176;
var map__35181__$1 = cljs.core.__destructure_map(map__35181);
var m = map__35181__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35181__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5811__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5811__auto__)){
var ns = temp__5811__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35186_35583 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35187_35584 = null;
var count__35188_35585 = (0);
var i__35189_35586 = (0);
while(true){
if((i__35189_35586 < count__35188_35585)){
var f_35587 = chunk__35187_35584.cljs$core$IIndexed$_nth$arity$2(null, i__35189_35586);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35587], 0));


var G__35588 = seq__35186_35583;
var G__35589 = chunk__35187_35584;
var G__35590 = count__35188_35585;
var G__35591 = (i__35189_35586 + (1));
seq__35186_35583 = G__35588;
chunk__35187_35584 = G__35589;
count__35188_35585 = G__35590;
i__35189_35586 = G__35591;
continue;
} else {
var temp__5811__auto___35593 = cljs.core.seq(seq__35186_35583);
if(temp__5811__auto___35593){
var seq__35186_35594__$1 = temp__5811__auto___35593;
if(cljs.core.chunked_seq_QMARK_(seq__35186_35594__$1)){
var c__5525__auto___35596 = cljs.core.chunk_first(seq__35186_35594__$1);
var G__35597 = cljs.core.chunk_rest(seq__35186_35594__$1);
var G__35598 = c__5525__auto___35596;
var G__35599 = cljs.core.count(c__5525__auto___35596);
var G__35600 = (0);
seq__35186_35583 = G__35597;
chunk__35187_35584 = G__35598;
count__35188_35585 = G__35599;
i__35189_35586 = G__35600;
continue;
} else {
var f_35602 = cljs.core.first(seq__35186_35594__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35602], 0));


var G__35604 = cljs.core.next(seq__35186_35594__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__35186_35583 = G__35604;
chunk__35187_35584 = G__35605;
count__35188_35585 = G__35606;
i__35189_35586 = G__35607;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35608 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35608], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35608)))?cljs.core.second(arglists_35608):arglists_35608)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35225_35612 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35226_35613 = null;
var count__35227_35614 = (0);
var i__35228_35615 = (0);
while(true){
if((i__35228_35615 < count__35227_35614)){
var vec__35259_35616 = chunk__35226_35613.cljs$core$IIndexed$_nth$arity$2(null, i__35228_35615);
var name_35617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259_35616,(0),null);
var map__35262_35618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259_35616,(1),null);
var map__35262_35619__$1 = cljs.core.__destructure_map(map__35262_35618);
var doc_35620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35262_35619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35262_35619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35617], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35621], 0));

if(cljs.core.truth_(doc_35620)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35620], 0));
} else {
}


var G__35625 = seq__35225_35612;
var G__35626 = chunk__35226_35613;
var G__35627 = count__35227_35614;
var G__35628 = (i__35228_35615 + (1));
seq__35225_35612 = G__35625;
chunk__35226_35613 = G__35626;
count__35227_35614 = G__35627;
i__35228_35615 = G__35628;
continue;
} else {
var temp__5811__auto___35629 = cljs.core.seq(seq__35225_35612);
if(temp__5811__auto___35629){
var seq__35225_35630__$1 = temp__5811__auto___35629;
if(cljs.core.chunked_seq_QMARK_(seq__35225_35630__$1)){
var c__5525__auto___35631 = cljs.core.chunk_first(seq__35225_35630__$1);
var G__35632 = cljs.core.chunk_rest(seq__35225_35630__$1);
var G__35633 = c__5525__auto___35631;
var G__35634 = cljs.core.count(c__5525__auto___35631);
var G__35635 = (0);
seq__35225_35612 = G__35632;
chunk__35226_35613 = G__35633;
count__35227_35614 = G__35634;
i__35228_35615 = G__35635;
continue;
} else {
var vec__35268_35636 = cljs.core.first(seq__35225_35630__$1);
var name_35637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35268_35636,(0),null);
var map__35271_35638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35268_35636,(1),null);
var map__35271_35639__$1 = cljs.core.__destructure_map(map__35271_35638);
var doc_35640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35271_35639__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35271_35639__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35637], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35641], 0));

if(cljs.core.truth_(doc_35640)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35640], 0));
} else {
}


var G__35643 = cljs.core.next(seq__35225_35630__$1);
var G__35644 = null;
var G__35645 = (0);
var G__35646 = (0);
seq__35225_35612 = G__35643;
chunk__35226_35613 = G__35644;
count__35227_35614 = G__35645;
i__35228_35615 = G__35646;
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
var temp__5811__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5811__auto__)){
var fnspec = temp__5811__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35273 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35274 = null;
var count__35275 = (0);
var i__35276 = (0);
while(true){
if((i__35276 < count__35275)){
var role = chunk__35274.cljs$core$IIndexed$_nth$arity$2(null, i__35276);
var temp__5811__auto___35659__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5811__auto___35659__$1)){
var spec_35660 = temp__5811__auto___35659__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35660)], 0));
} else {
}


var G__35665 = seq__35273;
var G__35666 = chunk__35274;
var G__35667 = count__35275;
var G__35668 = (i__35276 + (1));
seq__35273 = G__35665;
chunk__35274 = G__35666;
count__35275 = G__35667;
i__35276 = G__35668;
continue;
} else {
var temp__5811__auto____$1 = cljs.core.seq(seq__35273);
if(temp__5811__auto____$1){
var seq__35273__$1 = temp__5811__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35273__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35273__$1);
var G__35669 = cljs.core.chunk_rest(seq__35273__$1);
var G__35670 = c__5525__auto__;
var G__35671 = cljs.core.count(c__5525__auto__);
var G__35672 = (0);
seq__35273 = G__35669;
chunk__35274 = G__35670;
count__35275 = G__35671;
i__35276 = G__35672;
continue;
} else {
var role = cljs.core.first(seq__35273__$1);
var temp__5811__auto___35675__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5811__auto___35675__$2)){
var spec_35676 = temp__5811__auto___35675__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35676)], 0));
} else {
}


var G__35677 = cljs.core.next(seq__35273__$1);
var G__35678 = null;
var G__35679 = (0);
var G__35680 = (0);
seq__35273 = G__35677;
chunk__35274 = G__35678;
count__35275 = G__35679;
i__35276 = G__35680;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35326 = datafied_throwable;
var map__35326__$1 = cljs.core.__destructure_map(map__35326);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35326__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35326__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35326__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35328 = cljs.core.last(via);
var map__35328__$1 = cljs.core.__destructure_map(map__35328);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35329 = data;
var map__35329__$1 = cljs.core.__destructure_map(map__35329);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35330 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35330__$1 = cljs.core.__destructure_map(map__35330);
var top_data = map__35330__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35330__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35346 = phase;
var G__35346__$1 = (((G__35346 instanceof cljs.core.Keyword))?G__35346.fqn:null);
switch (G__35346__$1) {
case "read-source":
var map__35353 = data;
var map__35353__$1 = cljs.core.__destructure_map(map__35353);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35360 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35360__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35360,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35360);
var G__35360__$2 = (cljs.core.truth_((function (){var fexpr__35364 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35364.cljs$core$IFn$_invoke$arity$1 ? fexpr__35364.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35364.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35360__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35360__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35360__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35360__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35374 = top_data;
var G__35374__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35374);
var G__35374__$2 = (cljs.core.truth_((function (){var fexpr__35387 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35387.cljs$core$IFn$_invoke$arity$1 ? fexpr__35387.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35387.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35374__$1);
var G__35374__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35374__$2);
var G__35374__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35374__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35374__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35401 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(3),null);
var G__35413 = top_data;
var G__35413__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35413,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35413);
var G__35413__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35413__$1);
var G__35413__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35413__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35413__$2);
var G__35413__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35413__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35413__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35413__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35413__$4;
}

break;
case "execution":
var vec__35431 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35431,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35431,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35431,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35431,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35312_SHARP_){
var or__5002__auto__ = (p1__35312_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__35439 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35439.cljs$core$IFn$_invoke$arity$1 ? fexpr__35439.cljs$core$IFn$_invoke$arity$1(p1__35312_SHARP_) : fexpr__35439.call(null, p1__35312_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__35445 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35445__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35445,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35445);
var G__35445__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35445__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35445__$1);
var G__35445__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35445__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35445__$2);
var G__35445__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35445__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35445__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35445__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35445__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35346__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35483){
var map__35486 = p__35483;
var map__35486__$1 = cljs.core.__destructure_map(map__35486);
var triage_data = map__35486__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35486__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35499 = phase;
var G__35499__$1 = (((G__35499 instanceof cljs.core.Keyword))?G__35499.fqn:null);
switch (G__35499__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35501 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35502 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35503 = loc;
var G__35504 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35507_35741 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35508_35742 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35509_35743 = true;
var _STAR_print_fn_STAR__temp_val__35510_35744 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35509_35743);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35510_35744);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35472_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35472_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35508_35742);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35507_35741);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35501,G__35502,G__35503,G__35504) : format.call(null, G__35501,G__35502,G__35503,G__35504));

break;
case "macroexpansion":
var G__35517 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35518 = cause_type;
var G__35519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35520 = loc;
var G__35521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35517,G__35518,G__35519,G__35520,G__35521) : format.call(null, G__35517,G__35518,G__35519,G__35520,G__35521));

break;
case "compile-syntax-check":
var G__35523 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35524 = cause_type;
var G__35525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35526 = loc;
var G__35527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35523,G__35524,G__35525,G__35526,G__35527) : format.call(null, G__35523,G__35524,G__35525,G__35526,G__35527));

break;
case "compilation":
var G__35529 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35530 = cause_type;
var G__35531 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35532 = loc;
var G__35533 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35529,G__35530,G__35531,G__35532,G__35533) : format.call(null, G__35529,G__35530,G__35531,G__35532,G__35533));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35536 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35537 = symbol;
var G__35538 = loc;
var G__35539 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35546_35747 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35547_35749 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35548_35750 = true;
var _STAR_print_fn_STAR__temp_val__35549_35751 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35548_35750);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35549_35751);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35479_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35547_35749);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35546_35747);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35536,G__35537,G__35538,G__35539) : format.call(null, G__35536,G__35537,G__35538,G__35539));
} else {
var G__35557 = "Execution error%s at %s(%s).\n%s\n";
var G__35558 = cause_type;
var G__35559 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35560 = loc;
var G__35561 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35557,G__35558,G__35559,G__35560,G__35561) : format.call(null, G__35557,G__35558,G__35559,G__35560,G__35561));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35499__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
