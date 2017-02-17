import createDirective from './src/create-directive'

const dirPrefix = 'uni-';

const linkAttributes = [
  'aria-activedescendant',
  'aria-controls',
  'aria-describedby',
  'aria-flowto',
  'aria-labelledby',
  'aria-labelledby',
  'aria-owns',
  'for',
  'form',
  'id',
];

const defaultQinuOptions = {
  template: '%arg[0]%-%qinu%'
}

const VueUniqIds = {
  install: function(Vue, options) {
    const store = {};
    const opts = Object.assign({}, defaultQinuOptions, options);
    linkAttributes.forEach(attr => {
      Vue.directive(`${dirPrefix}${attr}`, createDirective(attr, store, opts))
    })
  }
}

export default VueUniqIds
