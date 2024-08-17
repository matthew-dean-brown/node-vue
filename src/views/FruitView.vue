<template>
    <h1>Fruits hehe</h1>
    <div>
        <section v-for="fruit in $store.state.fruits" :key="fruit.id">
            {{ fruit.id  }}
            {{ fruit.fruit_name }}
            {{ fruit.weight }}
            {{ fruit.amount }}
            <button @click="addToCart()">Purchase</button>
        </section>
    </div>
</template>

<script>
export default{
    methods:{
        getFruits(){
        this.$store.dispatch('getFruits')
      },
      addToCart(){
        this.$store.dispatch('addToCart')
      }
    },
    mounted(){
        this.getFruits()
    }
}
</script>