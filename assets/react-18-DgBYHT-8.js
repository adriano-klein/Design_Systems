import{r as s}from"./index-WI1YhYyJ.js";import{r as l}from"./index-D8wlRbMj.js";import"./_commonjsHelpers-Cpj98o6Y.js";var u,a=l;u=a.createRoot,a.hydrateRoot;var n=new Map;function c(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var R=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var h=async(e,t,r)=>{let o=await p(t,r);if(c()){o.render(e);return}let{promise:i,resolve:m}=Promise.withResolvers();return o.render(s.createElement(R,{callback:m},e)),i},w=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},p=async(e,t)=>{let r=n.get(e);return r||(r=u(e,t),n.set(e,r)),r};export{h as renderElement,w as unmountElement};
