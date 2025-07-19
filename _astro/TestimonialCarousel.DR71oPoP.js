import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{C as g}from"./Carousel.DFGN-vhu.js";import{A as b,m as x,B as c}from"./proxy.uz5Qyhfu.js";import{r as n}from"./index.BJfUAbRs.js";/* empty css                       */import"./ArrowIcon.BnJ6VsCa.js";const j=({item:t,onClick:s})=>{const{image:o,name:a}=t;return e.jsxs("div",{className:`bg-white rounded-xl shadow-md flex flex-col justify-center items-center p-4 justify-self-center w-full gap-y-9 
        sm:h-[85%]
        hover:scale-110 transition duration-400 ease-in-out overflow-hidden`,children:[e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("div",{className:`w-[90%] overflow-hidden rounded-2xl\r
          xl:h-40 2xl:h-50 3xl:h-60`,children:e.jsx("img",{src:o,alt:"",className:"w-full h-full object-cover"})}),e.jsx("h2",{className:"mt-4 text-lg font-semibold text-gray-800 2xl:text-xl",children:a})]}),e.jsx("button",{onClick:s,className:`uppercase cursor-pointer font-bold mt-4 px-10 py-2 bg-mika-primary text-white rounded-lg text-base\r
            hover:bg-mika-primary/80 transform hover:scale-110 active:scale-95 transition duration-300 ease-in-out\r
            2xl:text-lg`,children:"Leer"})]})};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,a)=>a?a.toUpperCase():o.toLowerCase()),u=t=>{const s=v(t);return s.charAt(0).toUpperCase()+s.slice(1)},h=(...t)=>t.filter((s,o,a)=>!!s&&s.trim()!==""&&a.indexOf(s)===o).join(" ").trim(),k=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:i="",children:l,iconNode:m,...r},d)=>n.createElement("svg",{ref:d,...C,width:s,height:s,stroke:t,strokeWidth:a?Number(o)*24/Number(s):o,className:h("lucide",i),...!l&&!k(r)&&{"aria-hidden":"true"},...r},[...m.map(([f,w])=>n.createElement(f,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(t,s)=>{const o=n.forwardRef(({className:a,...i},l)=>n.createElement(N,{ref:l,iconNode:s,className:h(`lucide-${y(u(t))}`,`lucide-${t}`,a),...i}));return o.displayName=u(t),o};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S=p("chevron-down",A);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],M=p("chevron-up",B),E=({visible:t,name:s,content:o})=>e.jsx(b,{children:t&&e.jsxs(x.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},exit:{opacity:0,y:40},transition:{duration:.4,ease:"easeInOut"},className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-6 flex flex-col justify-end rounded-xl text-sm xs:text-base md:text-lg",children:[e.jsxs(x.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"overflow-y-auto max-h-[200px] text-justify scrollbar-thin-white",children:['"',o,'"']}),e.jsxs(x.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"mt-4 text-right",children:["- ",s]})]})}),L={description:"",image:"",name:""},P=({onClose:t,item:s,ref:o})=>{const[a,i]=n.useState(!0),{image:l,name:m,description:r}=s??L;return e.jsx("dialog",{ref:o,onCancel:t,children:e.jsx("div",{className:"fixed w-[100dvw] h-[100dvh] bg-black/50 bg-opacity-70 flex justify-center items-center",children:e.jsxs("div",{className:"relative rounded-xl max-w-full min-w-[40%] mx-2 overflow-hidden",children:[e.jsx("img",{src:l,alt:"",className:"w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"}),e.jsx(E,{content:r,name:m,visible:a}),e.jsx("button",{onClick:t,className:"absolute top-2 right-2 z-20 text-white text-2xl font-bold bg-black/60 hover:bg-black/80 px-3 py-1 cursor-pointer rounded-xl",children:"×"}),e.jsx("button",{onClick:()=>i(!a),className:"absolute bottom-4 left-[50%] -translate-x-[50%] z-20 text-sm px-3 py-1 rounded bg-black/80 cursor-pointer text-white shadow",children:a?e.jsx(S,{className:"w-5 h-5"}):e.jsx(M,{className:"w-5 h-5"})})]})})})},R=({length:t})=>e.jsx("div",{className:"absolute top-[50%] left-[50%] -translate-[50%] flex gap-4 w-full h-[70%] px-2",children:Array.from({length:t}).map((s,o)=>e.jsxs("div",{className:"min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] bg-white shadow-md rounded-xl p-4 h-full animate-pulse flex flex-col justify-between",children:[e.jsx("div",{className:"h-24 bg-gray-300 rounded mb-4"}),e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2"})]},`skeleton-slide-${o}`))}),U=({data:t})=>{const[s,o]=n.useState(null),a=n.useRef(null),i=r=>{o(r),a.current?.showModal()},l=()=>a.current?.close(),m=r=>{const d=t[r];return e.jsx(j,{item:d,onClick:()=>i(d)})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{className:"flex justify-center h-[70%] w-full xs:w-[70%] sm:mt-5 sm:w-full 3xl:mt-10 3xl:h-[60%]",builder:m,length:t.length,responsiveViews:[1,2,3],fallback:e.jsx(R,{length:t.length}),responsiveBreakpoints:[c.SM,c.LG],showArrowsPerBreakpoint:r=>[c.ZERO,c.SM].includes(r),autoplayPerBreakpoint:r=>[c.ZERO,c.SM].includes(r),prevButtonClass:"-left-8 text-mika-primary",nextButtonClass:"-right-8 text-mika-primary",showOverflow:!0}),e.jsx(P,{ref:a,onClose:l,item:s})]})};export{U as default};
