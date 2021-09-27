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
      const post = await $axios.$get(`http://localhost:3003/page/${params.page}`)
      return { post }
    }
  }
</script>