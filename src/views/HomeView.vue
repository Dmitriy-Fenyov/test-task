<script setup>
import { storeToRefs } from 'pinia'
import MainFilter from '@/components/MainFilter.vue';
import MainHeader from '@/components/MainHeader.vue';
import {useAddressMockStore} from '@/stores/MockStore';

const addressStore = useAddressMockStore()
const {filteredContacts} = storeToRefs(addressStore)
</script>

<template>
  <MainHeader />
  <MainFilter />
  <ul class="wrapper">
    <li class="property">
      <p class="property__name">
        Контакт
      </p>
      <div class="wrapper__flexBox row">
        <p class="property__tel">
          Телефон <span class="display__none"> /</span>
        </p>
        <p class="property__mail">
          E-mail
        </p>
      </div>
      <p class="property__dateOfCreation">
        Создан
      </p>
    </li>
    <li 
      v-for="contact in filteredContacts"             
      :key="contact.id"
      style="padding: 0; margin: 0; list-style: none;"
    >
      <RouterLink :to="'/contact/' + contact.id" class="contact">
        <p class="contact__name">
          <span class="firstLetter">{{ contact.name[0] }}</span>
          {{ contact.name }}
        </p>
        <div class="wrapper__flexBox">
          <p class="contact__tel">
            {{ contact.tel }}
          </p>
          <p class="contact__mail">
            {{ contact.mail }}
          </p>
        </div>
        <p class="contact__dateOfCreation">
          {{ contact.dateOfCreation }}
        </p>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 990px;
  margin: 0 auto;
  padding: 0;
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 928px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    width: 704px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 552px;
  }
  @media (min-width: 376px) and (max-width: 576px) {
    width: 352px;
  }
}
.property {
  list-style: none;
  display: flex;
  height: 24px;
  padding: 0;
  margin: 0;
  align-items: center;
  font-family: Proxima Nova;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  color: #B5B5B5;
  &__name {
      width: 38.37%;
      vertical-align: middle;
      @media (min-width: 376px) and (max-width: 576px) {
          width: 41.76%;
      }
  }
  &__tel {
      width: 43%;
      @media (min-width: 768px) and (max-width: 992px) {
          width: 44%;
      }
      @media (min-width: 576px) and (max-width: 768px) {
          width: 45.5%;
      }
      @media (min-width: 376px) and (max-width: 576px) {
          width: 45%;
      }
  }
  &__mail {
      width: 30.8%;
  }
  &__dateOfCreation {
      width: 11.73%;
      padding-right: 0;
      text-align: right;
      @media (min-width: 376px) and (max-width: 576px) {
          width: 16.47%
      }
  }
}
.contact {
  list-style: none;
  text-decoration: none;
  display: flex;
  padding: 7px 0;
  margin: 0;
  align-items: center;
  vertical-align: middle;
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0em;
  color: #545454;
  border-bottom: 1px solid #EAF2FD;
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 12px;
    line-height: 19px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 12px;
    line-height: 19px;
  }
  @media (min-width: 376px) and (max-width: 576px) {
    font-size: 12px;
    line-height: 13.44px;
  }
  &__name,  &__tel, &__mail, &__dateOfCreation {
    align-items: center;
    margin: 0;
    padding-right: 12px;
  }
  &__name {
    display: flex;
    width: 36.67%;
    vertical-align: middle;
    @media (min-width: 376px) and (max-width: 576px) {
      width: 41.76%;
    }
  }
  &__tel {
    width: 40.8%;
    @media (min-width: 376px) and (max-width: 576px) {
      width: 100%;
    }
  }
  &__mail {
    width: 30.8%;
    @media (min-width: 376px) and (max-width: 576px) {
      width: 100%;
    }
  }
  &__dateOfCreation {
    width: 11.73%;
    padding-right: 0;
    text-align: right;
    @media (min-width: 376px) and (max-width: 576px) {
      width: 16.47%
    }
  }
}
.firstLetter {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  line-height: 24px;
  text-align: center;
  background-color: #FFC700;
  border-radius: 56px;
  @media (max-width: 576px) {
    display: none;
  }
}
.wrapper__flexBox {
  display: flex;
  width: 51.6%;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 41.76%;
    font-family: Proxima Nova;
    font-size: 12px;
    line-height: 16px;
  }
}
.row {
  flex-direction: row;
}
</style>
