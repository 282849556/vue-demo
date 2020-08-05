<template>
  <div class="hello">
     <!-- <div><img src="./assets/food.png"></div>  -->
    
    <el-row>
  <el-button class='btn1' @click="addRoutes1" >今日特价</el-button>
  <el-button class='btn1' type="primary"  @click="addRoutes2">今日热销</el-button>
  <el-button class='btn1' type="success"  @click="addRoutes3">我要点餐</el-button>
  <el-button class='btn1' type="info"  @click="addRoutes4">看看小心思</el-button>
  <el-button class='btn1' type="warning"  @click="addRoutes5">为Ta点餐</el-button>
  <el-button class='btn1' @click="addRoutes6" type="danger">会员中心
    
  </el-button>
   
    </el-row>
    <h1 style="color #4D4DFF ">{{ msg }}</h1>
     <hr />
    <h2>好吃、也好玩</h2>
     <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  name:'log',
  name:'onSale',
  data () {
    return {
      msg: '小心思，欢迎您',
      data:{
         count:3,
      }
    }
  },
  methods: {
    addRoutes1 () {
      this.$router.push('/onSale')
    },
    addRoutes2 () {
      this.$router.push('./')
    },addRoutes3 () {
      this.$router.push('/log')
    },addRoutes4 () {
      this.$router.push('/log')
    }, addRoutes5 () {
      this.$router.push('/log')
    }, addRoutes6 () {
      this.$router.push('/log')
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
 overflow: hidden;
 background: rgba(26, 134, 211, 0.3);
 
 position: absolute;
 width: 100%;
 
 height: 50%; 
 margin: 0px;
 padding: 0px;
 left: 50%;
  
  transform: translate( -50%);

}

.btn1{
  margin: 10px auto;
  bottom: 10px;
}


h1 {
  font-weight: normal;
  height: 30px;
  font-style: inherit;
  color:white;
  
  
}
h2
 {
  font-weight: normal;
  height: 4px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:white;
}
hr
{
margin-top: 30px;
margin-bottom: 1px;
border:1px solid rgb(18, 231, 18);
}
</style>
