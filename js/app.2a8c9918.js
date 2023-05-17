(function(){"use strict";var e={4137:function(e,t,a){var r=a(9242),s=a(3396);function i(e,t,a,r,i,o){const d=(0,s.up)("dHeader"),c=(0,s.up)("dMain"),n=(0,s.up)("dFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(d,{onShareResultsData:o.updateResultsData,onShareSearchQuery:o.updateSearchQuery},null,8,["onShareResultsData","onShareSearchQuery"]),(0,s.Wm)(c,{resultsDataMain:i.resultsData,searchQueryMain:i.searchQuery},null,8,["resultsDataMain","searchQueryMain"]),(0,s.Wm)(n)],64)}var o=a.p+"img/d-logo.30813cc1.svg",d=a.p+"img/stack.8009793b.svg";const c=e=>((0,s.dD)("data-v-50b0fc94"),e=e(),(0,s.Cn)(),e),n=d+"#search-icon",l={class:"d-header"},u={class:"d-header__container"},h=c((()=>(0,s._)("h1",{class:"visually-hidden"},"Dramatic – Movie streaming platform",-1))),m=c((()=>(0,s._)("a",{class:"d-header__logo",href:"#"},[(0,s._)("img",{src:o,width:"180",height:"49",alt:"Dramatic logo."})],-1))),v={class:"d-header__search-form",action:"#",autocomplete:"off"},p=c((()=>(0,s._)("label",{class:"visually-hidden",for:"search-line"},"What you want to watch?",-1))),_=c((()=>(0,s._)("svg",{class:"d-header__search-button-icon",width:"21",height:"21",fill:"currentColor"},[(0,s._)("title",null,"Submit search query."),(0,s._)("use",{href:n})],-1))),g=[_];function f(e,t,a,i,o,d){return(0,s.wg)(),(0,s.iD)("header",l,[(0,s._)("div",u,[h,m,(0,s._)("form",v,[p,(0,s.wy)((0,s._)("input",{class:"d-header__search-line","onUpdate:modelValue":t[0]||(t[0]=e=>o.searchQuery=e),id:"#search-line",type:"search",placeholder:"Search"},null,512),[[r.nr,o.searchQuery]]),(0,s._)("button",{class:"d-header__search-button",onClick:t[1]||(t[1]=(...e)=>d.searchMovies&&d.searchMovies(...e)),type:"submit"},g)])])])}var w={name:"dHeader",components:{},props:{},data(){return{searchQuery:"",resultsData:{}}},computed:{},methods:{async searchMovies(){if(this.searchQuery){const t=`https://api.themoviedb.org/3/search/movie?query=${this.searchQuery}&include_adult=false&language=en-US&page=1`,a="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDNkZDMxMjNhZDA3ZTVlNTNiNjQ0NDVkYTgwYWRlMCIsInN1YiI6IjY0NjMzYWRmZGJiYjQyMDE3MGFhM2Q5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LHyQAdPEGj3bwKPx7bpmqyFi7CKrru1cinr28gel-ik",r={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${a}`}};try{const e=await fetch(t,r),a=await e.json();this.resultsData=a.results,this.$emit("shareResultsData",a.results),this.$emit("shareSearchQuery",this.searchQuery)}catch(e){console.log(e)}}}},watch:{}},y=a(89);const M=(0,y.Z)(w,[["render",f],["__scopeId","data-v-50b0fc94"]]);var b=M;const D={class:"d-main"};function I(e,t,a,r,i,o){const d=(0,s.up)("dResults"),c=(0,s.up)("dMovieCard");return(0,s.wg)(),(0,s.iD)("main",D,[i.showMovieCard?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(d,{key:0,resultsDataResults:a.resultsDataMain,searchQueryResults:a.searchQueryMain},null,8,["resultsDataResults","searchQueryResults"])),i.showMovieCard?((0,s.wg)(),(0,s.j4)(c,{key:1,onCloseMovieCard:o.escapeMovieCard},null,8,["onCloseMovieCard"])):(0,s.kq)("",!0)])}var C=a(7139);const R={class:"d-results"},S={class:"d-results__wrapper"},Q={class:"d-results__title"},j={key:0,class:"d-results__description"};function k(e,t,a,r,i,o){const d=(0,s.up)("dMoviesList");return(0,s.wg)(),(0,s.iD)("section",R,[(0,s._)("div",S,[(0,s._)("h2",Q,(0,C.zw)(i.title),1),e.$store.state.someResults?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",j,(0,C.zw)(i.description),1)),(0,s.Wm)(d,{resultsDataList:a.resultsDataResults},null,8,["resultsDataList"])])])}const T={class:"d-movies-list"};function $(e,t,a,r,i,o){const d=(0,s.up)("dMovieItem");return(0,s.wg)(),(0,s.iD)("ul",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.resultsDataList,(e=>((0,s.wg)(),(0,s.j4)(d,{key:e.id,movieData:e},null,8,["movieData"])))),128))])}const O=e=>((0,s.dD)("data-v-1c3f9528"),e=e(),(0,s.Cn)(),e),z={class:"d-movie-item"},Z=["href"],x=["src","alt"],P={class:"d-movie-item__title"},N={class:"d-movie-item__chars-list"},Y=O((()=>(0,s._)("dt",{class:"d-movie-item__chars-rating"},[(0,s._)("span",{class:"visually-hidden"},"IMDb rating.")],-1))),W={class:"d-movie-item__chars-rating-value"},H=O((()=>(0,s._)("dt",{class:"d-movie-item__chars-year visually-hidden"},"Year.",-1))),B={class:"d-movie-item__chars-year-value"};function G(e,t,a,i,o,d){return(0,s.wg)(),(0,s.iD)("li",z,[(0,s._)("a",{class:"d-movie-item__link",onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>d.shareSelectedMovieId&&d.shareSelectedMovieId(...e)),["prevent"])),href:`/movie-card/${a.movieData.id}`},[(0,s._)("img",{class:"d-movie-item__image",src:d.getPosterUrl(),width:"168",height:"237",alt:d.getPosterAltText()},null,8,x),(0,s._)("h3",P,(0,C.zw)(a.movieData.original_title),1),(0,s._)("dl",N,[Y,(0,s._)("dd",W,(0,C.zw)(d.fixRating()),1),H,(0,s._)("dd",B,(0,C.zw)(d.getYear()),1)])],8,Z)])}var J=a(65),L=(0,J.MT)({state:{selectedMovieId:0,someResults:!1},getters:{},mutations:{updateSelectedMovieId(e,t){this.state.selectedMovieId=t},updateSomeResults(e,t){this.state.someResults=t}},actions:{},modules:{}}),A={name:"dMovieItem",components:{},props:{movieData:{type:Object,default(){return{}}}},data(){return{movieCardSrc:"#",moviePosterSrc:"#",movieTitle:"Movie Title",emptyPosterSrc:`${a(4311)}`}},computed:{},methods:{shareSelectedMovieId(){L.commit("updateSelectedMovieId",this.movieData.id)},getPosterUrl(){return null!==this.movieData.poster_path?`https://image.tmdb.org/t/p/w500${this.movieData.poster_path}`:this.emptyPosterSrc},getPosterAltText(){return`Poster of ${this.movieData.original_title}.`},fixRating(){const e=this.movieData.vote_average;return Math.floor(e)===e?e:e.toFixed(1)},getYear(){const e=this.movieData.release_date;return""!==e?e.split("-")[0]:"🤷‍♂️"}},watch:{}};const F=(0,y.Z)(A,[["render",G],["__scopeId","data-v-1c3f9528"]]);var q=F,U={name:"dMoviesList",components:{dMovieItem:q},props:{resultsDataList:{type:Object,default(){return{}}}},data(){return{}},computed:{},methods:{},watch:{}};const E=(0,y.Z)(U,[["render",$],["__scopeId","data-v-85822812"]]);var V=E,K={name:"dResults",components:{dMoviesList:V},props:{resultsDataResults:{type:Object,default(){return{}}},searchQueryResults:{type:String,default(){return""}}},data(){return{title:"Here will be the results of your search",description:"Use the field above to search movies"}},computed:{},methods:{updateHeading(){L.commit("updateSomeResults",!0),this.title=`Here are the results for "${this.searchQueryResults}"`}},watch:{resultsDataResults(e){0!==e.length?this.updateHeading():(L.commit("updateSomeResults",!1),this.title=`There is no results for "${this.searchQueryResults}"`)}}};const X=(0,y.Z)(K,[["render",k],["__scopeId","data-v-3e4d75cb"]]);var ee=X;const te=e=>((0,s.dD)("data-v-2fedb32e"),e=e(),(0,s.Cn)(),e),ae={class:"d-movie-card__wrapper"},re={class:"d-movie-card__info-wrapper"},se={class:"d-movie-card__title"},ie={class:"d-movie-card__description"},oe={class:"d-movie-card__chars-list"},de=te((()=>(0,s._)("dt",{class:"d-movie-card__chars-genres"},"Genres",-1))),ce={class:"d-movie-card__chars-genres-value"},ne={class:"d-movie-card__rating-year-wrapper"},le=te((()=>(0,s._)("dt",{class:"d-movie-card__chars-rating"},[(0,s._)("span",{class:"visually-hidden"},"IMDb rating.")],-1))),ue={class:"d-movie-card__chars-rating-value"},he=te((()=>(0,s._)("dt",{class:"visually-hidden"},"Year.",-1))),me={class:"d-movie-card__chars-year-value"},ve={class:"d-movie-card__trailer-crew-wrapper"},pe=te((()=>(0,s._)("div",{class:"d-movie-card__trailer-wrapper"},[(0,s._)("h3",{class:"d-movie-card__trailer-heading"},"Trailer"),(0,s._)("a",{class:"d-movie-card__trailer-link",href:"{{ trailerSrc }}"},[(0,s._)("img",{class:"d-movie-card__trailer-image",src:"{{ trailerImageSrc }}",width:"307",height:"170",alt:"Trailer."})])],-1))),_e={class:"d-movie-card__crew-wrapper"},ge=te((()=>(0,s._)("h3",{class:"d-movie-card__crew-heading"},"Cast and crew info",-1))),fe={class:"d-movie-card__crew-list"};function we(e,t,a,i,o,d){const c=(0,s.up)("dMemberCard");return(0,s.wg)(),(0,s.iD)("article",{class:"d-movie-card",style:(0,C.j5)(o.posterSrc)},[(0,s._)("div",ae,[(0,s._)("a",{class:"d-movie-card__back-button",href:"/results/:searchQuery",onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>d.closeMovieCard&&d.closeMovieCard(...e)),["prevent"]))},"< Back to results"),(0,s._)("div",re,[(0,s._)("h2",se,(0,C.zw)(o.movieTitle),1),(0,s._)("p",ie,(0,C.zw)(o.description),1),(0,s._)("dl",oe,[de,(0,s._)("dd",ce,(0,C.zw)(o.genres),1),(0,s._)("div",ne,[le,(0,s._)("dd",ue,(0,C.zw)(o.ImdbRating),1),he,(0,s._)("dd",me,(0,C.zw)(o.year),1)])])]),(0,s._)("div",ve,[pe,(0,s._)("div",_e,[ge,(0,s._)("ul",fe,[(0,s.Wm)(c)])])])])],4)}const ye=e=>((0,s.dD)("data-v-23400fbf"),e=e(),(0,s.Cn)(),e),Me={class:"d-member-card"},be=ye((()=>(0,s._)("img",{class:"d-member-card__photo",src:"{{ memberPhotoSrc }}",width:"110",height:"145",alt:"Crew member photo."},null,-1))),De={class:"d-member-card__description"},Ie={class:"d-member-card__name"},Ce={class:"d-member-card__role"};function Re(e,t,a,r,i,o){return(0,s.wg)(),(0,s.iD)("li",Me,[be,(0,s._)("dl",De,[(0,s._)("dt",Ie,(0,C.zw)(i.memberName),1),(0,s._)("dd",Ce,(0,C.zw)(i.memberRole),1)])])}var Se={name:"dMemberCard",components:{},props:{},data(){return{memberPhotoSrc:"#",memberRole:"As ",memberName:"Member Name"}},computed:{},methods:{},watch:{}};const Qe=(0,y.Z)(Se,[["render",Re],["__scopeId","data-v-23400fbf"]]);var je=Qe,ke={name:"dMovieCard",components:{dMemberCard:je},props:{},data(){return{movieId:this.$store.state.selectedMovieId,resultsData:{},movieTitle:"Movie Title",posterSrc:{backgroundImage:`linear-gradient(\n          90deg,\n          #000000 25%,\n          rgba(0, 0, 0, 0.687449) 40%,\n          rgba(196, 196, 196, 0) 100%\n        ),\n        linear-gradient(\n          0deg, #000000 15%,\n          rgba(0, 0, 0, 0.687449) 30%,\n          rgba(255, 255, 255, 0) 40%\n        ),\n        url(${a(9534)})`},description:"Movie description very long and interesting. Best movie in the whole world. Best cast and crew. Movie description very long and interesting. Best movie in the whole world. Best cast and crew.",genres:"Genre1, genre2",ImdbRating:7.3,year:2015,trailerSrc:"#",trailerImageSrc:"#"}},computed:{update(){const e=this.$store.state.selectedMovieId;return this.searchMovieDetails(e)}},methods:{async searchMovieDetails(e){const t="6d3dd3123ad07e5e53b64445da80ade0",a=`https://api.themoviedb.org/3/movie/${e}?api_key=${t}`,r={method:"GET"};try{const e=await fetch(a,r),t=await e.json();this.resultsData=t.results}catch(s){console.log(s)}},closeMovieCard(){this.$emit("closeMovieCard")}},watch:{}};const Te=(0,y.Z)(ke,[["render",we],["__scopeId","data-v-2fedb32e"]]);var $e=Te,Oe={name:"dMain",components:{dResults:ee,dMovieCard:$e},props:{resultsDataMain:{type:Object,default(){return{}}},searchQueryMain:{type:String,default(){return""}}},data(){return{showMovieCard:!1}},computed:{},methods:{escapeMovieCard(){this.showMovieCard=!1}},watch:{"$store.state.selectedMovieId":function(){this.showMovieCard=!0,console.log(this.$store.state.selectedMovieId)}}};const ze=(0,y.Z)(Oe,[["render",I]]);var Ze=ze,xe=a.p+"img/tmdb-logo.72aae4fd.svg";const Pe=e=>((0,s.dD)("data-v-261341e8"),e=e(),(0,s.Cn)(),e),Ne={class:"d-footer"},Ye=Pe((()=>(0,s._)("div",{class:"d-footer__wrapper"},[(0,s._)("img",{class:"d-footer__api-logo",src:xe,width:"200",height:"14",alt:"The Movie Database logo."}),(0,s._)("p",{class:"d-footer__api-description"},"This product uses the TMDB API but is not endorsed or certified by TMDB."),(0,s._)("p",{class:"d-footer__copyright"},"© 2023 Dramatic. All Rights Reserved.")],-1))),We=[Ye];function He(e,t,a,r,i,o){return(0,s.wg)(),(0,s.iD)("footer",Ne,We)}var Be={name:"dFooter",components:{},props:{},data(){return{}},computed:{},methods:{},watch:{}};const Ge=(0,y.Z)(Be,[["render",He],["__scopeId","data-v-261341e8"]]);var Je=Ge,Le={name:"dramatic-app",components:{dHeader:b,dMain:Ze,dFooter:Je},data(){return{resultsData:{},searchQuery:""}},methods:{updateResultsData(e){this.resultsData=e},updateSearchQuery(e){this.searchQuery=e}}};const Ae=(0,y.Z)(Le,[["render",i]]);var Fe=Ae;(0,r.ri)(Fe).use(L).mount("#app")},4311:function(e,t,a){e.exports=a.p+"img/empty-poster.100752e9.jpg"},9534:function(e,t,a){e.exports=a.p+"img/poster.21c373e5.jpg"}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],i=e[l][2];for(var d=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(d=!1,i<o&&(o=i));if(d){e.splice(l--,1);var n=s();void 0!==n&&(t=n)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/dramatic/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,o=r[0],d=r[1],c=r[2],n=0;if(o.some((function(t){return 0!==e[t]}))){for(s in d)a.o(d,s)&&(a.m[s]=d[s]);if(c)var l=c(a)}for(t&&t(r);n<o.length;n++)i=o[n],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(l)},r=self["webpackChunkdramatic"]=self["webpackChunkdramatic"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(4137)}));r=a.O(r)})();
//# sourceMappingURL=app.2a8c9918.js.map