<template>
    <button class="btn">
        <span><img src="@/assets/save.svg" alt="Сохранить" width="12" height="12"></span>
        Сохранить
    </button>
</template>

<style lang="scss" scoped>
.btn {
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
    @media (min-width: 376px) and (max-width: 576px) {
        width: 124px;
        height: 32px;
        left: 60px;
        font-size: 12px;
        line-height: 14.4px;
    }
    &:hover {
        background: #FFD84C;
    }
    &:active {
        background: #F3C41E;
    }
}
</style>