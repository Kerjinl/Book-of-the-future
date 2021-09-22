<template>
  <a-card ref="kCard">
    <h3 class="card-title">{{title}}
      <a-icon class="add-btn"
              type="plus"
              @click="addFunc" />
    </h3>
    <ol>
      <li v-for="item in list"
          :key="item">{{item}}</li>
    </ol>
  </a-card>
</template>

<script>
export default {
  name: 'KCard',
  props: {
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted () {
    this.$refs.kCard.$el.addEventListener('mouseover', this.shwoBtn)
    this.$refs.kCard.$el.addEventListener('mouseout', this.hideBtn)
  },
  methods: {
    shwoBtn () {
      this.$refs.kCard.$el.querySelector('.add-btn').style.cssText += `display: inline-block`;
    },
    hideBtn () {
      this.$refs.kCard.$el.querySelector('.add-btn').style.cssText += `display:none`;
    },
    addFunc () {
      this.$emit('onAdd')
    }
  },
  beforeDestroy () {
    this.$refs.kCard.$el.removeEventListener('mouseover', this.shwoBtn)
    this.$refs.kCard.$el.removeEventListener('mouseout', this.hideBtn)
  }
}
</script>

<style lang="less" scoped>
.card-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .add-btn {
    display: none;
    float: right;
    cursor: pointer;
  }
}
ol {
  padding: 0 1.2rem;
  li {
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline lightskyblue;
    }
  }
}
</style>