(this.webpackJsonpimc=this.webpackJsonpimc||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),u=(a(16),a(9)),c=a(10),i=(a(17),a(1)),s=a(2),m=a(5),h=a(4),p=a(6),d=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.users;return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"Peso"),l.a.createElement("th",null,"Altura"),l.a.createElement("th",null,"IMC"))),l.a.createElement("tbody",null,t.length>0?t.map((function(t,a){var n=t.nome,r=t.peso,o=t.altura,u=(r/(o*o)).toFixed(2);return"NaN"===u&&(u=""),l.a.createElement("tr",{key:a,index:a,onDoubleClick:function(t){return e.props.handleDelete(t)}},l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,o),l.a.createElement("td",null,u))})):null)))}}]),t}(n.Component)),b=a(3),v=(a(19),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={nome:"",peso:"",altura:""},a.handleInputChange=a.handleInputChange.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.nome,n=t.peso,l=t.altura;""!==a&&null!==a&&""!==n&&null!==n&&""!==l&&null!==l?(this.props.handleSubmit(this.state),this.setState({nome:"",peso:"",altura:""})):alert("Preencha todos os campos antes de calcular")}},{key:"handleInputChange",value:function(e,t){var a=new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$"),n=e.target.value,l=parseInt(n,10),r="nome"!==t,o=!n.match(a);if(r&&o&&""!==n||l<0)return alert("O campo deve conter apenas numeros positivos"),void(e.target.value="");switch(t){case"nome":this.setState({nome:n});break;case"peso":this.setState({peso:n});break;case"altura":this.setState({altura:n});break;default:console.log("error on form.js inside handleInputChange function")}}},{key:"render",value:function(){var e=this,t=this.state,a=t.nome,n=t.peso,r=t.altura;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-wrapper"},l.a.createElement("div",{className:"novoUsuario-btn"},l.a.createElement("p",null,"Novo usu\xe1rio")),l.a.createElement("div",{className:"inner-form-wrapper"},l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("label",{htmlFor:"nome"},"Nome"),l.a.createElement("input",{type:"text",name:"nome",id:"",value:a,onChange:function(t){return e.handleInputChange(t,"nome")}}),l.a.createElement("label",{htmlFor:"peso"},"Peso"),l.a.createElement("input",{type:"text",name:"peso",id:"",value:n,onChange:function(t){return e.handleInputChange(t,"peso")}}),l.a.createElement("label",{htmlFor:"altura"},"Altura"),l.a.createElement("input",{type:"text",name:"altura",id:"",value:r,onChange:function(t){return e.handleInputChange(t,"altura")}}),l.a.createElement("div",{className:"buttons"},l.a.createElement("input",{type:"submit",name:"",id:"btn-1",value:"Calcular"}),l.a.createElement("input",{type:"submit",name:"",id:"btn-2",value:"Calcular"}))))))}}]),t}(n.PureComponent));var E=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"bg-wrapper"},l.a.createElement("div",{className:"bg"})),l.a.createElement(v,{handleSubmit:function(e){var t=a.concat(e);r(t)}}),l.a.createElement("div",{className:"table"},l.a.createElement(d,{users:a,handleDelete:function(e){var t=e.target.parentNode.getAttribute("index");a.splice(t,1);var n=Object(u.a)(a);r(n)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.e6f4b5fc.chunk.js.map