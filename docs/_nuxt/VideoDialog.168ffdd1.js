import{_ as u,k as p,o as t,c as s,a,w as n,i as m,l as g}from"./entry.3675fce1.js";const f={name:"videoDisplayDialog",data(){return{dialogVisible:!1}},props:{showFlag:Boolean,title:String,src:String,fullScreenDialog:Boolean},methods:{suspendVideo(){this.$emit("closeVideoDisplay")}},watch:{showFlag(o){this.dialogVisible=o}}},V={class:"video-display"},y=["src"];function h(o,i,e,w,l,r){const c=p("el-dialog"),d=g;return t(),s("main",V,[a(d,null,{default:n(()=>[a(c,{class:"display-dialog",title:e.title,modelValue:l.dialogVisible,"onUpdate:modelValue":i[0]||(i[0]=_=>l.dialogVisible=_),onClose:r.suspendVideo,fullscreen:e.fullScreenDialog},{default:n(()=>[l.dialogVisible?(t(),s("iframe",{key:0,id:"player",class:"video-row-item",style:{"border-radius":"15px"},height:"100%",width:"100%",frameborder:"0",src:e.src+"?autoplay=1&rel=0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"},null,8,y)):m("",!0)]),_:1},8,["title","modelValue","onClose","fullscreen"])]),_:1})])}const x=u(f,[["render",h]]);export{x as _};