<template>
   <div>
  <Headercom id="header" />
    <div style="height:76px; background-color: rgb(67, 67, 67);"></div>
    
     <div class="reg-main">
      <div class="main-box">
        <div class="main-tittle">
          <h1>SIGN UP </h1>
          <h3>登录</h3>
          <p class="tip">用户名或密码错误</p>
        </div>
        <div class="reg-box">
          <div class="box-left">
            <p>邮箱:</p>
              <input class="yx" type="text"   value=""  placeholder="请输入注册邮箱">
              <span class="shadowspan yx-tip">请输入正确的邮箱地址!</span>
              <p>密码:</p>
              <input class="psw-input" type="password" placeholder="请输入密码">
              <span class="shadowspan psw-tip">密码长度不能少于5</span>
              <p>确认密码:</p>
              <input class="psw-input-ag"  type="password" placeholder="请在次输入密码">
              <span class="shadowspan psw-tip-ag">两次密码不一致!</span>
              <p>昵称:</p>
              <input class="nickname-input" type="text" placeholder="昵称">
              <span class="shadowspan nickname-tip">昵称不能为空</span>
              <p>验证码:</p>
              <input class="verification" type="text" placeholder="验证码">

            <p class="p-box">
              <input class="checbox" type="checkbox" />
              
        我已经认真阅读并同意Coolsite360的《<a href="http://www.coolsite360.com/disclaimer/">使用协议</a>
        》。
            </p>

              <button class="btn-reg">注册</button>
              <button class="btn-login">登录</button>

          </div>
          <div class="box-right">
            <p>使用Epuh360 帐号登录</p>
          </div>
        </div>
      </div>
    </div>

  <footercom />
</div>
</template>

<script>
import Headercom from "@/components/Headercom";
import Footercom from "@/components/footercom";
import $ from "jquery";
export default {
  name: 'index03',
  data () {
    return {
     
    }
  },
  methods:{},
    
    mounted(){
    $(document).ready(()=>{
      var count=0;
      $('.yx').change(()=>{
        // $('.yx-tip').css("display","block")
        var yxVal = $('.yx').val();
        var yxReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(yxReg.test(yxVal)){
          $('.yx-tip').css("display","none");
          // count++;
        }else{
          $('.yx-tip').css("display","block");
          // $('.yx-tip').text("请输入正确的邮箱地址");
        }
      })//邮箱验证

    $('.psw-input').change(()=>{
      var pswVal = $('.psw-input').val();
      var pswReg = /^[0-9&-]{4,20}$/g;
      if(pswReg.test(pswVal)){
        $('.psw-tip').css("display","none");
      }else
      $('.psw-tip').css("display","block");
      // $('.psw-tip').text("密码长度不能少于5")
    })

    $('.psw-input-ag').change(()=>{
      var pswVal = $('.psw-input').val();
      var pswagVal = $('.psw-input-ag').val();
      if(pswagVal === pswVal){
        $('.psw-tip-ag').css("display","none");
      }else{
        $('.psw-tip-ag').css("display","block");
      }
    })

$('.nickname-input').change(()=>{
  var ncnameVal = $('.nickname-input').val();
  if(!ncnameVal){
    $('.nickname-tip').css('display','block')
  }
})
    });
 

    },
 
  components:{
    Headercom,
    Footercom
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
.reg-main {
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
    .reg-box{
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
      .shadowspan{
        display: none;
        padding:5px;
        padding-bottom:10px;
        color: #d9534f;
      }
      .p-box{
        position: relative;
        padding-left: 35px;
      
      .checbox{
        position: absolute;
        top:1px;
        left:0;
        width: 13px;
        height: 13px;
        margin-right:10px;

      }
      a{
        color: #f80;
      }
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
      .btn-reg{
        background-color: rgba(74,134,232,0.98);
        float: left;
        
      }
      .btn-reg:hover{
          background-color: rgba(4,112,191,0.98);
        }
      .btn-login{
        background-color:rgba(161, 157, 157, 0.98);
        float:right;
      }
      .btn-login:hover{
        background-color: rgba(8,82,150,0.98);
      }
      .verification{
        display: block;
        width:120px;
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
