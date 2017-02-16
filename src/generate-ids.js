import getUniqId from './get-uniq-id.js'

const generateIds = (value, store, options) => {
  var list = value instanceof Array ? value : value.split(/\s+/)
  return list.map(id => getUniqId(store, id, options)).join(' ')
}

export default generateIds
