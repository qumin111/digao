<template>
  <div id="app">
    <router-view></router-view>    
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html{
  font-size: 14px;
  letter-spacing: 1px;
  font-family:Helvetica;
  -webkit-overflow-scrolling: touch;
}
html, body, #app, .ui-wrap{
  height: 100%;
}
</style>
