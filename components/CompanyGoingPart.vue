<template>
  <div class="main-container">
    <div class="content-container">
      <div class="title-container">
        <h1 class="going-title">{{ $t('company.aboutUs.going.title') }}</h1>
        <p class="going-subtitle">
          {{ $t('company.aboutUs.going.subtitle') }}
        </p>
      </div>
      <SlideInContent :content="$t('company.aboutUs.going.data')" />
      <AboutMeetClient />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main-container {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4% 25%;
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.going-title {
  font-size: 4rem;
  font-weight: bolder;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.going-subtitle {
  font-weight: 300;
  text-align: center;
}
@media screen and (max-width: 1200px) {
  .main-container {
    padding: 4% 15%;
  }
  .going-title {
    font-size: 3rem;
  }
}
@media screen and (max-width: 992px) {
  .main-container {
    padding: 4% 8%;
  }
  .going-title {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 576px) {
  .main-container {
    padding: 4% 8%;
  }
  .title-container {
    padding: 0;
  }
  .going-title {
    font-size: 1.75rem;
  }
  .going-subtitle {
    font-size: 0.8rem;
  }
}
</style>