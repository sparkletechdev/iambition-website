<template>
  <div class="items-container">
    <div v-for="(item, index) in content" :key="index" class="g-item-container">
      <div class="g-item-image g-item-image-active">
        <img :src="item.img" />
      </div>
      <div class="g-item-content-container g-item-content-container-active">
        <h1 class="g-item-title g-item-title-active">
          {{ item.title }}
        </h1>
        <p class="g-item-subtitle g-item-subtitle-active">
          {{ item.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      default: () => [],
      type: Array,
    },
  },
  mounted() {
    this.scrollItem()
  },
  methods: {
    scrollItem() {
      // eslint-disable-next-line no-console
      console.log('scrolling .. scrolling ..')
      window.addEventListener('scroll', function () {
        const itemContainer = document.querySelectorAll('.g-item-container')
        const itemImage = document.querySelectorAll('.g-item-image')
        const itemContentContainer = document.querySelectorAll(
          '.g-item-content-container'
        )
        const itemTitle = document.querySelectorAll('.g-item-title')
        const itemSubtitle = document.querySelectorAll('.g-item-subtitle')

        itemContainer.forEach((value, index) => {
          if (
            value.offsetTop - scrollY > 200 &&
            value.offsetTop - scrollY < 550
          ) {
            itemImage[index].classList.remove('g-item-image-active')
            itemContentContainer[index].classList.remove(
              'g-item-content-container-active'
            )
            itemTitle[index].classList.remove('g-item-title-active')
            itemSubtitle[index].classList.remove('g-item-subtitle-active')
          }
        })
      })
    },
  },
}
</script>
<style scoped>
.items-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.g-item-container {
  display: flex;
  justify-content: space-between;
  padding-top: 8rem;
}
.g-item-image {
  width: 49%;
  max-height: 360px;
  overflow: hidden;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.g-item-container:nth-child(2) > .g-item-image,
.g-item-container:nth-child(4) > .g-item-image {
  order: 2;
}
.g-item-content-container {
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.g-item-image-active {
  opacity: 0;
  transform: translateX(-270px);
}
.g-item-content-container-active {
  opacity: 0;
  transform: translateX(270px);
}
.g-item-title {
  color: #369;
  font-size: 1.74rem;
  line-height: 2.5;
  font-weight: 500;
  position: relative;
  opacity: 1;
  transform: translateX(0);
  transition: all 1s ease;
}
.g-item-title-active {
  opacity: 0;
  transform: translateX(70px);
}
.g-item-title::before {
  position: absolute;
  content: '';
  width: 83px;
  height: 3px;
  background: #369;
}
.g-item-subtitle {
  font-size: 16px;
  font-weight: 300;
  opacity: 1;
  transform: translateX(0);
  transition: all 1.2s ease;
}
.g-item-subtitle-active {
  opacity: 0;
  transform: translateX(90px);
}
@media screen and (max-width: 1200px) {
  .g-item-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .g-item-title::before {
    position: absolute;
    content: '';
    width: 0;
    height: 3px;
  }
  .g-item-image {
    width: 100%;
    order: 1;
  }
  .g-item-content-container {
    width: 100%;
    order: 2;
  }
}
</style>