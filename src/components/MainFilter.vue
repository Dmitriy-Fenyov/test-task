<template>
  <div class="wrapper__filter">
    <div class="main-filter">
      <el-select v-model="value" class="m-2 main-filter__select" placeholder="ВСЕ" size="large">
        <el-option
          v-for="item in sortOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <RouterLink to="/create">
        <button type="button" class="main-filter__btn">
          <span class="main-filter__btn__span"></span>
          Добавить контакт
        </button>
      </RouterLink>
    </div>
  </div>
</template>
  
<script setup >
import { RouterLink} from 'vue-router'
import { ref } from 'vue'
import {useAddressMockStore} from '../stores/MockStore';
import { storeToRefs } from 'pinia'

const addressStore = useAddressMockStore()
const {sortOptions} = storeToRefs(addressStore)
const value = ref('')


  // export default {
  //   name: 'main-filter',
  //   props: {
  //     modelValue: {
  //       type: String
  //     },
  //     options: {
  //       type: Array
  //     }
  //   },
  //   methods: {
  //     changeOption(event) {
  //       this.$emit('update:modelValue', event.target.value)
  //     }
  //   }
  // }
</script>

<style lang="scss" scoped>
  .wrapper__filter {
    border: 1px solid #EAF2FD;
    margin-bottom: 16px
  }
  .main-filter {
    display: flex;
    justify-content: space-between;
    width: 990px;
    height: 56px;
    margin: 0 auto;
    align-items: center;
    &__select {
    height: 40px;
    width: 235px;
    }
    &__btn {
      position: relative;
      height: 32px;
      padding: 0 12px 0 36px;
      background-color: white;
      border-radius: 28px;
      border: 1px solid #2F80ED;
      color: #2F80ED;
      font-family: Proxima Nova;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      text-transform: uppercase;
      cursor: pointer;
      &::before,
        &::after {
            content: "";
            position: absolute;
            top: 14.5px;
            left: 16px;
            width: 10.7px;
            height: 1px;
            background-color: #2F80ED;
        }
        &::before {
            transform: rotate(90deg);
        }
        &__span {
          width: 11px;
          height: 11px;
        }
    }
  }

</style>
  