<template>
  <div class="contact">
    <div class="ui-contact-box animated bounceIn">
      <div class="ui-contact-code">
        <img src="../assets/code.png" alt="">
      </div>
     <div class="ui-contact-txt">
        <h3>{{$t('contactus')}}</h3> 
        <p>
          {{$t('contactPhone')}}:+8613581665752
        </p> 
        <p  class = “mb-0”>
          {{$t('contactMobile')}}:010-56233588
        </p> 
        <p>
          {{$t('contactEmail')}}:duke1117@163.com
        </p> 
        <p  class = “mb-0”>
          {{$t('contactAddres')}}:{{$t('contactAddresDetail')}}
        </p> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
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
.contact {
  position: relative;
  height: 100%;
  background-color: rgba(240,240,240,1);
}
.ui-contact-code {
  width: 70px;
  margin-bottom: 7px;
}
.ui-contact-box {
  position: absolute;
  top:100px;
  left: 30px;
}
@media (min-width: 992px) {
  .ui-contact-box {
    position: absolute;
    top:auto;
    bottom: 70px;
    left: 230px;
  }  
}

</style>
