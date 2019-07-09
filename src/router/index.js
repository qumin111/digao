import Vue from 'vue'
import Router from 'vue-router'


const Main = resolve => require.ensure([], () => resolve(require('@/components/main.vue')), 'Main'); // main
const Slider = resolve => require.ensure([], () => resolve(require('@/components/slider.vue')), 'Slider'); // 导航
const Home = resolve => require.ensure([], () => resolve(require('@/components/home.vue')), 'Home'); // 首页
const House = resolve => require.ensure([], () => resolve(require('@/components/house.vue')), 'House');
const Contact = resolve => require.ensure([], () => resolve(require('@/components/contact.vue')), 'House'); 
const Brand = resolve => require.ensure([], () => resolve(require('@/components/brand.vue')), 'House'); 
const Homestay = resolve => require.ensure([], () => resolve(require('@/components/homestay.vue')), 'Homestay');  
const Office = resolve => require.ensure([], () => resolve(require('@/components/office.vue')), 'Office');  
const BridalShop = resolve => require.ensure([], () => resolve(require('@/components/bridalShop.vue')), 'BridalShop');  
const Hotel = resolve => require.ensure([], () => resolve(require('@/components/hotel.vue')), 'Hotel');  
const Business = resolve => require.ensure([], () => resolve(require('@/components/business.vue')), 'Business');  

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
            }, {
                path: '/office',
                name: 'office',
                component: Office
            }, {
                path: '/bridalShop',
                name: 'bridalShop',
                component: BridalShop
            },
            {
                path: '/hotel',
                name: 'hotel',
                component: Hotel
            },
            {
                path: '/business',
                name: 'business',
                component: Business
            }
        ]
    },
]
})
