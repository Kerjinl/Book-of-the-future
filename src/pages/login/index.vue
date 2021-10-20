<template>
  <section id="login">
    <component :is="curCom"></component>
    <!-- <SignIn></SignIn> -->
    <!-- <div class="login-form">
      <a-form :form="form"
              class="login-form"
              @submit="submit">
        <h1>K-Home</h1>
        <a-form-item>
          <a-input autocomplete="off"
                   v-decorator="[
          'account',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
                   placeholder="admin">
            <a-icon slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                   type="password"
                   placeholder="welcome1">
            <a-icon slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]">
            Remember me
          </a-checkbox>
          <a class="login-form-forgot"
             href="javascript:;">
            Forgot password
          </a>
          <a-button type="primary"
                    html-type="submit"
                    class="login-form-button">
            Log in
          </a-button>
          Or
          <a href="javascript:;">
            register now!
          </a>
        </a-form-item>
      </a-form>
    </div> -->
  </section>
</template>

<script>
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'Login',
  components: { SignIn, SignUp },
  data () {
    return {
      form: this.$form.createForm(this),
      curCom: null,
      routes: [
        'SignIn',
        'SignUp',
      ]
    }
  },
  created () {
    this.getCom()
  },
  methods: {
    getCom () {
      const { type } = this.$route.params;
      if (this.routes.includes(type)) {
        this.curCom = type;
      }
    }
  },
  watch: {
    '$route' () {
      this.getCom()
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  height: 100%;
  overflow: hidden;
}
</style>