<template>
  <div class="main-container">
    <div class="content-container">
      <div class="title-container">
        <h1 class="going-title">Where Are We Going?</h1>
        <p class="going-subtitle">
          Tuple is being deployed by organizations across the globe for their
          most critical operations. Businesses are finding their best customers,
          designing the best customer experiences and developing exciting new
          products with Tuple.
        </p>
      </div>
      <div class="items-container">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="g-item-container"
        >
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
          ref="companyGoingClients"
          class="client-box"
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
      if (this.$route.path === '/company/about-us') {
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
      }
    },
  },
}
</script>

<style>
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
.clients-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
}
.clients-content {
  line-height: 1.5;
  font-weight: lighter;
  text-align: center;
}
.client-box {
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
@media screen and (max-width: 1200px) {
  .main-container {
    padding: 4% 15%;
  }
  .going-title {
    font-size: 3rem;
  }
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
  .clients-container {
    margin-top: 5rem;
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