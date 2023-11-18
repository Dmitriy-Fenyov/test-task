<template>
  <CreateHeader />
  <div class="createContact">
    <h2 class="createContact__title">Новый контакт</h2>
    <el-form :model="validateForm" label-width="120px">
      <el-form-item label="Имя">
        <el-input
          class="createContact__input"
          :class="{ 'error': !formFields.name.isValid }"
          v-model="name"
          placeholder="Например «Андрей»..."
        />
        <ErrorField v-if="!formFields.name.isValid">
          Слишком короткое имя
        </ErrorField>
      </el-form-item>
      <el-form-item label="Телефон">
        <el-input
          class="createContact__input"
          :class="{ 'error': !formFields.tel.isValid }"
          v-model="tel"
          placeholder="+7(___)___-__-__"
          :formatter="telFormatter"
        />
        <ErrorField v-if="!formFields.tel.isValid">
          Некорректный номер
        </ErrorField>
      </el-form-item>
      <el-form-item label="E-mail">
        <el-input
          class="createContact__input"
          v-model="mail"
          type="email"
          :class="{ 'error': !formFields.mail.isValid }"
          placeholder="Например «pochta@domain.ru»..."
        />
        <ErrorField v-if="!formFields.mail.isValid">
          Не корректный e-mail
        </ErrorField>
      </el-form-item>
      <el-form-item label="Категория">
        <el-select
          class="createContact__input"
          v-model="category"
          :class="{ 'error': !formFields.category.isValid }"
          placeholder="Не выбрано"
          :suffix-icon="ElSelectSuffixIcon"
        >
          <el-option label="Родственник" value="Родственник" />
          <el-option label="Коллега" value="Коллега" />
        </el-select>
        <ErrorField v-if="!formFields.category.isValid">
          Поле не может быть пустым
        </ErrorField>
      </el-form-item>
    </el-form>
    <el-button
      type="warning"
      class="createContact__btnSave"
      @click.prevent="addItem"
      :loading="!isLoaded"
    >
      <span v-show="isLoaded" style="margin-right: 6px;">
        <img src="@/assets/save.svg" alt="Сохранить" width="12" height="12">
      </span>
      Сохранить
    </el-button>
    <SuccessNotification ref="successNotification" message="Контакт успешно создан" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CreateHeader from '@/components/CreateHeader.vue'
import ErrorField from '@/components/ErrorField.vue'
import ElSelectSuffixIcon from '@/components/ElSelectSuffixIcon.vue'
import SuccessNotification from '@/components/SuccessNotification.vue'
import { useAddressMockStore } from '@/stores/MockStore'
import { validateEmail, telFormatter } from '@/helpers/helpers.js'

const router = useRouter()
const addressStore = useAddressMockStore()
const isFormValid = ref(true)
const isLoaded = ref(true)
const name = ref('')
const tel = ref('')
const mail = ref('')
const category = ref('')
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

const successNotification = ref(null)
const addItem = () => {
  validateForm()
  if (isFormValid.value === true) {
    isLoaded.value = false
    setTimeout(() => {
      addressStore.createConcat(name.value, tel.value.slice(0, 16), mail.value, category.value)
      name.value = ''
      tel.value = ''
      mail.value = ''
      category.value = ''
      isLoaded.value = true
      successNotification.value.open()
      router.push({ name: 'home' })
    }, 3000)
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
  }

  &__btnSave {
    margin-left: 168px;
    margin-top: 14px;
    width: 136px;
    height: 40px;
    padding: 12px, 16px, 12px, 16px;
    border-radius: 4px;
    background: #FFC700;
    font-family: Proxima Nova;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    color: #545454;

    @media (min-width: 576px) and (max-width: 768px) {
      margin-left: 119px;
    }

    @media (min-width: 376px) and (max-width: 576px) {
      margin-left: 119px;
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
