import Vue from 'vue'
import Router from 'vue-router'


//main
const Main = resolve => require.ensure([], () => resolve(require('@/components/main.vue')), 'Main'); // main
// 导航
const Slider = resolve => require.ensure([], () => resolve(require('@/components/slider.vue')), 'Home'); // 导航
// 首页
const Home = resolve => require.ensure([], () => resolve(require('@/components/home.vue')), 'Home'); // 首页
// 家居
const House = resolve => require.ensure([], () => resolve(require('@/components/house.vue')), 'House'); // 家居
const Contact = resolve => require.ensure([], () => resolve(require('@/components/contact.vue')), 'House'); // 家居
const Brand = resolve => require.ensure([], () => resolve(require('@/components/brand.vue')), 'House'); // 家居
const Homestay = resolve => require.ensure([], () => resolve(require('@/components/homestay.vue')), 'Homestay'); // 

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/home' // 默认路径
    }, {
        //主路由
        path: '/',
        name: 'main',
        component: Main,
        children: [
            { 
                // 首页
                path: '/home',
                name: 'home',
                component: Home
            }, { 
                // 家居
                path: '/house',
                name: 'house',
                component: House
            }, { 
                path: '/homestay',
                name: 'homestay',
                component: Homestay
            }, { 
                path: '/contact',
                name: 'contact',
                component: Contact
            }, { 
                path: '/brand',
                name: 'brand',
                component: Brand
            }
        ]
    },
]
})
