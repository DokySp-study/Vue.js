<template>
    <div>
        <h1>
            Contacts
        </h1>
        <div class="box" v-for="item in contacts" :key="item.no">
            <router-link :to="/contact/+item.no">{{ item.name }}</router-link>

        </div>
    </div>
</template>

<script>
import contactlist from '../ContactList'

export default {
    name: "contact",
    data() {
        return {
            contacts: contactlist.contacts 
        }
    },
}
</script>