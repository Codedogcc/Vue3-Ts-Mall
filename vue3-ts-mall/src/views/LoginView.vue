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
import { defineComponent, reactive, toRefs, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { LoginData } from '../type/login';
import { login } from '../request/api';
import { useRouter } from 'vue-router';

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
    const ruleFormRef = ref<FormInstance>();
    const router = useRouter(); // 相当于$router
    //登录
    const submitForm = (formEl: FormInstance | undefined) => {
      console.log(formEl, 'formEl');
      if (!formEl) return;
      // 对表单的内容进行验证,validate是内置方法，检验整个表单是否符合规则
      formEl.validate((valid) => {
        console.log(valid, 'valid是布尔类型true/false');

        if (valid) {
          console.log(this, 'this是undifined');
          // 调用登录接口
          // let res = login(data.ruleForm);
          // console.log(res, 'res');
          // if (res.code === 200) {
          //   console.log('登录成功');
          //   // 1. 保存用户信息到sessionStorage
          //   // 2. 保存token到sessionStorage
          // }
          if (
            data.ruleForm.username.trim() === 'chen' &&
            data.ruleForm.password.trim() === '123456'
          ) {
            alert('login success!');
            // #todo
            router.push('/home');
            // 1. 保存用户信息到sessionStorage
            // 2. 保存token到sessionStorage
            // 3. 跳转到首页
          } else {
            alert('cant find this user!');
          }
        } else {
          alert('login error!');
          return false;
        }
      });
    };
    // 重置
    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };

    return { ...toRefs(data), rules, resetForm, submitForm, ruleFormRef };
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