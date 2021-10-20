<template>
  <div>

    <KForm ref="signInForm"
           :form="form"
           :list="formList"
           class="login-form"
           @submit="submit">
      <template #header>
        <a-form-model-item class="title">
          <h1>K-Home
            <span v-if="closeEye">=￣ω￣=</span>
            <span v-else>(・ω・)</span>
          </h1>
        </a-form-model-item>
      </template>

      <template #pwd>
        <a-input v-model="form.pwd"
                 type="password"
                 placeholder="请输入密码"
                 @focus="closeEye = true"
                 @blur="closeEye= false"></a-input>
      </template>

      <template #cpwd>
        <a-input v-model="form.cpwd"
                 type="password"
                 placeholder="请输入密码"
                 @focus="closeEye = true"
                 @blur="closeEye= false"></a-input>
      </template>

      <template #footer>
        <a-form-model-item>
          <a-button type="primary"
                    html-type="submit"
                    class="login-form-button">
            注册
          </a-button>
          <a class="login-form-forgot"
             href="javascript:;"
             @click="goSignIn">
            已有账号？前往登录 ->
          </a>
        </a-form-model-item>
      </template>
    </KForm>
  </div>

</template>

<script>
import KForm from '../../../components/k-form.vue';

export default {
  name: 'SignUp',
  components: {
    KForm
  },
  props: {},
  data () {
    return {
      form: {
        remember: true
      },
      formList: [
        {
          type: 'input',
          model: 'account',
          placeholder: '请输入账号'
        },
        {
          type: 'input',
          inputType: 'passwod',
          model: 'pwd',
          placeholder: '请输入密码',
          slot: 'pwd'
        },
        {
          type: 'input',
          inputType: 'passwod',
          model: 'cpwd',
          placeholder: '请再次确认密码',
          slot: 'cpwd'
        }
      ],
      closeEye: false
    }
  },
  methods: {
    submit (e) {
      e.preventDefault();
      console.log(this.form)
    },
    remChange (e) {
      this.form.remember = e.target.checked;
      console.log(e.target.checked)
    },
    goSignIn () {
      this.$router.push({ name: 'login', params: { type: 'SignIn' } })
    },
  }
}
</script>

<style lang="less" scoped>
.login-form {
  width: 400px;
  height: 300px;
  margin: 0 auto;
  margin-top: 10%;
  .title {
    margin-bottom: 0;
    h1 {
      span {
        float: right;
      }
    }
  }

  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>