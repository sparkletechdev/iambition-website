<template>
  <div class="customerintroduceborder">
    <div class="customercontain">
      <div v-for="(item, index) in data" :key="index" class="customercompany">
        <div class="customercompanylogo">
          {{ item.logo }}
        </div>
        <div class="customercompanyimformation">
          <h1 class="customercompanyclient">Client: {{ item.client }}</h1>
          <h3 class="customercompanycountry">Country: {{ item.country }}</h3>
          <h3 class="customercompanyindustry">Industry: {{ item.industry }}</h3>
          <p class="customercompanycontent">
            {{ item.content }}
          </p>
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
          logo: 'JLT',
          client: 'JLT',
          country: 'Malaysia',
          industry: 'Insurance',
          content: `A targeted audience is key to an effective sales and marketing campaign. To increase the sales of indemnity insurance, Tuple created an on-demand API to collect data of the doctors from directed sources in Malaysia.\n We built a model based on the propensity score of 60,000 leads and narrowed down the target base to 8%. We ran a digital marketing campaign on this 8% database that resulted in a 300% increase in market share.`,
        },
        {
          logo: 'GCOX',
          client: 'GCOX',
          country: 'Singapore',
          industry: 'Finance / Blockchain',
          content: `Tuple improved the brand awareness of GCOX by analyzing their website traffic, keyword data, and monitoring online sentiments to revamp the PR strategies to run multiple campaigns programmatically. This has improved the site’s ranking by 136%, improved performance from 64% to 96% and maintained a cost acquisition threshold of $0.5 per lead.`,
        },
        {
          logo: 'Jebsen & Jessen',
          client: 'Jebsen & Jessen',
          country: 'Singapore',
          industry: 'Manufacturing',
          content: `To enable J&J in understanding their customer behaviour better, Tuple created a 360-degree view of their customers with the help of AI and Machine Learning based models. 93% of J&J’s clients with additional spending power were identified and 8% of disengaged customers were reactivated with churn prediction models.`,
        },
        {
          logo: 'Singapore Tourism Board',
          client: 'Singapore Tourism Board',
          country: 'Singapore',
          industry: 'Hospitality',
          content: `To save concierge’s workload in providing personalised recommendations to guests/visitors, Tuple developed a mobile app for tourists with an end user dashboard integrated to hotel’s backend. We saved manpower by 2.2 man-hours a day. We also helped the marketing department to understand their customers need, their interests and choices. By this, we were able to improve guest review ratings on Online Travel Agent sites.`,
        },
        {
          logo: 'Lapp Korea LLC',
          client: 'Lapp Korea LLC',
          country: 'South Korea',
          industry: 'Manufacturing',
          content: `Finding Qualified Sales Leads was a huge problem for Lapp-the global leader of cable manufacturing in the Korean market. Tuple helped them in understanding existing customers’ profile and collecting comprehensive information of businesses that would essentially require Lapp’s products and solutions. A 5% increase in customer growth was witnessed at the time of project completion after 6 months.`,
        },
      ],
    }
  },
  mounted() {
    this.customerscroll()
  },
  methods: {
    customerscroll() {
      window.addEventListener('scroll', function () {
        const customercompany = document.querySelectorAll('.customercompany')
        customercompany.forEach((i) => {
          if (i.offsetTop - scrollY > 650 && i.offsetTop - scrollY < 850) {
            i.classList.add('customercompanyactive')
            // console.log(i.offsetTop - scrollY);
          }
        })
      })
    },
  },
}
</script>

<style>
.customerintroduceborder {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
}
.customercontain {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 1140px;
}
.customercompany {
  border: 1px solid #c7c7c7;
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 50%);
  display: flex;
  justify-content: space-around;
  margin: 35px 0 15px 0;
  border-radius: 15px;
  padding: 35px;
  transition: all 0.6s ease-in-out;
  transform: translateY(100px);
  opacity: 0;
}
.customercompanylogo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}
.customercompanyimformation {
  width: 720px;
  display: flex;
  flex-direction: column;
}
.customercompanyclient {
  font-size: 1.8rem;
  font-weight: bolder;
  padding: 0 0 15px;
}
.customercompanycountry {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
}
.customercompanyindustry {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  padding: 0 0 25px;
}
.customercompanycontent {
  line-height: 1.5;
  font-weight: 400;
}
.customercompanyactive {
  transform: translateY(0);
  opacity: 1;
}
@media screen and (max-width: 1200px) {
  .customercontain {
    width: 750px;
  }
  .customercompanyimformation {
    width: 60%;
  }
}
@media screen and (max-width: 768px) {
  .customercontain {
    width: 450px;
  }
  .customercompanyimformation {
    width: 100%;
  }
  .customercompanylogo {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .customercontain {
    width: 350px;
  }
}
</style>