<template> 
<the-header :v-slot="theTitle">{{theTitle}}</the-header>
<div style="display:flex">

  <div class="left">

    <base-button @click="toglleComponent('add-content')"
                  :class="theContent"
                  >Add Content </base-button>

    <base-button  @click="toglleComponent('test-fold')"
                  :class="theTest"
                  >Show Content</base-button>
   
    <keep-alive>
      <component :is = "myCompocont"
             @person-content="adderContent"
             @delete-contact="deleter"
             :myPersons="persons"
             > 
            </component>
    </keep-alive>
  </div>
  <div class="right" v-if="shower">
    <test-fold @person-content="adderContent"
               @delete-contact="deleter"
               :myPersons="persons" ></test-fold>
  </div>
</div>
</template>

<script>
import TestFold from './components/test_fold/TestFold.vue'
import AddContent from './components/add_content/AddContent.vue'

export default {
  name: 'App',
  components: {
    'test-fold':TestFold,
    'add-content':AddContent,
},

  data(){
    return {
      myCompocont:'add-content',
      persons:[]
    }
  },

  computed: {
    shower: function(){
      if (this.myCompocont === 'add-content'){return true} else return false
    },

    theTitle: function(){
      if (this.myCompocont=== 'add-content'){
      return "Add Content"}else{
        return "Show Content"}
    },

    theContent: function() {
      if(this.myCompocont === 'add-content'){
        return 'actived'
      }else return null
    },

    theTest: function() {
         if(this.myCompocont === 'test-fold'){
            return 'actived'
             }else return null
    }
  },


    methods:{

      deleter: function(theId){
        
        let personId = this.persons.find(person => person.id === theId),
        id = personId.id;
        let arr = [];
        this.persons.forEach(person => {
          if(person.id !== id){
            arr.push(person);
          }
          this.persons = arr;
        });      
        },
      toglleComponent: function(cmp){
        this.myCompocont = cmp;
      },

      adderContent: function(f_name,l_name,age,stat,city){
          let id = 0;

          if(this.persons.length !== 0)
                    {id = this.persons.length}

        this.persons.unshift({
            'id': id,
            'f_name':f_name,
            'l_name':l_name,
            'age':age,
            'stat':stat,
            'city':city,
          });
             }
    }
}
</script>
<style scoped>
div.left{
width:50vw;
}
.right{
  opacity: .4;
}

</style>