<template>
  <div>
    <p class="error-field__label">
      <slot></slot>
    </p>
    <span class="error-field__alertIcon">
      <img src="@/assets/alert.svg" alt="Внимание" width="13.3" height="13.3">
    </span>
  </div>
</template>

<style lang="scss" scoped>
.error-field {
  &__label {
    position: absolute;
    top: 33px;
    right: 0;
    margin: 0;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #EB5757;
  }

  &__alertIcon {
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