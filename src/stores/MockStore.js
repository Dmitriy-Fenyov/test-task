import { defineStore } from 'pinia'

export const useAddressMockStore = defineStore('addressMockStore', {
  state: () => ({
    address: [
      {
        id: 1,
        name: 'Айтишник Данила',
        tel: '+7(987)654-78-09',
        mail: 'qqqeeeqq@gmail.com',
        dateOfCreation: '22.09.2023',
        category: 'Родственник'
      },
      {
        id: 2,
        name: 'Арендодатель Виктория',
        tel: '+7(987)654-78-10',
        mail: 'qwwwwwwqqqq@gmail.com',
        dateOfCreation: '22.09.2023',
        category: 'Коллега'
      },
      {
        id: 3,
        name: 'Двери Вадим',
        tel: '+7(987)654-78-11',
        mail: 'qqqqq@gmail.com',
        dateOfCreation: '23.09.2023',
        category: 'Родственник'
      },
      {
        id: 4,
        name: 'Доставка Андрей Стоянов',
        tel: '+7(987)654-78-12',
        mail: 'qqqqq@gmail.com',
        dateOfCreation: '24.09.2023',
        category: 'Родственник'
      },
    ],
    filterOptions: [
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
    filterValue: 'ВСЕ',
  }),
  actions: {
    deleteContact(id) {
      this.address = this.address.filter(t => t.id !== id)
    },
    createTodo(name, tel, mail, category) {
      if (name, tel, mail, category) {
        const newContact = {
          id: Date.now(),
          name: name,
          tel: tel,
          mail: mail,
          category: category,
          dateOfCreation: new Date().toISOString().slice(0, 10).split('-').reverse().join('.'),
        }
        this.address.push(newContact)
      }
    },
    editContact(updateContact) {
      const index = this.address.findIndex(el => el.id === updateContact.id)
      this.address[index] = updateContact
    },
    updateFilterValue(value) {
      this.filterValue = value;
    }
  },
  getters: {
    filteredContacts: (state) => {
      if (state.filterValue === 'ВСЕ') {
        return state.address
      }
      return state.address.filter(contact => contact.category === state.filterValue)
    },
  },
})
