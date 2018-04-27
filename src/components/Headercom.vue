<template>
  <div class="header " >
   <div class="top clearfix">
      <div class="logo" @click="goIndex"><img src="../image/top-logo.png" alt="意派"></div>
     <!-- <router-link :to="/index.html"> <div class="logo"><img src="../image/top-logo.png" alt="意派"></div></router-link> -->
     <div class="top-right">
       <ul class="clearfix">
         <li  v-for="nav in list">
           <!-- 给li循环,nav相当于自己var的命名,循环声明的list里面的属性 -->
         <router-link  :to="{name : nav.pathName}">
         <a href="">{{nav.text}}</a>
         </router-link> 
         </li> 
       </ul>
     </div>
   </div>
  </div>
  
</template>

<script>

import $ from "jquery";
export default {
  name: "Headercom",
  data() {
    return {
      list: [
        {
          text: "网站模板",
          pathName: "index02"
        },
        {
          text: "模块展示",
          pathName: "index03"
        },
        {
          text: "服务商",
          pathName: "index04"
        },
        {
          text: "网站案例",
          pathName: "index05"
        },
        {
          text: "价格",
          pathName: "index06"
        },
        {
          text: "学习资源",
          pathName: "index07"
        },
        {
          text: "小程序",
          pathName: "index08"
        },
        {
          text: "登录",
          pathName: "index09"
        },
        {
          text: "注册",
          pathName: "index10"
        }
      ]
    };
  },
  methods: {
    goIndex: function() {
      window.location.href = "/";
    }
  },
  mounted() {
    $(document).ready(() => {
      $(".header").on("click", () => {
        // alert("aaa");
      });
    });

    $(document).ready(function() {
      var p = 0,
        t = 0;
      $(window).scroll(function(e) {
        p = $(this).scrollTop();

        if (t <= p && t >= 76) {
          //下滚
          // console.log( typeof(t))
          // console.log(t)
          // console.log("下")
          $(".header").addClass("hdown");
          $(".header").removeClass("h0 hup");
        } else if (p == 0) {
          $(".header").addClass("h0");
          $(".header").removeClass("hdown hup");
          $(".header .top .top-right ul li a").removeClass("top-right-cg");
        } else {
          //上滚
          // console.log("shang");
          $(".header").addClass("hup");
          $(".header").removeClass("h0 hdown");
          $(".header .top .top-right ul li a").addClass("top-right-cg");
        }
        setTimeout(function() {
          t = p;
        }, 0);
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  width: 100%;
  border-bottom: 1px solid #898a8c;
  background-color: #67686a;
  position: fixed;
  top: 0;
  z-index: 10;

  .top {
    height: 76px;
    max-width:1200px;
margin:0 auto;
    .logo {
      float: left;
      cursor: pointer;
      width: 180px;
      height: 70px;
      img {
        display: block;
        width: 100%;
        padding-top: 26px;
      }
    }
    .top-right {
      float: right;
      ul li {
        float: left;
        a {
          font-size: 13px;
          padding: 0 8px;
          display: inline-block;
          color: #fff;
          height: 76px;
          position: relative;
          line-height: 76px;
        }
        a:after {
          content: "";
          display: block;
          width: 0;
          height: 3px;
          background-color: #d9d9d9;
          position: absolute;
          opacity: 1;
          bottom: 0;
          left: 15px;
          right: auto;
          top: auto;
          transition: all 0s ease;
          -webkit-transition: all 0s ease;
        }
        a:hover::after {
          content: "";
          display: block;
          width: calc(100% - 30px);
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;
        }
      }
      ul li:hover {
        background-color: #1a1a1a;
        // border-bottom:1px solid #eee;
        transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
      }
    }
  }
}
.h0 {
  top: 0;
}
.hup {
  background-color: #000;
  top: 0;
  height: 60px;
}
.top-right-cg {
  height: 60px !important;
  line-height: 60px !important;
}
.top-right-cg:hover {
  background-color: #1a1a1a !important;
}
.hdown {
  background-color: #000;
  top: -81px;
}
</style>





