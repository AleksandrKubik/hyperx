"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{7401:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(2115);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let x=(0,a.forwardRef)((e,t)=>{let{color:s="currentColor",size:r=24,strokeWidth:x=2,absoluteStrokeWidth:n,className:c="",children:o,iconNode:d,...m}=e;return(0,a.createElement)("svg",{ref:t,...i,width:r,height:r,stroke:s,strokeWidth:n?24*Number(x)/Number(r):x,className:l("lucide",c),...m},[...d.map(e=>{let[t,s]=e;return(0,a.createElement)(t,s)}),...Array.isArray(o)?o:[o]])}),n=(e,t)=>{let s=(0,a.forwardRef)((s,i)=>{let{className:n,...c}=s;return(0,a.createElement)(x,{ref:i,iconNode:t,className:l("lucide-".concat(r(e)),n),...c})});return s.displayName="".concat(e),s}},9053:(e,t,s)=>{s.d(t,{A:()=>a});let a=(0,s(7401).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},6462:(e,t,s)=>{s.d(t,{A:()=>a});let a=(0,s(7401).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},3348:(e,t,s)=>{s.d(t,{A:()=>a});let a=(0,s(7401).A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]])},3502:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(5155),r=s(2115);let l=(0,s(7401).A)("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);var i=s(9053),x=s(6462),n=s(3348);let c=[{replies:5,price:0},{replies:20,price:20},{replies:50,price:50},{replies:100,price:100,topTierReplies:2},{replies:150,price:250,topTierReplies:5}];function o(){let[e,t]=(0,r.useState)(""),[s,o]=(0,r.useState)(null),[d,m]=(0,r.useState)(1),[h,p]=(0,r.useState)(""),[u,w]=(0,r.useState)(""),[b,g]=(0,r.useState)(""),j=null!==s?c[s]:null;return(0,a.jsx)("section",{id:"pricing",className:"py-12 xs:py-16 md:py-20",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"max-w-3xl mx-auto text-center mb-8 xs:mb-12",children:[(0,a.jsx)("h2",{className:"text-3xl xs:text-4xl md:text-5xl font-bold mb-3 xs:mb-4",children:(0,a.jsx)("span",{className:"text-[#1DA1F2] drop-shadow-lg",children:"Boost your tweet"})}),(0,a.jsx)("p",{className:"text-sm xs:text-base md:text-lg text-white/70",children:"Get instant engagement from real users and make your profile stand out"})]}),(0,a.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,a.jsxs)("div",{className:"glass-card bg-black/40 backdrop-blur-xl p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10",children:[1===d?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mb-6 xs:mb-8",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-3 flex items-center pointer-events-none",children:(0,a.jsx)(l,{className:"w-4 h-4 xs:w-5 xs:h-5 text-[#1DA1F2]"})}),(0,a.jsx)("input",{type:"url",placeholder:"Paste a link to your tweet on X, Telegram, or YouTube",className:"w-full pl-9 xs:pl-10 pr-4 py-2.5 xs:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#1DA1F2]/30 text-sm xs:text-base",value:e,onChange:e=>t(e.target.value)})]})}),(0,a.jsxs)("div",{className:"space-y-2 xs:space-y-3",children:[(0,a.jsx)("div",{className:"text-xs xs:text-sm font-medium text-white/80 mb-3 xs:mb-4",children:"CHOOSE PACK"}),c.map((e,t)=>(0,a.jsx)("label",{className:"block cursor-pointer group",children:(0,a.jsxs)("div",{className:"relative flex items-center justify-between p-3 xs:p-4 rounded-xl transition-all ".concat(s===t?"bg-white/10":"bg-white/5 hover:bg-white/8"),children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 xs:gap-3",children:[(0,a.jsx)("input",{type:"radio",name:"package",checked:s===t,onChange:()=>o(t),className:"w-4 h-4 border-2 border-white/20 text-[#1DA1F2] focus:ring-[#1DA1F2] focus:ring-offset-0 rounded-full"}),(0,a.jsxs)("span",{className:"flex flex-wrap items-center gap-1",children:[(0,a.jsx)("span",{className:"text-[#4CAF50] font-medium text-sm xs:text-base",children:e.replies}),(0,a.jsx)("span",{className:"text-white/90 text-sm xs:text-base",children:e.price>0?"Replies + Likes + RT":"Replies + Likes"}),e.topTierReplies&&e.price>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"text-white/50 mx-1",children:"+"}),(0,a.jsx)("span",{className:"text-[#4CAF50] font-medium text-sm xs:text-base",children:e.topTierReplies}),(0,a.jsx)("span",{className:"text-white/90 text-sm xs:text-base",children:"Replies from Top Tier Accounts"})]})]})]}),(0,a.jsx)("div",{className:"text-white font-medium text-sm xs:text-base ml-2 ".concat(0===e.price?"bg-green-500 p-2 rounded-lg":"text-white/50"),children:0===e.price?"FREE":"$".concat(e.price)})]})},t))]}),(0,a.jsx)("div",{className:"mt-6 xs:mt-8",children:(0,a.jsxs)("button",{onClick:()=>{if(!e){g("Please enter your tweet URL");return}if(null===s){g("Please select a package");return}let t=/x\.com/.test(e),a=/t\.me|telegram\.org/.test(e),r=/youtube\.com|youtu\.be/.test(e);if(!t&&!a&&!r){g("Please enter a valid URL for X, Telegram, or YouTube");return}g(""),m(2)},className:"w-full group px-6 xs:px-8 py-3 xs:py-4 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base flex items-center justify-center gap-2 hover:bg-[#1A91DA] transition-all shadow-xl shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30",children:["Get Boost",(0,a.jsx)(i.A,{className:"w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform"})]})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-white/70 mb-2 text-xs xs:text-sm",children:[(0,a.jsx)(l,{className:"w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#1DA1F2]"}),(0,a.jsx)("span",{children:"Tweet URL:"}),(0,a.jsx)("span",{className:"text-white truncate",children:e})]}),j&&(0,a.jsxs)("div",{className:"flex items-center gap-2 text-white/70 text-xs xs:text-sm",children:[(0,a.jsx)("span",{children:"Selected package:"}),(0,a.jsxs)("span",{className:"text-white",children:[j.replies," Replies + Likes",j.topTierReplies&&" + ".concat(j.topTierReplies," Top Tier Replies")," ($".concat(j.price,")")]})]})]}),(0,a.jsxs)("div",{className:"space-y-4 xs:space-y-6",children:[(0,a.jsx)("div",{className:"text-xs xs:text-sm font-medium text-white/80",children:"CONTACT DETAILS"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-3 xs:gap-4",children:[(0,a.jsxs)("button",{onClick:()=>p("email"),className:"flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl transition-all ".concat("email"===h?"bg-[#1DA1F2]/20 border-[#1DA1F2]/50 text-white":"bg-white/5 border-white/10 text-white/70 hover:bg-white/10"," border"),children:[(0,a.jsx)(x.A,{className:"w-4 h-4 xs:w-5 xs:h-5"}),(0,a.jsx)("span",{className:"text-sm xs:text-base",children:"Email"})]}),(0,a.jsxs)("button",{onClick:()=>p("telegram"),className:"flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl transition-all ".concat("telegram"===h?"bg-[#1DA1F2]/20 border-[#1DA1F2]/50 text-white":"bg-white/5 border-white/10 text-white/70 hover:bg-white/10"," border"),children:[(0,a.jsx)(n.A,{className:"w-4 h-4 xs:w-5 xs:h-5"}),(0,a.jsx)("span",{className:"text-sm xs:text-base",children:"Telegram"})]})]}),h&&(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"email"===h?"email":"text",placeholder:"email"===h?"Enter your email":"Enter your Telegram handle",className:"w-full px-4 py-2.5 xs:py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#1DA1F2]/30 text-sm xs:text-base",value:u,onChange:e=>w(e.target.value)})}),b&&(0,a.jsx)("div",{className:"text-red-500 text-xs xs:text-sm",children:b}),(0,a.jsxs)("button",{onClick:()=>{if(!h){g("Please select contact method");return}if(!u){g("Please enter your ".concat(h));return}null!==s&&(g(""),console.log({tweetUrl:e,package:c[s],contactMethod:h,contactValue:u}))},className:"w-full group px-6 xs:px-8 py-3 xs:py-4 bg-[#1DA1F2] rounded-xl text-white font-bold text-sm xs:text-base flex items-center justify-center gap-2 hover:bg-[#1A91DA] transition-all shadow-xl shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30",children:["Send Request",(0,a.jsx)(i.A,{className:"w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform"})]}),(0,a.jsx)("button",{onClick:()=>m(1),className:"w-full px-6 xs:px-8 py-3 xs:py-4 bg-transparent border border-white/10 rounded-xl text-white/70 font-medium text-sm xs:text-base hover:bg-white/5 transition-all",children:"Back to packages"})]})]}),1===d&&(0,a.jsx)("div",{className:"text-center mt-4 text-white/50 text-xs xs:text-sm",children:"No credit card required • Cancel anytime"}),b&&1===d&&(0,a.jsx)("div",{className:"mt-4 text-red-500 text-xs xs:text-sm text-center",children:b})]})})]})})}}}]);