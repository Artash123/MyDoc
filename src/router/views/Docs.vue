<template>
  <router-view/>
</template>

<script>
import Router from 'vue-router'
export default {
  name: 'Docs',
  // data () {
  //   return {
  //     documents: this.$store.state.documents
  //   }
  // },
  // methods: {
  //   editDoc() {
  //     var docIndex = event.target.getAttribute('data-target');
  //     console.log(docIndex);
  //     this.$router.push({ path: '0/edit' })
  //   }
  // },
  // computed:{
  //   showDocs(){
  //     return this.documents;
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.document{
  position: relative;
  padding: 5px;
  background-color: #FFF;
  width: 100%;
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
