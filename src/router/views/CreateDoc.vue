<template lang="html">
  <div class="">
    <my-document @save="save"/>
  </div>
</template>

<script>
import MyDocument from '@/components/MyDocument'
export default {
  name: 'CreateDoc',
  data () {
    return {

    }
  },
  methods: {
    save(doc){
      // this.$store.commit('addDocument',doc)
      this.$store.dispatch('addDocument',doc).then(
        this.$router.push({ path: 'docs/'+this.$store.state.docs.pageCount})
      );
    }
  },
  components: {
    MyDocument,
  },
}
</script>

<style lang="css">
</style>
