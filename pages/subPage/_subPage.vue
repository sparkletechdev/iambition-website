<template>
  <div>
    <Header/>
    <h1>{{ post.data.title }}</h1>
    <p>{{ post.data.color }}</p>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $axios }) {
      const post = await $axios.$get(`http://localhost:3003/subPage/${params.subPage}`)
      return { post }
    }
  }
</script>

<style>
  h1{
    position: relative;
  }
</style>