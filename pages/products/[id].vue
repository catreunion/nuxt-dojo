<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ item.title }}</Title>
      <Meta name="description" :content="item.description" />
    </Head>

    <ProductDetails :item="item" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products"
})

const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id
const { data: item } = await useFetch(uri, { key: id })

if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true })
}
</script>
