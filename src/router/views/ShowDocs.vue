<template>
  <div class="container">
    <div class="row" id="documents">
      <div class="col-md-3 new-button-box">
          <button type="button" class="btn btn-success new-doc-button"><span class="new-doc"><router-link :to="{name:'CreateDoc'}">New</router-link></span></button>
      </div>
      <div v-for="(item, index) in docs" :key='index' class="col-md-3">
        <div class="document">
          <h5>{{ item.title }}</h5>
          <span class="doc-desc">{{ item.content.substring(0, 600) }}</span>
          <div class="edit-layer">
            <button  @click="editDoc(item)" type="button" class="btn btn-primary"><font-awesome-icon icon="edit" /></button>
            <button  @click="deleteDoc(item)" type="button" class="btn btn-danger">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router'
export default {
  name: 'ShowDocs',
  data () {
    return {

    }
  },
  methods: {
    editDoc(doc) {
      this.$router.push({ name: 'EditDoc',params: {id: doc.id} })
    },
    deleteDoc(doc){
      this.$store.commit('removeDocument',doc.id)
    }
  },
  computed:{
    docs(){
      return this.$store.state.documents;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.new-button-box{
  margin-bottom: 30px;
}

.document{
  margin-bottom: 30px;
  line-height: 16px;
  position: relative;
  padding: 5px;
  background-color: #FFF;
  width: 100%;
  height: 250px;
}

.doc-desc{
  font-size: 10px;
}

.document:hover .edit-layer{
  display: block;
}

.edit-layer{
  text-align: right;
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: inherit;
  height: 100%;
}

.new-doc-button{
  width: 100%;
  height: 100%;
}

.new-doc{
  font-size: 40px;
}

.new-doc>a{
  color: #FFF!important;
  text-decoration: none;
}

</style>
