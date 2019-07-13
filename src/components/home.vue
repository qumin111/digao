<template>
  <div class="home h" >
      <div class="home-bg h text-center">
        <div class="animated zoomIn">
            <div class="home-logo"><img src="../assets/logow.png" alt=""></div>
            <h3 class="home-tit">迪高设计</h3>
            <p class="home-des">
               Design makes life more simple
            </p> 
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isShow: false,
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
.home-bg {
  background: url('../assets/homebg.jpg') no-repeat top center;
  background-size: cover;
  display: flex;
  justify-content: center ;
  color: aliceblue;
  align-items: center;
}
.home-logo {
  width: 300px;
  padding-bottom: 18px;
}
.home-logo img{
  height: auto;
}
.home-tit{
  font-size: 24px;
  margin-bottom: 0;
  letter-spacing: 24px;
}
.home-des {
  font-size: 18px;
}
@media (min-width: 992px) {
  .home-bg {
    align-items: center;
  }
  .home-logo {
    width: 618px;
  }
  .home-tit{
    letter-spacing: 34px;
  }
}
  

</style>
