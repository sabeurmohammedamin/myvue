<template>
    <div>
        <ul v-for="person in myPersons" :key="person.id">
            <li><h1>{{person.f_name}}</h1></li>
            <li><h2>{{person.l_name}}</h2></li>
            <li><h3>{{person.age}}</h3></li>
            <li><h4>{{person.stat}}</h4></li>
            <li><h5>{{person.city}}</h5></li>        
            <base-button  class='red'
            @click='deleter(person.id)'
            >Delete</base-button>
        </ul>
    </div>

</template>
<script>

export default {
    props:['myPersons'],
    data(){
        return{
        persons : this.myPersons,
        }
    },
    methods:{
        deleter: function(theId){
            this.$emit("delete-contact",theId);
            
    }
    
    }

}
</script>

<style scoped>
.red{
background: orangered;
}

ul{ 
    width: 40vw;
    text-align: center;
    border: 1px solid rgb(209, 203, 203);
    border-radius: 10px;
    box-shadow: 1px 1px 5px grey;
    list-style-type: none;
    padding:0 0 10px 0;
    margin:0 0 20px 0
}
ul>:first-child{
    background: rgb(247, 235, 187);
    width: 100%;
    margin:0px;
    padding: 1px 0 0 0;
    top:0;
    border-radius: 10px 10px 0 0;
}
</style>