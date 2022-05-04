/**
 * name: learning-vue3
 * description: A starting learning tutorial on Vue 3.0 + TypeScript, suitable for complete Vue novices and Vue 2.0 veterans, incorporating some of my own practical experience on the basis of official documents.
 * author: chengpeiquan
 * homepage: https://vue3.chengpeiquan.com/
 */
const e={key:"v-64d06d7c",path:"/communication.html",title:"\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1",slug:"\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1",children:[]},{level:2,title:"props / emits",slug:"props-emits",children:[{level:3,title:"\u4E0B\u53D1 props",slug:"\u4E0B\u53D1-props",children:[]},{level:3,title:"\u63A5\u6536 props",slug:"\u63A5\u6536-props",children:[]},{level:3,title:"\u5E26\u6709\u7C7B\u578B\u9650\u5236\u7684 props",slug:"\u5E26\u6709\u7C7B\u578B\u9650\u5236\u7684-props",children:[]},{level:3,title:"\u53EF\u9009\u4EE5\u53CA\u5E26\u6709\u9ED8\u8BA4\u503C\u7684 props",slug:"\u53EF\u9009\u4EE5\u53CA\u5E26\u6709\u9ED8\u8BA4\u503C\u7684-props",children:[]},{level:3,title:"\u4F7F\u7528 props{new}",slug:"\u4F7F\u7528-props-new",children:[]},{level:3,title:"\u4F20\u9012\u975E Prop \u7684 Attribute",slug:"\u4F20\u9012\u975E-prop-\u7684-attribute",children:[]},{level:3,title:"\u83B7\u53D6\u975E Prop \u7684 Attribute{new}",slug:"\u83B7\u53D6\u975E-prop-\u7684-attribute-new",children:[]},{level:3,title:"\u7ED1\u5B9A emits{new}",slug:"\u7ED1\u5B9A-emits-new",children:[]},{level:3,title:"\u63A5\u6536 emits",slug:"\u63A5\u6536-emits",children:[]},{level:3,title:"\u63A5\u6536 emits \u65F6\u505A\u4E00\u4E9B\u6821\u9A8C",slug:"\u63A5\u6536-emits-\u65F6\u505A\u4E00\u4E9B\u6821\u9A8C",children:[]},{level:3,title:"\u8C03\u7528 emits{new}",slug:"\u8C03\u7528-emits-new",children:[]}]},{level:2,title:"v-model / emits",slug:"v-model-emits",children:[{level:3,title:"\u7ED1\u5B9A v-model{new}",slug:"\u7ED1\u5B9A-v-model-new",children:[]},{level:3,title:"\u914D\u7F6E emits",slug:"\u914D\u7F6E-emits",children:[]},{level:3,title:"\u8C03\u7528\u81EA\u8EAB\u7684 emits{new}",slug:"\u8C03\u7528\u81EA\u8EAB\u7684-emits-new",children:[]}]},{level:2,title:"ref / emits",slug:"ref-emits",children:[{level:3,title:"\u7236\u7EC4\u4EF6\u64CD\u4F5C\u5B50\u7EC4\u4EF6{new}",slug:"\u7236\u7EC4\u4EF6\u64CD\u4F5C\u5B50\u7EC4\u4EF6-new",children:[]},{level:3,title:"\u5B50\u7EC4\u4EF6\u901A\u77E5\u7236\u7EC4\u4EF6",slug:"\u5B50\u7EC4\u4EF6\u901A\u77E5\u7236\u7EC4\u4EF6",children:[]}]},{level:2,title:"\u7237\u5B59\u7EC4\u4EF6\u901A\u4FE1",slug:"\u7237\u5B59\u7EC4\u4EF6\u901A\u4FE1",children:[]},{level:2,title:"provide / inject",slug:"provide-inject",children:[{level:3,title:"\u53D1\u8D77 provide{new}",slug:"\u53D1\u8D77-provide-new",children:[]},{level:3,title:"\u63A5\u6536 inject{new}",slug:"\u63A5\u6536-inject-new",children:[]},{level:3,title:"\u54CD\u5E94\u6027\u6570\u636E\u7684\u4F20\u9012\u4E0E\u63A5\u6536{new}",slug:"\u54CD\u5E94\u6027\u6570\u636E\u7684\u4F20\u9012\u4E0E\u63A5\u6536-new",children:[]},{level:3,title:"\u5F15\u7528\u7C7B\u578B\u7684\u4F20\u9012\u4E0E\u63A5\u6536",slug:"\u5F15\u7528\u7C7B\u578B\u7684\u4F20\u9012\u4E0E\u63A5\u6536",children:[]},{level:3,title:"\u57FA\u672C\u7C7B\u578B\u7684\u4F20\u9012\u4E0E\u63A5\u6536",slug:"\u57FA\u672C\u7C7B\u578B\u7684\u4F20\u9012\u4E0E\u63A5\u6536",children:[]}]},{level:2,title:"\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1",slug:"\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1",children:[]},{level:2,title:"\u5168\u5C40\u7EC4\u4EF6\u901A\u4FE1",slug:"\u5168\u5C40\u7EC4\u4EF6\u901A\u4FE1",children:[]},{level:2,title:"EventBus{new}",slug:"eventbus-new",children:[{level:3,title:"\u56DE\u987E Vue 2",slug:"\u56DE\u987E-vue-2",children:[]},{level:3,title:"\u4E86\u89E3 Vue 3{new}",slug:"\u4E86\u89E3-vue-3-new",children:[]},{level:3,title:"\u521B\u5EFA 3.x \u7684 EventBus{new}",slug:"\u521B\u5EFA-3-x-\u7684-eventbus-new",children:[]},{level:3,title:"\u521B\u5EFA\u548C\u79FB\u9664\u76D1\u542C\u4E8B\u4EF6{new}",slug:"\u521B\u5EFA\u548C\u79FB\u9664\u76D1\u542C\u4E8B\u4EF6-new",children:[]},{level:3,title:"\u8C03\u7528\u76D1\u542C\u4E8B\u4EF6{new}",slug:"\u8C03\u7528\u76D1\u542C\u4E8B\u4EF6-new",children:[]},{level:3,title:"\u65E7\u9879\u76EE\u5347\u7EA7 EventBus",slug:"\u65E7\u9879\u76EE\u5347\u7EA7-eventbus",children:[]}]},{level:2,title:"Vuex{new}",slug:"vuex-new",children:[{level:3,title:"\u5728\u4E86\u89E3\u4E4B\u524D",slug:"\u5728\u4E86\u89E3\u4E4B\u524D",children:[]},{level:3,title:"Vuex \u7684\u76EE\u5F55\u7ED3\u6784",slug:"vuex-\u7684\u76EE\u5F55\u7ED3\u6784",children:[]},{level:3,title:"\u56DE\u987E Vue 2",slug:"\u56DE\u987E-vue-2-1",children:[]},{level:3,title:"\u4E86\u89E3 Vue 3{new}",slug:"\u4E86\u89E3-vue-3-new-1",children:[]},{level:3,title:"Vuex \u7684\u914D\u7F6E",slug:"vuex-\u7684\u914D\u7F6E",children:[]},{level:3,title:"\u5728\u7EC4\u4EF6\u91CC\u4F7F\u7528 Vuex{new}",slug:"\u5728\u7EC4\u4EF6\u91CC\u4F7F\u7528-vuex-new",children:[]}]},{level:2,title:"Pinia{new}",slug:"pinia-new",children:[]},{level:2,title:"\u672C\u7AE0\u7ED3\u8BED",slug:"\u672C\u7AE0\u7ED3\u8BED",children:[]}],git:{updatedTime:1651647467e3,contributors:[{name:"chengpeiquan",email:"chengpeiquan@chengpeiquan.com",commits:1}]},filePathRelative:"communication.md"};export{e as data};
