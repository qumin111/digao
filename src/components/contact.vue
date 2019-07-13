<template>
  <div class="contact">
    <div class="contact-one">
      <div class="text-center">
        <div class="contact-logo"><img src="../assets/logob.png" alt=""></div>
        <h3 class="contact-tit">迪高设计</h3>
      </div>
    </div>
    <div class="ui-contact-box animated bounceIn">

      <div class="ui-contact-code">
        <img src="../assets/coden.jpg" alt="">
      </div>
     <div class="ui-contact-txt">
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
  background-color: #000;
  color: #fff;
}
.contact-one {
  height: 100%;
  display: flex;
  color: aliceblue;
  justify-content: center ;
}
.ui-contact-code {
  width: 122px;
  margin-bottom: 7px;
  margin-right: 10px;
}
.ui-contact-box {
  position: absolute;
  bottom: 57px;
  left: 30px;
}
.contact-logo {
  width: 300px;
  padding-bottom: 18px;
  padding-top: 51px;
}
.contact-logo img{
  height: auto;
}
.contact-tit{
  font-size: 24px;
  margin-bottom: 0;
  letter-spacing: 16px;
}
.ui-contact-code img {
  width: 100px;
  height: auto;
}
  
@media (min-width: 992px) {
  .ui-contact-box {
    position: absolute;
    top:auto;
    bottom: 70px;
    left: 40%;
  }  
  .contact-one {
    height: 100%;
    display: flex;
    justify-content: center ;
    color: aliceblue;
    align-items: center;
  }
  .contact-logo {
    width: 618px;
    padding-top: 0;
  }
  .contact-tit{
    letter-spacing: 34px;
  }
  .ui-contact-code,
  .ui-contact-txt {
    display: inline-block;
    vertical-align: middle;
  }
}

</style>
