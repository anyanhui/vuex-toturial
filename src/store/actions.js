export const getTodo = ({commit}, newTodo) => {
  commit('GET_TODO', newTodo)
}

export const addTodo = ({commit}) => {
  commit('ADD_TODO')
}

export const clearTodo = ({commit}) => {
  commit('CLEAR_TODO')
}

export const current = ({commit}, todo) => {
  commit('TODO_TODO', todo)
}

export const removeCompeletedTodo = ({commit}, todo) => {
  commit('REMOVE_COMPELETED_TODO', todo)
}

export const editTodo = ({commit}, todo) => {
  commit('EDIT_TODO', todo)
}

export const completeTodo = ({commit}, todo) => {
  commit('COMPLETE_TODO', todo)
}

export const removeTodo = ({commit}, todo) => {
  commit('REMOVE_TODO', todo)
}