import{_ as b,a as w,r as d,o as x,D as y,b as _,c as p,d as e,f as n,s as g,w as v,v as f,E as h,p as P,k as U,G as E}from"./file_index.95f2f8fc.js";const c=r=>(P("data-v-8a14a1e7"),r=r(),U(),r),S={class:"section columns"},k={class:"box column is-two-fifths"},I={class:"profile"},V={class:"media-left is-flex is-justify-content-center"},A={key:0,class:"image is-128x128"},B=["src"],M={key:1,class:"image is-128x128"},N=c(()=>e("img",{src:"https://bulma.io/images/placeholders/128x128.png",class:"is-rounded"},null,-1)),R=[N],D={class:"field"},L=c(()=>e("label",{class:"label"},"Usuario",-1)),W={class:"control"},j=["value"],z={class:"field"},G=c(()=>e("label",{class:"label"},"Website",-1)),T={class:"control"},q=["value"],C={class:"box column is-two-fifths"},F=c(()=>e("h2",{class:"title"},"Actualizar perfil:",-1)),H=c(()=>e("label",{class:"label mt-4"},"Username:",-1)),J=c(()=>e("label",{class:"label mt-4"},"Avatar URL:",-1)),K=c(()=>e("label",{class:"label mt-4"},"Website:",-1)),O=c(()=>e("button",{class:"button is-fullwidth mt-4"},"Update profile",-1)),Q={__name:"Perfil",setup(r){const s=w();let l=d(s.username),u=d(s.avatar),o=d(s.website);const m=async()=>{const t=await E(s.id,l.value,u.value,o.value);s.setProfile(l.value,u.value,o.value),console.log(t)};return x(async()=>{if(s.username=="Enter a username"){const t=await y(s.id);s.setProfile(t.username,t.avatar_url,t.website),l.value=t.username,u.value=t.avatar_url,o.value=t.website}}),(t,i)=>(_(),p("div",S,[e("div",k,[e("div",I,[e("figure",V,[n(s).avatar!=null&&n(s).avatar!="Enter an avatar URL"?(_(),p("p",A,[e("img",{src:n(s).avatar,class:"is-rounded"},null,8,B)])):(_(),p("p",M,R))]),e("div",D,[L,e("div",W,[e("input",{type:"text",class:"input",disabled:"",value:n(l),placeholder:"No has especificado un usuario"},null,8,j)])]),e("div",z,[G,e("div",T,[e("input",{type:"text",class:"input",disabled:"",value:n(o),placeholder:"No has especificado una web"},null,8,q)])])])]),e("div",C,[e("form",{onSubmit:i[3]||(i[3]=g(a=>m(),["prevent"]))},[F,H,v(e("input",{class:"input",type:"text",placeholder:"Enter a new username","onUpdate:modelValue":i[0]||(i[0]=a=>h(l)?l.value=a:l=a)},null,512),[[f,n(l)]]),J,v(e("input",{class:"input",type:"text",placeholder:"Enter a avatar (url)","onUpdate:modelValue":i[1]||(i[1]=a=>h(u)?u.value=a:u=a)},null,512),[[f,n(u)]]),K,v(e("input",{class:"input",type:"text",placeholder:"Enter a website","onUpdate:modelValue":i[2]||(i[2]=a=>h(o)?o.value=a:o=a)},null,512),[[f,n(o)]]),O],32)])]))}},Y=b(Q,[["__scopeId","data-v-8a14a1e7"]]);export{Y as default};