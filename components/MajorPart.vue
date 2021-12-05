<template>
   <div v-if="majorpartalldata[0].name == 'majorPartBordercomponent'" 
        :class="majorpartalldata[0].value.className" 
        :style="majorpartalldata[0].value.classStyle">
    <img v-if="url.url" class="majorPartImgStyle" :src="url.url">
    <div v-if="majorpartalldata[1].name == 'darkbackground'" 
         :class="majorpartalldata[1].value.className" 
         :style="majorpartalldata[1].value.classStyle"></div>
    <div v-if="majorpartalldata[2].name == 'titleBordrcomponent'" 
         :class="majorpartalldata[2].value.className" 
         :style="majorpartalldata[2].value.classStyle">
      <h1 v-if="majorpartalldata[3].name == 'titlecomponent' && major.title" 
          :class="majorpartalldata[3].value.className" 
          :style="majorpartalldata[3].value.classStyle">
        {{major.title}}
      </h1>
      <p v-if="majorpartalldata[4].name == 'contentcomponent' && major.content" 
         :class="majorpartalldata[4].value.className" 
         :style="majorpartalldata[4].value.classStyle">
        {{major.content}}
      </p>
      <ElementButtonRadius v-if="button.data" :button="button" />
     </div> 
  </div>
</template>

<script>
export default {
  props: {
    major : {
      type: Object,
      default: () => {},
    },
    url : {
      type: Object,
      default: () => {},
    },
    majorpartalldata : {
      type: Array,
      default: () => [],
    },
    button : {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
  .majorPartImgStyle{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
</style>