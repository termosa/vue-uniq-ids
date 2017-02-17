import generateIds from './generate-ids.js'

function createDirective(attr, store = {}, options = undefined) {
  return (el, binding) => {
    const { value, store: _store } = typeof binding.value === 'object'
      ? binding.value : { value: binding.value, store };
    const ids = generateIds(value, _store, options);
    if (ids) {
      el.setAttribute(attr, ids)
    } else {
      el.removeAttribute(attr)
    }
  }
}

export default createDirective
