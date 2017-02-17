import qinu from 'qinu'

const getUniqId = (scope, id, options = {}) => {
  if (!scope[id]) {
    scope[id] = qinu(options, id)
  }
  return scope[id]
}

export default getUniqId
