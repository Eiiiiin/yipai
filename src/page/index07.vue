<template>
   <div>
  <Headercom />
  <div>
    <div style="width:100px; height:100px;background-color:#333">我是第7页</div>
  </div>
</div>
</template>

<script>
import Headercom from "@/components/Headercom";

export default {
  name: 'index03',
  data () {
    return {
      msg:'第一句话',
      msg2:'第二句话'
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
