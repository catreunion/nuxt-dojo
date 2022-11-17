<template>
  <div class="mx-auto grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5">
    <div v-for="item in items">
      <ProductCard :item="item" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }]
})

definePageMeta({
  layout: "products"
})

const { data: items } = await useFetch("https://fakestoreapi.com/products")
</script>
