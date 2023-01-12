import{a as o,j as e,r as p,L as b,M as g,u,N as i}from"./index-62651e23.js";import{b as n}from"./blur-47df9ddc.js";import{n as f,o as v,e as y,f as N,g as w,h as L,c as k,d as S,a as z,b as E,v as W,i as P,l as T,m as I,j as C,k as A,y as M,z as j,r as B,s as R,A as D,B as F,E as H,F as O,w as q,x as U,p as G,q as X,C as _,D as K,t as Q,u as V}from"./Wildfire-c01d4b56.js";import{R as $}from"./file-d5d38c7e.js";const J="/lobe-clone/assets/avatar1@2x-0b19a39f.jpg",Y="/lobe-clone/assets/avatar2@2x-4d719cdb.jpg",Z="/lobe-clone/assets/avatar3@2x-d456d1e4.jpg";function h({imageSrc:a,text:t,fullNAme:l,position:c}){return o("div",{className:"flex h-[430px] w-[292px] flex-col justify-between rounded-[32px] bg-color-quaternary p-6 antialiased duration-200 hover:scale-105 hover:duration-200 sm:h-[506px] sm:w-[336px] sm:p-8 sm:shadow-2xl 2xl:h-[580px]  2xl:w-[435px] 2xl:p-12",children:[o("div",{className:"flex flex-col gap-9 2xl:gap-12",children:[e(n.LazyLoadImage,{src:a,alt:"person avatar",effect:"blur",className:" h-14 max-h-14 w-14 rounded-full object-cover"}),e("p",{className:" text-[21px] font-medium leading-tight text-color-secondary sm:text-[25px] 2xl:text-[28px]",children:t})]}),o("div",{className:"flex flex-col",children:[e("p",{className:" text-[22px] font-bold text-color-secondary sm:text-[26px] 2xl:text-[29px]",children:l}),e("p",{className:" text-[22px] font-bold leading-none text-color-tertiary sm:text-[26px] 2xl:text-[29px]",children:c})]})]})}function ee(){return e("div",{className:"w-full pl-7 sm:px-[10%] 2xl:px-[14%]",children:o("div",{className:"flex w-full justify-between gap-6 max-sm:carousel-end max-sm:carousel sm:gap-0 2xl:h-[780]",children:[e("div",{className:" max-sm:carousel-item",children:e(h,{imageSrc:J,text:"As soon as I used Lobe I was completely blown away. I don’t have to spend days trying to learn machine learning. Simply label some images and boom, it really just works.",fullNAme:"Chris Cachor",position:"Software Engineer"})}),e("div",{className:" max-sm:carousel-item  sm:mt-14",children:e(h,{imageSrc:Y,text:"We’ve been using Lobe to quickly process previously untapped sources of data so that we can improve our models of nature-dependent tourism to promote better decision-making in our oceans.",fullNAme:"Kate Longley-Wood",position:"Ocean Mapper"})}),e("div",{className:" max-sm:carousel-item sm:mt-28",children:e(h,{imageSrc:Z,text:"Lobe is so easy and takes so much of the complicated stuff out of machine learning. Even my kid was begging me to sit in front of the computer and categorize my bees for me.",fullNAme:"Sean Cusack",position:"Beekeeper"})})]})})}function x({children:a,itemWidth:t,itemHeight:l,shadowsWidth:c,animationDirection:s,animationSpeed:m}){const d=p.useMemo(()=>p.Children.toArray(a).length,[a]);return e("div",{className:"slider",style:{"--data-animation-direction":s.toLowerCase(),"--data-animation-speed":m.toString()+"s","--data-slide-width":t.toString()+"px","--data-slide-height":l.toString()+"px","--white-gradient-width":c.toString()+"px","--number-of-elements":d},children:e("div",{className:"slide-track",children:a})})}function r({linkTo:a,videoSrc:t,videoPoster:l,title:c,play:s}){return e("div",{className:"flex items-center justify-center p-2  sm:p-7  2xl:p-5",children:o(b,{to:a,"data-content":c,className:"relative rounded-[32px] shadow-lg transition-transform duration-500 ease-in-out after:absolute  after:top-6 after:left-8 after:z-10 after:text-4xl after:font-extrabold after:text-white after:content-[attr(data-content)] hover:scale-105 hover:transform",children:[e($,{url:t,config:{attributes:{poster:l,className:"rounded-[32px] z-20"}},playing:s,width:"100%",height:"auto",loop:!1,controls:!1,muted:!0}),e("div",{className:" absolute top-0 left-0 h-full w-full rounded-[32px] bg-black opacity-20"})]})})}function ae(){const{minWidth640px:a,itemWidth:t,itemHeight:l}=p.useMemo(()=>{const m=g.minWidth1536px.matches,d=g.minWidth640px.matches;return{minWidth640px:d,itemWidth:m?600:d?540:295,itemHeight:m?420:d?379:210}},[]),c=p.useRef(),s=u(c,a?"-300px":"20px");return o("div",{ref:c,className:" mt-20 mb-16 w-full sm:mt-32 sm:mb-28 2xl:mt-44 2xl:mb-40 ",children:[o("div",{className:"flex w-full flex-col px-7  sm:px-[12%] 2xl:px-[16%]",children:[o("h2",{className:" text-[46px] font-extrabold leading-[0.8] text-color-secondary antialiased sm:w-full sm:text-[78px] 2xl:text-[100px]",children:["Lobe ",e("span",{className:" text-color-primary",children:"Examples"})]}),e("p",{className:"mt-4 max-w-[700px] text-[22px] font-medium leading-[1.15] antialiased sm:mt-7 sm:w-full sm:text-[32px] 2xl:text-[39px]",children:"One tool, endless possibilities. Discover all the things you can train your app to do with Lobe."})]}),e(n.LazyLoadComponent,{children:o("div",{className:" mt-9 flex flex-col gap-3 bg-transparent sm:mt-14 sm:gap-0 2xl:gap-4",children:[o(x,{itemHeight:l,itemWidth:t,shadowsWidth:0,animationDirection:s?"RL":"none",animationSpeed:40,children:[e(r,{linkTo:i.Examples.path,videoSrc:f,videoPoster:v,title:"Beehive Health",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:y,videoPoster:N,title:"Emotional Reactions",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:w,videoPoster:L,title:"Interactive Painting",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:k,videoPoster:S,title:"Personal Trainer",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:z,videoPoster:E,title:"Hand Gestures",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:W,videoPoster:P,title:"Plant Species",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:T,videoPoster:I,title:"Whale Watching",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:C,videoPoster:A,title:"Safety Precautions",play:s})]}),o(x,{itemHeight:l,itemWidth:t,shadowsWidth:0,animationDirection:s?"LR":"none",animationSpeed:40,children:[e(r,{linkTo:i.Examples.path,videoSrc:M,videoPoster:j,title:"Wildlife Behavior",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:B,videoPoster:R,title:"Smart Checkout",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:D,videoPoster:F,title:"Equipment Analytics",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:H,videoPoster:O,title:"Aerial Imagery",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:q,videoPoster:U,title:"Scientific Research",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:G,videoPoster:X,title:"Baby Monitor",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:_,videoPoster:K,title:"Telescopic Imagery",play:s}),e(r,{linkTo:i.Examples.path,videoSrc:Q,videoPoster:V,title:"Fire Watch",play:s})]})]})})]})}const te="/lobe-clone/assets/microsoft-ec2ba371.svg",le="/lobe-clone/assets/aws-07c327e6.svg",se="/lobe-clone/assets/apple-919dce36.svg",oe="/lobe-clone/assets/tensorflow-yellow-a0e29ca4.svg",ie="/lobe-clone/assets/blue-54e6e993.svg",re="/lobe-clone/assets/google-ca821965.svg",ne="/lobe-clone/assets/python-02719237.svg",ce="/lobe-clone/assets/diamond-cb2b9169.svg",de="/lobe-clone/assets/arduino-5475b6d8.svg",me="/lobe-clone/assets/azure-a046b7e9.svg",pe="/lobe-clone/assets/raspberry-73ba94b7.svg",he="/lobe-clone/assets/tensorflow-yellow-a0e29ca4.svg",ge="/lobe-clone/assets/ml-69865ba4.svg",xe="/lobe-clone/assets/unity-c85e1376.svg";function be(){const a="absolute transition-all duration-75 ease-linear",t="w-[90px] h-[90px] rounded-[32px] flex justify-center items-center  ease-in shadow-xl antialiased duration-200 hover:scale-110  hover:duration-200 ",l=" h-[65px] w-[65px] textleginility ";return o("div",{className:" relative mt-12 min-h-[600px] w-full max-w-full sm:mb-20 sm:mt-28 sm:min-h-[1000px]",children:[o("div",{className:"flex w-full flex-col px-7  sm:px-[12%] 2xl:px-[16%]",children:[o("h2",{className:" text-[46px] font-extrabold leading-[0.8] text-color-secondary antialiased sm:w-full sm:text-[78px] 2xl:text-[100px]",children:[e("span",{className:" text-color-primary",children:"Export"})," Anywhere"]}),e("p",{className:"mt-4 max-w-[700px] text-[22px] font-medium leading-[1.15] antialiased sm:mt-8 sm:w-full sm:text-[32px] 2xl:text-[39px]",children:"When you are done, you can export your model to a variety of industry standard formats and ship it on any platform you choose."}),e("div",{className:"mt-4 sm:mt-8",children:o(b,{to:i.Examples.path,className:" absolute z-10 flex w-fit transform items-center gap-1 text-[21px] font-bold text-color-primary duration-300 hover:scale-105 hover:duration-300 sm:gap-4 sm:text-[32px]",children:["Learn More",o("svg",{width:"32px",height:"32px",className:" h-6 w-6 sm:h-8 sm:w-8",viewBox:"0 0 32 32",version:"1.1",children:[e("title",{children:"chevron"}),e("g",{id:"Direction",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:e("g",{id:"Overview-Desktop",transform:"translate(-567.000000, -8460.000000)",stroke:"#04ddb2",strokeWidth:"3",children:e("g",{id:"Bottom",transform:"translate(-217.000000, 3973.000000)",children:e("g",{transform:"translate(163.000000, 3926.000000)",id:"Ship-it",children:e("g",{id:"Text",transform:"translate(247.000000, 206.000000)",children:e("g",{id:"Download",transform:"translate(0.000000, 352.000000)",children:e("g",{id:"arrow",transform:"translate(374.000000, 3.000000)",children:e("polyline",{transform:"translate(15.700000, 16.000000) rotate(-90.000000) translate(-15.700000, -16.000000) ",points:"9.2 13.5 15.7 18.5 22.2 13.5"})})})})})})})})]})]})})]}),e("div",{className:"absolute  -top-32  -left-64 sm:top-14 sm:left-[-10%] 2xl:top-20  2xl:left-[6%]",children:o("div",{className:"2XL:scale-100 relative m-auto h-[600px] w-full max-w-[1600px] scale-[0.64] sm:h-[1000px] sm:w-[1600px] sm:min-w-[1600px] sm:scale-[0.85] 2xl:scale-100",children:[e("div",{className:a+"bubble-container left-[1395px] top-[5px] delay-300",children:e("figure",{className:t+"bubble bg-[rgb(250,_202,_12)]",children:e(n.LazyLoadImage,{src:te,alt:"windows logo",effect:"blur",width:"90",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[-20px] top-[40px] delay-75",children:e("figure",{className:t+"bubble bg-[rgb(255,153,0)]",children:e(n.LazyLoadImage,{src:le,alt:"aws logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[1200px] top-[210px]",children:e("figure",{className:t+"bubble bg-[rgb(36,35,35)]",children:e(n.LazyLoadImage,{src:se,alt:"apple logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container  left-[65px] top-[320px] delay-300",children:e("figure",{className:t+"bubble bg-[rgb(255,209,1)]",children:e(n.LazyLoadImage,{src:oe,alt:"tflite logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[870px] top-[320px] delay-150",children:e("figure",{className:t+"bubble bg-[rgb(14,56,177)]",children:e(n.LazyLoadImage,{src:ie,alt:"framer logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[1450px] top-[340px] delay-150",children:e("figure",{className:t+"bubble bg-[rgb(229,75,75)]",children:e(n.LazyLoadImage,{src:re,alt:"google logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[345px] top-[380px] delay-100",children:e("figure",{className:t+"bubble bg-[rgb(0,137,214)]",children:e(n.LazyLoadImage,{src:me,alt:"azure logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[1100px] top-[480px]",children:e("figure",{className:t+"bubble bg-[rgb(4,221,178)]",children:e(n.LazyLoadImage,{src:de,alt:"arduino logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[625px] top-[485px] delay-200",children:e("figure",{className:t+"bubble bg-[rgb(134,75,255)]",children:e(n.LazyLoadImage,{src:ce,alt:"onnx logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[190px] top-[620px] delay-300",children:e("figure",{className:t+"bubble bg-[rgb(23,195,123)]",children:e(n.LazyLoadImage,{src:ne,alt:"python logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[1335px] top-[640px] delay-300",children:e("figure",{className:t+"bubble bg-[rgb(225,0,0)]",children:e(n.LazyLoadImage,{src:pe,alt:"raspberry logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[865px] top-[660px] delay-300",children:e("figure",{className:t+"bubble bg-[rgb(252,60,45)]",children:e(n.LazyLoadImage,{src:he,alt:"tensorflow logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[480px] top-[730px] delay-300",children:e("figure",{className:t+"bubble bg-[rgb(51,51,51)]",children:e(n.LazyLoadImage,{src:xe,alt:"unity logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})}),e("div",{className:a+"bubble-container left-[1130px] top-[840px] delay-300",children:e("figure",{className:t+"bubble bg-[rgb(167,187,195)]",children:e(n.LazyLoadImage,{src:ge,alt:"coreml logo",loading:"lazy",width:"90",effect:"blur",height:"90",className:l})})})]})})]})}function Ne(){return o("section",{className:"flex w-full flex-col bg-color-tertiary-bg",children:[e(be,{}),e(ee,{}),e(ae,{})]})}export{Ne as default};
