<template>
  <div class="container">
    <div class="row" id="documents">
      <div class="col-md-3 new-button-box">
          <button type="button" class="btn btn-success new-doc-button"><span class="new-doc"><router-link :to="{name:'CreateDoc'}">New</router-link></span></button>
      </div>
      <div v-for="(doc, index) in docs" :key='index' class="col-md-3">
        <div class="document">
          <h5>{{ doc.title }}</h5>
          <span class="doc-desc">{{ doc.content }}</span>
          <div class="edit-layer">
            <button  @click="editDoc(doc)" type="button" class="btn btn-primary"><font-awesome-icon icon="edit" /></button>
            <button  @click="deleteDoc(doc)" type="button" class="btn btn-danger">X</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li @click="changePage(previousPage)" class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li @click="changePage(index+1)" v-for="(page, index) in pages" :key='index' class="page-item"><a class="page-link" href="#">{{index+1}}</a></li>
            <li @click="changePage(nextPage)" class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router'
export default {
  name: 'ShowDocs',
  props: {
    page: 1,
    lastPage:{
      default: () => {
        return {
          lastPage: false
         }
        }
    }
  },
  data () {
    return {
      previousPage: '',
      nextPage: '',
    }
  },
  mounted(){
    this.$store.dispatch('fetchDocs',this.$route.params.page);
    console.log(this.$route.params.page);
  },
  methods: {
    editDoc(doc) {
      this.$router.push({ name: 'EditDoc',params: {id: doc.id} })
    },
    deleteDoc(doc){
      this.$store.dispatch('deleteDoc',doc);
    },
    changePage(pageNum){
      // console.log(this.$route.params.page);
      // if(pageNum!=1){
      //   this.previousPage = pageNum-1;
      // }
      // if(pageNum!=this.$store.state.docs.pageCount){
      //   this.nextPage = pageNum+1;
      // }
      this.$router.push({ name: 'EditDoc'})
    }
  },
  computed:{
    docs(){
      return this.$store.state.docs.documents;
    },
    pages(){
      return this.$store.state.docs.pageCount;
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
