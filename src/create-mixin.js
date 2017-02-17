import createDirective from './create-directive'

const prefix = 'uni-'

const defaultAttributes = [
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
]

const defaultQinuTemplate = '%arg[0]%-%qinu%'

const createDirectives = opts => (
  opts.attrs.reduce((dirs, attr) => {
    dirs[`${opts.prefix}${attr}`] = createDirective(attr, opts)
    return dirs
  }, {})
)

const createMixin = (options) => {
  const opts = Object.assign(
    { prefix, scope: {}, attrs: defaultAttributes, template: defaultQinuTemplate },
    options
  )
  return {
    directives: createDirectives(opts)
  }
}

export default createMixin
