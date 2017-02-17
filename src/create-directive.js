import generateIds from './generate-ids.js'

const doesNeedNewScope = opts => (
  typeof opts.scope !== 'object'
  && typeof opts.scope !== 'undefined'
  && opts.scope
)

function createDirective(attr, options = {}) {
  return (el, binding, vnode) => {
    if (!vnode.context.$options.uniqIdsConfig) {
      vnode.context.$options.uniqIdsConfig = { scope: {} }
    }
    const localOpts = vnode.context.$options.uniqIdsConfig
    if (doesNeedNewScope(localOpts)) {
      localOpts.scope = {}
    }
    const opts = Object.assign({}, options, localOpts)
    const scope = typeof localOpts.scope === 'object'
      ? localOpts.scope
      : localOpts.scope && {} || options.scope || {}
    const value = binding.value
    const ids = generateIds(value, scope, opts);
    if (ids) {
      el.setAttribute(attr, ids)
    } else {
      el.removeAttribute(attr)
    }
  }
}

export default createDirective
