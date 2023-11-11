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
        category: 'Коллега'
      },
      {
        id: 3,
        name: 'Двери Вадим',
        tel: 79876547809,
        mail: 'qqqqq@gmail.com',
        dateOfCreation: '23.09.2023',
        category: 'Родственник'
      },
      {
        id: 4,
        name: 'Доставка Андрей Стоянов',
        tel: 79876547809,
        mail: 'qqqqq@gmail.com',
        dateOfCreation: '24.09.2023',
        category: 'Родственник'
      },
    ],
    sortOptions: [
      {
        value: 'ВСЕ',
        label: 'ВСЕ',
      },
      {
        value: 'Родственник',
        label: 'Родственник',
      },
      {
        value: 'Коллега',
        name: 'Коллега',
      }
    ],
  }),
  actions: {
    deleteContact(id) {
        this.address = this.address.filter(t => t.id !==id)
    },
    createTodo(name,tel,mail,category) {
      if(name,tel,mail,category) {
      const newContact = {
        id: Date.now(),
        name: name,
        tel: tel,
        mail: mail,
        category:category,
        dateOfCreation: new Date().toISOString().slice(0,10).split('-').reverse().join('.'),
      }
      this.address.push(newContact)
    }
  },
editContact(updateContact) { 
  const index = this.address.findIndex(el => el.id === updateContact.id)
  this.address[index] = updateContact
},
  },
  getters: {
		filteredTodos: (state) => {
      const filterBy = state.filterOptions.filter(el => el.value === true)
      const result = state.address.filter(contact => {
        for (let i = 0; i < filterBy.length; i++) {
          const key = filterBy[i].key
          const isMatched = contact[key] === true
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
