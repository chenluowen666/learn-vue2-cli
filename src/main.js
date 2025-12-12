import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 关闭 Vue 在生产模式下的“提示信息”（即启动时的 "You are running Vue in development mode..." 警告），避免用户混淆。
Vue.config.productionTip = false
Vue.use(ElementUI)
//h 是 createElement 的简写（hyperscript）；
var vue = new Vue({
    render: h => h(App),
});


// new Vue({
//     render(createElement) {
//         return createElement(App)
//     }
// })

vue.$mount('#app')
