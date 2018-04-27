<template>
   <div>
  <Headercom id="header" />
  <div style="height:76px; background-color: rgb(67, 67, 67);"></div>

    <div class="login-main">
      <div class="main-box">
        <div class="main-tittle">
          <h1>LOGIN</h1>
          <h3>登录</h3>
          <p class="tip">用户名或密码错误</p>
        </div>
        <div class="login-box">
          <div class="box-left">
            <p>邮箱:</p>
              <input type="text" placeholder="请输入注册邮箱">
              <p>密码:</p>
              <input type="text" placeholder="请输入密码">

              <button class="btn-login">登录</button>
              <button class="btn-reg">注册</button>

          </div>
          <div class="box-right">
            <p>使用Epuh360 帐号登录</p>
          </div>
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
  name: "index03",
  data() {
    return {};
  },
  components: {
    Headercom,
    Footercom
  },
  methods: {
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
body,html,h1,h2,h3,h4,h5,ul,li,a,p {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}
#header {
  background-color: rgb(67, 67, 67);
}
.hup{
  background-color: #000!important;
}
.login-main {
  background-color: rgb(67, 67, 67);
      padding-bottom: 200px;
    padding-top: 80px;
  .main-box {
    max-width: 1200px;
    margin: 0 auto;
    .main-tittle{
      padding:20px;
    h1 {
      margin-bottom: 5px;
      font-weight: lighter;
      font-size: 50px;
      color: rgb(74, 134, 232);
    }
    h3{
      font-size: 24px;
    }
    .tip{
      padding:5px;
      padding-top:30px;
      color:red;
      display: none;
      // font-size: 14px;
    }
    }
    .login-box{
      display: flex;
      display: -webkit-flex;
      p{
        margin-bottom:5px;
      }
      .box-left{
        width: 600px;
        overflow: hidden;
        padding-left:20px;
        padding-right:15px;
        // background: red;
         input{
        width:100%;
        height: 40px;
        background-color: rgba(112, 112, 112, 0.43);
        color: rgb(219, 219, 219);
          outline:none;
          border:none;
          border-radius: 5px;
          padding:8px 12px;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          margin-bottom:10px;
      }
      button{
        border:none;
            text-align: center;
    width: 120px;
    height: 40px;
    border-radius: 3px;
    color:#fff;
    margin-top:40px;
    cursor:pointer;
    outline: none;
      }
      .btn-login{
        background-color: rgba(74,134,232,0.98);
        float: left;
        
      }
      .btn-login:hover{
          background-color: rgba(4,112,191,0.98);
        }
      .btn-reg{
        background-color:rgba(161, 157, 157, 0.98);
        float:right;
      }
      .btn-reg:hover{
        background-color: rgba(8,82,150,0.98);
      }
      }
      .box-right{
        width: 600px;
        padding-left: 51px;
    padding-right: 15px;
    padding-top: 23px;
    p{
      border-radius: 5px;
      text-align:center;
          background-color: rgba(138, 138, 138, 0.5);
          height: 50px;
          line-height: 50px;
          margin: 0 30px;
          outline: text;
          font-size: 16px;
    }
      }
     
    }
  }
}
</style>
