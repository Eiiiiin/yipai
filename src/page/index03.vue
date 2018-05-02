<template>
<div>
   <div class="top">
<a class="goback" href="/">
  <i></i>
  <span>返回Coolsite360</span></a>
  
</div>
 <footercom />
</div>
</template>


<script>

import Footercom from "@/components/footercom"
export default {
  name: "index03",
  data() {
    return {
      msg: "第一句话",
      msg2: "第二句话"
    };
  },
  mounted() {},
  components: {
    Footercom
  }
};

// var vm = new Vue({
//   el:'#app',
//   data:{
//     msg:'fhdkfhd'
//   }
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
body,
html,
ul,
li,
h1,
h2,
h3,
h4,
a,
p {
  margin: 0;
  padding: 0;
  list-style: none;
}
.top {
  width: 100%;
  height: 408px;
  // background-color: rgba(000, 000, 000, 0.9)
  background: url(../image/index2-topimg.png)center center no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  .goback {
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    background-color: #000;
    display: inline-block;
    padding:8px;
    i {
      background: url(../icon/jtz.png)center center no-repeat;
      background-size: 100%;
      background-color: #fff;
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      vertical-align: -2px;
    }
    span {
      display: inline-block;
      height: 14px;
    }
  }
}
</style>
