<template>
    <div>
        <hr class="divider">
        <h1>Contact</h1>
        <div>
            <table class="detail table table-bordered">
                <tbody>
                    <tr class="active">
                        <td>Serial No.</td>
                        <td>{{ contact.no }}</td>
                    </tr> 
                    <tr class="active">
                        <td>Name</td>
                        <td>{{contact.name}}</td>
                    </tr>
                    <tr class="active">
                        <td>Phone</td>
                        <td>{{contact.tel}}</td>
                    </tr>
                    <tr class="active">
                        <td>Addr.</td>
                        <td>{{contact.address}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import contactlist from "../ContactList"

export default {
    name: 'contactbyno',
    data() {
        return {
            no: 0,
            contacts: contactlist.contacts
        }
    },
    created() {
        this.no = this.$route.params.no
        // 이미 children으로 컴포넌트가 로드 된 상태라서 이 코드가 실행되지 않음!
        // 따라서 관찰 속성으로 추가 코드를 작성해주어야 한다.
    },
    watch: {
        $route : function(to, from)  {
            this.no = to.params.no
        }
        // 화살표 함수 사용 시, 관찰 속성이 콜백으로 넘어가 this.no가 정의되지 않은 것으로 나온다!
    }, 
    computed: {
        contact: function() {
            var no = this.no
            
            var arr = this.contacts.filter(function(item){
                return item.no == no
            })
            if (arr.length == 1) return arr[0]
            else return {}

        }
    },  
}
</script>

<style>
    table.detail { width:400px}
    .divider {
        height: 2px;
        margin-left: auto;

    }
</style>
