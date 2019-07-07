
<template>
  <div id="app">
    <b-container fluid class="ui-wrap no-pd"> 
      <b-row align-v="start" class="ui-wrp-start h" no-gutters> 
        <b-col md="2" class="move-pr ui-slider-box h-ui-auto"> <slider-nav></slider-nav> </b-col > 
        <b-col md="10" class=" move-pl h ui-cont-box">
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
img{
  width: 100%;
}
.ui-wrp-start .ui-slider-box {
  position: fixed;
  top:0;
  z-index: 99;
}
.ui-wrp-start .ui-cont-box {
  padding-top: 48px;
}
@media (min-width: 992px) {
  .ui-wrp-start .ui-slider-box {
    position: relative;
  }
  .ui-wrp-start .ui-cont-box {
    padding-top: 0;
  }
}

</style>
