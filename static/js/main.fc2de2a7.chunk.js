(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),o=n.n(s),l=n(1),c=n(2),i=n(4),u=n(3),p=(n(13),n(7)),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isReversed:!1,sortBy:"",length:1},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByLength=function(){e.setState({sortBy:"length"})},e.sortByAlphabet=function(){e.setState({sortBy:"alphabet"})},e.reset=function(){e.setState({isReversed:!1,sortBy:"",length:1})},e.selectChange=function(t){e.setState({length:t})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isReversed,a=t.sortBy,s=t.length,o=Array(10).fill(0).map((function(e,t){return t+1})),l=Object(p.a)(this.props.goods).filter((function(e){return e.length>=s}));return l.sort((function(e,t){switch(a){case"length":return e.length-t.length;case"alphabet":return e.localeCompare(t);default:return 0}})),n&&l.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("div",{className:"App__buttons"},r.a.createElement("button",{type:"button",className:"App__reverse-button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",className:"App__sortAlpha-button",onClick:this.sortByAlphabet},"Sort alphabetically"),r.a.createElement("button",{type:"button",className:"App__sortLength-button",onClick:this.sortByLength},"Sort by length"),r.a.createElement("button",{type:"button",className:"App__reset-button",onClick:this.reset},"Reset"),r.a.createElement("select",{onChange:function(t){e.selectChange(t.target.value)},value:s},o.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))}}]),n}(r.a.Component),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e.start=function(){e.setState({isVisible:!0})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.isVisible;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App__title"},"Goods"),!e&&r.a.createElement("button",{type:"button",className:"App__button-open",onClick:this.start},"Start"),e&&r.a.createElement(h,{goods:b}))}}]),n}(r.a.Component);o.a.render(r.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc2de2a7.chunk.js.map