<template lang="html">
  <div class="">
    <my-document @save="edit" :doc="doc"/>
  </div>
</template>

<script>
import MyDocument from '@/components/MyDocument'
import Router from 'vue-router'
export default {
  name: 'EditDoc',
  data () {
    return {

    }
  },
  methods: {
    edit(doc){
      console.log(this.$route.params.id);
      const payload = {
        doc: doc,
        index: this.$route.params.id
      };
      this.$store.dispatch('editDoc',doc).then(
        this.$router.push({ name: 'ShowDocs' })
      );

    }
  },
  computed: {
    doc() {
      const doc = this.$store.state.docs.documents
        .find(doc => doc.id == this.$route.params.id)
      return JSON.parse(JSON.stringify(doc));
    },
  },
  components: {
    MyDocument,
  },
}
</script>

<style lang="css">
</style>
