<template>
  <div class="main-container">
    <div class="column-container">
      <div class="company-exist-content-border">
        <div class="company-exist-content-container">
          <img
            :src="require('@/assets/images/mission-statement.jpg')"
            class="compass"
          />
        </div>
        <div class="divider"></div>
        <div class="company-exist-content-container">
          <div>
            <h1 class="company-exist-title">
              {{ $t('company.aboutUs.mission.title') }}
            </h1>
            <p class="company-exist-content">
              {{ $t('company.aboutUs.mission.content') }}
            </p>
          </div>
          <div>
            <h1 class="company-exist-title">
              {{ $t('company.aboutUs.vision.title') }}
            </h1>
            <p class="company-exist-content">
              {{ $t('company.aboutUs.vision.content') }}
            </p>
          </div>
          <div>
            <h1 class="company-exist-title">
              {{ $t('company.aboutUs.valueProposition.title') }}
            </h1>
            <p class="company-exist-content">
              {{ $t('company.aboutUs.valueProposition.content') }}
            </p>
          </div>
        </div>
      </div>
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
.column-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.company-exist-title {
  font-size: 2.5rem;
  color: #369;
  font-weight: bolder;
  margin-bottom: 8px;
}

.company-exist-content-border {
  display: flex;
  justify-content: space-around;
}
.company-exist-content-container {
  display: flex;
  flex-wrap: wrap;
}
.company-exist-content {
  line-height: 1.8;
}
.compass {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.divider {
  width: 10rem;
}
@media screen and (max-width: 1200px) {
  .main-container {
    padding: 4% 15%;
  }
  .company-exist-content-border {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 992px) {
  .main-container {
    padding: 4% 15%;
  }
}

@media screen and (max-width: 768px) {
  .main-container {
    padding: 4% 8%;
  }
}

@media screen and (max-width: 572px) {
  .main-container {
    padding: 4% 8%;
  }
}
</style>