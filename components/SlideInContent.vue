<template>
  <div class="items-container">
    <div class="g-item-container">
      <div class="g-item-left g-item-left-active">
        <slot></slot>
      </div>
      <div class="g-item-right-container g-item-right-container-active">
        <h1 class="g-item-title g-item-title-active">
          {{ content.title }}
        </h1>
        <!-- eslint-disable vue/no-v-html -->
        <p
          class="g-item-subtitle g-item-subtitle-active"
          v-html="content.subtitle"
        ></p>
        <!--eslint-enable-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      default: () => {},
      type: Object,
    },
  },
  mounted() {
    this.scrollItem()
  },
  methods: {
    scrollItem() {
      window.addEventListener('scroll', function () {
        const itemContainer = document.querySelectorAll('.g-item-container')
        const itemImage = document.querySelectorAll('.g-item-left')
        const itemContentContainer = document.querySelectorAll(
          '.g-item-right-container'
        )
        const itemTitle = document.querySelectorAll('.g-item-title')
        const itemSubtitle = document.querySelectorAll('.g-item-subtitle')

        itemContainer.forEach((value, index) => {
          if (
            value.offsetTop - scrollY > 600 &&
            value.offsetTop - scrollY < 800
          ) {
            itemImage[index].classList.remove('g-item-left-active')
            itemContentContainer[index].classList.remove(
              'g-item-right-container-active'
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
  padding: 0 25%;
}
.g-item-container {
  display: flex;
  justify-content: space-between;
  padding-top: 8rem;
}
.g-item-left {
  width: 75%;
  overflow: hidden;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
  justify-content: center;
}
.g-item-container:nth-child(even) > .g-item-left {
  order: 2;
}
.g-item-right-container {
  width: 22.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.g-item-left-active {
  opacity: 0;
  transform: translateX(-270px);
}
.g-item-right-container-active {
  opacity: 0;
  transform: translateX(270px);
}
.g-item-title {
  color: #369;
  font-size: 1.8rem;
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
  font-size: 1.1rem;
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
  .g-item-left {
    width: 100%;
    order: 1;
    align-items: center;
  }
  .g-item-right-container {
    width: 100%;
    order: 2;
    align-items: center;
  }
}
</style>