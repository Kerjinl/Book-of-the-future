<template>
  <section id="login">
    <div class="login-form">
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
                   placeholder="Username">
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
                   placeholder="Password">
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: this.$form.createForm(this),
    }
  },
  created () {
  },
  methods: {
    submit (e) {
      e.preventDefault();
      this.form.validateFields((err, v) => {
        if (!err) {
          localStorage.setItem('token', JSON.stringify({ a: window.btoa(v.account), p: window.btoa(v.password) }))
          this.$router.push({ name: 'home' })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  height: 100%;
  overflow: hidden;
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
}
</style>