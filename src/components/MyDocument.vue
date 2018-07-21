<template lang="html">
  <div>
    <div class="container">
      <div class="input-box">
        <h1>New Document</h1>
        <form class="" action="index.html" method="post">
          <input v-model="doc.title" type="text" class="doc-title-input border-none" name="" placeholder="Title">
          <textarea v-model="doc.content"  class="doc-textarea border-none" name="name" rows="8" cols="80" placeholder="description"></textarea>
          <button type="button" class="btn btn-success" @click="save" name="button">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDocument',
  props: {
    doc: {
      type: Object,
      default: () => {
        return {
          title: '',
          content: ''
        }
      },
    },
  },
  data () {
    return {

    }
  },
  methods:{
    save(){
      this.$emit('save', this.doc);
    }
  }
}
</script>

<style lang="css">
.border-none{
  border: none;
}

.doc-title-input{
  padding: 20px;
  font-size: 30px;
  width: 100%;
  height: 100px;
  outline: none;
}

.doc-textarea{
  padding: 20px;
  width: 100%;
  height: 700px;
  outline: none;
}

</style>
