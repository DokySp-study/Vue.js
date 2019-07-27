<!--
프로그래밍 방식 라우팅 제어를 사용하면
  1. 사용자의 확인을 받고 링크 이동
  2. 이벤트 처리로 이동 전에 다른 작업을 같이 수행

   -> ths.$router.push(이동할 경로, 이동 완료 시 콜백함수, 이동취소 시 콜백함수)
-->

<template>
    <div>
        <h1>
            Contacts
        </h1>
        <div class="wrapper">
            <div class="box" v-for="item in contacts" :key="item.no">
                <!-- <router-link :to="{name: 'contactbyno', params: {no: item.no}}">{{item.name}}</router-link> -->
                <span @click="navigate(item.no)" style="cursor: pointer;">{{item.name}}</span>
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
    methods: {
        // navigate() {}
        navigate: function(no){
            if(confirm("Do you want a see details?")){
                this.$router.push({
                    name: 'contactbyno',
                    params: {no: no}
                }),
                () => console.log("Move complete to /contacts/"+no)
            }
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
