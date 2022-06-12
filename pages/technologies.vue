<template>
  <div class="tech-container">
    <LandingComponent
      :title="$t('technologies.landingTitle')"
      :contents="$t('technologies.landingContent')"
      image="home.jpg"
    ></LandingComponent>
    <div class="top-spacer"></div>
    <div class="sections">
      <Technology
        v-for="(tech, index) in $t('technologies.sections')"
        :key="index"
        :item="tech"
        :section-index="index"
        class="technology"
      />
    </div>
    <div class=bottom-spacer></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.tech-container {
  overflow: hidden;
}
.bottom-spacer {
  background-color: #273244;
  height: 2rem;
}
.top-spacer {
  height: 2rem;
}
.technology {
  padding: 4rem 25% 0;
}
</style>
