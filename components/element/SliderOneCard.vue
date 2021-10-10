<template>
    <div ref="carousel"
         data-auto="true" 
         data-delay="5000"
         class="slideroneborder" 
         @mouseenter.stop="toggleTimer = false"
         @mouseleave.stop="toggleTimer = true" 
         @touchstart.stop="touchStart" 
         @touchmove.stop="touchMove">
      <keep-alive>
        <transition :name="carouselName">
          <!-- eslint-disable -->
          <div v-for="(data,i) in datas" v-if="show == i" :key="i" class="item">
          <!-- eslint-enable -->
            <div class="slidercontainer">
              <h1 class="slidercardtitle">
                {{data.title.titleelement}}
              </h1>
              <p class="slideronebordersbutitle">
                Featured among Singapore’s Top IT companies by Connectbit for Tuple’s new approach to AI Technology Innovation.
              </p>
              <p class="slideroneborderbuttton">
                {{data.button.buttonelement}}
              </p>
            </div>
          </div>
        </transition>
      </keep-alive>
      <div class="dotgroup">
        <a v-for="(data,i) in len"
            :key="i"
            href="#"
            :class="{active: show == i}"
            @click.prevent="show = i"></a>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    hone: {
      type: Object,
      default: () => {},
    },
    honetitle: {
      type: Object,
      default: () => {},
    } 
  },
  data() {
    return {
      datas:[
        {
          id:'1',
          title: {titleelement:'intel',titlestyle:``},
          subtitle: {subtitleelement:'just test',subtitlestyle:``},
          button: {buttonelement:'– Bala Chandrasekaran, Director',buttonstyle:``,buttonlink:'/'},
        },
        {
          id:'2',
          title: {titleelement:'google',titlestyle:``},
          subtitle: {subtitleelement:'do not test',subtitlestyle:``},
          button: {buttonelement:'- Danny Lai, Vice President, Head of Marketing & Strategic Projects',buttonstyle:``,buttonlink:'/'},
        },
        {
          id:'3',
          title: {titleelement:'facebook',titlestyle:``},
          subtitle: {subtitleelement:'do you like it',subtitlestyle:``},
          button: {buttonelement:'– Joseph Phua, CEO',buttonstyle:``,buttonlink:'/'},
        },
        {
          id:'4',
          title: {titleelement:'telegram',titlestyle:``},
          subtitle: {subtitleelement:'talk to me',subtitlestyle:``},
          button: {buttonelement:'– Latif Sim, Chief Information Officer',buttonstyle:``,buttonlink:'/'},
        },
        {
          id:'5',
          title: {titleelement:'line',titlestyle:``},
          subtitle: {subtitleelement:'hi ding dong',subtitlestyle:``},
          button: {buttonelement:'- Danny Lai, Vice President, Head of Marketing & Strategic Projects',buttonstyle:``,buttonlink:'/'},
        },
      ],
      carouselName: 'carousel-next',
      len:0,
      show:0,
      xDown: null,       // for swiper
      yDown: null,       // for swiper
      autoplay: false,   // 是否自動輪播
      timer: null,       // auto play
      timerDelay: 3000,  // 自動輪播間隔秒數
      toggleTimer: true, // pause auto play
    }
  },
  mounted() {
    this.len = this.datas.length;
    this.autoplay = this.$refs.carousel.dataset.auto === 'true';
    this.timerDelay = Number(this.$refs.carousel.dataset.delay) || 3000;
    if (this.autoplay) this.autoPlay();
  },
  methods: {
    toNext() {
      this.carouselName = 'carousel-next';
      this.show + 1 >= this.len ? this.show = 0 : this.show = this.show + 1;
    },
    toPrev() {
      this.carouselName = 'carousel-prev';
      this.show - 1 < 0 ? this.show = this.len - 1 : this.show = this.show - 1;
    },
    // swiper event(for mobile)
    touchStart(e) {
      this.xDown = e.touches[0].clientX;
      this.yDown = e.touches[0].clientY;
      window.console.log(e.touches[0].clientX);
    },
    touchMove(e) {
      const _this = this;
      if (!this.xDown || !this.yDown) { return; }

      const xUp = e.touches[0].clientX;
      const yUp = e.touches[0].clientY;

      const xDiff = this.xDown - xUp;
      const yDiff = this.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        xDiff > 0 ? _this.toNext() : _this.toPrev();
      }
      this.xDown = null;
      this.yDown = null;
    },
    // 自動輪播
    autoPlay() {
      setInterval(() => {
        if (this.toggleTimer) this.toNext();
      }, this.timerDelay);
    }
  },
}
</script>

<style>
  .slideroneborder{
    /* border: 3px solid red; */
    overflow: hidden;
    position: relative;
    width: 1112px;
    height: 100%;
  }
  .slideroneborder .item{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95%;
  }
  .slideroneborder .item:first-of-type{
    position: relative;
  }
  .slidercontainer{
    /* background-color: #fff; */
    position: absolute;
    width: 95%;
    border: 1px solid #E3EDF3;
    box-shadow: 1px 1px 22px -9px rgba(201, 208, 212, 0.75);
    padding: 42px 25px;
    border-radius: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
  }
  .slidercardtitle{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 15px;
  }
  .slideronebordersbutitle{
    width: 1000px;
    height: 120px;
    max-height: 120px;
    text-align: center;
    font-size: 8px;
  }
  .slideroneborderbuttton{
    display: flex;
    justify-content: center;
    color: #5a5a5a;
    font-weight: 600;
    font-size: 1rem;
  }
  .dotgroup{
    /* border: 1px solid green; */
    right: 0;
    bottom: 8px;
    left: 0;
    display: flex;
    justify-content: center;
  }
  .dotgroup a {
    display: block;
    margin-right: 8px;
    margin-left: 8px;
    width: 16px;
    height: 16px;
    background: rgba(44, 141, 201, 1);
    border: 2px solid rgba(44, 141, 201, 1);
    border-radius: 50%;
    transition: 0.3s;
  }
  .dotgroup a:hover,
  .dotgroup a.active {
    background: #fff;
  }
  .carousel-prev-enter-active,
  .carousel-prev-leave-active,
  .carousel-next-enter-active,
  .carousel-next-leave-active {
    transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    will-change: transform;
  }

  .carousel-next-enter,
  .carousel-prev-leave-to {
    transform: translateX(100%);
  }

  .carousel-next-leave-to,
  .carousel-prev-enter {
    transform: translateX(-100%);
  }
</style>