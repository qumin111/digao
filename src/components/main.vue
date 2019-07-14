
<template>
  <div id="app">
    <b-container fluid class="ui-wrap no-pd"> 
      <b-row align-v="start" class="ui-wrp-start h" no-gutters> 
        <b-col class="move-pr ui-slider-box h-ui-auto"> <slider-nav></slider-nav> </b-col > 
        <b-col md="12" class=" move-pl h ui-cont-box">
            <transition name="move" mode="out-in">
                <router-view></router-view>    
            </transition>
        </b-col > 
      </b-row>
    </b-container >
  </div>
</template>

<script>
import slider from './slider.vue';

export default {
  name: 'App',
  components: {
      sliderNav: slider,
  }
}
</script>

<style>
/* .container-fluid{
  padding-left: 0;
  padding-right: 0;
} */

#app .no-pd{
    padding-left: 0;
    padding-right: 0;
}
#app button:focus{
  outline: none;
}
.swiper-h {
  height: 200px;
}
.ui-wrp-start .ui-slider-box {
  position: fixed;
  top:0;
  z-index: 99;
  opacity: 0.93;
}
.ui-wrp-start .ui-cont-box {
  padding-top: 48px;
}
.swiper-slide {
  width: auto;
  min-width: 20%;
  max-width: 80%;
  text-align: center;
  background-color: #343a40;
  display: flex;
  align-items: center;
}
.swiper-slide img {
  max-width: 100%; 
}
.swiper-slide-next{
  position: relative;
}
.swiper-slide-prev::before,
.swiper-slide-next::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  min-width: 100%;
  width: auto;
  height: 100%;
  background-color: rgba(250,250,250,.6);
  transition: background-color 3s ease-in ;
  -o-transition: background-color 3s ease-in; /*兼容parsto内核*/
  -moz-transition: background-color 3s ease-in; /*兼容gecko内核*/
  -webkit-transition: background-color 3s ease-in; /*兼容webkit内核*/
}
@media (min-width: 992px) {
  .ui-wrp-start .ui-slider-box {
    width: 180px;
  }
  .ui-wrp-start .ui-cont-box {
    padding-top: 0;
  }
  /* img{
    height: 100%;
  } */
  .swiper-h {
    height: 100%;
  }
}

</style>
