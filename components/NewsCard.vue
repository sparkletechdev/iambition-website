<template>
  <div class="news-card">
    <div class="news-title">{{ newsItem.title }}</div>
    <div class="news-desc">{{ newsItem.description }}</div>
    <a :href="newsItem.link" target="_blank" class="read-more">{{
      $t('index.news.readMore')
    }}</a>
  </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style scoped>
a {
  color: #0cf;
}
.news-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 20rem;
  background: rgba(39, 50, 68, 0.75);
  padding: 2rem;
  align-items: center;
  border-left: 1px solid #369;
  border-right: 1px solid #369;
}
.news-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #369;
}
.news-desc {
  color: white;
  overflow: auto;
  text-overflow: ellipsis;
  margin: 0.5rem 0;
}

@media screen and (max-width: 992px) {
  .news-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #369;
  }
}
</style>