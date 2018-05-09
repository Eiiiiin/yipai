<template>
<div>
   <div class="top">
    <div class="top-img">

    </div>
<a class="goback" href="/">
  <i></i>
  <span>返回Coolsite360</span></a>
  <div class="top-tip">
    <i></i>
    <h1>Coolsite360模块效果展示</h1>
  </div>
  <p>Coolsite360模块建站工具，是国内首创的结构化网页设计工具，目前已提供数十款预制模块，悬浮导航、轮播、相册、价格表、内容列表、时间轴、地图...，通过预制模块，可快速搭建网站。</p>
</div>
 <footercom />
</div>
</template>


<script>
import Footercom from "@/components/footercom";
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
  background-color: rgba(0, 0, 0, 0.6);
  .top-img {
    position: absolute;
    top: 0;
    z-index: -10;
    width: 100%;
    height: 408px;
    background-color: rgba(000, 000, 000, 0.9);
    background: url(../image/index2-topimg.png)center center no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
  .goback {
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    background-color: #000;
    display: inline-block;
    padding: 8px;
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
  .top-tip {
    text-align: center;
    display: flex;
    display:-webkit-flex;
    display:-moz-flex;
    justify-content:center;
        align-items: center;
    h1{
      display: inline-block;
      font-size: 40px;
    }
    i {
      width:60px;
      height: 60px;
      display: inline-block;
      background: url(../icon/index2-topimg2.png)center center no-repeat;
      background-size:100%;
    }
  }
  p{
    text-align: center;
  }
}
</style>
