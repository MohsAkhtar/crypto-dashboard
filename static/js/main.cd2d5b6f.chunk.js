(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(45)},30:function(e,t,n){},32:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),i=n.n(o),c=(n(30),n(5)),u=n(6),l=n(8),s=n(7),f=n(9),d=(n(32),n(1)),v=n(2);function m(){var e=Object(d.a)(["\n  padding: 40px;\n"]);return m=function(){return e},e}var p=v.b.div(m()),b=n(16),h=n(10),C=n(3),g=n.n(C),y=n(11),x=n(19),E=n(4),O=n.n(E);var j="background-color: ".concat("#061a44"),k="background-color: ".concat("#010e2c",";"),S=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),F="box-shadow: 0px 0px 4px 2px #5fff17";function A(){var e=Object(d.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return A=function(){return e},e}function w(){var e=Object(d.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return w=function(){return e},e}function D(){var e=Object(d.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return D=function(){return e},e}function B(){var e=Object(d.a)(["\n  ","\n  ","\n    padding: 10px;\n"]);return B=function(){return e},e}var I=v.b.div(B(),S,j),P=Object(v.b)(I)(D(),F),L=Object(v.b)(P)(w(),"box-shadow: 0px 0px 2px 2px #e41111"),H=Object(v.b)(I)(A());function V(){var e=Object(d.a)(["\n  justify-self: right;\n  display: none;\n  ",":hover & {\n    display: block;\n    color: red;\n  }\n"]);return V=function(){return e},e}function W(){var e=Object(d.a)(["\n  justify-self: right;\n"]);return W=function(){return e},e}function T(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return T=function(){return e},e}var N=v.b.div(T()),G=v.b.div(W()),z=v.b.div(V(),L),U=function(e){var t=e.name,n=e.symbol,r=e.topSection;return a.a.createElement(N,null,a.a.createElement("div",null," ",t," "),r?a.a.createElement(z,null," X "):a.a.createElement(G,null," ",n," "))},M=n(17),J=n.n(M),R=n(43),K=a.a.createContext(),$=10,X=10,Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).addCoin=function(e){var t=Object(x.a)(n.state.favourites);t.length<$&&(t.push(e),n.setState({favourites:t}))},n.removeCoin=function(e){var t=Object(x.a)(n.state.favourites);n.setState({favourites:O.a.pull(t,e)})},n.isInFavourites=function(e){return O.a.includes(n.state.favourites,e)},n.componentDidMount=function(){n.fetchCoins(),n.fetchPrices(),n.fetchHistorical()},n.fetchPrices=Object(y.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.prices();case 4:t=e.sent,n.setState({prices:t});case 6:case"end":return e.stop()}},e,this)})),n.fetchHistorical=Object(y.a)(g.a.mark(function e(){var t,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.historical();case 4:t=e.sent,r=[{name:n.state.currentFavourite,data:t.map(function(e,t){return[J()().subtract(Object(h.a)({},n.state.timeInterval,X-t)).valueOf(),e.USD]})}],n.setState({historical:r});case 7:case"end":return e.stop()}},e,this)})),n.historical=function(){for(var e=[],t=X;t>0;t--)e.push(R.priceHistorical(n.state.currentFavourite,["USD"],J()().subtract(Object(h.a)({},n.state.timeInterval,t)).toDate()));return Promise.all(e)},n.prices=Object(y.a)(g.a.mark(function e(){var t,r,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=0;case 2:if(!(r<n.state.favourites.length)){e.next=16;break}return e.prev=3,e.next=6,R.priceFull(n.state.favourites[r],"USD");case 6:a=e.sent,t.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch Price error: ",e.t0);case 13:r++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}},e,this,[[3,10]])})),n.fetchCoins=Object(y.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.coinList();case 2:t=e.sent.Data,n.setState({coinList:t});case 4:case"end":return e.stop()}},e,this)})),n.confirmFavourites=function(){var e=n.state.favourites[0];n.setState({firstVisit:!1,page:"dashboard",currentFavourite:e,prices:null,historical:null},function(){n.fetchPrices(),n.fetchHistorical()}),localStorage.setItem("cryptoDashboard",JSON.stringify({favourites:n.state.favourites,currentFavourite:e}))},n.setCurrentFavourite=function(e){n.setState({currentFavourite:e,historical:null},n.fetchHistorical),localStorage.setItem("cryptoDashboard",JSON.stringify(Object(b.a)({},JSON.parse(localStorage.getItem("cryptoDashboard")),{currentFavourite:e})))},n.setPage=function(e){return n.setState({page:e})},n.setFilteredCoins=function(e){return n.setState({filteredCoins:e})},n.changeChartSelect=function(e){console.log(e),n.setState({timeInterval:e,historical:null},n.fetchHistorical)},n.state=Object(b.a)({page:"dashboard",favourites:["BTC","ETH","XMR","DOGE"],timeInterval:"months"},n.savedSettings(),{setPage:n.setPage,addCoin:n.addCoin,removeCoin:n.removeCoin,isInFavourites:n.isInFavourites,setFilteredCoins:n.setFilteredCoins,setCurrentFavourite:n.setCurrentFavourite,confirmFavourites:n.confirmFavourites,changeChartSelect:n.changeChartSelect}),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"savedSettings",value:function(){var e=JSON.parse(localStorage.getItem("cryptoDashboard"));return e?{favourites:e.favourites,currentFavourite:e.currentFavourite}:{page:"settings",firstVisit:!0}}},{key:"render",value:function(){return a.a.createElement(K.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component);function q(){var e=Object(d.a)(["\n      display: none;\n    "]);return q=function(){return e},e}function Q(){var e=Object(d.a)(["\n      text-shadow: 0px 0px 60px #03ff03;\n    "]);return Q=function(){return e},e}function Z(){var e=Object(d.a)(["\n  cursor: pointer;\n  ","\n  ","\n"]);return Z=function(){return e},e}function _(){var e=Object(d.a)(["\n  display: grid;\n  margin-bottom: 40px;\n  grid-template-columns: 180px auto 100px 100px;\n"]);return _=function(){return e},e}function ee(){var e=Object(d.a)(["\n  font-size: 1.5em;\n"]);return ee=function(){return e},e}var te=v.b.div(ee()),ne=v.b.div(_()),re=v.b.div(Z(),function(e){return e.active&&Object(v.a)(Q())},function(e){return e.hidden&&Object(v.a)(q())});function ae(e){var t=e.name;e.active;return a.a.createElement(K.Consumer,null,function(e){var n,r=e.firstVisit,o=e.page,i=e.setPage;return a.a.createElement(re,{active:o===t,onClick:function(){return i(t)},hidden:r&&"dashboard"===t},(n=t).charAt(0).toUpperCase()+n.substr(1))})}var oe=function(){return a.a.createElement(ne,null,a.a.createElement(te,null," CryptoDashboard "),a.a.createElement("div",null),a.a.createElement(ae,{active:!0,name:"dashboard"}),a.a.createElement(ae,{name:"settings"}))},ie=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(K.Consumer,null,function(e){return e.firstVisit?a.a.createElement("div",null,a.a.createElement("h1",null,"Welcome, Please Select Your Favourite Coins to Begin. ")):null})}}]),t}(r.Component);function ce(){var e=Object(d.a)(["\n  display: grid;\n  justify-content: center;\n"]);return ce=function(){return e},e}function ue(){var e=Object(d.a)(["\n  margin: 20px;\n  color: ","\n  ","\n  padding: 5px;\n  cursor: pointer;\n\n  &:hover {\n      ","\n  }\n"]);return ue=function(){return e},e}var le=v.b.div(ue(),"#42ff3a","font-size: 1.5em;",F),se=v.b.div(ce()),fe=function(){return a.a.createElement(K.Consumer,null,function(e){var t=e.confirmFavourites;return a.a.createElement(se,null,a.a.createElement(le,{onClick:t},"Confirm Favourites"))})},de=function(e){var t=e.name,n=e.children;return a.a.createElement(K.Consumer,null,function(e){return e.page!==t?null:a.a.createElement("div",null," ",n)})};function ve(){var e=Object(d.a)(["\n      height: 200px;\n      margin: auto;\n      display: block;\n    "]);return ve=function(){return e},e}function me(){var e=Object(d.a)(["\n  height: 50px;\n\n  ","\n"]);return me=function(){return e},e}var pe=v.b.img(me(),function(e){return e.spotlight&&Object(v.a)(ve())}),be=function(e){var t=e.coin,n=e.spotlight;return a.a.createElement(pe,{spotlight:n,alt:t.CoinSymbol,src:"http://cryptocompare.com/".concat(t.ImageUrl)})};var he=function(e){var t=e.coinKey,n=e.topSection;return a.a.createElement(K.Consumer,null,function(e){var r=e.coinList,o=e.addCoin,i=e.removeCoin,c=e.isInFavourites,u=r[t],l=P;return n?l=L:c(t)&&(l=H),a.a.createElement(l,{onClick:function(e,t,n,r){return e?function(){r(t)}:function(){n(t)}}(n,t,o,i)},a.a.createElement(U,{topSection:n,name:u.CoinName,symbol:u.Symbol}),a.a.createElement(be,{coin:u}))})};function Ce(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return Ce=function(){return e},e}var ge=v.b.div(Ce());function ye(e,t,n,r){return t?n:function(e,t){return t&&Object.keys(t)||Object.keys(e).slice(0,100)}(e,r)}var xe=function(e){var t=e.topSection;return a.a.createElement(K.Consumer,null,function(e){var n=e.coinList,r=e.favourites,o=e.filteredCoins;return a.a.createElement(ge,null,ye(n,t,r,o).map(function(e){return a.a.createElement(he,{topSection:t,coinKey:e,key:e})}))})},Ee=n(23),Oe=n.n(Ee);function je(){var e=Object(d.a)(["\n  ","\n  ","\n  color: #1163c9;\n  border: 1px solid;\n  height: 25px;\n  place-self: center left;\n"]);return je=function(){return e},e}function ke(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n"]);return ke=function(){return e},e}var Se=v.b.div(ke()),Fe=v.b.input(je(),k,"font-size: 1.0em"),Ae=O.a.debounce(function(e,t,n){var r=Object.keys(t),a=r.map(function(e){return t[e].CoinName}),o=r.concat(a),i=Oe.a.filter(e,o,{}).map(function(e){return e.string});n(O.a.pickBy(t,function(e,t){var n=e.CoinName;return O.a.includes(i,t)||O.a.includes(i,n)}))},500);var we=function(){return a.a.createElement(K.Consumer,null,function(e){var t=e.setFilteredCoins,n=e.coinList;return a.a.createElement(Se,null,a.a.createElement("h2",null,"Search All Coins"),a.a.createElement(Fe,{onKeyUp:function(e){return function(e,t,n){var r=e.target.value;r?Ae(r,n,t):t(null)}(e,t,n)}}))})},De=function(){return a.a.createElement(de,{name:"settings"},a.a.createElement(ie,null),a.a.createElement(xe,{topSection:!0}),a.a.createElement(fe,null),a.a.createElement(we,null),a.a.createElement(xe,null))},Be=function(e){return a.a.createElement(K.Consumer,null,function(t){var n=t.coinList,r=t.prices,o=t.firstVisit;return n?o||r?a.a.createElement("div",null," ",e.children," "):a.a.createElement("div",null," Loading Prices "):a.a.createElement("div",null," Loading Coins ")})};function Ie(){var e=Object(d.a)(["\n      ","\n      pointer-events: none;\n    "]);return Ie=function(){return e},e}function Pe(){var e=Object(d.a)(["\n      display: grid;\n      ","\n      grid-gap: 5px;\n      grid-template-columns: repeat(3, 1fr);\n    "]);return Pe=function(){return e},e}function Le(){var e=Object(d.a)(["\n  ","\n\n  ","\n"]);return Le=function(){return e},e}function He(){var e=Object(d.a)(["\n      color: red;\n    "]);return He=function(){return e},e}function Ve(){var e=Object(d.a)(["\n  color: green;\n  ","\n"]);return Ve=function(){return e},e}function We(){var e=Object(d.a)(["\n  ",";\n"]);return We=function(){return e},e}function Te(){var e=Object(d.a)(["\n  justify-self: left;\n"]);return Te=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  justify-self: right;\n"]);return Ne=function(){return e},e}var Ge=v.b.div(Ne()),ze=v.b.div(Te()),Ue=v.b.div(We(),"font-size: 2em"),Me=v.b.div(Ve(),function(e){return e.red&&Object(v.a)(He())}),Je=function(e){return+(e+"").slice(0,7)};function Re(e){var t=e.data;return a.a.createElement(Ge,null,a.a.createElement(Me,{red:t.CHANGEPCT24HOUR<0},Je(t.CHANGEPCT24HOUR)," %"))}var Ke=Object(v.b)(P)(Le(),function(e){return e.compact&&Object(v.a)(Pe(),"font-size: .75em")},function(e){return e.currentFavourite&&Object(v.a)(Ie(),F)});function $e(e){var t=e.coinSymbol,n=e.data,r=e.currentFavourite,o=e.setCurrentFavourite;return a.a.createElement(Ke,{onClick:o,currentFavourite:r},a.a.createElement(N,null,a.a.createElement("div",null," ",t," "),a.a.createElement(Re,{data:n})),a.a.createElement(Ue,null,"$",Je(n.PRICE)))}function Xe(e){var t=e.coinSymbol,n=e.data,r=e.currentFavourite,o=e.setCurrentFavourite;return a.a.createElement(Ke,{onClick:o,compact:!0,currentFavourite:r},a.a.createElement(ze,null," ",t," "),a.a.createElement(Re,{data:n}),a.a.createElement(Ge,null,"$",Je(n.PRICE)))}var Ye=function(e){var t=e.price,n=e.index,r=Object.keys(t)[0],o=t[r].USD,i=n<5?$e:Xe;return a.a.createElement(K.Consumer,null,function(e){var t=e.currentFavourite,n=e.setCurrentFavourite;return a.a.createElement(i,{coinSymbol:r,data:o,currentFavourite:t===r,setCurrentFavourite:function(){return n(r)}})})};function qe(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return qe=function(){return e},e}var Qe=v.b.div(qe()),Ze=function(){return a.a.createElement(K.Consumer,null,function(e){var t=e.prices;return a.a.createElement(Qe,null,t.map(function(e,t){return a.a.createElement(Ye,{key:"priceTile-".concat(t),index:t,price:e})}))})};function _e(){var e=Object(d.a)(["\n  text-align: center;\n"]);return _e=function(){return e},e}var et=v.b.h2(_e()),tt=function(){return a.a.createElement(K.Consumer,null,function(e){var t=e.currentFavourite,n=e.coinList;return a.a.createElement(I,null,a.a.createElement(et,null," ",n[t].CoinName," "),a.a.createElement(be,{spotlight:!0,coin:n[t]}))})},nt=n(18),rt=n.n(nt);function at(){var e=Object(d.a)(["\n  ","\n  ","\n    color: #1163c9;\n  border: 1px solid;\n  margin: 5px;\n  height: 25px;\n  float: right;\n"]);return at=function(){return e},e}var ot=v.b.select(at(),k,"font-size: 1.0em");rt.a.Highcharts.setOptions({colors:["#61d936","#552ccb","#1163c9","#04a1ee","#08c6e0","#146b9e","#f376c1","#1b2839"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineWidth:0,gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",hoverSymbolStroke:"#FFFFFF",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"rgb(35, 35, 70)",dataLabelsColor:"#444",textColor:"#C0C0C0",maskColor:"rgba(255,255,255,0.3)"});var it=function(){return a.a.createElement(K.Consumer,null,function(e){var t=e.historical,n=e.changeChartSelect;return a.a.createElement(I,null,a.a.createElement(ot,{defaultValue:"months",onChange:function(e){return n(e.target.value)}},a.a.createElement("option",{value:"days"}," Days "),a.a.createElement("option",{value:"weeks"}," Weeks "),a.a.createElement("option",{value:"months"}," Months ")),t?a.a.createElement(rt.a,{config:function(e){return{title:{text:""},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}}(t)}):a.a.createElement("div",null," Loading Historical Data "))})};function ct(){var e=Object(d.a)(["\n  display: grid;\n  margin-top: 20px;\n  grid-gap: 15px;\n  grid-template-columns: 1fr 3fr;\n"]);return ct=function(){return e},e}var ut=v.b.div(ct()),lt=function(){return a.a.createElement(de,{name:"dashboard"},a.a.createElement(Ze,null),a.a.createElement(ut,null,a.a.createElement(tt,null),a.a.createElement(it,null)))},st=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(Y,null,a.a.createElement(oe,null),a.a.createElement(Be,null,a.a.createElement(De,null),a.a.createElement(lt,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.cd2d5b6f.chunk.js.map