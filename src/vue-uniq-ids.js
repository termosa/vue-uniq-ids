import qinu from 'qinu'

function createDirective(attr, store = {}, options = {}) {
  const getUniqId = id => {
    if (!store[id]) {
      store[id] = qinu(options, id)
    }
    return store[id]
  }

  const generateIds = value => {
    var list = value instanceof Array ? value : value.split(/\s+/)
    return list.map(id => getUniqId(id)).join(' ')
  }

  return (el, binding) => {
    const ids = generateIds(binding.value);
    if (ids) {
      el.setAttribute(attr, ids)
    } else {
      el.removeAttribute(attr)
    }
  }
}

export default createDirective
