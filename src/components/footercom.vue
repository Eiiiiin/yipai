<template>
  <div class="footer">
      <div class="f-nav">
        <div class="footer-nav">
            <h4>CONTACT</h4>
            <ul>
                <li>
                    <i class="nav-mail"></i>
                    <span>合作Email：jason@21epub.com</span>
                </li>
            </ul>   
            </div>
        <div class="footer-nav ewm-re">
            <em class="nav-icon-ewm"></em>
            <h4>SOCIAL LINKS</h4>
            <ul>
                <li>
                    <i class="nav-icon"></i>
                    <a class="nav-wx" href="">微信：意派科技</a>
                    <i class="nav-icon-wx"></i>
                    
                </li>
                <li>
                    <i class="nav-icon"></i>
                    <a href="">新浪微博：意派科技</a>
                </li>
                <li>
                    <i class="nav-icon"></i>
                    <a href="">QQ3群: 327040741</a>
                </li>
            </ul>
            </div>
        <div class="footer-nav">
            <h4>LINKS</h4>  
            <ul>
                <li><i class="nav-icon"></i><a href="">产品博客</a></li>
                <li><i class="nav-icon"></i><a href="">网页设计教程</a></li>
                <li><i class="nav-icon"></i><a href="">网页设计咨询</a></li>
                <li><i class="nav-icon"></i><a href="">网页设计网址导航</a></li>
                <li><i class="nav-icon"></i><a href="">免责声明</a></li>
            </ul>
            </div>
        <div class="footer-nav">
            <h4>PRODUCTS</h4>  
            <span>相关产品</span>
            <em></em> 
            </div>
  </div>
  <div class="f-nav2">
      <div class="f-nav2-left">
          <p>上海意派信息科技有限公司 © 2014-2018 </p>
          <p>沪公网安备 31010502002783号</p>
          <p>沪ICP备13031638号</p>
      </div>
      <div class="f-nav2-right">
          <span>友情链接:</span>
      <span><a href="">企业微信/</a></span>
      <span><a href="">移动办公</a></span>
      </div>
  </div>
  <div class="f-nav3">
        <a href="">h5页面制作工具/</a>
        <a href="">h5制作工具/</a>
        <a href="">h5页面制作软件/</a>
        <a href="">微信h5页面制作软件/</a>
        <a href="">h5指挥平台/</a>
        <a href="">h5页面制作/</a>
        <a href="">h5在线制作/</a>
        <a href="">制作h5的软件/</a>
        <a href="">微信h5的页面制作/</a>
        <a href="">模块建站/</a>
        <a href="">自助建站/</a>
        <a href="">响应市网站/</a>
        <a href="">响应式网页制作/</a>
        <a href="">响应式网页工具/</a>
        <a href="">响应式网页模版/</a>
        <a href="">响应式网页布局/</a>
        <a href="">响应式设计/</a>
        <a href="">响应式布局/</a>
        <a href="">bootstrap/</a>
        <a href="">响应式网页/</a>
        <a href="">响应式网页设计/</a>
        <a href="">响应式网页制作/</a>
        <a href="">响应式网站制作/</a>
        <a href="">响应式网站模板/</a>
        <a href="">像影视网站设计/</a>
        <a href="">微信小程序工具/</a>
        <a href="">微信小程序开发/</a>
  </div>
  </div>
</template>

<script>
export default {
  name: "footercom",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  background-color: #000;
  color: #d4d4d4;
  .f-nav {
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #333;
    color: #d4d4d4;
    padding-bottom: 20px;
    // overflow: hidden;
    display: flex;
    .footer-nav {
      float: left;
      width: 25%;
      padding-left: 10px;
      box-sizing: border-box;
      padding-top: 10px;
      h4 {
        margin: 5px 0;
        position: relative;
        border-right: 1px solid rgba(255, 255, 255, 0.490196);
      }
      ul {
        li {
          overflow: hidden;
          padding: 4px;
          i {
            // display: inline-block;
            text-align: center;
            float: left;
          }
          .nav-mail {
            width: 16px;
            height: 16px;
            background: url(../icon/footer-mail.png)center center no-repeat;
            background-size: 100%;
          }
          span {
            font-size: 12px;
            float: left;
            padding-left: 10px;
          }
          .nav-icon {
            width: 13px;
            height: 13px;
            padding-top: 3px;
            background: url(../icon/footer-yjt.png)center center no-repeat;
            background-size: 100%;
          }
          a {
            float: left;
            font-size: 12px;
            float: left;
            padding-left: 10px;
            padding-right: 5px;
            color: #d4d4d4;
          }
          a:hover {
            color: #d9534f;
          }

          .nav-icon-wx {
            width: 16px;
            height: 16px;
            background: url(../icon/footer-icon-wx.png)center center no-repeat;
            background-size: 100%;
            float: left;
          }
          .nav-wx:hover .nav-icon-ewm {
            display: block;
          }
          .nav-icon-ewm {
            display: block;
            width: 150px;
            height: 150px;
            background: url(../icon/footer-wx.jpg)center center no-repeat;
            background-size: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
    .ewm-re {
      position: relative;
      .nav-icon-ewm {
        // display: block;
        width: 150px;
        height: 150px;
        background: url(../icon/footer-wx.jpg)center center no-repeat;
        background-size: 100%;
        position: absolute;
        top: -115px;
        left: 9px;
        z-index: 10;
        display: none;
      }
    }
  }
  .f-nav2 {
    max-width: 1200px;
    margin: 0 auto;
    font-size: 12px;
    overflow: hidden;
    .f-nav2-left {
      padding: 5px;
      float: left;
      p {
        padding: 3px;
      }
    }
    .f-nav2-right {
      float: right;
      padding: 5px;
      span {
        a {
          color: #d4d4d4;
        }
        a:hover {
          color: #d9534f;
        }
      }
    }
  }
  .f-nav3{
      max-width: 1000px;
      padding-right:200px;
    margin: 0 auto;
    font-size: 14px;
    padding-top:40px;
    a{
        display: inline-block;
        color: #444;
        padding:3px;
        padding-top:5px;
    }
  }
}
</style>
