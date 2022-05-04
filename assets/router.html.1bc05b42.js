/**
 * name: learning-vue3
 * description: A starting learning tutorial on Vue 3.0 + TypeScript, suitable for complete Vue novices and Vue 2.0 veterans, incorporating some of my own practical experience on the basis of official documents.
 * author: chengpeiquan
 * homepage: https://vue3.chengpeiquan.com/
 */
const e={key:"v-346d12d2",path:"/router.html",title:"\u8DEF\u7531\u7684\u4F7F\u7528",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u8DEF\u7531\u7684\u76EE\u5F55\u7ED3\u6784",slug:"\u8DEF\u7531\u7684\u76EE\u5F55\u7ED3\u6784",children:[]},{level:2,title:"\u5728\u9879\u76EE\u91CC\u5F15\u5165\u8DEF\u7531",slug:"\u5728\u9879\u76EE\u91CC\u5F15\u5165\u8DEF\u7531",children:[{level:3,title:"\u56DE\u987E Vue 2",slug:"\u56DE\u987E-vue-2",children:[]},{level:3,title:"\u4E86\u89E3 Vue 3{new}",slug:"\u4E86\u89E3-vue-3-new",children:[]}]},{level:2,title:"\u8DEF\u7531\u6811\u7684\u914D\u7F6E",slug:"\u8DEF\u7531\u6811\u7684\u914D\u7F6E",children:[{level:3,title:"\u57FA\u7840\u683C\u5F0F{new}",slug:"\u57FA\u7840\u683C\u5F0F-new",children:[]},{level:3,title:"\u516C\u5171\u8DEF\u5F84",slug:"\u516C\u5171\u8DEF\u5F84",children:[]},{level:3,title:"\u4E00\u7EA7\u8DEF\u7531",slug:"\u4E00\u7EA7\u8DEF\u7531",children:[{level:4,title:"\u540C\u6B65\u7EC4\u4EF6",slug:"\u540C\u6B65\u7EC4\u4EF6",children:[]},{level:4,title:"\u5F02\u6B65\u7EC4\u4EF6",slug:"\u5F02\u6B65\u7EC4\u4EF6",children:[]}]},{level:3,title:"\u591A\u7EA7\u8DEF\u7531",slug:"\u591A\u7EA7\u8DEF\u7531",children:[]},{level:3,title:"\u8DEF\u7531\u61D2\u52A0\u8F7D",slug:"\u8DEF\u7531\u61D2\u52A0\u8F7D",children:[]}]},{level:2,title:"\u8DEF\u7531\u7684\u6E32\u67D3",slug:"\u8DEF\u7531\u7684\u6E32\u67D3",children:[]},{level:2,title:"\u4F7F\u7528 route \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F{new}",slug:"\u4F7F\u7528-route-\u83B7\u53D6\u8DEF\u7531\u4FE1\u606F-new",children:[]},{level:2,title:"\u4F7F\u7528 router \u64CD\u4F5C\u8DEF\u7531{new}",slug:"\u4F7F\u7528-router-\u64CD\u4F5C\u8DEF\u7531-new",children:[]},{level:2,title:"\u4F7F\u7528 router-link \u6807\u7B7E\u8DF3\u8F6C",slug:"\u4F7F\u7528-router-link-\u6807\u7B7E\u8DF3\u8F6C",children:[{level:3,title:"\u57FA\u7840\u8DF3\u8F6C",slug:"\u57FA\u7840\u8DF3\u8F6C",children:[]},{level:3,title:"\u5E26\u53C2\u6570\u7684\u8DF3\u8F6C",slug:"\u5E26\u53C2\u6570\u7684\u8DF3\u8F6C",children:[]},{level:3,title:"\u4E0D\u751F\u6210 a \u6807\u7B7E{new}",slug:"\u4E0D\u751F\u6210-a-\u6807\u7B7E-new",children:[]}]},{level:2,title:"\u5728\u72EC\u7ACB TS/JS \u6587\u4EF6\u91CC\u4F7F\u7528\u8DEF\u7531",slug:"\u5728\u72EC\u7ACB-ts-js-\u6587\u4EF6\u91CC\u4F7F\u7528\u8DEF\u7531",children:[]},{level:2,title:"\u8DEF\u7531\u5143\u4FE1\u606F\u914D\u7F6E",slug:"\u8DEF\u7531\u5143\u4FE1\u606F\u914D\u7F6E",children:[]},{level:2,title:"\u8DEF\u7531\u91CD\u5B9A\u5411",slug:"\u8DEF\u7531\u91CD\u5B9A\u5411",children:[{level:3,title:"\u4E1A\u52A1\u573A\u666F",slug:"\u4E1A\u52A1\u573A\u666F",children:[]},{level:3,title:"\u914D\u7F6E\u4E3A path",slug:"\u914D\u7F6E\u4E3A-path",children:[]},{level:3,title:"\u914D\u7F6E\u4E3A route",slug:"\u914D\u7F6E\u4E3A-route",children:[]},{level:3,title:"\u914D\u7F6E\u4E3A function",slug:"\u914D\u7F6E\u4E3A-function",children:[]}]},{level:2,title:"\u8DEF\u7531\u522B\u540D\u914D\u7F6E",slug:"\u8DEF\u7531\u522B\u540D\u914D\u7F6E",children:[]},{level:2,title:"404\u8DEF\u7531\u9875\u9762\u914D\u7F6E{new}",slug:"_404\u8DEF\u7531\u9875\u9762\u914D\u7F6E-new",children:[]},{level:2,title:"\u5BFC\u822A\u5B88\u536B",slug:"\u5BFC\u822A\u5B88\u536B",children:[{level:3,title:"\u94A9\u5B50\u7684\u5E94\u7528\u573A\u666F",slug:"\u94A9\u5B50\u7684\u5E94\u7528\u573A\u666F",children:[]},{level:3,title:"\u8DEF\u7531\u91CC\u7684\u5168\u5C40\u94A9\u5B50",slug:"\u8DEF\u7531\u91CC\u7684\u5168\u5C40\u94A9\u5B50",children:[]},{level:3,title:"beforeEach{new}",slug:"beforeeach-new",children:[]},{level:3,title:"beforeResolve",slug:"beforeresolve",children:[]},{level:3,title:"afterEach",slug:"aftereach",children:[]},{level:3,title:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528\u5168\u5C40\u94A9\u5B50",slug:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528\u5168\u5C40\u94A9\u5B50",children:[]},{level:3,title:"\u8DEF\u7531\u91CC\u7684\u72EC\u4EAB\u94A9\u5B50",slug:"\u8DEF\u7531\u91CC\u7684\u72EC\u4EAB\u94A9\u5B50",children:[]},{level:3,title:"beforeEnter{new}",slug:"beforeenter-new",children:[]},{level:3,title:"\u7EC4\u4EF6\u5185\u5355\u72EC\u4F7F\u7528{new}",slug:"\u7EC4\u4EF6\u5185\u5355\u72EC\u4F7F\u7528-new",children:[]},{level:3,title:"onBeforeRouteUpdate{new}",slug:"onbeforerouteupdate-new",children:[]},{level:3,title:"onBeforeRouteLeave{new}",slug:"onbeforerouteleave-new",children:[]}]},{level:2,title:"\u8DEF\u7531\u76D1\u542C",slug:"\u8DEF\u7531\u76D1\u542C",children:[{level:3,title:"watch{new}",slug:"watch-new",children:[]},{level:3,title:"watchEffect{new}",slug:"watcheffect-new",children:[]}]},{level:2,title:"\u90E8\u7F72\u95EE\u9898\u4E0E\u670D\u52A1\u7AEF\u914D\u7F6E",slug:"\u90E8\u7F72\u95EE\u9898\u4E0E\u670D\u52A1\u7AEF\u914D\u7F6E",children:[{level:3,title:"\u5E38\u89C1\u90E8\u7F72\u95EE\u9898",slug:"\u5E38\u89C1\u90E8\u7F72\u95EE\u9898",children:[{level:4,title:"\u9875\u9762\u5237\u65B0\u5C31 404",slug:"\u9875\u9762\u5237\u65B0\u5C31-404",children:[{level:5,title:"\u95EE\u9898\u539F\u56E0",slug:"\u95EE\u9898\u539F\u56E0",children:[]},{level:5,title:"\u89E3\u51B3\u65B9\u6848",slug:"\u89E3\u51B3\u65B9\u6848",children:[]}]},{level:4,title:"\u90E8\u5206\u8DEF\u7531\u767D\u5C4F",slug:"\u90E8\u5206\u8DEF\u7531\u767D\u5C4F",children:[{level:5,title:"\u95EE\u9898\u539F\u56E0",slug:"\u95EE\u9898\u539F\u56E0-1",children:[]},{level:5,title:"\u89E3\u51B3\u65B9\u6848",slug:"\u89E3\u51B3\u65B9\u6848-1",children:[]}]}]},{level:3,title:"\u670D\u52A1\u7AEF\u914D\u7F6E",slug:"\u670D\u52A1\u7AEF\u914D\u7F6E",children:[{level:4,title:"Nginx",slug:"nginx",children:[]},{level:4,title:"Express",slug:"express",children:[]},{level:4,title:"\u66F4\u591A\u65B9\u6848",slug:"\u66F4\u591A\u65B9\u6848",children:[]}]}]},{level:2,title:"\u672C\u7AE0\u7ED3\u8BED",slug:"\u672C\u7AE0\u7ED3\u8BED",children:[]}],git:{updatedTime:1651647467e3,contributors:[{name:"chengpeiquan",email:"chengpeiquan@chengpeiquan.com",commits:1}]},filePathRelative:"router.md"};export{e as data};
