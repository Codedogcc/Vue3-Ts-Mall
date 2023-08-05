<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <h2 class="h2c1">后台管理系统</h2>
      <br />
      <el-form-item class="item" label="账号：" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="on" clearable />
      </el-form-item>

      <el-form-item class="item" label="密码：" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="on"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="loginBtn"
          type="danger"
          plain
          @click="submitForm(ruleFormRef)"
          >提交</el-button
        >
        <el-button
          class="loginBtn"
          type="danger"
          plain
          @click="resetForm(ruleFormRef)"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import type { FormInstance } from 'element-plus';
import { LoginData } from '../type/login';

interface LoginForm {
  ruleFormRef: FormInstance;
  ruleForm: LoginData;
  rules: any;
}

export default defineComponent({
  setup() {
    const data = reactive(new LoginData());
    const rules = {
      username: [
        {
          required: true,
          message: 'Please input your username',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: 'Length should be 3 to 5',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please input your password',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: 'Length should be 3 to 5',
          trigger: 'blur'
        }
      ]
    };
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      console.log(formEl, 'sss');

      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!');
          return false;
        }
      });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    const aaa = () => {
      console.log(6666);
    };

    return { ...toRefs(data), rules, resetForm, submitForm };
  }
});
</script>

<style lang = 'scss' scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url('../assets/bc.png') no-repeat center;
  /* background: url('../assets/c.jpg') no-repeat center; */
  /* 背景百分比 */
  background-size: 100%;
  padding: 1px;
  .demo-ruleForm {
    position: absolute;
    /*定位方式绝对定位absolute*/
    top: 50%;
    left: 50%;
    /*顶和高同时设置50%实现的是同时水平垂直居中效果*/
    transform: translate(-50%, -50%);
    /*实现块元素百分比下居中*/
    width: 500px;
    padding: 50px;
    background: rgba(0, 0, 0, 0.5);
    /*背景颜色为黑色，透明度为0.8*/
    box-sizing: border-box;
    /*box-sizing设置盒子模型的解析模式为怪异盒模型，
    将border和padding划归到width范围内*/
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
    /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
    border-radius: 15px;
    /*边框圆角，四个角均为15px*/
  }
  .loginBtn {
    width: 48%;
  }
  .h2c1 {
    text-align: center;
    color: pink;
    margin-bottom: 10px;
  }
}
</style>
<style>
.item .el-form-item__label {
  color: pink;
}
</style>