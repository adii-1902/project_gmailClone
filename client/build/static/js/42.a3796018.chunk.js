"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[42],{4373:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(2791),o=t(5294);const i=async function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const{params:a,urlParams:i,...s}=e;return await(0,o.Z)({method:n.method,url:"".concat("","/").concat(n.endpoint,"/").concat(t),data:e})},s=n=>{const[e,t]=(0,a.useState)(null),[o,s]=(0,a.useState)(""),[r,l]=(0,a.useState)(!1);return{call:async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t(null),l(!0),s("");try{let o=await i(n,e,a);t(o.data)}catch(o){s(o.message)}finally{l(!1)}},response:e,error:o,isLoading:r}}},2042:(n,e,t)=>{t.r(e),t.d(e,{default:()=>gn});var a,o,i,s=t(168),r=t(2791),l=t(7630),d=t(4395),c=t(697),p=t(4663),m=t(6098),x=t(7607),h=t(2167),u=t(4035),g=t(4371),Z=t(2155),j=t(3512),f=t(5652),b=t(6148),w=t(184);const y=(0,l.ZP)(d.Z)(a||(a=(0,s.Z)(["\n    background: #f5F5F5;\n    box-shadow: none;\n"]))),v=(0,l.ZP)(c.Z)(o||(o=(0,s.Z)(["\n    background: #EAF1FB;\n    margin-left: 80px;\n    border-radius: 8px;\n    min-width: 690px;\n    max-width: 720px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    & > div {\n        width: 100%\n    }\n"]))),P=(0,l.ZP)(c.Z)(i||(i=(0,s.Z)(["\n    width: 100%;\n    display: flex;\n    justify-content: end;\n    & > svg {\n        margin-left: 20px;\n    }\n"]))),k=n=>{let{toggleDrawer:e}=n;return(0,w.jsx)(y,{position:"static",children:(0,w.jsxs)(p.Z,{children:[(0,w.jsx)(x.Z,{color:"action",onClick:e}),(0,w.jsx)("img",{src:b.Pv,alt:"logo",style:{width:110,marginLeft:15}}),(0,w.jsxs)(v,{children:[(0,w.jsx)(h.Z,{color:"action"}),(0,w.jsx)(m.ZP,{}),(0,w.jsx)(u.Z,{color:"action"})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(g.Z,{color:"action"}),(0,w.jsx)(Z.Z,{color:"action"}),(0,w.jsx)(j.Z,{color:"action"}),(0,w.jsx)(f.Z,{color:"action"})]})]})})};var S,D,C,E,F=t(9953),O=t(4294),T=t(493),B=t(4852),M=t(9818),_=t(890),z=t(539),A=t(6739),L=t(4220),R=t(4373),Y=t(5372);const H={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},I=(0,l.ZP)(c.Z)(S||(S=(0,s.Z)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    background: #f2f6fc;\n    & > p {\n        font-size: 14px;\n        font-weight: 500;\n    }\n"]))),K=(0,l.ZP)(c.Z)(D||(D=(0,s.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px;\n    & > div {\n        font-size: 14px;\n        border-bottom: 1px solid #F5F5F5;\n        margin-top: 10px;\n    }\n"]))),U=(0,l.ZP)(c.Z)(C||(C=(0,s.Z)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    align-items: center;\n"]))),G=(0,l.ZP)(O.Z)(E||(E=(0,s.Z)(["\n    background: #0B57D0;\n    color: #fff;\n    font-weight: 500;\n    text-transform: none;\n    border-radius: 18px;\n    width: 100px;\n"]))),N=n=>{let{open:e,setOpenDrawer:t}=n;const[a,o]=(0,r.useState)({}),i=(0,R.Z)(Y.Y.saveSentEmails),s=(0,R.Z)(Y.Y.saveDraftEmails),l={Username:"imcoder001@yopmail.com",Password:"1316CE643F0264BE79E120661C3CDE4BFAC2",Host:"smtp.elasticemail.com",Port:2525},d=n=>{o({...a,[n.target.name]:n.target.value})};return(0,w.jsxs)(M.Z,{open:e,PaperProps:{sx:H},children:[(0,w.jsxs)(I,{children:[(0,w.jsx)(_.Z,{children:"New Message"}),(0,w.jsx)(A.Z,{fontSize:"small",onClick:n=>(n=>{n.preventDefault();const e={to:a.to,from:"kumbharaditya9903@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Aditya Kumbhar",starred:!1,type:"drafts"};s.call(e),s.error||(t(!1),o({}))})(n)})]}),(0,w.jsxs)(K,{children:[(0,w.jsx)(m.ZP,{placeholder:"Recipients",name:"to",onChange:n=>d(n),value:a.to}),(0,w.jsx)(m.ZP,{placeholder:"Subject",name:"subject",onChange:n=>d(n),value:a.subject})]}),(0,w.jsx)(z.Z,{multiline:!0,rows:18,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:n=>d(n),value:a.body}),(0,w.jsxs)(U,{children:[(0,w.jsx)(G,{onClick:n=>(async n=>{n.preventDefault(),window.Email&&window.Email.send({...l,To:a.to,From:"kumbharaditya9903@gmail.com",Subject:a.subject,Body:a.body}).then((n=>alert(n)));const e={to:a.to,from:"kumbharaditya9903@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Aditya Kumbhar",starred:!1,type:"sent"};i.call(e),i.error||(t(!1),o({}))})(n),children:"Send"}),(0,w.jsx)(L.Z,{onClick:()=>t(!1)})]})]})};var W=t(5806),q=t(4287),J=t(3026),Q=t(2192),V=t(3513),X=t(9825),$=t(8265);const nn=[{name:"inbox",title:"Inbox",icon:q.Z,path:W._.emails.path},{name:"starred",title:"Starred",icon:J.Z,path:W._.emails.path},{name:"sent",title:"Sent",icon:Q.Z,path:W._.emails.path},{name:"drafts",title:"Drafts",icon:V.Z,path:W._.emails.path},{name:"bin",title:"Bin",icon:X.Z,path:W._.emails.path},{name:"allmail",title:"All Mail",icon:$.Z,path:W._.emails.path}];var en,tn,an=t(5905),on=t(7689),sn=t(1087);const rn=(0,l.ZP)(c.Z)(en||(en=(0,s.Z)(["\n    padding: 8px;\n    & > ul {\n        padding: 10px 0 0 5px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        & > a {\n            text-decoration: none;\n            color: inherit;\n        }\n        & > a > li > svg {\n            margin-right: 20px;\n        }\n    }\n"]))),ln=(0,l.ZP)(O.Z)(tn||(tn=(0,s.Z)(["\n    background: #c2e7ff;\n    color: #001d35;\n    border-radius: 16px;\n    padding: 15px;\n    min-width: 140px;\n    text-transform: none;\n"]))),dn=()=>{const[n,e]=(0,r.useState)(!1),{type:t}=(0,on.UO)();return(0,w.jsxs)(rn,{children:[(0,w.jsxs)(ln,{onClick:()=>{e(!0)},children:[(0,w.jsx)(an.Z,{style:{marginRight:10}}),"Compose"]}),(0,w.jsx)(T.Z,{children:nn.map((n=>(0,w.jsx)(sn.OL,{to:"".concat(W._.emails.path,"/").concat(n.name),children:(0,w.jsxs)(B.ZP,{style:t===n.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,w.jsx)(n.icon,{fontSize:"small"}),n.title]})},n.name)))}),(0,w.jsx)(N,{open:n,setOpenDrawer:e})]})};var cn;const pn=(0,l.ZP)(F.ZP)(cn||(cn=(0,s.Z)(["\n    margin-top: 54px;\n"]))),mn=n=>{let{toggleDrawer:e,openDrawer:t}=n;return(0,w.jsx)(pn,{anchor:"left",open:t,onClose:e,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,w.jsx)(dn,{})})};var xn,hn=t(2247);const un=(0,l.ZP)(c.Z)(xn||(xn=(0,s.Z)(["\n    display: flex;\n"]))),gn=()=>{const[n,e]=(0,r.useState)(!0),t=()=>{e((n=>!n))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k,{toggleDrawer:t}),(0,w.jsxs)(un,{children:[(0,w.jsx)(mn,{toggleDrawer:t,openDrawer:n}),(0,w.jsx)(r.Suspense,{fallback:(0,w.jsx)(hn.Z,{}),children:(0,w.jsx)(on.j3,{context:{openDrawer:n}})})]})]})}},5372:(n,e,t)=>{t.d(e,{Y:()=>a});const a={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=42.a3796018.chunk.js.map