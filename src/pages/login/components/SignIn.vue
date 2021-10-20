<template>
  <div>

    <KForm ref="signInForm"
           class="login-form"
           :form="form"
           :list="formList"
           :rules="rules"
           @submit="submit">
      <template #header>
        <h1>K-Home</h1>
      </template>
      <template v-slot:footer="form">
        <a-form-model-item>
          <a-checkbox :defaultChecked="true"
                      :checked="form.remember"
                      @change="remChange">
            记住我
          </a-checkbox>
          <a class="login-form-forgot"
             href="javascript:;">
            忘记密码？
          </a>
          <a-button type="primary"
                    html-type="submit"
                    class="login-form-button">
            登 录
          </a-button>
          Or
          <a href="javascript:;"
             @click="goSignUp">
            立即注册!
          </a>
        </a-form-model-item>
      </template>
    </KForm>
  </div>

</template>

<script>
import KForm from '../../../components/k-form.vue';
// import { Login } from '../apis/index';

export default {
  name: 'SignIn',
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
          placeholder: 'admin'
        },
        {
          type: 'input',
          inputType: 'passwod',
          model: 'pwd',
          placeholder: 'welcome1'
        }
      ],
      rules: {

      }
    }
  },
  methods: {
    submit (e) {
      e.preventDefault();
      console.log(this.form)
      // this.form.validateFields((err, v) => {
      //   if (!err) {
      //     const params = {
      //       user: window.btoa(JSON.stringify({ name: v.account, pwd: v.password })),
      //       authCode: 0
      //     }
      //     Login(params).then(res => {
      //       if (res.resultCode === 200) {
      //         localStorage.setItem('token', JSON.stringify({ a: window.btoa(v.account), p: window.btoa(v.password) }))
      //         this.$router.push({ name: 'home' })
      //       } else {
      //         console.error({ res })
      //       }
      //     })
      //   }
      // })
    },
    remChange (e) {
      this.form.remember = e.target.checked;
    },
    goSignUp () {
      this.$router.push({ name: 'login', params: { type: 'SignUp' } })
    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  width: 400px;
  height: 300px;
  margin: 0 auto;
  margin-top: 10%;
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>