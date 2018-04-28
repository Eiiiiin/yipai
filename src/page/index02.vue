<template>


<div class="index-box">
  <Headercom />
    <div style="height:76px; background-color: rgb(67, 67, 67);"></div>
  <div class="tittle">
    <h1>TEMPLATES</h1>
    <h2>响应式网站模板</h2>
  </div>
    <div class="bg">
  <div class="main">
  <div class="main-shopping">
    <ul>
      <li  v-for="nav in list">
        <div class="li-img">
          <img class="li-img-img" :src="nav.imgSrc" alt="">
          <div class="li-tip"><i></i><span>{{nav.liTip}}</span></div>
          <div class="shadow-img">
            <div class="shadowin">
              <a class="in-img" href=""></a>
              <p><span>{{nav.shadowspan1}}}</span><a href="">{{nav.shadowa}}</a></p>
              <span class="shadow-btn">{{nav.shadowBtn}}</span>
            </div>
          </div>
        </div>
        <div class="li-word">
          <p>{{nav.wordP}}</p>
          <span class="li-price">{{nav.wordPrice }}</span>
          <span class="li-buy">{{nav.wordBuy}}</span>
        </div>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
  </div>
   </div> 
  <Footercom />
</div>


  
</template>

<script>
import Headercom from "@/components/Headercom";
import Footercom from "@/components/footercom";
// import $ from "jquery";

export default {
  name: "index02",
  data() {
    return {
      list:[{
        liTip:"CMS",
        imgSrc:require("../image/index2-img1.png"),
        shadowspan1:"Designed By：",
        shadowa:"CHENHUI_GT",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },
      {
        liTip:"CMS",
        imgSrc:require("../image/index2-img2.jpg"),
        shadowspan1:"Designed By：",
        shadowa:"CHENHUI_GT",
        shadowBtn:"预览模版",
        wordP:"旅游服务展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },
      {
        liTip:"CMS",
        imgSrc:require("../image/index2-img3.png"),
        shadowspan1:"Designed By：",
        shadowa:"CHENHUI_GT",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img4.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img5.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img6.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img7.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img8.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img9.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img10.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img11.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img12.png"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img13.jpg"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img14.jpg"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img15.jpg"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img16.jpg"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img17.jpg"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      },{
        liTip:"CMS",
        imgSrc:require("../image/index2-img18.jpg"),
        shadowspan1:"Designed By：",
        shadowa:"Ein",
        shadowBtn:"预览模版",
        wordP:"家居装饰展示类模板",
        wordPrice:"¥299",
        wordBuy:"购买模板"

      }
      ]
    };
  },
  components: {
    Headercom,
    Footercom
  }
};
</script>

<style lang="less" scoped>
body,
html,
ul,
li,
h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.bg{
  background-color: rgb(67, 67, 67);
}
.index-box {
  background-color: #000;
}
.header {
  background-color: #000;
}
  .tittle {
    text-align: center;
    padding: 40px;
    h1 {
      margin-bottom: 5px;
      font-weight: lighter;
      font-size: 60px;
      color: rgb(74, 134, 232);
    }
    h2 {
      padding-left: 2px;
      padding-right: 2px;
      font-size: 24px;
    }
  }
.main {
  max-width: 1200px;
  margin: 0 auto;

  .main-shopping {
    padding-bottom: 70px;
    background-color: rgb(67, 67, 67);
    ul {
      display: flex;
      display: -webkit-flex;
          flex-wrap: wrap;
    }
    li {
      width: 400px;
      padding: 20px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      
      // margin-bottom:20px;
      // background-color: red;
      .li-img:hover .shadow-img {
        opacity: 1;
        transform: rotate(0deg) scale(1) translate(0%, 0%);
        transition: All 1s ease;
        -webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -webkit-transition: All 1s ease;
      }
      .li-img:hover .li-img-img{
        transition: All 10s linear;
         transform:scale(1.5);
         
      }
      .li-img {
        height: 220px;
        position: relative;
        overflow: hidden;

        .shadow-img {
          opacity: 0;
          box-sizing: border-box;

          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(7, 55, 99, 0.84);
          width: 100%;
          height: 100%;
          padding: 20px;
          .shadowin {
            margin: 0 auto;
            width: 200px;
            padding-top: 25px;
            .in-img {
              display: block;
              width: 40px;
              height: 40px;
              background: url(../image/shadowin-img.png)center center no-repeat;
              background-size: cover;
              border-radius: 50%;
              margin: 0 auto;
              margin-bottom: 5px;
            }
            p {
              text-align: center;
              span {
                font-size: 12px;
                padding-right: 10px;
              }
              a {
                font-size: 13px;
                color: #fff;
              }
            }
            .shadow-btn {
              font-size: 12px;
              width: 120px;
              display: block;
              text-align: center;
              background-color: #f0ad4e;
              border-color: #eea236;
              height: 30px;
              line-height: 30px;
              border-radius: 5px;
              margin: 0 auto;
              margin-top: 10px;
            }
          }
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .li-tip {
          position: absolute;
          top: 0;
          right: 0;
          background-color: #428bca;
          border-radius: 3px;
          margin-top: 10px;
          margin-right: 10px;
          font-size: 12px;
          padding: 2px 10px;
          height: 20px;
          overflow: hidden;
          i {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(../icon/index2-icon.png)center center no-repeat;
            background-size: 100%;
          }
          span {
            float: right;
            height: 20px;
            line-height: 20px;
          }
        }
      }

      .li-word {
        min-height: 20px;
        padding: 9px 10px;
        font-size: 14px;
        overflow: hidden;
        p {
          margin-bottom: 10px;
          margin-top: 10px;
        }
        .li-price {
          color: #f0ad4e;
          display: inline-block;
          padding-top: 5px;
        }
        .li-buy {
          float: right;
          background-color: #428bca;
          border-color: #357ebd;
          width: 80px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
        }
      }
    }
    li:hover{
      box-shadow: rgba(0,0,0,0.188235) 0px 17px 50px 0px;
    -webkit-transform: translate3d(0px,-2px,0px);
    transform: translate3d(0px,-2px,0px);
    transition: all 0.3s cubic-bezier(0.55,0,0.1,1);
    transition: All 0.3s ease;
    }
  }
}
</style>
