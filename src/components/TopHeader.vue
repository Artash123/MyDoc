<template>
  <div class="header">

  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  methods:{
    openCart(){
      document.getElementById("addedproducts").style.display = "block";
    },
    removeFromCart(){
      var productIndex = event.target.getAttribute('data-target')
      this.$store.state.productCount--
      this.$store.commit('removeProduct',productIndex)
    }
  },
  computed:{
    ggg(){
      return this.$store.state.productCount;
    },
    addedProducts(){
      return this.$store.state.addedProducts;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header{
    height: 50px;
  }
</style>
