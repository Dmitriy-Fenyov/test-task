<template>
  <header class="createHeader">
    <img class="createHeader__logo" src="@/assets/createLogo.svg" alt="Контакты" width="20" height="20">
    <h1 class="createHeader__title">Добавить контакт</h1>
    <button class="createHeader__close-button" type="button" @click="() => { router.push({ name: 'home' }) }">
      <span class="visually-hidden">Закрыть меню</span>
    </button>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.createHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px 48px;
  margin: 0 auto;
  background-color: #282828;

  &__title {
    margin: 0 0 0 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #E0E0E0;
    @media (min-width: 376px) and (max-width: 992px) {
      margin-left: 5px;
      font-size: 14px;
    }
  }

  &__logo {
    @media (min-width: 376px) and (max-width: 992px) {
      width: 13px;
      height: 13px;
    }
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
      @media (min-width: 376px) and (max-width: 992px) {
        width: 14px;
      }
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