<template>
    <div>
        <form @submit.prevent='addContent'>
            <div class="firstHalf">
                <label for='first_name' >First Name</label><br><br>
                <label for='last_name'>Last Name</label><br><br>
                <label for='age'>age</label><br><br>
                <label for='stat'>Stat</label><br><br>
                <label for='city'>City</label><br><br>
            </div>

            <div class="half">
                <input id='first_name' type="text" v-model="personContent.f_name"><br><br>
                <input id='last_name' type="text" v-model="personContent.l_name"><br><br>
                <input id='age' type="number" v-model="personContent.age"><br><br>
                <input id='stat' type="text" v-model="personContent.stat"><br><br>
                <input id='city' type="text" v-model="personContent.city"><br><br>
                
                <base-button class='radius sub'>Submit</base-button>
            
            </div>
            

        </form>

    </div>
</template>
<script>

export default {
    data() {
        return {
            personContent:{
                f_name:'',
                l_name:'',
                age:Number,
                stat:'',
                city:'',
            }
        }
    },
    methods:{
        addContent:function(){
            this.$emit('person-content', this.personContent.f_name,this.personContent.l_name,this.personContent.age,this.personContent.stat,this.personContent.city);
            this.personContent.f_name='';
            this.personContent.l_name='';
            this.personContent.age=null;
            this.personContent.stat='';
            this.personContent.city='';
        }
    },
    emits:['person-content'],
}
</script>




<style scoped>
form{
    display: flex;
}
div.firstHalf{
    width: 15%;
    margin: 0 0 0 100px;
}

</style>