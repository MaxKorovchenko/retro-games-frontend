"use strict";(self.webpackChunkfrontend_retro_games=self.webpackChunkfrontend_retro_games||[]).push([[269],{269:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s(154),a=s(43),n=s(579);r.A.defaults.baseURL="https://retro-games-backend.onrender.com";const c=()=>{const[e,t]=(0,a.useState)([]);(0,a.useEffect)((()=>{(async()=>{const{data:e}=await r.A.get("/api/games");t(e)})()}),[]);const s=e.filter((e=>"8-bit"===e.platform));return(0,n.jsx)("ul",{children:s.map((e=>{let{_id:t,title:s}=e;return(0,n.jsx)("li",{children:s},t)}))})},d=()=>(0,n.jsx)("div",{children:(0,n.jsx)(c,{})})}}]);
//# sourceMappingURL=269.0332f790.chunk.js.map