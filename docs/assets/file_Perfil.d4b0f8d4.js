import{_ as b,a as g,r as p,o as w,D as x,f as l,b as u,c as _,d as e,s as y,w as v,v as f,E as h,p as P,k as U,G as k}from"./file_index.c8c2a8aa.js";const o=r=>(P("data-v-af6bf1d9"),r=r(),U(),r),E={key:0,class:"section columns"},S={class:"box column is-two-fifths"},A={class:"profile"},D={class:"media-left is-flex is-justify-content-center"},I={key:0,class:"image is-128x128"},V=["src"],B={key:1,class:"image is-128x128"},L=o(()=>e("img",{src:"https://bulma.io/images/placeholders/128x128.png",class:"is-rounded"},null,-1)),M=[L],N={class:"field"},R=o(()=>e("label",{class:"label"},"Usuario",-1)),W={class:"control"},j=["value"],z={class:"field"},G=o(()=>e("label",{class:"label"},"Website",-1)),T={class:"control"},q=["value"],C={class:"box column is-two-fifths"},F=o(()=>e("h2",{class:"title"},"Actualizar perfil:",-1)),H=o(()=>e("label",{class:"label mt-4"},"Username:",-1)),J=o(()=>e("label",{class:"label mt-4"},"Avatar URL:",-1)),K=o(()=>e("label",{class:"label mt-4"},"Website:",-1)),O=o(()=>e("button",{class:"button is-fullwidth mt-4"},"Update profile",-1)),Q={key:1,class:"section"},X=o(()=>e("article",{class:"message is-danger notLogged"},[e("div",{class:"message-header"},[e("p",null,"Danger"),e("button",{class:"delete","aria-label":"delete"})]),e("div",{class:"message-body"}," Debes iniciar sesi\xF3n primero ")],-1)),Y=[X],Z={__name:"Perfil",setup(r){const s=g();let i=p(s.username),d=p(s.avatar),n=p(s.website);const m=async()=>{const t=await k(s.id,i.value,d.value,n.value);s.setProfile(i.value,d.value,n.value),console.log(t)};return w(async()=>{if(s.username=="Enter a username"&&s.isAuth){const t=await x(s.id);s.setProfile(t.username,t.avatar_url,t.website),i.value=t.username,d.value=t.avatar_url,n.value=t.website}}),(t,c)=>l(s).isAuth?(u(),_("div",E,[e("div",S,[e("div",A,[e("figure",D,[l(s).avatar!=null&&l(s).avatar!="Enter an avatar URL"?(u(),_("p",I,[e("img",{src:l(s).avatar,class:"is-rounded"},null,8,V)])):(u(),_("p",B,M))]),e("div",N,[R,e("div",W,[e("input",{type:"text",class:"input",disabled:"",value:l(i),placeholder:"No has especificado un usuario"},null,8,j)])]),e("div",z,[G,e("div",T,[e("input",{type:"text",class:"input",disabled:"",value:l(n),placeholder:"No has especificado una web"},null,8,q)])])])]),e("div",C,[e("form",{onSubmit:c[3]||(c[3]=y(a=>m(),["prevent"]))},[F,H,v(e("input",{class:"input",type:"text",placeholder:"Enter a new username","onUpdate:modelValue":c[0]||(c[0]=a=>h(i)?i.value=a:i=a)},null,512),[[f,l(i)]]),J,v(e("input",{class:"input",type:"text",placeholder:"Enter a avatar (url)","onUpdate:modelValue":c[1]||(c[1]=a=>h(d)?d.value=a:d=a)},null,512),[[f,l(d)]]),K,v(e("input",{class:"input",type:"text",placeholder:"Enter a website","onUpdate:modelValue":c[2]||(c[2]=a=>h(n)?n.value=a:n=a)},null,512),[[f,l(n)]]),O],32)])])):(u(),_("div",Q,Y))}},ee=b(Z,[["__scopeId","data-v-af6bf1d9"]]);export{ee as default};