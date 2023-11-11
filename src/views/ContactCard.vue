<script setup>
import MyButton from '../components/MyButton.vue';
import {useAddressMockStore} from '@/stores/MockStore';
import { storeToRefs } from 'pinia'
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const addressStore = useAddressMockStore()
const {address} = storeToRefs(addressStore)
const route = useRoute()
const router = useRouter()
const contact = ref({})
const handleSave = () => {
    addressStore.editContact(contact.value)
    router.push({name:'home'})
}
const deleteContact = () => {
    addressStore.deleteContact(contact.value.id)
    router.push({name:'home'})
}

onBeforeMount(() => {
  const item = address.value.find((el) => el.id == route.params.id)
  contact.value = { ...item }
})
</script>

<template>
    <header class="page-createHeader">
        <span class="firstLetter">{{ contact.name[0] }}</span>
        <p class="page-createHeader__title"> {{contact.name}}</p>
        <button class="page-createHeader__close-button" type="button" @click="() => { router.push({name:'home'}) }">
            <span class="visually-hidden">Закрыть меню</span>
        </button>
    </header>
    <div class="сontactCard">
        <h1 class="сontactCard__title">Контакт</h1>
        <el-form label-width="120px">
            <el-form-item label="Имя">
                <el-input class="сontactCard__input" v-model="contact.name"></el-input>
            </el-form-item>
            <el-form-item label="Телефон">
                <el-input class="сontactCard__input" v-model="contact.tel" />
            </el-form-item>
            <el-form-item label="E-mail">
                <el-input class="сontactCard__input" v-model="contact.mail" />
            </el-form-item>
            <el-form-item label="Категория">
                <el-select class="сontactCard__input" v-model="contact.category" placeholder="Не выбрано">
                    <el-option label="Родственник" value="Родственник" />
                    <el-option label="Коллега" value="Коллега" />
                </el-select>
            </el-form-item>
            <el-form-item label="Создан">
                <p class="сontactCard__text"> {{ contact.dateOfCreation }}</p>
            </el-form-item>
            <MyButton  @click="handleSave" />
            <el-button
                class="сontactCard__btnDelete"
                type="primary"
                link
                @click="deleteContact"
            >
                <span style="margin-right: 2px;">
                    <img src="@/assets/delete.svg"  alt="корзина" width="10" height="10">
                </span>
                Удалить контакт
            </el-button>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
.сontactCard {
  position: relative;
  box-sizing: border-box;
  width: 704px;
  margin: 24px auto 0;
  padding: 48px 64px 136px 64px;
  box-shadow: 0px 0px 6px 0px #94B5E159;
  &__title {
  margin: 0;
  margin-bottom: 24px;
  }
  &__input {
      width: 408px;
  }
  &__text {
      margin: 0;
      color: #545454;

  }
}
.page-createHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11.5px 48px;
    margin: 0 auto;
    background-color: #282828;
    &__title {
        margin: 0 0 0 10px;
        font-family: Proxima Nova;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #E0E0E0;
    }
    &__close-button {
    position: absolute;
    top: 17px;
    right: 10px;
    width: 19px;
    height: 19px;
    content: "";
    background-color: transparent;
    cursor: pointer;
    border: none;
        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 5px;
            right: 30px;
            width: 18.7px;
            height: 3px;
            background-color: #939393;
        }
        &::before {
            transform: rotate(45deg);
        }
        &::after {
            transform: rotate(-45deg);
        }
    }   
}
.сontactCard__btnDelete {
    position: absolute;
    left: 350px;
    bottom: 74px;
    font-family: Proxima Nova;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    color: #2F80ED;
    border: none;
    background-color: white;
    cursor: pointer;
}
.firstLetter {
    text-align: center;
    line-height: 24px;
    margin: 0;
    width: 24px;
    height: 24px;
    border-radius: 56px;
    background-color: #FFC700;
}
.visually-hidden {
    visibility: hidden;
}
</style>