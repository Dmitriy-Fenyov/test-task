<template>
  <div class="wrapper__filter">
    <div class="main-filter">
      <select  @change="changeOption" class="main-filter__select">
        <option  disabled value="">Все</option>
        <option 
          v-for="option in options" 
          :key="option.value" 
          :value="option.value"
        >
          {{option.name}}
      </option>
      </select>
      <button class="main-filter__btn">
        Добавить контакт
      </button>
    </div>
  </div>
</template>
  
<script>

  export default {
    name: 'main-filter',
    props: {
      modelValue: {
        type: String
      },
      options: {
        type: Array
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event)
      }
    }
  }
</script>

  <style lang="scss" scoped>

  .wrapper__filter {
    border: 1px solid #EAF2FD;
  }
  .main-filter {
    display: flex;
    justify-content: space-between;
    width: 990px;
    height: 56px;
    margin: 0 auto;
    align-items: center;
  }
  .main-filter__select {
    height: 40px;
    width: 235px;
  }
  .main-filter__btn {
    height: 32px;
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

  }
  
  </style>
  