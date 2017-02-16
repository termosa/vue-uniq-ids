import generateIds from './generate-ids.js'

function createDirective(attr, store = {}, options = undefined) {
  return (el, binding) => {
    const ids = generateIds(binding.value, store, options);
    if (ids) {
      el.setAttribute(attr, ids)
    } else {
      el.removeAttribute(attr)
    }
  }
}

export default createDirective
