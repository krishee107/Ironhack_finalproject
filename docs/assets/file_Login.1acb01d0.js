import{_ as k,a as y,r as u,u as w,o as S,y as _,z as x,f as p,b as f,c as h,d as s,s as I,w as m,v as g,A as v,l as L,B as V,p as q,k as A,C as B,g as C,D as T}from"./file_index.3ddcb20d.js";const D="/Ironhack_finalproject/assets/file_todo.14481653.jpg";const e=i=>(q("data-v-fffad9f4"),i=i(),A(),i),H={key:0,class:"login_template columns is-mobile is-variable is-multiline"},M={class:"form_box column is-7-desktop is-full-mobile is-full-tablet"},N=e(()=>s("h1",null,"Welcome back,",-1)),j=["onSubmit"],E={class:"field"},U={class:"control has-icons-left has-icons-right"},z=e(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1)),G=e(()=>s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1)),P={class:"field mt-5"},W={class:"control has-icons-left"},$=e(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1)),F=e(()=>s("div",{class:"field mt-5"},[s("p",{class:"control"},[s("button",{class:"button is-link is-fullwidth is-rounded"}," Login ")])],-1)),J={class:"register"},K=e(()=>s("div",{class:"img_box column is-5-desktop is-full-mobile is-full-tablet"},[s("img",{src:D,alt:""})],-1)),O={key:1,class:"section"},Q={class:"message is-primary"},R=e(()=>s("div",{class:"message-header"},[s("p",null,"\xA1Hola!"),s("button",{class:"delete","aria-label":"delete"})],-1)),X={class:"message-body"},Y=e(()=>s("p",null,"\xA1Gracias por iniciar sesi\xF3n! ",-1)),Z=e(()=>s("p",null,"Si lo que deseas es cerrar sesi\xF3n o iniciar sesi\xF3n con otra cuenta, puedes hacerlo d\xE1ndole click al bot\xF3n de logout en la barra superior o aqu\xED. ",-1)),ss={__name:"Login",setup(i){const l=y(),n=u(),r=u(),d=w();S(()=>{l.isAuth&&_.replace({path:"/"})});const b=async()=>{const a=await B(n.value,r.value);a!=null&&a!=!1&&l.login(a,n.value)&&(d.tasks=await C(a).then(async()=>{await T(a).then(async c=>{for(let t=0;t<c.length;t++)d.setHistoric(c[t]);_.replace({path:"/"})})}))};return(a,o)=>{const c=x("router-link");return p(l).isAuth?(f(),h("div",O,[s("article",Q,[R,s("div",X,[Y,Z,s("button",{class:"navbar-item button is-danger is-light mt-4",onClick:o[2]||(o[2]=t=>p(l).logout())},"Logout")])])])):(f(),h("div",H,[s("div",M,[N,s("form",{onSubmit:I(b,["prevent"])},[s("div",E,[s("p",U,[m(s("input",{class:"",type:"email",placeholder:"Email","onUpdate:modelValue":o[0]||(o[0]=t=>n.value=t),required:""},null,512),[[g,n.value]]),z,G])]),s("div",P,[s("p",W,[m(s("input",{class:"",type:"password",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=t=>r.value=t),required:""},null,512),[[g,r.value]]),$])]),F,s("span",J,[v("Don't have an account yet? "),L(c,{class:"is-text is-light mr-4 profile",to:{name:"registro"}},{default:V(()=>[v(" Sign up here!")]),_:1})])],40,j)]),K]))}}},ts=k(ss,[["__scopeId","data-v-fffad9f4"]]);export{ts as default};