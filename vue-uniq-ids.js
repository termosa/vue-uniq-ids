import createUniqIdsMixin from './src/create-mixin'

const UniqIdsPlugin = {
  install: function(Vue, options) {
    Vue.mixin(createUniqIdsMixin(options))
  }
}

export {
  createUniqIdsMixin,
  UniqIdsPlugin
}
