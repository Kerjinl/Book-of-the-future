<template>
  <section id="edit">
    <div class="edit-page">
      <div class="edit-input">
        <a-textarea v-model="value"
                    placeholder="Plz writing sth:;"
                    :auto-size="{ minRows: 30, maxRows: 50 }" />
      </div>
      <div class="blank"></div>
      <div class="markdown-content">
        <div>
          <vue-markdown :source="value"></vue-markdown>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <a-button type="primary"
                @click="confirm">
        提交
      </a-button>
      <a-button type="link"
                @click="cancel">
        取消
      </a-button>
      <a-button class="pre-tbn"
                @click="previewContent">预览</a-button>
    </div>
    <KDrawer :visible.sync="visible">
      <header slot="title">
        预览
      </header>
      <vue-markdown :source="value"></vue-markdown>
    </KDrawer>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import KDrawer from '../../components/k-drawer.vue';

export default {
  name: 'Edit',
  components: {
    VueMarkdown,
    KDrawer
  },
  data () {
    return {
      value: '## title',
      visible: false
    }
  },
  methods: {
    previewContent () {
      this.visible = true;
    },
    confirm () {
      this.$router.go(-1);
    },
    cancel () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
#edit {
  .edit-page {
    display: flex;
    .blank {
      width: 5rem;
    }
    > div:not(.blank) {
      flex: 1;
    }
    .markdown-content {
      overflow-x: auto;
      padding: 4px 11px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    @media screen and (max-width: 1024px) {
      > div:not(:nth-child(1)) {
        display: none;
      }
      .pre-tbn {
        display: block;
      }
    }
  }
  .btn-group {
    padding: 2rem 0;
    .pre-tbn {
      display: none;
      float: right;
      margin-top: 1rem;
      @media screen and (max-width: 1024px) {
        & {
          display: none;
        }
        & {
          display: block;
        }
      }
    }
  }
}
</style>
