import{_ as P,a as D,r as l,L as w,f as c,b as _,c as u,d as s,t as p,q as g,p as x,k as I}from"./file_index.3ddcb20d.js";import{h as f}from"./file_moment.6afbe4f9.js";const m=a=>(x("data-v-6b9dd285"),a=a(),I(),a),M={key:0,class:"section"},T={class:"container"},j={class:"timer"},B=m(()=>s("label",{class:"title"},"Timer:",-1)),$={class:"time"},L={class:"hours"},N=m(()=>s("div",null,":",-1)),V={class:"minuts"},q=m(()=>s("div",null,":",-1)),E={class:"seconds"},H={class:"buttons"},R={key:0},U={key:1},W={key:1,class:"section"},z=m(()=>s("article",{class:"message is-danger notLogged"},[s("div",{class:"message-header"},[s("p",null,"Danger"),s("button",{class:"delete","aria-label":"delete"})]),s("div",{class:"message-body"}," Debes iniciar sesi\xF3n primero ")],-1)),F=[z],G={__name:"Pomodoro",setup(a){const y=D();let i=0,d=l(!1),h=0,k=l(0),e=l(0),o=l(0),b=l(0);const v=n=>{i+=n,o=i,console.log("CUrrent: "+i+" Minutes: "+o),o>60&&(e+=o/60),e<10&&(e="0"+e),o<10&&(o="0"+o)},C=()=>{i=h,d=!1},S=()=>{e=0,o=0,b=0,d=!1},A=()=>{i==0&&alert("A\xF1ade primero el tiempo"),d=!0,h=i;const n=new Date,t=f(n),r=f(n).add(i,"minutes").toDate();k=f(r).diff(t,"minutes"),console.log("Dif de tiempo: "+k+"minutos y el cronometro est\xE1 en estado: "+d)};return w(o,(n,t)=>{console.log("WATCH:"+n,t),o>60&&(e+=o/60),e<10&&(e="0"+e),o<10&&(o="0"+o)}),(n,t)=>c(y).isAuth?(_(),u("div",M,[s("div",T,[s("div",j,[B,s("div",$,[s("div",L,"0"+p(c(e)),1),N,s("div",V,"0"+p(c(o)),1),q,s("div",E,"0"+p(c(b)),1)]),s("div",H,[c(d)?(_(),u("div",R,[s("div",{class:"button is-rounded is-link",onClick:C},"Reset"),s("div",{class:"button is-rounded is-link",onClick:S},"Stop")])):g("",!0),c(d)?g("",!0):(_(),u("div",U,[s("div",{class:"button is-rounded is-link",onClick:t[0]||(t[0]=r=>v(60))},"Add 1h"),s("div",{class:"button is-rounded is-link",onClick:t[1]||(t[1]=r=>v(5))},"Add 5min"),s("div",{class:"button is-rounded is-link",onClick:t[2]||(t[2]=r=>v(1))},"Add 1min"),s("div",{class:"button is-rounded is-link",onClick:A},"Start")]))])])])])):(_(),u("div",W,F))}},Q=P(G,[["__scopeId","data-v-6b9dd285"]]);export{Q as default};