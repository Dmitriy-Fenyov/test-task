<template>
  <header class="mainHeader">
    <img class="mainHeader__logo" src="@/assets/headerLogo.svg" alt="Контакты" width="42" height="32">
    <h1 class="mainHeader__title">Книга контактов</h1>
  </header>
</template>

<style lang="scss" scoped>
.mainHeader {
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
    @media (min-width: 376px) and (max-width: 768px) {
      margin-left: 8px;
      font-size: 14px;
  }
  }

  &__logo {
    @media (min-width: 376px) and (max-width: 768px) {
      width: 32px;
      height: 24px;
  }
  }
}</style>
