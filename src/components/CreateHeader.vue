<template>
    <header class="page-createHeader">
      <img src="@/assets/createLogo.svg"  alt="Контакты" width="20" height="20">
      <h1 class="page-createHeader__title">Добавить контакт</h1>
      <button class="page-createHeader__close-button" type="button" @click="() => { router.push({name:'home'}) }">
          <span class="visually-hidden">Закрыть меню</span>
        </button>
    </header>
  </template>
  
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
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
.visually-hidden {
    visibility: hidden;
}
</style>