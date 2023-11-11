<template>
        <CreateHeader />
        <div class="createContact">
            <h2 class="createContact__title">Новый контакт</h2>
            <el-form :model="validateForm" label-width="120px">
                <el-form-item label="Имя">
                    <el-input class="createContact__input" v-model="name" />
                </el-form-item>
                <el-form-item label="Телефон">
                    <el-input class="createContact__input" v-model="tel" />
                </el-form-item>
                <el-form-item label="E-mail">
                    <el-input class="createContact__input" v-model="mail" />
                </el-form-item>
                <el-form-item label="Категория">
                    <el-select class="createContact__input" v-model="category" placeholder="Не выбрано">
                        <el-option label="Родственник" value="Родственник" />
                        <el-option label="Коллега" value="Коллега" />
                    </el-select>
                </el-form-item>
                <MyButton @click.prevent="addItem" />
            </el-form>
        </div>
  </template>
  
<script setup>
import CreateHeader from '../components/CreateHeader.vue';
import MyButton from '../components/MyButton.vue';
import {useAddressMockStore} from '../stores/MockStore';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const addressStore = useAddressMockStore()
const isFormValid = ref(true)
const name = ref('')
const tel = ref('')
const mail = ref('')
const category = ref('')
const validateForm = () => {
  isFormValid.value = name.value.length > 0
}
const addItem = () => {
  validateForm()
  if (isFormValid.value === true) {
    console.log(name.value)
    addressStore.createTodo(name.value, tel.value, mail.value, category.value)
    name.value = ''
    tel.value = ''
    mail.value = ''
    category.value = ''
    router.push({name:'home'})
  }
}
</script>
  <style lang="scss" scoped>
  .createContact {
    position: relative;
    box-sizing: border-box;
    width: 704px;
    margin: 0 auto;
    padding: 48px 64px 136px 64px;
    box-shadow: 0px 0px 6px 0px #94B5E159;
    &__title {
    margin: 0;
    margin-bottom: 24px;
    }
    &__input {
        width: 408px;
    }
}
  </style>
  