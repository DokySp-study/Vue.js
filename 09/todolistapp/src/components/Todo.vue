<style>
        * {
        box-sizing: border-box
        /* 모든 엘리먼트 선택  */
    }
    
    .header {
        background-color: purple;
        padding: 30px 30px;
        color: yellow;
        text-align: center;
    }
    
    .header:after {
        content: '';
        display: table;
        clear: both;
    }
</style>

<template>
    <div>
        <div class="header">
            <h2>Todo List App</h2>
            <search-todo></search-todo>
        </div>
        <list-todo></list-todo>
    </div>
</template>

<script>
    import ListTodo from "./List.vue"
    import SearchTodo from "./Search.vue"

    export default {
        name: "Todo",
        components: {
            ListTodo, SearchTodo
        }
    }
</script>
