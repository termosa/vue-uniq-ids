import getUniqId from './get-uniq-id.js'

const generateIds = (value, scope, options) => {
  var list = value instanceof Array ? value : (value || '').split(/\s+/)
  return list.map(id => getUniqId(scope, id, options)).join(' ')
}

export default generateIds
