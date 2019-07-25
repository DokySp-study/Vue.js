<template>
    <div>
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
    },
    computed: {
        contact: function() {
            var no = this.no
            
            var arr = this.contacts.filter(function(item, index){
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
</style>
