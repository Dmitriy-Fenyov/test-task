<script setup>
import MainFilter from '../components/MainFilter.vue';
import MainHeader from '../components/MainHeader.vue';
import {useAddressMockStore} from '../stores/MockStore';
import { storeToRefs } from 'pinia'

// const mock = useAddressMockStore()
// const {filteredTodos, filterOptions } = storeToRefs(mock)
const addressStore = useAddressMockStore()
const {filteredContacts} = storeToRefs(addressStore)

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
            v-for="contact in filteredContacts"           
            :key="contact.id"
            style="padding: 0; margin: 0;"
        >
            <RouterLink :to="'/contact/' + contact.id" class="contact">
                <p class="contact__name">
                    <span class="firstLetter">{{ contact.name[0] }}</span>
                    {{ contact.name }}
                </p>
                <p class="contact__tel">
                    {{ contact.tel }}
                </p>
                <p class="contact__mail">
                    {{ contact.mail }}
                </p>
                <p class="contact__dateOfCreation">
                    {{ contact.dateOfCreation }}
                </p>
            </RouterLink>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.wrapper {
    width: 990px;
    margin: 0 auto;
    @media (min-width: 992px) and (max-width: 1200px) {
        width: 928px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        width: 704px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        width: 552px;
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
    width: 296px;
    margin-right: 87px;
    @media (min-width: 992px) and (max-width: 1200px) {
        width: 264px;
        margin-right: 66.7px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        width: 208px;
        margin-right: 8px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        width: 208px;
        margin-right: 52px;
    }
    }
    &__tel {
    width: 112px;
    margin-right: 87px;
    }
    &__mail {
    width: 208px;
    margin-right: 87px;
    }
    &__dateOfCreation {
    width: 112px;
    text-align: right;
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
    @media (min-width: 992px) and (max-width: 1200px) {
        // width: 264px;
        // margin-right: 66.7px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        // width: 208px;
        // margin-right: 8px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        // width: 208px;
        // margin-right: 52px;
    }
    &__name,  &__tel, &__mail, &__dateOfCreation {
        align-items: center;
        width: 25%;
        margin: 0;
        padding-right: 12px;
    }
    &__name {
    display: flex;
    // width: 296px;
    vertical-align: middle;
    // margin-right: 87px;
    }

    &__tel {
        // width: 112px;
        // margin-right: 87px;
    }

    &__mail {
        // width: 208px;
        // margin-right: 87px;
    }

    &__dateOfCreation {
        // width: 112px;
        padding-right: 0;
        text-align: right;
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
}

</style>
