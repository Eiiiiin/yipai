<template>
  <div>
    <Headercom />
    <div class="index-box1">
      <div class="shadowbox"></div>
        <!-- <img src="../image/index-all.png" alt=""> -->
        <div class="box1-word">
        <h1>新一代响应式网站设计工具</h1>
        <p>简单 专业 够酷</p>
        <p><span>免费注册</span></p>
        <img  class="index-box1-img " src="../image/index-bg1.png" alt="">
        </div>
    </div>
    <div class="index-box2">
      <div class="box2-tittle ">
        <p class="box2-p-img "><img src="../image/index-num.png" alt=""></p>
        <p>高效率的模块建站工具、全自由度的网页前端设计工具、可视化的小程序UI设计工</p>
        <p>具,三款专业工具满足您不同阶段的设计需求</p>
      </div>
      <div class="box2-list">
        <div>
          <p><img src="../icon/box2-list-icon1.png" alt=""></p>
          <p><h3>专业建站工具</h3></p>
          <p class="box2-list-word">
         专业建站工具是面向具有一定Html、css基础的专业人员，可使用专业建站工具进行网站前端设计，每一个细节都可灵活掌控，并可导出符合标准的代码进行二次开发。
         </p>
        </div>
        <div>
          <p><img src="../icon/box2-list-icon2.png" alt=""></p>
          <p><h3>专业建站工具</h3></p>
          <p class="box2-list-word">
         专业建站工具是面向具有一定Html、css基础的专业人员，可使用专业建站工具进行网站前端设计，每一个细节都可灵活掌控，并可导出符合标准的代码进行二次开发。
         </p>
        </div>
        <div>
          <p><img src="../icon/box2-list-icon3.png" alt=""></p>
          <p><h3>专业建站工具</h3></p>
          <p class="box2-list-word">
         专业建站工具是面向具有一定Html、css基础的专业人员，可使用专业建站工具进行网站前端设计，每一个细节都可灵活掌控，并可导出符合标准的代码进行二次开发。
         </p>
         <p><i class="box2-list-wxicon"></i><a href="">了解小程序UI设计工具更多详情...</a></p>
        </div>

        <div class="box2-list-msg">
            <p class="list-msg1">SIMPLE</p>
            <p class="list-msg2">简单快捷的模块建站工具</p>
            <p class="list-msg3">...</p>
            <p class="list-msg4">Coolsite360模块建站工具，是国内首创的结构化网页设计工具，目前已提供数十款预制模块，悬浮导航、轮播、相册、价格表、内容列表、时间轴、地图...，通过预制模块，可快速搭建网站。</p>
        </div>
        <div class="box2-list-img">
          <img class="box2-list-imgshow" src="../image/box2-list-img.png" alt="">
        </div>
      </div>
      

    </div>
    <div class="index-box3">
dsadas
      </div>
  </div>
</template>

<script>
import $ from "jquery";
import Headercom from "@/components/Headercom";

