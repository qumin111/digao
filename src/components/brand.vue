<template>
  <div class="h" >
    <div class="ui-brand-bg">
      <div class="ui-brand-text animated zoomInDown">
      <!-- <div class="ui-brand-text animated lightSpeedIn delay-1s"> -->
        <h2>{{$t('BrandConcept')}}</h2>
        <p class="ui-font-s ui-brand-one">
          {{$t('BrandDesignSimple')}}
        </p> 
        <p  class="ui-font-s">
          {{$t('BrandOneP')}}
        </p> 
        <p class="ui-font-s">
          {{$t('BrandTwoP')}}<br>{{$t('BrandThreeP')}}<br>{{$t('BrandFourP')}}
        </p> 
        <p  class="mb-0 ui-font-s">
          {{$t('BrandFiveP')}}
        </p> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      
    }
  },
  mounted () {
   
  },

  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ui-brand-bg {
    background: url('../assets/1.jpg') no-repeat top center;
    background-size: cover;
    height: 100%;
  }
  .ui-brand-text {
     padding: 20px 35px 15px 35px;
     text-align: left;
     line-height: 24px;
     color:#fff;
  }
  .ui-font-s {
    font-size: 14px;
  }

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width:  992px) { 
    .ui-brand-bg {
      background: url('../assets/1.jpg') no-repeat top center;
      background-size: cover;
      text-align: right;
    }
  .ui-brand-text {
    width: 365px;
    padding: 20px 20px 15px 22px;
    background-color:rgba(40,40,42,1);
    margin-top: 8%;
    display: inline-block;
    margin-right: 96px;
  }
  .ui-brand-one {
    margin-bottom: 20px;
  }
}
  

</style>
