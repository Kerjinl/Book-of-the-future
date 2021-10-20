<template>
  <a-form-model :model="form"
                :rules="rules"
                v-bind="layout"
                @submit="submit">
    <slot name="header"></slot>
    <template v-for="item in list">
      <a-form-model-item :key="item.key || item.name"
                         :label="item.label">
        <template v-if="item.slot">
          <slot :name="item.slot"></slot>
        </template>
        <template v-else-if="item.type === 'input'">
          <a-input v-model="form[item.model]"
                   :autocomplete="item.autocomplete"
                   :placeholder="item.placeholder"
                   :type="item.type">
            <template slot="prefix">
              <slot name="prefix">
              </slot>
            </template>
          </a-input>
        </template>
        <template v-else-if="item.type === 'select'">
          <a-select v-model="form[item.model]"
                    :default-value="item.defaultValue"
                    @change="selectChange">
            <a-select-option v-for="item in item.options"
                             :key="item.value"
                             :value="item.value">{{item.label}}</a-select-option>
          </a-select>
        </template>
        <template v-else-if="item.type === 'datePicker'">
          <a-date-picker v-model="form[item.model]"
                         :default-value="item.value"
                         :format="item.format || KFormat"
                         @change="dateChange"></a-date-picker>
        </template>
        <template v-else-if="item.type === 'timePicker'">
          <a-range-picker v-model="form[item.model]"
                          :show-time="item.showTime"
                          :format="item.format||'YYYY-MM-DD HH:mm'"
                          :placeholder="item.placeholder"
                          @change="onDateRangeChange"
                          @ok="onDateRangeOk" />
        </template>
      </a-form-model-item>
    </template>

    <slot name="footer"
          :remember="form.remember"></slot>
  </a-form-model>
</template>

<script>
export default {
  name: 'KHome',
  props: {
    form: {
      type: Object,
      default: function () {
        return {}
      }
    },
    rules: {
      type: Object,
      default: function () {
        return {}
      }
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    layout: {
      type: Object,
      default: function () {
        return {
          labelCol: { span: 4 },
          wrapperCol: { span: 20 },
        }
      }
    }
  },
  data () {
    return {
      KFormat: 'YYYY/MM/DD'
    }
  },
  methods: {
    submit (v) {
      this.$emit('submit', v);
    },
    selectChange (v) {
      console.log(v)
    },
    dateChange (v) {
      console.log(v)
    },
    onDateRangeChange (v) {
      console.log(v)
    },
    onDateRangeOk (v) {
      console.log(v)
    },
  }
}
</script>

<style lang="less" scoped>
</style>
