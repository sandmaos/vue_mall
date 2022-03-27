import Vue from "vue"

var myPlugins={}
myPlugins.install=function(vue,options){
    Vue.directive(options.name,()=>{
        
    })
}
export default myPlugins