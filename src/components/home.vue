<template>
  <div class="home h" >
      <div class="home-bg h text-center">
        <div class="animated zoomIn">
            <h3><p>迪高设计<br/> DECO Design</p> </h3>
            <p>
              从历史中找到一份沉静，在自然中寻得一份和谐；<br/> 我们希望更多的人关注自己居住和工作的空间
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
  background: url('../assets/1.jpg') no-repeat top center;
  background-size: cover;
  display: flex;
  justify-content: center ;
  color: aliceblue;
  align-items: center;
}
@media (min-width: 992px) {
  .home-bg {
    align-items: center;
  }
}
  

</style>
