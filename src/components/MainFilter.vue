<template>
  <div class="wrapper__filter">
    <div class="main-filter">
      <el-select
        v-model="value"
        class="m-2 main-filter__select"
        placeholder="ВСЕ"
        size="large"
        @change="onFilterChange"
        :suffix-icon="ElSelectSuffixIcon"
      >
        <el-option
          v-for="item in filterOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <RouterLink to="/create">
        <button type="button" class="main-filter__btn">
          <span class="main-filter__btn__span"></span>
          Добавить <span class="display"> контакт</span>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup >
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useAddressMockStore } from '@/stores/MockStore';
import { storeToRefs } from 'pinia'
import ElSelectSuffixIcon from '@/components/ElSelectSuffixIcon.vue';

const addressStore = useAddressMockStore()
const { filterOptions } = storeToRefs(addressStore)
const value = ref('')
const onFilterChange = (val) => {
  addressStore.updateFilterValue(val)
}
</script>

<style lang="scss" scoped>
.wrapper__filter {
  margin-bottom: 12px;
  padding: 0;
  border: 1px solid #EAF2FD;
}

.main-filter {
  display: flex;
  justify-content: space-between;
  width: 990px;
  padding: 8px 0;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 928px;
    padding: 8px 32px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 704px;
    padding: 8px 32px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 552px;
    padding: 8px 12px;
  }

  @media (min-width: 376px) and (max-width: 576px) {
    width: 352px;
    padding: 8px 12px;
  }

  &__select {
    height: 40px;

    @media (max-width: 991px) {
      height: 32px;
      margin-right: 16px;
    }
  }

  &__btn {
    position: relative;
    height: 32px;
    padding: 0 12px 0 36px;
    background-color: white;
    border-radius: 28px;
    border: 1px solid #2F80ED;
    color: #2F80ED;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 14px;
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
:global(.el-input--large .el-input__inner) {
  height: 40px;
  width: 183px;
  @media (max-width: 991px) {
    height: 32px;
  }
  @media (max-width: 576px) {
    width: 166px;
  }
}

:global(.el-input--large .el-input__wrapper) {
  padding: 0 8px;
}
</style>
