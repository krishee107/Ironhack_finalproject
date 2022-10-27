import{_ as w,u as C,a as g,r as b,o as H,g as D,b as c,c as d,d as s,F as I,e as M,n as q,t as y,f as $,h as T,i as m,j as A,p as j,k as Y,l as f,w as S,v as x,m as L,q as F,s as N,x as K}from"./file_index.23bd7a0f.js";import{h as k}from"./file_moment.6afbe4f9.js";const i=r=>(j("data-v-771d8a89"),r=r(),Y(),r),V={class:"container"},z={class:"cards columns is-multiline"},E={class:"card"},U={class:"card-header"},Q=["onBlur"],R={key:0,class:"navbar-item has-dropdown is-hoverable"},G=i(()=>s("a",{class:"navbar-link"},null,-1)),J={key:0,class:"navbar-dropdown"},O=["onClick"],P=i(()=>s("span",{class:"icon pr-2"},[s("i",{class:"fa-regular fa-square-check"})],-1)),W=i(()=>s("span",null,"Complete job",-1)),X=[P,W],Z=["onClick"],ss=i(()=>s("span",{class:"icon pr-2"},[s("i",{class:"fa-regular fa-folder"})],-1)),es=i(()=>s("span",null,"Archive job",-1)),ts=[ss,es],as=i(()=>s("hr",{class:"navbar-divider"},null,-1)),is=["onClick"],os=i(()=>s("span",{class:"icon pr-2"},[s("i",{class:"fa-regular fa-trash-can"})],-1)),ns=i(()=>s("span",null,"Delete job",-1)),cs=[os,ns],ds={key:1,class:"navbar-dropdown"},ls=["onClick"],rs=i(()=>s("span",{class:"icon pr-2"},[s("i",{class:"fa-solid fa-arrow-rotate-right"})],-1)),_s=i(()=>s("span",null,"Re do job",-1)),hs=[rs,_s],us=["onClick"],ps=i(()=>s("span",{class:"icon pr-2"},[s("i",{class:"fa-regular fa-folder"})],-1)),vs=i(()=>s("span",null,"Archive job",-1)),ms=[ps,vs],$s=i(()=>s("hr",{class:"navbar-divider"},null,-1)),fs=["onClick"],bs=i(()=>s("span",{class:"icon pr-2"},[s("i",{class:"fa-regular fa-trash-can"})],-1)),gs=i(()=>s("span",null,"Delete job",-1)),ys=[bs,gs],Ts={key:1,class:"buttons-mobile"},ws=["onClick"],Cs=i(()=>s("i",{class:"fa-regular fa-square-check"},null,-1)),Ss=[Cs],xs=["onClick"],Ls=i(()=>s("i",{class:"fa-regular fa-folder"},null,-1)),ks=[Ls],Ds=["onClick"],js=i(()=>s("i",{class:"fa-regular fa-trash-can"},null,-1)),Ys=[js],Bs={class:"card-content"},Hs={class:"content"},Is=["onBlur"],Ms={class:"task-footer is-flex is-align-items-end is-justify-content-end"},qs=["datetime"],As={__name:"Task",setup(r){const a=C(),p=g(),_=b(screen.width);b(a.tasks),H(async()=>{if(a.tasks==null){let e=await D(p.id);a.tasks=e}});const h=async(e,v,t)=>{let o;if(v=="title")o=`La tarea con id ${t.id} ha pasado de llamarse ${t.title} a llamarse: ${e.target.innerText}`,t.title=e.target.innerText;else if(v=="description")o=`La tarea con id ${t.id} ha cambiado su descripcion de ${t.description} a: ${e.target.innerText}`,t.description=e.target.innerText;else return!1;await T(t.id,t).then(async ue=>{a.updateTask(t.id,t),await m(t.user_id,t.id,o).then(()=>a.addToHistoric(o))})},n=async e=>{await A(e.id).then(async()=>{a.deleteTask(e.id),await m(e.user_id,e.id,`La tarea ${e.id}: ${e.title} ha sido eliminada`).then(()=>a.addToHistoric(`La tarea ${e.id}: ${e.title} ha sido eliminada`))})},l=async e=>{e.status="archivada",await T(e.id,e).then(async v=>{a.deleteTask(e.id),a.archiveTask(e),await m(e.user_id,e.id,`La tarea ${e.id}: ${e.title} ha pasado a estar archivada`).then(()=>a.addToHistoric(`La tarea ${e.id}: ${e.title} ha pasado a estar archivada`))})},u=async e=>{e.status=="completada"?e.status="activa":(e.status="activa")&&(e.status="completada"),await T(e.id,e).then(async v=>{a.updateTask(e.id,e),await m(e.user_id,e.id,`La tarea ${e.id}: ${e.title} ha cambiado su estado a: ${e.status}`).then(()=>a.addToHistoric(`La tarea ${e.id}: ${e.title} ha cambiado su estado a: ${e.status}`))})};return(e,v)=>(c(),d("div",V,[s("div",z,[(c(!0),d(I,null,M($(a).tasks,t=>(c(),d("div",{class:q(["column is-4-desktop is-6-tablet is-6-tablet",t.status]),key:t.id},[s("div",E,[s("header",U,[s("div",{class:"card-title card-header-title",contenteditable:"",onBlur:o=>h(o,"title",t)},y(t.title),41,Q),_.value>=1024?(c(),d("div",R,[G,t.status=="activa"?(c(),d("div",J,[s("a",{class:"navbar-item",onClick:o=>u(t)},X,8,O),s("a",{class:"navbar-item",onClick:o=>l(t)},ts,8,Z),as,s("a",{class:"navbar-item task-delete",onClick:o=>n(t)},cs,8,is)])):(c(),d("div",ds,[s("a",{class:"navbar-item",onClick:o=>u(t)},hs,8,ls),s("a",{class:"navbar-item",onClick:o=>l(t)},ms,8,us),$s,s("a",{class:"navbar-item task-delete",onClick:o=>n(t)},ys,8,fs)]))])):(c(),d("div",Ts,[s("span",{class:"icon pr-2",onClick:o=>u(t)},Ss,8,ws),s("span",{class:"icon pr-2",onClick:o=>l(t)},ks,8,xs),s("span",{class:"icon pr-2",onClick:o=>n(t)},Ys,8,Ds)]))]),s("div",Bs,[s("div",Hs,[s("div",{class:"todo-description",contenteditable:"",onBlur:o=>h(o,"description",t)},y(t.description),41,Is)])]),s("div",Ms,[s("time",{class:"is-family-monospace is-fullwidth pr-2",datetime:$(k)(String(t.created_at)).format("YYYY/DD/MM")},y($(k)(String(t.created_at)).format("hh:mm A - DD/MM/YYYY")),9,qs)])])],2))),128))])]))}},Fs=w(As,[["__scopeId","data-v-771d8a89"]]),Ns={class:"section"},Ks={class:"container"},Vs={class:"taskList"},zs={__name:"TaskList",setup(r){return(a,p)=>(c(),d("div",Ns,[s("div",Ks,[s("div",Vs,[f(Fs)])])]))}};const B=r=>(j("data-v-5a47eaea"),r=r(),Y(),r),Es={class:"container"},Us=["onSubmit"],Qs={class:"field"},Rs={class:"control has-icons-left has-icons-right"},Gs=["onKeyup"],Js=B(()=>s("span",{class:"icon is-small is-right"},[s("i",{class:"fa-solid fa-pencil"})],-1)),Os={key:0,class:"field"},Ps={class:"control has-icons-left has-icons-right"},Ws=["onKeyup"],Xs=B(()=>s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1)),Zs={__name:"NewTask",setup(r){const a=g(),p=C(),_=b(""),h=b(),n=async()=>{let l={user_id:a.id,title:_.value,description:h.value};await K(l).then(async u=>{p.addTask(u),_.value="",h.value="",await m(l.user_id,l.id,`Se ha creado una nueva tarea llamada: ${l.title}`).then(()=>p.addToHistoric(`Se ha creado una nueva tarea llamada: ${l.title}`))})};return(l,u)=>(c(),d("div",Es,[s("form",{onSubmit:N(n,["prevent"])},[s("div",Qs,[s("p",Rs,[S(s("input",{class:"input is-large is-rounded","onUpdate:modelValue":u[0]||(u[0]=e=>_.value=e),type:"text",placeholder:"\xBFC\xF3mo quieres llamar a la tarea?",required:"",onKeyup:L(n,["enter"])},null,40,Gs),[[x,_.value]]),Js])]),_.value.length>0?(c(),d("div",Os,[s("p",Ps,[S(s("input",{class:"input is-large is-rounded","onUpdate:modelValue":u[1]||(u[1]=e=>h.value=e),type:"text",placeholder:"\xBFQu\xE9 necesitas hacer?",required:"",onKeyup:L(n,["enter"])},null,40,Ws),[[x,h.value]]),Xs])])):F("",!0)],40,Us)]))}},se=w(Zs,[["__scopeId","data-v-5a47eaea"]]);const ee={class:"section"},te={class:"container"},ae={class:"buttons is-justify-content-center is-flex"},ie={__name:"Filter",setup(r){const a=C(),p=g(),_=async h=>{a.tasks=await D(p.id),a.filterTask(h)};return(h,n)=>(c(),d("div",ee,[s("div",te,[s("div",ae,[s("button",{onClick:n[0]||(n[0]=l=>_("all")),class:"button is-normal"},"All"),s("button",{onClick:n[1]||(n[1]=l=>_("activa")),class:"button is-normal"},"Todo"),s("button",{onClick:n[2]||(n[2]=l=>_("completada")),class:"button is-normal"},"Done")])])]))}},oe=w(ie,[["__scopeId","data-v-ab26ce5f"]]),ne={class:"section"},ce={class:"container"},de={key:0,class:"logged"},le={key:1,class:"message is-danger notLogged"},re=s("div",{class:"message-header"},[s("p",null,"Danger"),s("button",{class:"delete","aria-label":"delete"})],-1),_e=s("div",{class:"message-body"}," Debes iniciar sesi\xF3n primero ",-1),he=[re,_e],me={__name:"Home",setup(r){const a=g();return(p,_)=>(c(),d("div",ne,[s("div",ce,[$(a).isAuth?(c(),d("div",de,[f(se),f(oe),f(zs)])):(c(),d("article",le,he))])]))}};export{me as default};
