<template>


<div>
  <Headercom />
  <div style="padding-top:1px;">
    <div style="width:100px; height:100px;background-color:#333">我是第二页</div>
  </div>
</div>


  
</template>

<script>
// import Headercom from "@/components/Headercom";

import Headercom from "@/components/Headercom";


export default {
  name: 'index02',
  data () {
    return {
    }
  },
  components:{
    Headercom,
  }
}

// var vm = new Vue({
//   el:'#app',
//   data:{
//     msg:'fhdkfhd'
//   }
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .aaa{
    margin: 0 auto;
    background-color:red;
    font-size:40px;
    .bbb{
      color:#333;
      margin-top:200px;
    }
  }
</style>
