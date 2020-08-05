<template>
  <div class="vip">
   <div class="vipcenter"  >会员中心</div>
   <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>我的优惠</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-shopping-cart-full"></i>
        <span slot="title">订单信息</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">点餐</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-comment"></i>
        <span slot="title">论坛</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-school"></i>
        <span slot="title">附近的店</span>
      </el-menu-item>
      <el-menu-item index="4" class="selected4">
        <i class="el-icon-setting"></i>
        <span slot="title">退出登录</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'vip',
  data () {
    return {
      msg: '米线可以配可乐',
      id :'',
      
    }
  },
  methods: {
    
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      
          

    
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo{
  width: 100%;
  left: 50%;
  right: 50%;
  position: absolute;
  transform: translate(-50%,0%);

}
.vipcenter{
  background: #009999;
  height: 30px;
  color:whitesmoke;
 
}
.selected4{
  background-color: red;
}


</style>
