<template>
  <div class="home h-ui-auto">
      
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-h">
        <!-- slides -->
        <swiper-slide><img src="../assets/office/WechatIMG681.jpeg"/></swiper-slide>
        <swiper-slide><img src="../assets/office/WechatIMG682.jpeg"/></swiper-slide>
        <swiper-slide><img src="../assets/office/WechatIMG683.jpeg"/></swiper-slide>
        <swiper-slide><img src="../assets/office/WechatIMG684.jpeg"/></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <div class="ui-item-txt text-center">
          <h4>{{$t("officeTit")}}</h4>
          <p class="ui-item-des text-left">{{$t("officeOne")}}</p>
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
        slidesPerView: 'auto',
        spaceBetween: 5,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  

</style>
