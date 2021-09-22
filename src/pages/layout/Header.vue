<template>
  <header id="header">
    <h1>k-Home</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  created () {
    console.log('header---created')
  }
}
</script>

<style lang="less" scoped>
#header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  height: 70px;
  box-shadow: 0 4px 20px -14px rgba(0, 0, 0, 0.5);
  transform: translate3d(0, 0, 0);
  z-index: 1;
  background-color: ivory;
}
</style>