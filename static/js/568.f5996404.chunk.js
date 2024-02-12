"use strict";(self.webpackChunkchatgemini=self.webpackChunkchatgemini||[]).push([[568],{6568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var a=n(3424),s=n(328),l=n(1604),o=n(3556),r=n(4092),c=n(3760),i=(n(8408),n(8012));const d=async e=>{var t;const n=null!==(t=navigator.clipboard)&&void 0!==t?t:{writeText:e=>{const t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}};return!!n&&(n.writeText(e),!0)};var u=n(7803);const p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Date.now();return function(){if(Date.now()-n>=t){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];e.apply(null,s),n=Date.now()}}};var m=n(9584);const h=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];clearTimeout(t),t=setTimeout((()=>{e.apply(this,s)}),n)}},g=(e,t)=>Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((n=>Object.prototype.hasOwnProperty.call(t,n)&&e[n]===t[n]));var y=n(1984);var x=n(6596),v=n(7884);const f="\ud83d\ude08 [TRACE]",b="\n".concat("\ud83d\ude80 [DEBUG]"," Running Python Script..."),w="\u275a",k="[user@".concat(Math.random().toString(16).slice(-12)," ~]$ "),j=e=>{const{t:t}=(0,x.Gy)(),{className:n,typingEffect:a,pythonRepoUrl:j,pythonRuntime:C,onPythonRuntimeCreated:N,children:_}=e,[S,T]=(0,m.useState)({result:"",startPos:null,endPos:null}),P=p((async(e,n)=>{const a=await d(e),s=n.innerText;n.innerText=t(a?"components.Markdown.handleCopyCode.copy_success":"components.Markdown.handleCopyCode.copy_failed"),setTimeout((()=>{n.innerText=s}),1e3)}),1200),R=e=>T((t=>{let n=t.result.replace(b,"");return n.includes(f)&&(n=n.split("\n").filter((e=>!e.includes(f))).join("\n")),{...t,result:"".concat(n,"\n").concat(e)}})),D=(e,t)=>T((n=>{let{result:a}=n;return a+=t?"\n".concat("\ud83e\udd2c [ERROR]"," ").concat(e):"\n".concat(f," ").concat(e),{...n,result:a}})),E=()=>T((e=>{let{result:t}=e;return t+="\n".concat(k).concat(w),{...e,result:t}})),z=h((async(e,t,n,a)=>{a.disabled=!0,T({result:"".concat(k,"python3 ").concat("script.py").concat(b),startPos:e,endPos:t});let s=C;s||(s=await(async e=>{const t=await(0,y.m)({indexURL:e,homedir:"/home/user"});return await t.runPythonAsync("\nfrom js import prompt\ndef input(p):\n    return prompt(p)\n__builtins__.input = input\n"),t})(j),N(s)),await(async(e,t,n,a,s,l,o)=>{const r=[{keyword:"numpy",package:"numpy"},{keyword:"pydantic",package:"pydantic"},{keyword:"pydecimal",package:"decimal"},{keyword:"asciitree",package:"asciitree"},{keyword:"dateutil",package:"python-dateutil"},{keyword:"yaml",package:"pyyaml"},{keyword:"docutils",package:"docutils"},{keyword:"jsonschema",package:"jsonschema"},{keyword:"pytz",package:"pytz"},{keyword:"lxml",package:"lxml"},{keyword:"cryptography",package:"cryptography"},{keyword:"Crypto",package:"pycryptodome"},{keyword:"nacl",package:"pynacl"},{keyword:"regex",package:"regex"},{keyword:"hashlib",package:"hashlib"},{keyword:"typing",package:"typing"}];try{e.setStdout({batched:n}),e.setStderr({batched:a});const l=r.filter((e=>{let{keyword:n}=e;return t.includes("import ".concat(n))||t.includes("from ".concat(n))})).map((e=>{let{package:t}=e;return t}));l.length&&await e.loadPackage(l,{errorCallback:e=>s(e,!0),messageCallback:e=>s(e,!1)}),await e.runPythonAsync(t)}catch(c){let e=String(c);e.endsWith("\n")&&(e=e.slice(0,-1)),l(e)}finally{o()}})(s,n,R,R,D,R,E),a.disabled=!1}),300);return(0,m.useEffect)((()=>{T({result:"",startPos:null,endPos:null})}),[t,_]),(0,v.jsx)(s.I,{className:"prose text-sm lg:prose-base max-w-[100%] break-words ".concat(null!==n&&void 0!==n?n:""),children:_,components:{a:e=>{let{node:t,...n}=e;return(0,v.jsx)("a",{href:n.href,target:"_blank",rel:"noreferrer",...n,children:n.children})},pre:e=>{let{node:t,...n}=e;return(0,v.jsx)("pre",{className:"bg-transparent p-2",...n})},code:e=>{var n,s,l,o,r,c;let{className:d,children:p,node:m}=e;const h=/language-(\w+)/.exec(null!==d&&void 0!==d?d:""),y=null!==h?h[1]:"",x=(p?String(p):w).replace(a,w),f=null!==(n=null===m||void 0===m||null===(s=m.position)||void 0===s?void 0:s.start)&&void 0!==n?n:null,b=null!==(l=null===m||void 0===m||null===(o=m.position)||void 0===o?void 0:o.end)&&void 0!==l?l:null;return h?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.c,{PreTag:"div",style:u.c,language:y,showLineNumbers:!0,lineNumberStyle:{opacity:.5},children:x.replace(/\n$/,"")}),(0,v.jsxs)("div",{className:"flex gap-2",children:[(0,v.jsx)("button",{className:"text-gray-700/100 text-xs hover:opacity-50",onClick:e=>{let{currentTarget:t}=e;return P(x,t)},children:t("components.Markdown.copy_code")}),!x.includes(w)&&"python"===y&&(0,v.jsx)("button",{className:"text-gray-700/100 text-xs hover:opacity-50",onClick:e=>{let{currentTarget:t}=e;return z(f,b,x,t)},children:t("components.Markdown.run_script")})]}),g(null!==(r=S.startPos)&&void 0!==r?r:{},null!==f&&void 0!==f?f:{})&&g(null!==(c=S.endPos)&&void 0!==c?c:{},null!==b&&void 0!==b?b:{})&&!!S.result.length&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.c,{language:"shell",PreTag:"div",style:u.c,children:S.result.replace(/\n$/,"")}),(0,v.jsxs)("div",{className:"flex gap-2",children:[(0,v.jsx)("button",{className:"text-gray-700/100 text-xs hover:opacity-50",onClick:e=>{let{currentTarget:t}=e;return P(S.result,t)},children:t("components.Markdown.copy_result")}),(0,v.jsx)("button",{className:"text-gray-700/100 text-xs hover:opacity-50",onClick:()=>T({result:"",startPos:null,endPos:null}),children:t("components.Markdown.close_window")})]})]})]}):(0,v.jsx)("code",{className:"text-gray-700",children:x.replace(/\n$/,"")})},table:e=>{let{node:t,...n}=e;return(0,v.jsx)("table",{className:"overflow-x-auto block whitespace-nowrap",...n})}},urlTransform:e=>e,rehypePlugins:[o.c,c.c],remarkPlugins:[l.c,r.c]})};const C=n.p+"static/media/wand-magic-sparkles-solid.b85c9c00c06c7ce7f5afa005c270a4e2.svg";const N=n.p+"static/media/user-regular.29db6a1f607a24b769df338cded3a768.svg";const _=n.p+"static/media/pen-to-square-solid.323a05100783991ea833e21daa2c0798.svg";const S=n.p+"static/media/trash-solid.65e8f8fd4029e1db2f655e77aab432af.svg";const T=n.p+"static/media/arrows-rotate-solid.814c55263931133090f94e8a0e4d3c9b.svg";const P=n.p+"static/media/clipboard-regular.087182556a42a3609963076f55a76062.svg";var R=n(3996),D=n(2816);let E=function(e){return e.Model="model",e.User="user",e}({}),z=function(e){return e[e.Edit=0]="Edit",e[e.Done=1]="Done",e[e.Cancel=2]="Cancel",e}({});const M=e=>{const{t:t}=(0,x.Gy)(),{index:n,prompt:a,postscript:s,editState:l,role:o,children:r,onEdit:c,onDelete:i,onRefresh:u}=e,p=(0,m.useRef)(null);return(0,v.jsxs)("div",{className:"p-5 mb-3 mr-3 space-y-3 rounded-lg hover:bg-gray-100 transition-all",children:[(0,v.jsxs)("div",{className:"flex items-center",children:[(0,v.jsxs)("div",{className:"size-6 rounded-full flex justify-center items-center ".concat(o===E.Model?"bg-purple-600":"bg-lime-700"),children:[(0,v.jsx)("img",{className:o===E.Model?"size-3":"hidden",src:C,alt:""}),(0,v.jsx)("img",{className:o===E.User?"size-3":"hidden",src:N,alt:""})]}),(0,v.jsx)("span",{className:"ml-2 font-semibold text-gray-800/100",children:o===E.Model?t("components.Session.role_model"):t("components.Session.role_user")})]}),(0,v.jsx)("div",{className:"px-7",children:l.state===z.Edit&&n===l.index?(0,v.jsxs)("div",{className:"flex flex-col space-y-2 lg:text-base text-sm",children:[(0,v.jsx)("textarea",{className:"bg-transparent text-gray-800 rounded-lg p-2 overflow-y-scroll resize-none !outline-none",placeholder:"...",defaultValue:a,ref:p,onInput:e=>{let{currentTarget:t}=e;return(0,R.S)(t,60,200)}}),(0,v.jsxs)("div",{className:"flex gap-2 justify-center",children:[(0,v.jsx)("button",{className:"px-3 py-2 border font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700",onClick:()=>{const{current:e}=p,{value:t}=e;c(n,z.Done,t!==a?t:"")},children:t("components.Session.submit_button")}),(0,v.jsx)("button",{className:"px-3 py-2 border font-medium rounded-lg hover:bg-gray-300",onClick:()=>c(n,z.Cancel,""),children:t("components.Session.cancel_button")})]})]}):(0,v.jsx)(v.Fragment,{children:r})}),(0,v.jsxs)("div",{className:"flex ml-6 gap-1",children:[(0,v.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:async()=>{let e=r.props.children;s&&(e=e.replace(s,""));await d(e)?(0,D.I)(t("components.Session.handleCopy.copy_success")):(0,D.I)(t("components.Session.handleCopy.copy_failed"),!0)},children:(0,v.jsx)("img",{src:P,className:"size-4",alt:""})}),o===E.User&&l.state!==z.Edit&&(0,v.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:()=>c(n,z.Edit,""),children:(0,v.jsx)("img",{src:_,className:"size-4",alt:""})}),o===E.Model&&(0,v.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:()=>u(n),children:(0,v.jsx)("img",{src:T,className:"size-4",alt:""})}),o===E.Model&&1!==n&&(0,v.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:()=>i(n),children:(0,v.jsx)("img",{src:S,className:"size-4",alt:""})})]})]})};var O=n(3948),U=n(708),W=n(9224),A=n(3544),I=n(3440),F=n(3420),G=n(8572),L=n(4916);var $=n(6137);n(6588);const B=e=>{const{delegate:t,options:n,children:a}=e;return(0,m.useEffect)((()=>($.gx.bind(null!==t&&void 0!==t?t:"[data-image-view]",n),()=>$.gx.destroy())),[t,n]),(0,v.jsx)(v.Fragment,{children:a})};var q=n(6848),H=n(4376);const V=e=>{var t,n;const{t:s}=(0,x.Gy)(),l=s("views.Chat.view_attachment"),o=s("views.Chat.refresh_placeholder"),r=s("views.Chat.invalid_placeholder"),c=null!==(t=null===(n=e.refs)||void 0===n?void 0:n.mainSectionRef.current)&&void 0!==t?t:null,{site:i}=F.globalConfig.title,{mode:d,basename:u}=H.routerConfig,p=(0,O.OY)(),h=(0,O.w1)((e=>e.sessions.sessions)),g=(0,O.w1)((e=>e.ai.ai)),{id:y}=(0,a.W4)(),[f,b]=(0,m.useState)([]),[w,k]=(0,m.useState)({index:0,state:z.Cancel}),[C,N]=(0,m.useState)({}),[_,S]=(0,m.useState)(null),T=e=>S(e),P=(0,m.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(g.busy||e)&&(null===c||void 0===c?void 0:c.scrollTo({top:c.scrollHeight,behavior:"smooth"}))}),[g,c]),R=async(e,t)=>{const n=null!==t&&void 0!==t?t:h;if(!g.busy&&y&&y in n){var a;let t={...n,[y]:[...n[y].slice(0,e),{role:"model",parts:o,timestamp:Date.now()}]};p((0,U.Wy)({...g,busy:!0})),p((0,W.Wy)(t));const s=(n,a)=>{a&&p((0,U.Wy)({...g,busy:!1}));const s=t[y][e].parts!==o?t[y][e].parts:"",l=Date.now();t={...t,[y]:[...t[y].slice(0,e),{role:"model",parts:"".concat(s).concat(n),timestamp:l}]},b(t[y]),p((0,W.Wy)(t))};null!==(a=t[y][e-1].attachment)&&void 0!==a&&a.data.length?await(0,L.g)(g.model.vision,t[y][e-1].parts,t[y][e-1].attachment,F.globalConfig.sse,s):await(0,A.W)(g.model.pro,t[y].slice(0,e-1),t[y][e-1].parts,F.globalConfig.sse,I.W,s)}else g.busy&&(0,D.I)(s("views.Chat.handleRefresh.not_available"),!0)},$=(e,t,n)=>{if(g.busy||k({index:e,state:t}),!g.busy&&y&&y in h&&n.length&&t===z.Done){const t={...h,[y]:[...h[y].slice(0,e),{...h[y][e],parts:n},{role:"model",parts:o,timestamp:Date.now()}]};b(t[y]),R(e+1,t)}else g.busy&&(0,D.I)(s("views.Chat.handleEdit.not_available"),!0)},V=e=>{!g.busy&&y&&y in h?(0,q.O)(s("views.Chat.handleDelete.confirm_message"),{title:s("views.Chat.handleDelete.confirm_title"),confirmText:s("views.Chat.handleDelete.confirm_button"),cancelText:s("views.Chat.handleDelete.cancel_button"),onConfirmed:()=>{const t={...h,[y]:[...h[y].slice(0,e-1),...h[y].slice(e+1)]};p((0,W.Wy)(t)),b(t[y])}}):g.busy&&(0,D.I)(s("views.Chat.handleDelete.not_available"),!0)};return(0,m.useEffect)((()=>{if(y&&y in h){var e;b(h[y]);let t=null!==(e=h[y][0].title)&&void 0!==e?e:h[y][0].parts;t.length>20&&(t="".concat(t.substring(0,20)," ...")),document.title="".concat(t," | ").concat(i)}else document.title=i,b([{role:"model",parts:r,timestamp:0}]);setTimeout((()=>P(!0)),300)}),[s,i,y,h,c,P]),(0,v.jsx)(G.q,{className:"max-w-[calc(100%)] py-5 pl-3 mb-auto mx-1 md:mx-[4rem] lg:mx-[8rem]",children:(0,v.jsx)(B,{children:f.map(((e,t)=>{let{role:n,parts:a,attachment:s,timestamp:o}=e;const{mimeType:r,data:c}=null!==s&&void 0!==s?s:{mimeType:"",data:""};let i="";c.length&&o in C?i=C[o]:c.length&&(i=(e=>{try{let t="image/png";if(e.indexOf("data:image")>=0){let n=e.split(",");t=n[0].match(/:(.*?);/)[1]||"image/png",e=n[1]}let n=window.atob(e),a=new ArrayBuffer(n.length),s=new Uint8Array(a);for(let e=0;e<n.length;e++)s[e]=n.charCodeAt(e);let l=new Blob([a],{type:t});return URL.createObjectURL(l)}catch(t){return""}})("data:".concat(r,";base64,").concat(c)),N((e=>({...e,[o]:i}))));const p='\n\n---\n\n<div class="inline-block text-center overflow-hidden">\n                        <a data-image-view="gallery" href="'.concat(i,'">\n                            <img src="').concat(i,'" style="\n                                max-width: 10rem;\n                                margin-top: 0;\n                                margin-bottom: 0.2rem;\n                                border-radius: 0.25rem;\n                            " alt="" />\n                        </a>\n                        <span class="text-xs text-gray-400">\n                            ').concat(l,"\n                        </span>\n                    </div>"),m='<div class="inline px-1 bg-gray-900 animate-pulse animate-duration-700"></div>';return g.busy&&n===E.Model&&t===f.length-1&&(a+=m),(0,v.jsx)(M,{index:t,prompt:a,editState:w,role:n,onRefresh:R,onDelete:V,onEdit:$,postscript:c.length?p:"",children:(0,v.jsx)(j,{typingEffect:m,pythonRuntime:_,onPythonRuntimeCreated:T,pythonRepoUrl:"".concat("hash"===d?window.location.pathname:u,"pyodide"),children:"".concat(a).concat(c.length?p:"")})},t)}))})})}}}]);