// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,e){async function k(){const {Marked:b}=await new Promise((a,c)=>h(["../../../chunks/marked.esm"],a,c)),l=()=>"",f={};for(const a of m)f[a]=l;d=new b({renderer:{del:function({text:a}){return`<span style="text-decoration:line-through;">${a}</span>`},link:function({href:a,text:c,title:g}){return`<a${null!=a?` href="${a}"`:""}${null!=g?` title="${g}"`:""} target="_blank">${c??""}</a>`},...f}})}let d;const m="blockquote html hr checkbox table tablerow tablecell image".split(" ");
e.compileTextElementMarkdownToHTML=async function(b){d||await k();return d.parse(b)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});