export default {
  name: "index",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    $(document).ready(() => {
      setTimeout(() => {
        $(".index-box1-img").addClass("index-box1-imgshow");
      }, 1000);
    });

    $(document).ready(() => {
      var w = 0,
        r = 0;
      $(window).scroll(function(e) {
        w = $(this).scrollTop();
        // console.log(w)
        if (r <= w && r >= 520) {
          //滚轴到520px时开启动画
          // console.log("下" + r);
          $(".box2-tittle").addClass("tittle-cg");
        } else {
          $(".box2-tittle").removeClass("tittle-cg");
        }
        setTimeout(function() {
          r = w;
        }, 0);
      });
    });

    $(document).ready(() => {
      var w = 0,
        r = 0;
      $(window).scroll(function(e) {
        w = $(this).scrollTop();
        // console.log(w)
        if (r <= w && r >= 1500) {
          //滚轴到520px时开启动画
          console.log("下" + r);
          $(".box2-list-img img").addClass("box2-list-imgshow");
        } else {
          // $(".box2-list-img img").removeClass("box2-list-imgshow");
        }
        setTimeout(function() {
          r = w;
        }, 0);
      });
    });
  },

  components: {
    Headercom
    // index02,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index-box1 {
  border-bottom: 1px solid #585858;
  height: 952px;
  background: url(../image/index-all.png)center center no-repeat;
  background-image: 100%;
  text-align: center;

  .shadowbox {
    pointer-events: none;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-image: linear-gradient(
      0deg,
      currentcolor,
      rgba(180, 180, 180, 0)
    );
    opacity: 0.5;
  }
  .box1-word {
    padding: 0 7%;
    padding-top: 80px;
    position: absolute;
    top: 0;
    h1 {
      padding-top: 83px;
      font-size: 33px;
      letter-spacing: 10px;
    }
    p {
      font-size: 22px;
      letter-spacing: 7px;
      span {
        display: block;
        margin: 0 auto;
        margin-top: 27px;
        font-size: 12px;
        width: 301px;
        height: 50px;
        line-height: 50px;
        background-color: #4a86e8;
        border-radius: 4px;
        letter-spacing: 0;
        color: rgb(222, 222, 222);
        cursor: pointer;
        transition: all 1s ease;
        -webkit-transition: all 1s ease;
      }
      span:hover {
        background-color: #428bca;
        color: #fff;
      }
    }
    img {
      display: block;
      opacity: 0;
      width: 100%;
      height: 532px;
      margin-top: 90px;
      box-shadow: rgba(0, 0, 0, 0.227451) 0px 0px 21px 0px;
    }
    .index-box1-imgshow {
      display: block;
      margin-top: 64px;
      transition: all 0.4s linear;
      -webkit-transition: all 0.4s linear;
      opacity: 1;
    }
  }
}
.index-box2 {
  background-color: #222;
  padding-top: 1px;
  overflow: hidden;
  .box2-tittle {
    position: relative;
    top: 40px;
    width: 643px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 76px;
    margin-top: 90px;
    .box2-p-img {
      letter-spacing: 4px;
    }

    p {
      line-height: 36px;
      color: #878787;
      font-size: 16px;
    }
  }
  .tittle-cg {
    top: 0;
    transition: all 1s linear;
    -webkit-transition: all 1s linear;
  }
  .box2-list {
    overflow: hidden;
    padding: 0 3.6%;
    padding-bottom:120px;
    div:first-child {
      background-color: #000;
    }
    div:nth-child(2) {
      background-color: #4a86e8;
    }
    div:nth-child(3) {
      background-color: #1aad19;
    }
    div {
      width: 33%;
      height: 270px;
      font-size: 13px;
      text-align: center;
      float: left;
      p img {
        padding-top: 29px;
      }
      .box2-list-word {
        padding: 15px;
        color: #efefef;
      }
      .box2-list-wxicon {
        display: inline-block;
        width: 15px;
        height: 14px;
        background: url(../icon/box2-list-wxicon.png);
        position: relative;
        top: 1px;
        right: 8px;
      }
      a {
        color: #efefef;
      }
      a:hover {
        color: #fff;
      }
    }
  }
  .box2-list-msg{
    width:100%!important;
    height: auto!important;
    margin-bottom:40px;
  }
  .list-msg1{
        // line-height: 1.3em;
    margin-top: 68px;
    font-family: Roboto;
    // margin-bottom: 25px;
    font-weight: lighter;
    font-size: 60px;
    color: rgb(74, 134, 232); 
  }
  .list-msg2{
    font-size: 22px;
    margin-bottom:18px;
  }
  .list-msg3{
    font-size: 24px;
    margin-bottom:31px;
  }
  .list-msg4{
    font-size: 14px;
    opacity: 0.8;
    width:55%;
    margin:0 auto;
  }
  .box2-list-img{
    width:100%!important;
    img{
      display: block;
      width:100%;
      opacity: 0;
      -wwbkit-transition:all .5s linear;
      transition:all .5s linear;
      // height:100%;
      
    }
    .box2-list-imgshow{
      opacity: 1;
    }
  }
}
.index-box3{
  width:100%;
  height:500px;
  background-color: #000;
}
</style>
