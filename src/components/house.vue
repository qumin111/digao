<template>
  <div class="home ui-h-auto">
      
     <swiper :options="swiperOption" ref="mySwiper" effect="fade" class="h">
        <!-- slides -->
        <swiper-slide><img src="../assets/1.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/2.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/3.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/4.jpg"/></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>

      <div class="ui-item-txt text-center">
          <h4>{{$t("houseTit")}}</h4>
          <p class="ui-item-des text-left">{{$t("houseOne")}}</p>
          <p class="ui-item-des text-left">{{$t("houseTwo")}}</p>
      </div>
  </div>


  
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'house',
  data () {
    return {
      swiperOption: {
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
    }
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
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  

</style>
