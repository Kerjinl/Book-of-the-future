<template>
  <div class="home">
    <section class="userInfo-card">
      <a-card>
        <div class="avatar"></div>
        <div>
          <p>
            学习HTML、CSS3、JavaScript以及VUE、React。学习http、浏览器等。
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>VUE、React</li>
            <li>http、浏览器等</li>
          </ul>
        </div>
      </a-card>
    </section>
    <section class="content-card">
      <template v-for="item in dataList">
        <KCard :key="item.title"
               :title="item.title"
               :list="item.list"
               @onAdd="add"></KCard>
      </template>
    </section>
  </div>

</template>

<script>
import KCard from '../../components/k-card.vue';

export default {
  name: 'Home',
  components: { KCard },
  data () {
    return {
      dataList: [
        {
          title: 'CSS',
          list: [
            '权重关系',
            'BFC块级格式上下文',
            '布局方式',
            '媒体查询',
            'gpu渲染',
          ]
        },
        {
          title: 'HTML',
          list: [
            'H5新增元素',
            '块级、行级元素',
            '表单autocomplete属性',
            '语义化理解',
          ]
        },
        {
          title: 'VUE、React',
          list: [
            'vue生命周期及对应周期行为',
            'vue组件传值',
            'vuex',
            'react-hook',
          ]
        },
        {
          title: 'JavaScript',
          list: [
            '原生绑定事件',
            '同步、异步',
            'es6',
          ]
        },
        {
          title: 'http、浏览器',
          list: [
            'http',
            '浏览器进程、线程',
            '浏览器渲染原理'
          ]
        },
      ]
    }
  },
  methods: {
    add () {
      this.$router.push({ name: 'edit' })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .userInfo-card {
    margin: 0 auto;
    /deep/ .ant-card-body {
      display: flex;
      align-items: center;
      .avatar {
        width: 10rem;
        min-width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: bottom;
        background-image: url("../../assets/logo.png");
        background-color: #000;
      }
      div:nth-child(2) {
        margin-left: 0.5rem;
      }
    }
  }
  .content-card {
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 2fr 3fr minmax(18rem, 1.5fr);
    grid-template-rows: auto;
    grid-auto-flow: row dense; // dense 表示填满空格
    justify-content: center;
    gap: 1rem;
    .ant-card:nth-child(1) {
      grid-row: 1 / span 2;
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 2fr;
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>