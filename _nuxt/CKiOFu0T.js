import{_ as j}from"./Cc6gXZmp.js";import{u as B,_ as U}from"./DdrSC-u_.js";import{r as d,f as T,g as M,c as I,a as t,t as b,d as p,b as g,w as x,o as E}from"./DNntNOE5.js";import{u as Y}from"./BvvMVv0A.js";const S=""+new URL("juno.c61PKBy-.png",import.meta.url).href,A=""+new URL("cog.CXmB9aGf.png",import.meta.url).href,H=""+new URL("map-sofya.BiyPtrO_.png",import.meta.url).href,N=""+new URL("me.BYk-UO88.png",import.meta.url).href,F=""+new URL("login-sofya.Awy4wBfU.png",import.meta.url).href,V=""+new URL("paula.CGenB65l.png",import.meta.url).href,X=""+new URL("miam.RvCadfg9.png",import.meta.url).href,$=""+new URL("support-sofya.Civ66PnN.png",import.meta.url).href,O=""+new URL("hat.DhdEh45n.png",import.meta.url).href,q=""+new URL("ipad-auticiel.C78LTTsu.png",import.meta.url).href,G=""+new URL("dancehaul.C1F7CXBH.png",import.meta.url).href,z=""+new URL("macbook-auticiel.vWEjivS5.png",import.meta.url).href,K=""+new URL("pbasse.9t6l5gOV.png",import.meta.url).href,W={class:"landing-page"},J={class:"image-popup-inner-container"},Q={class:"image-popup-inner-container"},Z={class:"image-popup-inner-container"},h={class:"image-popup-inner-container"},_={class:"image-popup-inner-container"},oo={class:"image-popup-inner-container"},to={class:"image-popup-inner-container"},so={class:"image-popup-inner-container"},io={class:"image-popup-inner-container"},no={class:"image-popup-inner-container"},eo={class:"image-popup-inner-container"},ao={class:"image-popup-inner-container"},lo={class:"image-popup-inner-container"},ro={class:"ab-fold-title desktop"},po={class:"presentation"},uo={class:"ab-fold-title mobile"},go={class:"text-block"},mo={class:"text-block"},vo=2018,yo={__name:"index",setup(co){const m=d(!1),v=d({x:0,y:0}),c=d({x:0,y:0}),l=d(null),f=d(new Set);B({title:"Titouan Martin",description:"Paris based Product Designer and product Manager.",ogTitle:"Titouan Martin",ogDescription:"Paris based Product Designer and product Manager.",ogImage:"http://localhost:3000/_nuxt/assets/images/socials/landing-preview.png",ogUrl:"[og:url]",twitterTitle:"Titouan Martin",twitterDescription:"Paris based Product Designer",twitterImage:"http://localhost:3000/_nuxt/assets/images/socials/landing-preview-square.png",twitterCard:"I am a Paris based Product Designer and Product Manager"}),Y({htmlAttrs:{lang:"en"},link:[{rel:"icon",type:"image/png",href:"/favicon.ico"}]});function n(i){const o=i.target.closest(".image-popup-container");f.value.has(o)||o&&o.classList.remove("hidden")}function e(i){const o=i.target.closest(".image-popup-container");o&&(o.classList.add("hidden"),f.value.add(o),setTimeout(()=>{f.value.delete(o)},3e4))}function w(i){const o=i.target.closest(".image-popup-container");if(o&&!o.classList.contains("hidden")&&!i.target.classList.contains("close")){m.value=!0,l.value=o,v.value={x:i.clientX,y:i.clientY};const a=o.getBoundingClientRect(),r=o.closest(".ab-fold").getBoundingClientRect();c.value={x:a.left-r.left,y:a.top-r.top}}}function C(i){if(!m.value||!l.value)return;const o=c.value.x+(i.clientX-v.value.x),a=c.value.y+(i.clientY-v.value.y),s=l.value.closest(".ab-fold").getBoundingClientRect(),y=l.value.getBoundingClientRect(),D=Math.max(0,Math.min(o,s.width-y.width)),P=Math.max(0,Math.min(a,s.height-y.height));l.value.style.left=`${D}px`,l.value.style.top=`${P}px`}function L(){m.value=!1,l.value=null}T(()=>{document.querySelectorAll(".image-popup-container img").forEach(i=>{i.addEventListener("dragstart",o=>o.preventDefault())})});const u=new Date("1994-01-31"),k=M(()=>{const i=new Date;let o=i.getFullYear()-u.getFullYear();return i.getMonth()>u.getMonth()||i.getMonth()===u.getMonth()&&i.getDate()>=u.getDate()||(o-=1),o}),R=M(()=>new Date().getFullYear()-vo);return(i,o)=>{const a=j,r=U;return E(),I("div",W,[t("div",{class:"ab-fold",onMousedown:o[26]||(o[26]=s=>w(s)),onMousemove:o[27]||(o[27]=s=>C(s)),onMouseup:o[28]||(o[28]=s=>L())},[t("div",{class:"image-popup-container hidden",id:"juno",onMouseover:o[1]||(o[1]=s=>n(s))},[t("div",J,[t("div",{class:"close soap",onClick:o[0]||(o[0]=s=>e(s))},"x"),o[29]||(o[29]=t("img",{src:S,alt:"juno synthesizer"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"cog",onMouseover:o[3]||(o[3]=s=>n(s))},[t("div",Q,[t("div",{class:"close soap",onClick:o[2]||(o[2]=s=>e(s))},"x"),o[30]||(o[30]=t("img",{src:A,alt:"bike cog"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"map-sofya",onMouseover:o[5]||(o[5]=s=>n(s))},[t("div",Z,[t("div",{class:"close soap",onClick:o[4]||(o[4]=s=>e(s))},"x"),o[31]||(o[31]=t("img",{src:H,alt:"map"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"me",onMouseover:o[7]||(o[7]=s=>n(s))},[t("div",h,[t("div",{class:"close soap",onClick:o[6]||(o[6]=s=>e(s))},"x"),o[32]||(o[32]=t("img",{src:N,alt:"me"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"login-sofya",onMouseover:o[9]||(o[9]=s=>n(s))},[t("div",_,[t("div",{class:"close soap",onClick:o[8]||(o[8]=s=>e(s))},"x"),o[33]||(o[33]=t("img",{src:F,alt:"login sofya"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"paula",onMouseover:o[11]||(o[11]=s=>n(s))},[t("div",oo,[t("div",{class:"close soap",onClick:o[10]||(o[10]=s=>e(s))},"x"),o[34]||(o[34]=t("img",{src:V,alt:"pink bike"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"miam",onMouseover:o[13]||(o[13]=s=>n(s))},[t("div",to,[t("div",{class:"close soap",onClick:o[12]||(o[12]=s=>e(s))},"x"),o[35]||(o[35]=t("img",{src:X,alt:"fondue dish"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"support-sofya",onMouseover:o[15]||(o[15]=s=>n(s))},[t("div",so,[t("div",{class:"close soap",onClick:o[14]||(o[14]=s=>e(s))},"x"),o[36]||(o[36]=t("img",{src:$,alt:"sofya support"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"hat",onMouseover:o[17]||(o[17]=s=>n(s))},[t("div",io,[t("div",{class:"close soap",onClick:o[16]||(o[16]=s=>e(s))},"x"),o[37]||(o[37]=t("img",{src:O,alt:"red hat"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"ipad-auticiel",onMouseover:o[19]||(o[19]=s=>n(s))},[t("div",no,[t("div",{class:"close soap",onClick:o[18]||(o[18]=s=>e(s))},"x"),o[38]||(o[38]=t("img",{src:q,alt:"ipad auticiel"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"dancehaul",onMouseover:o[21]||(o[21]=s=>n(s))},[t("div",eo,[t("div",{class:"close soap",onClick:o[20]||(o[20]=s=>e(s))},"x"),o[39]||(o[39]=t("img",{src:G,alt:"dancehaul snowboard"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"macbook-auticiel",onMouseover:o[23]||(o[23]=s=>n(s))},[t("div",ao,[t("div",{class:"close soap",onClick:o[22]||(o[22]=s=>e(s))},"x"),o[40]||(o[40]=t("img",{src:z,alt:"macbook auticiel"},null,-1))])],32),t("div",{class:"image-popup-container hidden",id:"pbasse",onMouseover:o[25]||(o[25]=s=>n(s))},[t("div",lo,[t("div",{class:"close soap",onClick:o[24]||(o[24]=s=>e(s))},"x"),o[41]||(o[41]=t("img",{src:K,alt:"precision basse"},null,-1))])],32),t("h1",ro,[t("div",po,[o[42]||(o[42]=t("div",null,"Hi ! I am",-1)),o[43]||(o[43]=t("div",null,"Titouan Martin,",-1)),t("div",null,"a "+b(k.value)+" years old",1),o[44]||(o[44]=t("div",null,"Paris based",-1))]),o[45]||(o[45]=t("div",{class:"product-designer big-text"},[t("div",null,"Product"),t("div",{class:"designer"},"Designer")],-1))]),t("h1",uo,[t("div",go," Hi ! I am Titouan Martin, a "+b(k.value)+" years old Paris based ",1),o[46]||(o[46]=t("div",{class:"soap product-designer text1"},"prod",-1)),o[47]||(o[47]=t("div",{class:"soap product-designer text2"},"uct",-1)),o[48]||(o[48]=t("div",{class:"soap product-designer text3"},"desig",-1)),o[49]||(o[49]=t("div",{class:"soap product-designer text4"},"ner",-1))])],32),t("div",mo,[t("div",null,[o[50]||(o[50]=p("I am a ")),o[51]||(o[51]=t("span",{class:"outlined"},"Product Designer",-1)),o[52]||(o[52]=p(" that also dabbles in ")),o[53]||(o[53]=t("span",{class:"outlined"},"Product Management",-1)),p(" since "+b(R.value)+" years.",1)]),o[57]||(o[57]=t("div",{class:"about"},"I help teams to create and bring to life beautiful, intuitive and accessible digital products.",-1)),o[58]||(o[58]=t("div",{class:"projects"},"Here are some projects I took a part in :",-1)),g(a,{to:"/amikeo"},{default:x(()=>o[54]||(o[54]=[t("div",{class:"project-container"},[t("div",{class:"project-image-container"},[t("div",{class:"project-background amikeo"}),t("div",{class:"project-image amikeo"})]),t("div",{class:"big-text amikeo"},"amikeo")],-1)])),_:1}),g(a,{to:"/sofya"},{default:x(()=>o[55]||(o[55]=[t("div",{class:"project-container sofya"},[t("div",{class:"big-text sofya"},"sofya"),t("div",{class:"project-image-container"},[t("div",{class:"project-background sofya"}),t("div",{class:"project-image sofya"})])],-1)])),_:1}),g(a,{to:"/coach-abileo"},{default:x(()=>o[56]||(o[56]=[t("div",{class:"project-container"},[t("div",{class:"project-image-container"},[t("div",{class:"project-background coach-abileo"}),t("div",{class:"project-image coach-abileo"})]),t("div",{class:"big-text coach-abileo"},[p("Coach "),t("br"),p(" Abileo")])],-1)])),_:1})]),g(r)])}}};export{yo as default};
