<template>
  <div class="h anim_fade_image">
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide><img src="../assets/1.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/2.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/3.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/4.jpg"/></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <!-- <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide><img src="../assets/1.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/2.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/3.jpg"/></swiper-slide>
        <swiper-slide><img src="../assets/4.jpg"/></swiper-slide>
    </swiper> -->
    <div class="ui-item-txt text-center">
      <h4>{{$t("homestayTit")}}</h4>
      <p class="ui-item-des text-left">{{$t("homestayOne")}}</p>
      <p class="ui-item-des text-left">{{$t("homestayTwo")}}</p>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        swiperOptionTop: {
          autoplay: false,
          speed: 1200,
          slidesPerView: 'auto',
          spaceBetween: 10,
          loop: true,
          loopedSlides: 4, //looped slides should be the same
          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false // 手动切换之后继续自动轮播
          // },
        //   effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 4, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    components: {
        swiper,
        swiperSlide
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style scoped>
.swiper-slide {
  width: 80%;
}
.swiper-slide img{
  height: 100%;
}
  .swiper-container {
    background-color: rgba(250,250,250,.9);
  }
  .gallery-top {
    height: 100%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
.swiper-slide-next{
  position: relative;
}
.swiper-slide-next::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250,250,250,.5);
  transition: background-color 3s ease-in ;
  -o-transition: background-color 3s ease-in; /*兼容parsto内核*/
  -moz-transition: background-color 3s ease-in; /*兼容gecko内核*/
  -webkit-transition: background-color 3s ease-in; /*兼容webkit内核*/
}
</style>