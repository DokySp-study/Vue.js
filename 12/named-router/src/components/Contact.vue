<template>
    <div>
        <h1>
            Contacts
        </h1>
        <div class="wrapper">
            <div class="box" v-for="item in contacts" :key="item.no">
                <!-- <router-link :to="/contacts/+item.no">{{ item.name }}</router-link> -->
                <router-link :to="{name: 'contactbyno', params: {no: item.no}}">{{item.name}}</router-link>
            </div>
        </div>
        <router-view></router-view>
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

<style>
.wrapper {
    background-color: #fff;
    clear: both;
    display: table;
}

.box {
    float: left;
    background-color: aqua;
    border-radius: 5px;
    padding: 10px;
    margin: 3px;
    text-align: center;
    font-size: 120%;
    width: 100px;
    font-weight: bold;
}

a:link, a:visited {
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
</style>
