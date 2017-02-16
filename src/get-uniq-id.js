import qinu from 'qinu'

const getUniqId = (store, id, options = {}) => {
  if (!store[id]) {
    store[id] = qinu(options, id)
  }
  return store[id]
}

export default getUniqId
