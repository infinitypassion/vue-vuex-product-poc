<template>
  <div>
    <div v-for="product in all.items" :key="product.id">
      <h4>{{product.name}}</h4>
      <img :src="product.photo">
      <p v-if="product.inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <p>{{product.currancy}} {{product.basePrice}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('product', ['all'])
  },
  created () {
    this.getAll();
  },
  methods: {
    ...mapActions('product', ['getAll']),
  },
  watch: {
  } 
};
</script>