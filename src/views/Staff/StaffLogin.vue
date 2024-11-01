<template>
  <div class="staffLogin">
    <div class="title">スタッフ専用ページ</div>
    <div class="regisNewStaff">
      <div class="regisNew">新規登録</div>
      <div class="btnRegisNew">スタッフ新規登録</div>
    </div>
    <div class="loginSection">
      <div class="login">ログイン</div>
      <div class="hasAccount">アカウントをお持ちの方はこちら</div>
      <div class="btnLoginByLine">LINEでログイン</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.staffLogin {
  padding: 20px 20px 0 20px;
}
.regisNewStaff {
  border: 1px solid #a6a6a6;
  padding: 20px 30px 60px 30px;
}
.regisNew {
  text-align: center;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 500;
}
.btnRegisNew {
  border: 1px solid #a6a6a6;
  background-color: #0f9ed6;
  text-align: center;
  color: #fff;
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 15px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
}
.loginSection {
  margin-top: 20px;
  border: 1px solid #a6a6a6;
  padding: 20px 30px 60px 30px;
}
.login {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
.hasAccount {
  text-align: center;
  margin: 15px 0 10px 0;
}
.btnLoginByLine {
  background-color: #00b04f;
  text-align: center;
  color: #fff;
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 15px;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}
</style>
