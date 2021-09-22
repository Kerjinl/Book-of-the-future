<template>
  <div id="layout-page">
    <Header />
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Layout',
  components: { Header }
}
</script>

<style lang="less" scoped>
#layout-page {
  height: 100%;
  .layout-content {
    padding: 4rem 10rem 0;
    background-color: ivory;
    @media screen and (max-width: 1024px) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
    @media screen and (max-width: 500px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  footer {
    min-height: 5rem;
    background-color: ivory;
  }
}
</style>