export const getTodo = ({commit}, newTodo) => {
  commit('GET_TODO', newTodo)
}

export const addTodo = ({commit}) => {
  commit('ADD_TODO')
}

export const clearTodo = ({commit}) => {
  commit('CLEAR_TODO')
}