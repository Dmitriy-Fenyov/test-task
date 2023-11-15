<template>
  <header class="page-mainHeader">
    <img src="@/assets/headerLogo.svg"  alt="Контакты" width="42" height="32">
    <h1 class="page-mainHeader__title">Книга контактов</h1>
  </header>
</template>

<style lang="scss" scoped>
.page-mainHeader {
  display: flex;
  vertical-align: middle;
  align-items: center;
  padding: 8px 48px;
  background-color: #282828;
  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 8px 32px;
    }
    @media (min-width: 376px) and (max-width: 768px) {
    padding: 8px 12px;
    }
  &__title {
    margin: 0 0 0 20px;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #E0E0E0;
  }
}
</style>
