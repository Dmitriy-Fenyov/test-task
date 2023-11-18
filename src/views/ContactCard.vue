<script setup>
import { storeToRefs } from 'pinia'
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAddressMockStore } from '@/stores/MockStore';
import SuccessNotification from '@/components/SuccessNotification.vue'

const addressStore = useAddressMockStore()
const { address } = storeToRefs(addressStore)
const route = useRoute()
const router = useRouter()
const contact = ref({})
const isLoaded = ref(true)
const notificationDelete = ref(null)
const notificationChange = ref(null)
const handleSave = () => {
  isLoaded.value = false
  setTimeout(() => {
    addressStore.editContact(contact.value)
    isLoaded.value = true
    notificationChange.value.open()
    router.push({ name: 'home' })
  }, 3000)
}
const deleteContact = () => {
  addressStore.deleteContact(contact.value.id)
  notificationDelete.value.open()
  router.push({ name: 'home' })
}

onBeforeMount(() => {
  const item = address.value.find((el) => el.id == route.params.id)
  contact.value = { ...item }
})
</script>

<template>
  <header class="сontactCard__Header">
    <span class="firstLetter">{{ contact.name[0] }}</span>
    <h1 class="сontactCard__Header__title"> {{ contact.name }}</h1>
    <button
      class="сontactCard__Header__close-button"
      type="button"
      @click="() => { router.push({ name: 'home' }) }"
    >
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
    </el-form>
    <el-button
      type="warning"
      class="сontactCard__btnSave"
      @click="handleSave"
      :loading="!isLoaded"
    >
      <span v-show="isLoaded" style="margin-right: 6px; margin-top: 2px;">
        <img src="@/assets/save.svg" alt="Сохранить" width="12" height="12">
      </span>
      Сохранить
    </el-button>
    <el-button
      class="сontactCard__btnDelete"
      type="primary"
      link
      @click="deleteContact"
    >
      <span style="margin-right: 2px;">
        <img src="@/assets/delete.svg" alt="корзина" width="10" height="10">
      </span>
      Удалить контакт
    </el-button>
  </div>
  <SuccessNotification ref="notificationDelete" message="Контакт удалён" />
  <SuccessNotification ref="notificationChange" message="Контакт успешно изменён" />
</template>

<style lang="scss" scoped>
.сontactCard {
  position: relative;
  box-sizing: border-box;
  width: 704px;
  margin: 24px auto 0;
  padding: 48px 64px 136px 64px;
  box-shadow: 0px 0px 6px 0px #94B5E159;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 552px;
    padding: 32px 48px 112px 48px;
  }

  @media (min-width: 376px) and (max-width: 576px) {
    width: 352px;
    padding: 32px 20px 112px 20px;
  }

  :deep(.el-form-item__label) {
    justify-content: flex-start;
  }

  &__title {
    margin: 0;
    margin-bottom: 24px;
    color: #545454;
  }

  &__input {
    width: 408px;
    margin-left: auto;
  }

  &__text {
    margin: 0;
    margin-left: auto;
    width: 408px;
    color: #545454;
  }

  &__btnSave {
    margin-left: 168px;
    margin-top: 14px;
    width: 136px;
    height: 40px;
    padding: 12px, 16px, 12px, 16px;
    border-radius: 4px;
    background: #FFC700;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    color: #545454;

    @media (min-width: 576px) and (max-width: 768px) {
      margin-left: 119px;
    }

    @media (min-width: 376px) and (max-width: 576px) {
      margin-left: 30px;
      width: 124px;
      height: 32px;
      font-size: 12px;
      line-height: 14.4px;
    }

    &:hover {
      color: #545454;
      background: #FFD84C;
    }

    &:active {
      color: #545454;
      background: #F3C41E;
    }
  }
}

.сontactCard__Header {
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
    font-size: 14px;
    margin-left: 8px;
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

.сontactCard__btnDelete {
  margin-top: 15px;
  margin-left: 25px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: right;
  color: #2F80ED;
  border: none;
  background-color: white;
  cursor: pointer;
}

.firstLetter {
  text-align: center;
  vertical-align:middle;
  line-height: 24px;
  font-weight: 700;
  margin: 0;
  width: 24px;
  height: 24px;
  border-radius: 56px;
  background-color: #FFC700;

  @media (min-width: 376px) and (max-width: 992px) {
    width: 20px;
    height: 20px;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
  }
}

.visually-hidden {
  visibility: hidden;
}
</style>