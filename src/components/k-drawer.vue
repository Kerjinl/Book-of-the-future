<template>
  <a-drawer :title="title"
            placement="right"
            :closable="false"
            :visible="visible"
            :destroyOnClose="destroyOnClose"
            @close="onClose">
    <template slot="title">
      <slot name="title">
      </slot>
    </template>
    <slot></slot>
  </a-drawer>
</template>

<script>

export default {
  name: 'KDrawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: undefined
    },
    placement: {
      type: String,
      default: 'right'
    },
    closable: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    getContainer: {
      type: String || HTMLElement || Function,
      default: 'body'
    },
  },
  data () {
    return {}
  },
  methods: {
    onClose (e) {
      console.log('11')
      this.$emit('update:visible', false)
      console.log(this.visible)
      this.$emit('onClose', e)
    }
  },
  watch: {
    'visible' (v) {
      console.log('visible', v)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
