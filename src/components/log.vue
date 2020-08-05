<template>
  <div class="log">
    <div > 

      
    <span class=inputusername>用户名
      <el-input size="small" style='width:40%' class=username v-model="input1" placeholder="请输入用户名">
        </el-input>
    </span>
    </div>
        <span class=inputusercode>密码
      <el-input size="small" style='width:40%' class=usercode placeholder="请输入密码" v-model="input2" show-password>
      </el-input>
    </span>
      

 
    
   <h1 input='text'>{{msg}}</h1>
   <h1>{{title}}</h1>
   <span @click="getuserinfo">查天气</span>
   <span class="bgc" > 选择tiaoj</span>

    <el-select clearable  v-model="value" placeholder="请选择" @change='select(value)' >
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>
     <el-button :disabled='flag' type="success" plain>注册</el-button>
    <el-button type="primary"  @click="login" plain>登录
      <!-- <router-link to="vip"></router-link>
    <router-view/> -->
    </el-button>
  </div>
</template>

<script>

export default {
  name: 'log',
  data () {
    return {
      flag:false,
      options:[],
value:'',
      msg: '米线可以配可乐',
      input1:'',
      input2:'',
      id :'',
      message:'',
      title:{}
    }
  },
  created(){
this.getuserinfo()
  },
  methods: {
    select(value){
      if(value){
      this.flag=true

      }else{
      this.flag=false

      }
    },
    login(){
if(!this.value){
this.$message({
          message: '请选择条件',
          type: 'err'
        });
        return
}

 this.$axios.get('https://api.apiopen.top/videoHomeTab?param='+this.value)
  .then(res => {
    console.log('2222');
      debugger
      if(res.data.code==200){
 this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });

      }
    // 成功回调
    console.log(res);
  }).catch(err => {
    // 错误回调
    console.log(err);
  })
    },
      addRoutes3() {
      this.$router.push('/vip');
   
    
  },     
 
    getuserinfo(){
    console.log('111111');

  this.$axios.get('https://api.apiopen.top/videoHomeTab')
  .then(res => {
    console.log('2222');
      

this.options=res.data.result;
    // 成功回调
    console.log(res);
  }).catch(err => {
    // 错误回调
    console.log(err);
  })
    },
    getuserinfo6(){
      console.log(this.input1)
    }
    }
    
     
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
  width: 375px;
}

.inputusername{
  
  margin: 0px;
  padding: 0px;
  
  text-align: center;
}
.inputusercode{
  
  margin: 0px;
  padding: 0px;
  text-align: center;
  display: block;
 
}
h1{
  font-family: 'Times New Roman', Times, serif;
}
.username{
  margin: 10px;
}
.usercode{
  margin: 10px;
}
.bgc{
  border-radius: 50px;
background: #55b9f3;
box-shadow:  -10px 10px 20px #25516b, 
             10px -10px 20px #85ffff;
}

</style>