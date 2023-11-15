<template>
        <CreateHeader />
        <div class="createContact">
            <h2 class="createContact__title">Новый контакт</h2>
            <el-form :model="validateForm" label-width="120px">
                <el-form-item label="Имя">
                    <el-input class="createContact__input" :class="{ 'error':  !formFields.name.isValid }" placeholder="Например «Андрей»..." v-model="name" />
                      <p class="createContact__allert" v-show="!formFields.name.isValid">
                        Слишком короткое имя
                      </p>
                      <span class="createContact__allertIcon" v-show="!formFields.name.isValid"><img src="@/assets/alert.svg"  alt="Внимание" width="13.3" height="13.3"></span>
                </el-form-item>
                <el-form-item label="Телефон">
                    <el-input class="createContact__input" :class="{ 'error':  !formFields.tel.isValid }" placeholder="+7(___)___-__-__" v-model="tel" :formatter="telFormatter" />
                    <p class="createContact__allert" v-show="!formFields.tel.isValid">
                      Некорректный номер
                    </p>
                    <span class="createContact__allertIcon" v-show="!formFields.tel.isValid"><img src="@/assets/alert.svg"  alt="Внимание" width="13.3" height="13.3"></span>
                </el-form-item>
                <el-form-item label="E-mail">
                    <el-input class="createContact__input" type="email" :class="{ 'error':  !formFields.mail.isValid }" placeholder="Например «pochta@domain.ru»..." v-model="mail" />
                    <p class="createContact__allert" v-show="!formFields.mail.isValid">
                      Не корректный e-mail
                    </p>
                    <span class="createContact__allertIcon" v-show="!formFields.mail.isValid"><img src="@/assets/alert.svg"  alt="Внимание" width="13.3" height="13.3"></span>
                </el-form-item>
                <el-form-item label="Категория">
                    <el-select class="createContact__input" v-model="category" :class="{ 'error':  !formFields.category.isValid }" placeholder="Не выбрано" :suffix-icon="ElSelectSuffixIcon">
                        <el-option label="Родственник" value="Родственник" />
                        <el-option label="Коллега" value="Коллега" />
                    </el-select>
                    <p class="createContact__allert" v-show="!formFields.category.isValid">
                      Поле не может быть пустым
                    </p>
                    <span class="createContact__allertIcon" v-show="!formFields.category.isValid"><img src="@/assets/alert.svg"  alt="Внимание" width="13.3" height="13.3"></span>
                </el-form-item>
            </el-form>
            <MyButton class="createContact__btnSave" @click.prevent="addItem" />
        </div>
  </template>
  
<script setup>
import CreateHeader from '../components/CreateHeader.vue';
import MyButton from '../components/MyButton.vue';
import ElSelectSuffixIcon from '../components/ElSelectSuffixIcon.vue';
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
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
const formFields = ref({
  name: {
    ref: name,
    getIsValid: (val) => val.length > 3,
    isValid: true,
  },
  tel: {
    ref: tel,
    getIsValid: (val) => val.length >= 16,
    isValid: true,
  },
  mail: {
    ref: mail,
    getIsValid: validateEmail,
    isValid: true,
  },
  category: {
    ref: category,
    getIsValid: (val) => val.length > 0,
    isValid: true,
  },
})
const telFormatter = (value) => value.replace(/^\+7|\D/g, '').replace(/^(\d{1,3})(\d{1,3})?(\d{1,2})?(\d{1,2})?.*/, (m, g1, g2, g3, g4) => `+7(${g1})` + (g2 ? `${g2}` : '') + (g3 ? `-${g3}` : '') + (g4 ? `-${g4}` : ''));

const validateForm = () => {
  isFormValid.value = true;
  Object.keys(formFields.value).forEach((key) => {
    const field = formFields.value[key];
    field.isValid = field.getIsValid(field.ref)
    if (!field.isValid) {
      isFormValid.value = false;
    }
  })
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
    margin: 24px auto 0;
    padding: 48px 64px 136px 64px;
    box-shadow: 0px 0px 6px 0px #94B5E159;
    @media (min-width: 576px) and (max-width: 768px) {
      width: 552px;
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
      &.error {
        --el-border-color: #EB5757;
        --el-input-focus-border-color: #be4848;
        --el-input-hover-border-color: #f02a2a;
        :deep(.el-input__inner::placeholder) {
          color: #EB5757;
        }
      }
      @media (min-width: 576px) and (max-width: 768px) {
        width: 288px;
      }
      @media (min-width: 376px) and (max-width: 576px) {
          width: 228px;
      }   
    }
    &__btnSave {
      margin-left: 168px;
      margin-top: 14px;
      @media (max-width: 576px) {
          margin-left: 84px;
      }
    }
    &__allert {
      position: absolute;
      top: 33px;
      right: 0;
      margin: 0;
      font-family: Proxima Nova;
      font-size: 10px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      color: #EB5757;
    }
    &__allertIcon {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      margin: 0;
      line-height: 0;
      background-color: #fff;
    }
    
}
  </style>
  