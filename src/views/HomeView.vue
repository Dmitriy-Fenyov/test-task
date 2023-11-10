<script setup>
import MainFilter from '../components/MainFilter.vue';
import MainHeader from '../components/MainHeader.vue';
import {useAddressMockStore} from '../stores/MockStore';
import { storeToRefs } from 'pinia'

// const mock = useAddressMockStore()
// const {filteredTodos, filterOptions } = storeToRefs(mock)
const todoStore = useAddressMockStore()
const {address} = storeToRefs(todoStore)

</script>

<template>
    <MainHeader />
    <MainFilter />
    <div class="wrapper">
        <ul class="property">
            <li class="property__name">
                Контакт
            </li>
            <li class="property__tel">
                Телефон
            </li>
            <li class="property__mail">
                E-mail
            </li>
            <li class="property__dateOfCreation">
                Создан
            </li>
        </ul>
        <ul 
            v-for="contact in address"           
            :key="contact.id"
            class="contact"
        >
            <li class="name">
                <span class="firstLetter">F</span>
                {{ contact.name }}
            </li>
            <li class="tel">
                {{ contact.tel }}
            </li>
            <li class="mail">
                {{ contact.mail }}
            </li>
            <li class="dateOfCreation">
                {{ contact.dateOfCreation }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.wrapper {
    width: 990px;
    margin: 0 auto;
}
.property {
    list-style: none;
    display: flex;
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
}
.contact {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    vertical-align: middle;
    font-family: Proxima Nova;
    font-size: 14px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    border-bottom: 1px solid #EAF2FD;
}
.firstLetter {
    text-align: center;
    line-height: 24px;
    margin: 12px 12px 12px 0;
    width: 24px;
    height: 24px;
    border-radius: 56px;
    background-color: #FFC700;
}
.name {
    display: flex;
    height: 48px;
    width: 296px;
    vertical-align: middle;
    margin-right: 87px;
}
.property__name {
    width: 296px;
    margin-right: 87px;
}
.tel {
    height: 48px;
    width: 112px;
    margin-right: 87px;
}
.property__tel {
    width: 112px;
    margin-right: 87px;
}
.mail {
    height: 48px;
    width: 208px;
    margin-right: 87px;
}
.property__mail {
    width: 208px;
    margin-right: 87px;
}
.dateOfCreation {
    height: 48px;
    width: 112px;
    text-align: right;
}
.property__dateOfCreation {
    width: 112px;
    text-align: right;
}

</style>
