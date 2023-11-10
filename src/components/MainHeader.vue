<template>
  <header class="page-header">
    <img src="@/assets/headerLogo.svg"  alt="Контакты" width="42" height="32">
    <h1 class="page-header__title">Книга контактов</h1>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  display: flex;
  vertical-align: middle;
  align-items: center;
  padding: 8px 48px;
  background-color: #282828;
  &__title {
    margin: 0 0 0 20px;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #E0E0E0;
  }
}

</style>
