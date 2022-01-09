<template>
  <div class="customersborder">
    <h1 ref="customerstitle" class="customerstitle">Customer Portal</h1>
    <p ref="customerssubtitle" class="customerssubtitle">
      Our customers are ardent believers in data and technology. Tuple shares
      the same ideology and works tirelessly to make customers’ dream come true.
    </p>
    <nuxt-link to="/">
      <button
        ref="customerbutton"
        type="button"
        class="customerbutton"
        @click="reload"
      >
        Become A Customer
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  mounted() {
    this.customermove()
  },
  methods: {
    customermove() {
      const ref = this.$refs

      window.addEventListener('load', function () {
        ref.customerstitle.style.transform = 'translateX(0)'
        ref.customerssubtitle.style.transform = 'translateX(0)'
        ref.customerbutton.style.transform = 'translateX(0)'
        ref.customerstitle.style.opacity = '1'
        ref.customerssubtitle.style.opacity = '1'
        ref.customerbutton.style.opacity = '1'
      })
    },
    reload() {
      setTimeout(() => {
        window.location.reload()
      }, 500)
    },
  },
}
</script>

<style>
.customersborder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 860px;
  background-image: linear-gradient(rgba(28, 75, 102, 0.8), rgba(10, 40, 74, 1)),
    url('https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/transaction.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.customerstitle {
  transition: all 0.6s ease-in-out;
  margin-bottom: 25px;
  font-size: 40px;
  color: white;
  transform: translateX(230px);
  opacity: 0;
}
.customerssubtitle {
  transition: all 0.6s ease-in-out;
  text-align: center;
  max-width: 650px;
  margin: 0 auto 35px;
  color: white;
  transform: translateX(210px);
  opacity: 0;
}
.customerbutton {
  color: white;
  background: linear-gradient(to right, #fab81e 50%, #eda905 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.6s ease-out;
  padding: 10px 50px;
  border-radius: 30px;
  margin-top: 10px;
  font-size: 18px;
  transform: translateX(180px);
  opacity: 0;
}
.customerbutton:hover {
  background-position: left bottom;
}
.customerbutton:not(:hover) {
  background-position: right bottom;
}
@media screen and (max-width: 1600px) {
  .customersborder {
    background-size: 150%;
  }
}
@media screen and (max-width: 1200px) {
  .customersborder {
    background-size: 200%;
  }
}
@media screen and (max-width: 786px) {
  .customersborder {
    background-size: 260%;
  }
}
@media screen and (max-width: 576px) {
  .customersborder {
    background-size: 270%;
    min-height: 320px;
    height: 65vh;
  }
}
</style>