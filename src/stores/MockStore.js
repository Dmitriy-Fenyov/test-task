import { defineStore } from 'pinia'

export const useAddressMockStore = defineStore('addressMockStore', {
  state: () => ({
    address: [
      {
        id: 1,
        name: 'Айтишник Данила',
        tel: 79876547809,
        mail: 'qqqeeeqq@gmail.com',
        dateOfCreation: '22.09.2023',
        category: 'Родственник'
      },
      {
        id: 2,
        name: 'Арендодатель Виктория',
        tel: 79876547809,
        mail: 'qwwwwwwqqqq@gmail.com',
        dateOfCreation: '22.09.2023',
        category: 'Родственник'
      },
      {
        id: 3,
        name: 'Двери Вадим',
        tel: 79876547809,
        mail: 'qqqqq@gmail.com',
        dateOfCreation: '22.09.2023',
        category: 'Родственник'
      },
      {
        id: 4,
        name: 'Доставка Андрей Стоянов',
        tel: 79876547809,
        mail: 'qqqqq@gmail.com',
        dateOfCreation: '22.09.2023',
        category: 'Родственник'
      },
    ],
    filterOptions: [
      {
        key: 'isFavorite',
        label: 'Избранное',
        isApply: false,
      },
      {
        key: 'isDone',
        label: 'Выполнено',
        isApply: false,
      }
    ],
  }),
  actions: {
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !==id)
    },
    createTodo(title,isFavorite) {
      if(title) {
      const newTodo = {
        id: Date.now(),
        title: title,
        isDone: false,
        isFavorite: isFavorite,
      }
      this.todos.unshift(newTodo)
      this.isdialogFormVisible = false
    }
  },
editTodo(updatedTodo) { 
  const index = this.todos.findIndex(el => el.id === updatedTodo.id)
  this.todos[index] = updatedTodo
},
  },
  getters: {
		filteredTodos: (state) => {
      const filterBy = state.filterOptions.filter(el => el.isApply === true)
      const result = state.todos.filter(todo => {
        for (let i = 0; i < filterBy.length; i++) {
          const key = filterBy[i].key
          const isMatched = todo[key] === true
          if (!isMatched) {
            return false
          }
        }
        return true
      })
      return result
    }
	},
})
