<template>
  <div
    :class="majorPartBorder.className"
    :style="majorPartBorder.classStyle"
  >
    <img
      class="majorPartImgStyle"
      src="@/assets/images/indexFirstBackground.jpeg"
    />
    <div
      :class="darkBackground.className"
      :style="darkBackground.classStyle"
    ></div>
    <div
      :class="titleBorder.className"
      :style="titleBorder.classStyle"
    >
      <h1 :class="title.className" :style="title.classStyle">
        {{ major.title }}
      </h1>
      <p :class="content.className" :style="content.classStyle">
        {{ major.content }}
      </p>
      <button-radius />
    </div>
  </div>
</template>

<script>
import ButtonRadius from './element/ButtonRadius.vue'
import url from '@/assets/data/major-part-url.json'
import majorPartBorder from '@/assets/data/major-part-border.json'
import darkBackground from '@/assets/data/dark-background.json'
import titleBorder from '@/assets/data/title-border.json'
import title from '@/assets/data/title.json'
import content from '@/assets/data/content.json'
import major from '@/assets/data/major-part.json'

export default {
  components: { ButtonRadius },
  data() {
    return {
      url,
      majorPartBorder,
      darkBackground,
      titleBorder,
      title,
      content,
      major,
    }
  },
}
</script>

<style scoped>
.majorPartImgStyle {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
@media screen and (max-width: 576px) {
  .majorPartBordercomponent {
    min-height: 450px !important;
    height: 60vh !important;
  }
  .titleBordrcomponent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute !important;
    top: 60% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
  .titlecomponent {
    width: 100% !important;
    text-align: center;
    font-size: 1rem !important;
  }
  .contentcomponent {
    width: 80%;
    text-align: center;
  }
}
</style>
