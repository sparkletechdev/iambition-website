<template>
  <div class="news-container">
    <div class="news-container-title">{{ $t('index.news.title') }}</div>
    <hooper :settings="hooperSettings">
      <slide v-for="(news, i) in $t('index.news.items')" :key="i" :index="i">
        <NewsCard :news-item="news" />
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
} from 'hooper'
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        itemsToShow: 2,
        wheelControl: false,
        autoPlay: 'true',
        playSpeed: 2000,
        trimWhiteSpace: true
      },
    }
  },
}
</script>

<style scoped>
.news-container {
  width: 100%;
  padding: 4% 15%;
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.5),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/news.jpg');
  background-size: cover;
  background-position-y: 50%;
}
.news-container-title {
  text-align: center;
  font-size: 2rem;
  color: white;
  padding: 1rem 1rem;
}
.hooper {
  height: auto;
}
</style>