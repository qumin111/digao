<template>
  <div class="home h-ui-auto">
    <swiper :options="swiperOption" ref="mySwiper" effect="fade" class="h">
      <!-- slides -->
      <swiper-slide><img src="../assets/house/1.jpeg"/></swiper-slide>
      <swiper-slide><img src="../assets/house/2.jpeg"/></swiper-slide>
      <swiper-slide><img src="../assets/house/3.jpeg"/></swiper-slide>
      <swiper-slide><img src="../assets/house/4.jpeg"/></swiper-slide>
      <swiper-slide><img src="../assets/house/5.jpeg"/></swiper-slide>
      <swiper-slide><img src="../assets/house/6.jpeg"/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <div class="ui-item-txt text-center">
      <h4>{{$t("homestayTit")}}</h4>
      <p class="ui-item-des text-left">{{$t("homestayOne")}}</p>
      <p class="ui-item-des text-left">{{$t("homestayTwo")}}</p>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import wxapi from '../../common/wxapi.js'
export default {
  name: 'house',
  data () {
    return {
      swiperOption: {
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        effect : 'fade',//切换方式为淡入淡出
          fade: {
            crossFade: true,//为true为淡入淡出
          },
        loop: true,//循环轮播
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
    wxapi.wxRegister(this.wxRegCallback)
  },
  methods: {
   wxRegCallback () {
      // 用于微信JS-SDK回调
      this.wxShareTimeline()
      this.wxShareAppMessage()
    },
    wxShareTimeline () {
      // 微信自定义分享到朋友圈
      let option = {
        title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
        link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
        imgUrl: 'logo.png', // 分享图标, 请自行替换，需要绝对路径
        success: () => {
          alert('分享成功')
        },
        error: () => {
          alert('已取消分享')
        }
      }
      // 将配置注入通用方法
      wxapi.ShareTimeline(option)
    },
    wxShareAppMessage () {
      // 微信自定义分享给朋友
      let option = {
        title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
        desc: '限时团购周 挑战最低价', // 分享描述, 请自行替换
        link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
        imgUrl: 'logo.png', // 分享图标, 请自行替换，需要绝对路径
        success: () => {
          alert('分享成功')
        },
        error: () => {
          alert('已取消分享')
        }
      }
      // 将配置注入通用方法
      wxapi.ShareAppMessage(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  

</style>
