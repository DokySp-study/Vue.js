<!-- search-component -->
<style>
    .input {
        border: none;
        width: 75%;
        height: 35px;
        padding: 10px;
        float: left;
        font-size: 16px;
    }
    
    .addbutton {
        padding: 10px;
        width: 25%;
        height: 35px;
        background: #d9d9d9;
        color: #555;
        float: left;
        text-align: center;
        font-size: 13px;
        cursor: pointer;
        transition: 0.3s;
    }
    
    .addbutton:hover {
        background-color: #bbb;
    }
</style>
<template>
    <div>
        <input v-model.trim="todo" @keyup.13="addTodo" type="text" class="input" id="task" placeholder="입력 후 엔터">
        <span @click="addTodo" class="addbutton">추  가</span>
    </div>
</template>
<script>
    import eventBus from "../eventBus.js";
    export default {
        name: "search-todo",
        data: function() {
            return {
                todo: "",
            }
        },
        methods: {
            addTodo: function(e) {
                if (this.todo.trim() !== "") {
                    eventBus.$emit("newTodo", this.todo.trim())
                }
                this.todo = "";
            }
        },
    }
</script>