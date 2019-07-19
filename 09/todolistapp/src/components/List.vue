<!-- list-component -->
<style>
    ul {
        margin: 0;
        padding: 0;
    }
    
    ul li {
        cursor: pointer;
        /* 마우스 포인터를 어떻게 바꿀건지 */
        position: relative;
        padding: 8px 8px 8px 40px;
        background: #eee;
        font-size: 14px;
        transition: 0.2s;
        /* hover시 효과 변경 */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* 셀렉트 방지 */
    }
    
    ul li:hover {
        background: #ddd;
    }
    
    ul li.checked {
        background: #BBB;
        color: #fff;
        text-decoration: line-through;
    }
    
    ul li.checked::before {
        /* 가상 클래스 -> 별도의 클래스 없이 지정한 것처럼 요소선택 */
        /* ::before -> 요소의 콘텐츠 시작부분에 생성된 콘텐츠를 추가한다! */
        /* 나중에 자세히 찾아보기! */
        content: '';
        position: absolute;
        border-color: #fff;
        border-style: solid;
        border-width: 0px 1px 1px 0px;
        top: 12px;
        left: 16px;
        transform: rotate(45deg);
        height: 8px;
        width: 4px;
    }
    
    .close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 12px 16px 12px 16px;
    }
    
    .close:hover {
        background-color: #f44336;
        color: white;
    }
</style>
<template>
    <ul>
        <li v-for="item in todolist" :key="item.id" v-bind:class="checked(item.done)" @click="doneToggle(item.id)">
            <span>{{item.todo}}</span>
            <span v-if="item.done">(완료)</span>
            <span class="close" @click.stop="deleteTodo(item.id)">&#x00D7;</span>
        </li>
    </ul>
</template>
<script>
    import eventBus from '../eventBus.js'
    export default {
        name: "list-todo",
        template: "#list-template",
        data: function() {
            return {
                todolist: [{
                    id: 1,
                    todo: "영화보기",
                    done: false
                }, {
                    id: 2,
                    todo: "주말 산책",
                    done: true
                }, {
                    id: 3,
                    todo: "ES6 학습",
                    done: false
                }, {
                    id: 4,
                    todo: "잠실 야구장",
                    done: false
                }, ]
            }
        },
        created: function() {
            eventBus.$on("newTodo", this.addTodo);
        },
        methods: {
            checked: function(done) {
                if (done) return {
                    checked: true
                }
                else return {
                    checked: false
                }
            },
            addTodo: function(text) {
                this.todolist.push({
                    id: new Date().getTime(),
                    todo: text,
                    done: false
                })
            },
            deleteTodo: function(id) {
                var index = this.todolist.findIndex(function(item) {
                    return item.id === id; // .find -> 판별 함수를 만족하는 첫 번째 요소 인덱스 값 반환 
                })
                this.todolist.splice(index, 1) // 몆 번째 부터 몇 개 지울건지 
            },
            doneToggle: function(id) {
                var index = this.todolist.findIndex(function(item) {
                    return item.id === id
                })
                this.todolist[index].done = !this.todolist[index].done
            }
        }
    }
</script>