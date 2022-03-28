<template>
  <div class="main-container">
    <div class="content-container">
      <div class="title-container">
        <h1 class="going-title">Where Are We Going ?</h1>
        <p class="going-subtitle">
          Tuple is being deployed by organizations across the globe for their
          most critical operations. Businesses are finding their best customers,
          designing the best customer experiences and developing exciting new
          products with Tuple.
        </p>
      </div>
      <div class="item-wrapper">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="items-container"
        >
          <div class="item-image item-image-active">
            <img :src="item.img" />
          </div>
          <div class="item-container item-container-active">
            <h1 class="g-item-title g-item-title-active">
              {{ item.title }}
            </h1>
            <p class="item-subtitle item-subtitle-active">
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </div>
      <div class="clients-container">
        <div>
          <p class="clients-content">
            We are working with leading organizations to prepare them for a
            future where utilizing the data is a necessity. We are designing
            products which can withstand digital disruption and keep bringing
            value to the companies willing to change with time.
          </p>
        </div>
        <div
          ref="clients"
          class="clients"
          @click="customerReload()"
        >
          <nuxt-link to="/CUSTOMERS" class="clients-button">
            Meet Our Clients
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'Financial Services',
          subtitle:
            'Financial Services are finding ways to collate their data at a single location so that they have a real-time overview of all the customer activity. It is allowing them to cater to the preferences of their consumer and keep a close watch on the changing digital landscape.',
          img: 'https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingone.jpg',
        },
        {
          title: 'Retailers',
          subtitle:
            'Retailers are innovating with the check-out technologies so that their customers can have a hassle-free experience. The industry is looking at modern data-driven technologies to create unique experiences for the consumers and fight the onslaught of e-commerce. They are refining their processes of payments, marketing, and inventory management.',
          img: 'https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingtwo.jpg',
        },
        {
          title: 'Manufacturing',
          subtitle:
            'Manufacturing has not been an early adopter of the technology but they are opening their eyes to the apparent truth. Organizations are automating the way they cater their customer needs by refining the process of quotation management, deploying media listening to generate leads and recommendation engines to optimize lifecycle management of the customers.',
          img: 'https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingthree.jpg',
        },
        {
          title: 'Telecom',
          subtitle:
            'Telecom sector is creating Intelligent Sales and Marketing engines to enhance the process of customer acquisition, retention, cross-sell and up-sell opportunities.',
          img: 'https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingfour.jpg',
        },
      ],
    }
  },
  mounted() {
    this.scrollItem()
  },
  methods: {
    customerReload() {
      if (this.$route.path === '/CUSTOMERS') {
        setTimeout(() => {
          window.location.reload()
        }, 15)
      }
    },
    scrollItem() {
      if (
        this.$route.path === '/company/about-us'
      ) {
        window.addEventListener('scroll', function () {
          const itemContainer = document.querySelectorAll(
            '.items-container'
          )
          const itemImage = document.querySelectorAll(
            '.item-image'
          )
          const goingItem =
            document.querySelectorAll('.item-container')
          const goingItemTitle = document.querySelectorAll(
            '.g-item-title'
          )
          const goingItemContent = document.querySelectorAll(
            '.item-subtitle'
          )

          itemContainer.forEach((value, index) => {
            if (
              value.offsetTop - scrollY > 300 &&
              value.offsetTop - scrollY < 650
            ) {
              itemImage[index].classList.remove(
                'item-image-active'
              )
              goingItem[index].classList.remove(
                'item-container-active'
              )
              goingItemTitle[index].classList.remove(
                'g-item-title-active'
              )
              goingItemContent[index].classList.remove(
                'item-subtitle-active'
              )
            }
          })
        })
      }
    },
  },
}
</script>

<style scoped>
.main-container {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 100px 250px 0;
}
.going-title {
  font-size: 1.75rem;
  font-weight: bolder;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.going-subtitle {
  font-size: 0.45rem;
  font-weight: lighter;
  text-align: center;
}
.item-wrapper {
  padding: 0 250px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.items-container {
  display: flex;
  justify-content: space-between;
  width: 1140px;
  padding-top: 150px;
}
.item-image {
  width: 49%;
  max-height: 360px;
  overflow: hidden;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.items-container:nth-child(2) > .item-image,
.items-container:nth-child(4) > .item-image {
  order: 2;
}
.item-container {
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.item-image-active {
  opacity: 0;
  transform: translateX(-270px);
}
.item-container-active {
  opacity: 0;
  transform: translateX(270px);
}
.g-item-title {
  color: #005592;
  font-size: 1.74rem;
  line-height: 2.5;
  font-weight: bolder;
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
  background: #005592;
}
.item-subtitle {
  font-size: 16px;
  font-weight: lighter;
  opacity: 1;
  transform: translateX(0);
  transition: all 1.2s ease;
}
.item-subtitle-active {
  opacity: 0;
  transform: translateX(90px);
}
.clients-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 250px;
}
.clients-content {
  line-height: 1.5;
  font-weight: lighter;
  text-align: center;
  margin-bottom: 1rem;
}
.clients {
  margin: 50px 0 55px 0;
}
.clients-button {
  background: linear-gradient(to right, #145484 50%, #1868a4 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  font-weight: bolder;
  padding: 15px 50px;
  border-radius: 30px;
  transition: all 0.5s ease-out;
  color: white;
  outline: none;
}
.clients-button:hover {
  background-position: left bottom;
  cursor: pointer;
}
.clients-button:not(:hover) {
  background-position: right bottom;
}
@media screen and (max-width: 1300px) {
  .title {
    font-size: 1.5rem;
  }
  .subtitle {
    width: 80%;
  }
  .item-wrapper {
    width: 100%;
    padding: 0 50px 0;
  }
  .items-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .item-image {
    width: 100%;
    order: 1;
  }
  .item-container {
    width: 100%;
    order: 2;
  }
}
@media screen and (max-width: 992px) {
  .title-container {
    padding: 50px 50px 0;
  }
}
@media screen and (max-width: 576px) {
  .item-wrapper {
    width: 100%;
    padding: 0 20px;
  }
  .title-container {
    padding: 50px 0 0;
  }
  .subtitle {
    width: 80%;
  }
  .clients-container {
    padding: 50px 20px;
  }
}
</style>