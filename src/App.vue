<template>
<div>
 

  <div id="app">
    <!-- <p>
      <router-link to="log">22</router-link>
    </p> -->
  
    <!-- <router-link to="log"></router-link> -->
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
  display: flex;
  display: inline-block;
  margin-top: 130px;
  
}



</style>
