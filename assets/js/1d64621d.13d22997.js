"use strict";(self.webpackChunkpycodebook=self.webpackChunkpycodebook||[]).push([[7586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},i="GIL",l={unversionedId:"\u77e5\u8bc6\u70b9/GIL",id:"\u77e5\u8bc6\u70b9/GIL",title:"GIL",description:"\u4ec0\u4e48\u662fGIL",source:"@site/docs/\u77e5\u8bc6\u70b9/GIL.md",sourceDirName:"\u77e5\u8bc6\u70b9",slug:"/\u77e5\u8bc6\u70b9/GIL",permalink:"/docs/\u77e5\u8bc6\u70b9/GIL",draft:!1,editUrl:"https://github.com/ZhengqiaoWang/pycodebook/tree/master/docs/\u77e5\u8bc6\u70b9/GIL.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u77e5\u8bc6\u70b9",permalink:"/docs/category/\u77e5\u8bc6\u70b9"},next:{title:"\u591a\u7ebf\u7a0b",permalink:"/docs/\u77e5\u8bc6\u70b9/\u591a\u7ebf\u7a0b"}},p={},c=[{value:"\u4ec0\u4e48\u662fGIL",id:"\u4ec0\u4e48\u662fgil",level:2},{value:"\u4e3a\u4ec0\u4e48\u662fGIL",id:"\u4e3a\u4ec0\u4e48\u662fgil",level:2},{value:"GIL\u7684\u5de5\u4f5c\u539f\u7406",id:"gil\u7684\u5de5\u4f5c\u539f\u7406",level:2}],d={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gil"},"GIL"),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662fgil"},"\u4ec0\u4e48\u662fGIL"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GIL"),"\uff0c\u5373\u5168\u5c40\u89e3\u91ca\u5668\u9501(Global Interpreter Lock)\uff0c\u8fd9\u662f\u4e00\u4e2a\u8ba9\u4eba\u53c8\u7231\u53c8\u6068\u7684\u673a\u5236\uff0c\u6709\u4e86\u5b83\uff0c\u521d\u5b66\u8005\u4eec\u53ef\u4ee5\u653e\u5fc3\u5927\u80c6\u5730\u4f7f\u7528Python\u800c\u65e0\u9700\u53bb\u62c5\u5fc3\u5404\u79cd\u5185\u5b58\u95ee\u9898\uff0c\u4f46\u540c\u6837\u662f\u56e0\u4e3a\u5b83\uff0c\u8ba9\u5f00\u53d1\u8005\u6709\u4e86\u66f4\u591a\u7684\u70e6\u607c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u8fdb\u884c\u771f\u6b63\u6709\u6548\u7684\u5e76\u884c\u64cd\u4f5c"),(0,o.kt)("li",{parentName:"ul"},"\u7f16\u5199\u4e00\u4e9bPython\u7684\u4e09\u65b9\u5e93\u65f6\u4e0d\u5f97\u4e0d\u8003\u8651",(0,o.kt)("inlineCode",{parentName:"li"},"GIL"),"\u7684\u590d\u6742\u573a\u666f")),(0,o.kt)("p",null,"\u5728\u5b98\u65b9\u7684\u6587\u6863\u4e2d\uff0c\u662f\u8fd9\u6837\u89e3\u91ca",(0,o.kt)("inlineCode",{parentName:"p"},"GIL"),"\u7684\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"(GIL\u662f)CPython \u89e3\u91ca\u5668\u6240\u91c7\u7528\u7684\u4e00\u79cd\u673a\u5236\uff0c\u5b83\u786e\u4fdd\u540c\u4e00\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u5728\u6267\u884c Python bytecode(\u5b57\u8282\u7801\uff0c\u5728Python\u6267\u884c\u65f6\u5c06\u6e90\u7801\u7f16\u8bd1\u4e3a\u5b57\u8282\u7801)\u3002\u6b64\u673a\u5236\u901a\u8fc7\u8bbe\u7f6e\u5bf9\u8c61\u6a21\u578b\uff08\u5305\u62ec dict \u7b49\u91cd\u8981\u5185\u7f6e\u7c7b\u578b\uff09\u9488\u5bf9\u5e76\u53d1\u8bbf\u95ee\u7684\u9690\u5f0f\u5b89\u5168\u7b80\u5316\u4e86 CPython \u5b9e\u73b0\u3002\u7ed9\u6574\u4e2a\u89e3\u91ca\u5668\u52a0\u9501\u4f7f\u5f97\u89e3\u91ca\u5668\u591a\u7ebf\u7a0b\u8fd0\u884c\u66f4\u65b9\u4fbf\uff0c\u5176\u4ee3\u4ef7\u5219\u662f\u727a\u7272\u4e86\u5728\u591a\u5904\u7406\u5668\u4e0a\u7684\u5e76\u884c\u6027\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u4e0d\u8fc7\uff0c\u4e00\u4e9b\u9644\u52a0\u6a21\u5757\uff0c\u4f8b\u5982\u4e00\u4e9b\u6807\u51c6\u6216\u7b2c\u4e09\u65b9\u5e93\u4e2d\u4f1a\u5728\u8ba1\u7b97\u5bc6\u96c6\u578b\u4efb\u52a1\u4e2d\u91ca\u653eGIL\u9501\uff0c\u4e3e\u4e24\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\u538b\u7f29\u548c\u54c8\u5e0c\u3002\u9664\u6b64\u4e4b\u5916\uff0cGIL\u4e5f\u7ecf\u5e38\u5728IO\u64cd\u4f5c\u65f6\u91ca\u653e\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u521b\u5efa\u4e00\u4e2a\uff08\u4ee5\u66f4\u7cbe\u7ec6\u7c92\u5ea6\u6765\u9501\u5b9a\u5171\u4eab\u6570\u636e\u7684\uff09\u201c\u81ea\u7531\u7ebf\u7a0b\u201d\u89e3\u91ca\u5668\u7684\u52aa\u529b\u4ece\u672a\u83b7\u5f97\u6210\u529f\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u727a\u7272\u5728\u666e\u901a\u5355\u5904\u7406\u5668\u60c5\u51b5\u4e0b\u7684\u6027\u80fd\u3002\u636e\u4fe1\u514b\u670d\u8fd9\u79cd\u6027\u80fd\u95ee\u9898\u7684\u63aa\u65bd\u5c06\u5bfc\u81f4\u5b9e\u73b0\u53d8\u5f97\u66f4\u590d\u6742\uff0c\u4ece\u800c\u66f4\u96be\u4ee5\u7ef4\u62a4\u3002")),(0,o.kt)("p",null,"\u662f\u4e0d\u662f\u542c\u8d77\u6765\u4e00\u5934\u96fe\u6c34\uff1f"),(0,o.kt)("p",null,"\u7b80\u5355\u7684\u6765\u8bf4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"GIL"),"\u7684\u4f5c\u7528\u662f\u5728\u4f7f\u7528\u591a\u7ebf\u7a0b\u65f6\u4fdd\u8bc1\u540c\u65f6\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u3002\u5982\u6b64\u4e00\u6765\uff0c\u4fdd\u8bc1\u4e86\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u64cd\u4f5c\u540c\u4e00\u4e2a\u5bf9\u8c61\u65f6\u7684\u5404\u79cd\u8bfb\u5199\u95ee\u9898\uff0c\u5373\u5728\u540c\u4e00\u65f6\u523b\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u8bfb\u5199\u64cd\u4f5c\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u662fgil"},"\u4e3a\u4ec0\u4e48\u662fGIL"),(0,o.kt)("p",null,"\u81f3\u4e8e\u8bf4\u4e3a\u4ec0\u4e48Python\u9009\u62e9",(0,o.kt)("inlineCode",{parentName:"p"},"GIL"),"\uff0c\u6211\u89c9\u5f97\u53ef\u80fd\u6709\u51e0\u4e2a\u65b9\u9762\u539f\u56e0\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u8c61\u91c7\u7528\u5f15\u7528\u8ba1\u6570\u7684\u65b9\u5f0f\u5224\u5b9a\u662f\u5426\u9500\u6bc1(Python GC\u7684\u673a\u5236)\uff0c\u8fd9\u6837\u5c31\u610f\u5473\u7740\u591a\u7ebf\u7a0b\u5904\u7406\u5f15\u7528\u8ba1\u6570\u65f6\u5f88\u96be\u517c\u987e\u6027\u80fd\u548c\u51c6\u786e\u6027\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u6613\u7528\u6027\u548c\u6027\u80fd\u4e0a\u53d6\u820d\u3002\u5bf9\u4e8e\u6709",(0,o.kt)("inlineCode",{parentName:"li"},"GIL"),"\u7684Python\u7684\u5165\u95e8\u95e8\u69db\u4f1a\u5927\u5927\u964d\u4f4e\uff0c\u751a\u81f3\u4e00\u540d\u5c0f\u5b66\u751f\u90fd\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u7406\u89e3\u5e76\u5199\u51fa\u4e00\u4e2aPython\u7a0b\u5e8f\u3002\u800cPython\u7edd\u5927\u591a\u6570\u573a\u666f\u4e0b\u662f\u65e0\u9700\u8fc7\u5206\u5173\u6ce8\u6027\u80fd\u7684\uff0c\u5373\u4f7f\u662f\u6709\u6027\u80fd\u573a\u666f\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u7684\u65b9\u5f0f\u89e3\u51b3\uff1a\u4f8b\u5982\u7528C\u6765\u5199\uff0cPython\u6765\u8c03\u7528\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u517c\u5bb9\u975e\u7ebf\u7a0b\u5b89\u5168\u7684C\u5e93\uff0c\u5982\u6b64\u4e00\u6765\uff0cPython\u7684\u751f\u6001\u5efa\u7acb\u95e8\u69db\u4f1a\u5927\u5927\u964d\u4f4e\u3002")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"/docs/%E7%9F%A5%E8%AF%86%E7%82%B9/GC"},"\u77e5\u8bc6\u70b9\uff1aGC"))),(0,o.kt)("h2",{id:"gil\u7684\u5de5\u4f5c\u539f\u7406"},"GIL\u7684\u5de5\u4f5c\u539f\u7406"),(0,o.kt)("p",null,"\u5728\u7406\u89e3GIL\u7684\u5de5\u4f5c\u539f\u7406\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u9a8c\u3002\u5f53\u7136\uff0c\u4f60\u65e0\u9700\u7acb\u523b\u7406\u89e3\u4e0b\u9762\u8fd9\u90e8\u5206\u4ee3\u7801\u7684\u5177\u4f53\u542b\u4e49\uff0c\u56e0\u4e3a\u6211\u4f1a\u4ecb\u7ecd\u5b83\u7684\u5de5\u4f5c\u5185\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import threading  # \u5f15\u7528\u4e86\u591a\u7ebf\u7a0b\u5e93\nimport time  # \u5f15\u7528\u4e86\u65f6\u95f4\u5e93\n\n# \u8fd9\u662f\u4e00\u4e2a\u7ebf\u7a0b\u51fd\u6570\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u51fd\u6570\u7684\u4f5c\u7528\u662f\u6bcf\u96941\u79d2\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u4e00\u6b21\n\n\ndef thread_func(thread_id):\n    for i in range(3):\n        print("thread_id:", thread_id, "count:", i)\n        time.sleep(1)\n\n\nth_list = []  # \u8fd9\u662f\u4e00\u4e2a\u5217\u8868\uff0c\u5728\u8fd9\u91cc\u6211\u7528\u6765\u5b58\u653e\u5404\u4e2a\u7ebf\u7a0b\u5bf9\u8c61\nfor t in range(3):\n    th = threading.Thread(target=thread_func, args=(t,)\n                          )  # \u521b\u5efa3\u4e2a\u7ebf\u7a0b\uff0cthread_id\u5206\u522b\u4e3a0,1,2\n    th.start()\n    th_list.append(th)\n\nfor th in th_list:  # \u904d\u5386\u7ebf\u7a0b\u5217\u8868\uff0c\u7136\u540e\u7b49\u5f85\u6bcf\u4e2a\u7ebf\u7a0b\u7ec8\u6b62\n    th.join()\n')),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u6ce8\u91ca\u4e2d\uff0c\u6211\u4e5f\u5c3d\u53ef\u80fd\u8be6\u5c3d\u5730\u4ecb\u7ecd\u4e86\u6bcf\u6bb5\u4ee3\u7801\u7684\u5177\u4f53\u529f\u80fd\uff0c\u7b80\u800c\u8a00\u4e4b\uff0c\u5c31\u662f\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5f00\u542f3\u4e2a\u7ebf\u7a0b\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u6bcf\u96941\u79d2\u8f93\u51fa\u4e00\u6b21\u5230\u63a7\u5236\u53f0\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u8f93\u51fa3\u6b21\u3002")),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8fd0\u884c\u4e00\u4e0b\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"thread_id: 0 count: 0\nthread_id: 1 count: 0\nthread_id: 2 count: 0\nthread_id: 0 count: 1\nthread_id: 2 count: 1\nthread_id: 1 count: 1\nthread_id: 2 count: 2\nthread_id: 1 count: 2\nthread_id: 0 count: 2\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\u4f60\u7684\u63a7\u5236\u53f0\u7ed3\u679c\u4e0e\u6211\u7684\u4e0d\u592a\u76f8\u540c\uff1f\u6ca1\u6709\u5173\u7cfb\uff0c\u8fd9\u662f\u6b63\u5e38\u7684\u73b0\u8c61\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u770b\u5230\uff0c\u5373\u4fbf\u6211\u4eec\u77e5\u9053Python\u4e2d\u5e26\u6709GIL\uff0c\u4e00\u6b21\u53ea\u80fd\u6267\u884c\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u4f46\u7ebf\u7a0b\u4e4b\u95f4\u4ecd\u7136\u662f\u4ea4\u66ff\u6267\u884c\u7684\uff08\u867d\u7136\u4ea4\u66ff\u7684\u987a\u5e8f\u4e0d\u4e00\u5b9a\u786e\u5b9a\uff09\u3002"),(0,o.kt)("p",null,"\u90a3\u6211\u4eec\u601d\u8003\u4e00\u4e0b\uff0c\u8fd9\u4e2a\u73b0\u8c61\u4e0e\u6211\u4eec\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"C/C++"),"\u4e2d\u4e3a\u4e86\u89e3\u51b3\u591a\u7ebf\u7a0b\u540c\u65f6\u62a2\u5360\u8d44\u6e90\u800c\u5f15\u5165\u201c\u9501\u201d\u7684\u73b0\u8c61\u5f88\u76f8\u8fd1\uff0c\u4e8b\u5b9e\u4e0a\u4e5f\u786e\u5b9e\u662f\u5982\u6b64\u3002GIL\u5c31\u662f\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5171\u4eab\u7684\u4e00\u4e2a\u9501\uff0c\u591a\u4e2a\u7ebf\u7a0b\u62a2\u5360\u5b83\uff0c\u62a2\u5230\u7684\u90a3\u4e2a\u7ebf\u7a0b\u624d\u53ef\u4ee5\u77ed\u6682\u5730\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\uff0c\u7136\u540e\u53c8\u4f1a\u5c06\u9501\u91ca\u653e\u4e22\u51fa\u53bb\uff0c\u7ee7\u7eed\u53c2\u4e0e\u4e0b\u4e00\u8f6e\u4e89\u62a2\u3002"),(0,o.kt)("p",null,"\u6b63\u5982\u4e0a\u9762\u7684\u7ed3\u679c\u4e00\u6837\uff0c\u521a\u5f00\u59cb\uff0c\u7ebf\u7a0b0\u56e0\u4e3a\u5148\u53d1\u4f18\u52bf\uff08\u5b83\u5148Start\uff09\u800c\u6210\u529f\u5728\u7b2c\u4e00\u8f6e\u8f93\u51fa\u8fc7\u7a0b\u4e2d\u593a\u5f97\u6842\u51a0\uff0c\u5e76\u4e14\u5728\u7b2c\u4e8c\u8f6e\uff08count == 1\uff09\u4e5f\u80fd\u4fdd\u6301\u4f18\u52bf\uff0c\u4f46\u5728\u7b2c\u4e09\u8f6e\u65f6\u5374\u843d\u5230\u4e86\u6700\u540e\u3002\u7406\u8bba\u4e0a\u6765\u8bf4\uff0c\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"time.sleep(1)"),"\u662f\u7cbe\u51c6\u7684\uff0c\u90a3\u4e48\u65e0\u8bba\u662f\u7b2c\u4e8c\u8f6e\u8fd8\u662f\u7b2c\u4e09\u8f6e\uff0c\u7b2c\u4e00\u540d\u5e94\u8be5\u90fd\u662f\u7ebf\u7a0b0\uff0c\u4f46\u4e8b\u4e0e\u613f\u8fdd\u3002\u5176\u4e2d\u4e00\u4e2a\u53ef\u80fd\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"time.sleep(1)"),"\u5e76\u4e0d\u7cbe\u51c6\uff0c\u4e0d\u540c\u7684\u5e73\u53f0\u7684\u7cbe\u5ea6\u5dee\u522b\u4e5f\u4e0d\u5c0f\uff0c\u53e6\u4e00\u79cd\u53ef\u80fd\u5c31\u662f\u7ade\u4e89\u7ed3\u679c\u7684\u968f\u673a\u6027\uff0c\u5927\u5bb6\u90fd\u62a2\u9501\uff0c\u4f46\u4e0d\u4e00\u5b9a\u8c01\u80fd\u62a2\u5f97\u5230\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u4fee\u6539\u4e00\u4e0b\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u8ba9\u4ed6\u5728\u5ef6\u65f6\u7684\u540c\u65f6\u8f93\u51fa\u4e00\u4e0b\u5b9e\u9645\u5ef6\u65f6\u65f6\u95f4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def thread_func(thread_id):\n    for i in range(3):\n        begin_time = time.time_ns()\n        time.sleep(1)\n        end_time = time.time_ns()\n        print("thread_id:", thread_id, "count:", i, end_time-begin_time, "ns")\n')),(0,o.kt)("p",null,"\u6211\u4eec\u518d\u8fd0\u884c\u4e00\u4e0b\u7a0b\u5e8f\uff0c\u53d1\u73b0\u4e00\u4e2a\u795e\u5947\u7684\u73b0\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"thread_id: 2 count: 0 1006052000 ns\nthread_id: 1 count: 0 1006052000 ns\nthread_id: 0 count: 0 1006052000 ns\nthread_id: 0 count: 1 1009645400 ns\nthread_id: 1 count: 1 1009645400 ns\nthread_id: 2 count: 1 1009645400 ns\nthread_id: 2 count: 2 1005223800 ns\nthread_id: 1 count: 2 1005223800 ns\nthread_id: 0 count: 2 1005223800 ns\n")),(0,o.kt)("p",null,"\u540c\u4e00\u8f6e\u7684\u4e09\u4e2a\u7ebf\u7a0b\u7684\u5ef6\u65f6\u662f\u4e00\u6a21\u4e00\u6837\u7684\uff0c\u8fd9\u5c31\u5f88\u5947\u7279\u4e86\u3002\u4e0d\u8fc7\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u4e09\u4e2a\u7ebf\u7a0b\u7406\u8bba\u4e0a\u662f\u5728\u540c\u4e00\u65f6\u95f4\u70b9\u62a2\u9501\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u63a5\u4e0b\u6765\u9605\u8bfb\u4e00\u4e0bPython\u7684\u6e90\u7801\uff0c\u4e0b\u8f7d\u5730\u5740\u4e3a\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-3113/"},"https://www.python.org/downloads/release/python-3113/"),"\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Python\\ceval_gil.h"),"\u6587\u4ef6\u4e2d\u53ef\u4ee5\u627e\u5230\u76f8\u5173\u7684\u6587\u6863\u8bf4\u660e\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0Notes about the implementation:"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0- The GIL is just a boolean variable (locked) whose access is protected"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0by a mutex (gil_mutex), and whose changes are signalled by a condition"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0variable (gil_cond). gil_mutex is taken for short periods of time,"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0and therefore mostly uncontended."),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0- In the GIL-holding thread, the main loop (PyEval_EvalFrameEx) must be"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0able to release the GIL on demand by another thread. A volatile boolean"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0variable (gil_drop_request) is used for that purpose, which is checked"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0at every turn of the eval loop. That variable is set after a wait of"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0",(0,o.kt)("inlineCode",{parentName:"p"},"interval")," microseconds on ",(0,o.kt)("inlineCode",{parentName:"p"},"gil_cond")," has timed out."),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0 [Actually, another volatile boolean variable (eval_breaker) is used"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0 \xa0which ORs several conditions into one. Volatile booleans are"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0 \xa0sufficient as inter-thread signalling means since Python is run"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0 \xa0on cache-coherent architectures only.]"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0- A thread wanting to take the GIL will first let pass a given amount of"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0time (",(0,o.kt)("inlineCode",{parentName:"p"},"interval")," microseconds) before setting gil_drop_request. This"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0encourages a defined switching period, but doesn't enforce it since"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0opcodes can take an arbitrary time to execute."),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0The ",(0,o.kt)("inlineCode",{parentName:"p"},"interval")," value is available for the user to read and modify"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0using the Python API ",(0,o.kt)("inlineCode",{parentName:"p"},"sys.{get,set}switchinterval()"),"."),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0- When a thread releases the GIL and gil_drop_request is set, that thread"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0ensures that another GIL-awaiting thread gets scheduled."),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0It does so by waiting on a condition variable (switch_cond) until"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0the value of last_holder is changed to something else than its"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0own thread state pointer, indicating that another thread was able to"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0take the GIL."),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0This is meant to prohibit the latency-adverse behaviour on multi-core"),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0machines where one thread would speculatively release the GIL, but still"),(0,o.kt)("p",{parentName:"blockquote"},'\xa0 \xa0 \xa0run and end up being the first to re-acquire it, making the "timeslices"'),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0much longer than expected."),(0,o.kt)("p",{parentName:"blockquote"},"\xa0 \xa0 \xa0(Note: this mechanism is enabled with FORCE_SWITCHING above)")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4e2d\u53d1\u73b0\u51e0\u4e2a\u5173\u952e\u70b9\uff0c\u8fd9\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u7406\u89e3GIL\u7684\u5de5\u4f5c\u539f\u7406\u548c\u5e94\u7528\u573a\u666f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GIL\u662f\u4e00\u4e2a\u53d7\u9501\u4fdd\u62a4\u7684bool\u53d8\u91cf\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Python\u9f13\u52b1\u7ebf\u7a0b\u53ca\u65f6\u91ca\u653eGIL,\u4f46\u4e0d\u5f3a\u5236\u8981\u6c42\u3002\u8fd9\u4e5f\u5c31\u4fdd\u8bc1\u4e86\u591a\u4e2a\u7ebf\u7a0b\u7684\u5206\u7247\u6267\u884c\uff0c\u4e5f\u8ba9\u6211\u4eec\u611f\u89c9Python\u7684\u591a\u7ebf\u7a0b\u662f\u771f\u7684\u4e00\u6837\u3002\u5728\u5b9e\u73b0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u6ce8\u610f\u5230\u9ed8\u8ba4\u7684\u95f4\u9694",(0,o.kt)("inlineCode",{parentName:"p"},"DEFAULT_INTERVAL"),"\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"5000\u5fae\u79d2"),"\uff0c\u5f53\u7136\uff0c\u8fd9\u4e2a\u503c\u53ef\u80fd\u968f\u7740GIL\u7684\u7533\u8bf7\u800c\u53d1\u751f\u53d8\u5316\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u591a\u4e2a\u7ebf\u7a0b\u901a\u8fc7\u7b49\u5f85\u6761\u4ef6\u53d8\u91cf\u7684\u65b9\u5f0f\u62a2\u5360GIL\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u62a2\u5360\u7ed3\u679c\u5177\u6709\u4e00\u5b9a\u7684\u968f\u673a\u6027\u3002"))),(0,o.kt)("admonition",{title:"\u6761\u4ef6\u53d8\u91cf",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6761\u4ef6\u53d8\u91cf\u5e76\u53d1\u7f16\u7a0b\u4e2d\u7528\u6765\u534f\u8c03\u591a\u4e2a\u7ebf\u7a0b\u540c\u6b65\u7684\u673a\u5236\uff0c\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"C/C++"),"\u7684\u4e00\u79cd\u5e38\u7528\u7528\u6cd5\u3002\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u81ea\u884c\u641c\u7d22\uff0c\u672c\u6559\u7a0b\u4e0d\u8fdb\u884c\u8bb2\u89e3\u3002")))}s.isMDXComponent=!0}}]);