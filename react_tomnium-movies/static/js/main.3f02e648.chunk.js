(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,a){e.exports=a(80)},64:function(e,t,a){},66:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),l=a.n(c),o=a(16),i=a(19),s=a(46),u=a(47),m=function(e){return{type:"MOVIE_ID",data:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_RATING":return t.data;case"UPDATE_MOVIE_RATING":return e.concat(t.data);default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVE":return t.data;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_ID":return t.data;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_DETAILS":return t.data;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_VIDEO":return t.data;default:return e}},E=Object(i.combineReducers)({posts:p,search_move:h,move_single:v,move_details:d,move_video:f}),b=a(2),g=a.n(b),y=(a(64),a(11)),_=a(12),O=a(14),j=a(13),w=a(15),k=a(90),M=a(92),x=a(54),I=a(81),N=(a(65),a(66),a(91)),D=a(88),S=a(86),C=a(87),T=a(49),V=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(_.a)(t,[{key:"fetchSearchResult",value:function(){var e=this;return function(t){var a=e.searchInput.value;fetch("https://api.themoviedb.org/3/search/movie?api_key=273066d34680eff10763b530228eb3df&language=en-US&query="+a+"&page=1&include_adult=false").then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"SEARCH_MOVE",data:e}}(e))}).catch(function(e){console.log("\u041e\u0428\u0418\u0411\u041a\u0410 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 "+e)})}}},{key:"handleSearchMove",value:function(){this.props.dispatch(this.fetchSearchResult())}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{inline:!0},r.a.createElement(T.a,{type:"text",placeholder:"Search",className:"mr-sm-2",ref:function(t){e.searchInput=t}}),r.a.createElement(N.a,{to:"/search",className:"btn btn-info mx-0",onClick:this.handleSearchMove.bind(this)},"Search")))}}]),t}(n.Component),A=Object(o.b)(function(e){return e})(V),R=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement(D.a,{bg:"light",expand:"lg",className:"p-3"},r.a.createElement(N.a,{exact:!0,to:"/",className:"mr-2"},r.a.createElement("span",null,"Logo")),r.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(S.a,{className:"mr-auto"},r.a.createElement(N.a,{exact:!0,to:"/",className:"nav-link mr-2"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(N.a,{to:"/movie_rating",className:"nav-link mr-2"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433")),r.a.createElement(A,null))))}}]),t}(n.Component),G=Object(o.b)()(R),B=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"py-5"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"))}}]),t}(n.Component),F=a(82),L=a(89),P=a(50),U=a(83),W=(a(79),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).state={page:1},a}return Object(w.a)(t,e),Object(_.a)(t,[{key:"handleGetMovieID",value:function(e){this.props.dispatch(m(e))}},{key:"svgLoading",value:function(){return r.a.createElement("svg",{style:{width:"32px",height:"32px",margin:"0 0 0 1rem",fill:"#28a745"},version:"1.1",id:"loading",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 516.727 516.727"},r.a.createElement("g",null,r.a.createElement("path",{d:"M516.727,266.696c-0.665-34.825-8.221-69.54-22.175-101.283c-13.908-31.771-34.094-60.551-58.876-84.333\r c-24.767-23.8-54.139-42.615-85.929-55.027c-31.773-12.46-65.937-18.412-99.687-17.69c-33.755,0.668-67.36,8.007-98.091,21.539\r c-30.754,13.488-58.615,33.058-81.632,57.071c-23.033,24.001-41.229,52.452-53.222,83.229C5.077,200.962-0.66,234.013,0.06,266.696\r c0.67,32.688,7.793,65.182,20.903,94.899c13.067,29.738,32.019,56.681,55.266,78.931c23.234,22.268,50.766,39.846,80.528,51.417\r c29.749,11.616,61.69,17.136,93.303,16.419c31.62-0.671,63.001-7.58,91.707-20.268c28.724-12.646,54.747-30.979,76.231-53.461\r c21.503-22.469,38.461-49.08,49.611-77.827c6.79-17.427,11.396-35.624,13.824-54.062c0.649,0.037,1.302,0.063,1.96,0.063\r c18.409,0,33.333-14.923,33.333-33.333c0-0.936-0.049-1.861-0.124-2.777L516.727,266.696L516.727,266.696z M463.762,355.21\r c-12.226,27.71-29.94,52.812-51.655,73.532c-21.703,20.732-47.396,37.076-75.127,47.807c-27.724,10.77-57.443,15.859-86.919,15.146\r c-29.481-0.677-58.644-7.154-85.323-18.997c-26.692-11.806-50.877-28.901-70.83-49.849c-19.968-20.938-35.691-45.711-46.001-72.427\r c-10.349-26.712-15.223-55.321-14.512-83.728c0.678-28.413,6.941-56.465,18.361-82.131c11.384-25.677,27.863-48.943,48.045-68.13\r c20.172-19.202,44.026-34.307,69.726-44.195c25.697-9.928,53.195-14.587,80.534-13.877c27.343,0.68,54.286,6.728,78.939,17.726\r c24.662,10.963,47.008,26.824,65.429,46.241c18.436,19.405,32.922,42.341,42.391,67.025c9.504,24.684,13.948,51.072,13.241,77.342\r h0.125c-0.076,0.916-0.125,1.841-0.125,2.777c0,17.193,13.018,31.34,29.732,33.137C476.551,320.747,471.184,338.453,463.762,355.21\r z"})))}},{key:"fetchAllPosts",value:function(){return function(e){fetch("http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=273066d34680eff10763b530228eb3df&page=1&vote_count.gte=2").then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"MOVIE_RATING",data:e}}(t.results))}).catch(function(e){console.log("\u041e\u0428\u0418\u0411\u041a\u0410 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 "+e)})}}},{key:"fetchMoreMovie",value:function(){var e=this;return this.setState({page:this.state.page+=1}),function(t){var a="http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=273066d34680eff10763b530228eb3df&page="+e.state.page+"&vote_count.gte=2";fetch(a).then(function(e){return e.json()}).then(function(e){return t(function(e){return{type:"UPDATE_MOVIE_RATING",data:e}}(e.results))}).catch(function(e){console.log("\u041e\u0428\u0418\u0411\u041a\u0410 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 "+e)})}}},{key:"handleMoreMovie",value:function(){this.props.dispatch(this.fetchMoreMovie())}},{key:"componentDidMount",value:function(){this.props.dispatch(this.fetchAllPosts())}},{key:"render",value:function(){var e=this,t=this.props.posts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"py-5"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0424\u0438\u043b\u044c\u043c\u043e\u0432"),r.a.createElement(F.a,{className:"card-columns_col"},t?t.map(function(t){return r.a.createElement(L.a,{key:t.id},r.a.createElement(N.a,{exact:!0,to:"/movie/"+t.id,className:"nav-link m-0 p-0",onClick:e.handleGetMovieID.bind(e,t.id)},r.a.createElement(L.a.Img,{variant:"top",src:t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg"}),r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Title,null,t.title),r.a.createElement(L.a.Text,null,t.overview),r.a.createElement("small",null," ",r.a.createElement("b",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c: ",t.popularity)," "),r.a.createElement("p",null,r.a.createElement("b",null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:")," ",t.vote_average))))}):null),r.a.createElement(P.a,{xs:12,className:"my-5 d-flex justify-content-center"},r.a.createElement(U.a,{variant:"outline-success",onClick:this.handleMoreMovie.bind(this)},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435",this.svgLoading())))}}]),t}(n.Component)),q=Object(o.b)(function(e){return{posts:e.posts}})(W),z=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(_.a)(t,[{key:"handleGetMovieID",value:function(e){this.props.dispatch(m(e))}},{key:"render",value:function(){var e=this,t=this.props.search_move.results;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"py-5"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u041f\u043e\u0438\u0441\u043a\u0430"),r.a.createElement(F.a,{className:"card-columns_col"},t?t.map(function(t){return r.a.createElement(L.a,{key:t.id},r.a.createElement(N.a,{exact:!0,to:"/movie/"+t.id,className:"nav-link m-0 p-0",onClick:e.handleGetMovieID.bind(e,t.id)},r.a.createElement(L.a.Img,{variant:"top",src:t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg"}),r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Title,null,t.title),r.a.createElement(L.a.Text,null,t.overview),r.a.createElement("small",null," ",r.a.createElement("b",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c: ",t.popularity)," "),r.a.createElement("p",null,r.a.createElement("b",null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:")," ",t.vote_average))))}):null))}}]),t}(n.Component),H=Object(o.b)(function(e){return{posts:e.posts,search_move:e.search_move}})(z),J=a(84),X=a(85),$=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(_.a)(t,[{key:"fetchMovieDetails",value:function(){var e=this;return function(t){var a=e.props.move_single;fetch("https://api.themoviedb.org/3/movie/"+a+"?api_key=273066d34680eff10763b530228eb3df&language=en-US").then(function(e){return e.json()}).then(function(e){return t(function(e){return{type:"MOVIE_DETAILS",data:e}}(e))}).catch(function(e){console.log("\u041e\u0428\u0418\u0411\u041a\u0410 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 "+e)})}}},{key:"fetchMovieVideo",value:function(){var e=this;return function(t){var a=e.props.move_single;fetch("https://api.themoviedb.org/3/movie/"+a+"/videos?api_key=273066d34680eff10763b530228eb3df&language=en-US").then(function(e){return e.json()}).then(function(e){return t(function(e){return{type:"MOVIE_VIDEO",data:e}}(e))}).catch(function(e){console.log("\u041e\u0428\u0418\u0411\u041a\u0410 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 "+e)})}}},{key:"componentDidMount",value:function(){this.props.dispatch(this.fetchMovieDetails()),this.props.dispatch(this.fetchMovieVideo())}},{key:"render",value:function(){var e=this.props.move_details,t=this.props.move_video.results,a=this.props.move_details,n=a.genres,c=a.production_countries,l=a.production_companies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"py-5"},"\u0424\u0438\u043b\u044c\u043c"),r.a.createElement(J.a,null,r.a.createElement(P.a,{sm:!0,lg:"5"},r.a.createElement("h2",null,e.original_title),r.a.createElement(X.a,{style:{maxWidth:"100%"},src:e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg",rounded:!0})),r.a.createElement(P.a,{sm:!0,lg:"7",className:"pt-5"},r.a.createElement(L.a,null,r.a.createElement(L.a.Body,null,r.a.createElement("p",null,r.a.createElement("b",null,"\u0414\u0430\u0442\u0430 \u043f\u0440\u0435\u043c\u044c\u0435\u0440\u044b: ")," ",e.release_date),r.a.createElement("p",null,r.a.createElement("b",null,"\u0421\u0442\u0440\u0430\u043d\u0430: "),c?c.map(function(e){return e.name+" | "}):null),r.a.createElement("p",null,r.a.createElement("b",null,"\u0416\u0430\u043d\u0440: "),n?n.map(function(e){return e.name+" | "}):null),r.a.createElement("p",null,r.a.createElement("b",null,"\u0421\u0442\u0443\u0434\u0438\u044f: "),l?l.map(function(e){return e.name+" | "}):null),r.a.createElement(L.a.Subtitle,{className:"mb-2 text-muted"},r.a.createElement("b",null,"\u0421\u043b\u043e\u0433\u0430\u043d: "),e.tagline),r.a.createElement(L.a.Text,null,r.a.createElement("b",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),e.overview),r.a.createElement("small",null,r.a.createElement("b",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c:")," ",e.popularity),r.a.createElement("p",null,r.a.createElement("b",null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:")," ",e.vote_average),t?t.map(function(e){return r.a.createElement("div",{className:"video my-4",key:e.id},r.a.createElement("p",null,e.name),r.a.createElement("iframe",{width:"100%",height:"340",src:"https://www.youtube.com/embed/"+e.key,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}):null)))))}}]),t}(n.Component),K=Object(o.b)(function(e){return{posts:e.posts,move_single:e.move_single,move_details:e.move_details,move_video:e.move_video}})($),Q=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(G,null)),r.a.createElement("main",null,r.a.createElement(I.a,null,r.a.createElement(M.a,null,r.a.createElement(x.a,{exact:!0,path:"/",component:B}),r.a.createElement(x.a,{exact:!0,path:"/movie_rating",component:q}),r.a.createElement(x.a,{path:"/search",component:H}),r.a.createElement(x.a,{path:"/movie/:id",component:K}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=Object(i.createStore)(E,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a)));l.a.render(r.a.createElement(o.a,{store:Y},r.a.createElement(Q,null)),document.getElementById("root")),o.a.PropTypes={store:g.a.array.isRequired},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.3f02e648.chunk.js.map