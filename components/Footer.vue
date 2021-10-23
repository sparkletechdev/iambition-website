<template>
  <div class="footercontainer">
    <div class="footerborder">
      <div class="footertopborder">
        <div class="footertoppartnersborder">
          <p class="footerpartners">
            Our Partners
          </p>
          <span class="footerpartnerslinehidden"></span>
          <div class="footerpartnersicon">
            <fa :icon="['fas', 'apple-alt']" class="colorblue"/>
            <fa :icon="['fas', 'chess-knight']" class="colorblue" />
            <fa :icon="['fas', 'dice-d20']" class="colorblue" />
            <fa :icon="['fas', 'dice']" class="colorblue" />
            <fa :icon="['fas', 'wind']" class="colorblue" />
          </div>
        </div>
        <div class="footertoplinksborder">
          <a href="https://www.instagram.com" class="footerlinks">
            <fa :icon="['fab', 'instagram-square']" class="colorbluesmall" />
          </a>
          <a href="https://zh-tw.facebook.com" class="footerlinks">
            <fa :icon="['fab', 'facebook-square']" class="colorbluesmall" />
          </a>
          <a href="https://twitter.com" class="footerlinks">
            <fa :icon="['fab', 'twitter-square']" class="colorbluesmall" />
          </a>
          <a href="https://tw.linkedin.com" class="footerlinks">
            <fa :icon="['fab', 'linkedin']" class="colorbluesmall" />
          </a>
          <a href="https://www.youtube.com" class="footerlinks">
            <fa :icon="['fab', 'youtube-square']" class="colorbluesmall" />
          </a>
        </div>
      </div>
      <!-- <span class="footerspan"></span> -->
      <div class="fotterbottomborder">
        <div class="footerbottomprivacyborder">
          <p class="companyprivacy">
            © 2022 Sparkle Technology Pte. Ltd.
          </p>
          <!-- <nuxt-link to="/privacy" class="privacylink">
            Privacy Policy
          </nuxt-link> -->
        </div>
        <div class="footerbottomlocation">
          <p class="location">
            Singapore | Taiwan
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .footercontainer{
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footercontainer .footerborder{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1140px;
    width: 1140px;
  }
  .footerborder .footertopborder{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: .4px solid #c9c9c9 ;
  }
  .footertopborder .footertoppartnersborder{
    display: flex;
    align-items: center;
  }
  .footerpartners{
    font-size: 16px;
    color: #212529;
    font-weight: 400;
    margin-right: 25px;
    opacity: .85;
  }
  .colorblue{
    color: #1868A4;
    font-size: 2.6rem;
    margin-right: 32px;
  }
  .colorbluesmall{
    color: #1868A4;
    font-size: 1.8rem;
    margin-left: 18px;
  }
  .footercontainer .fotterbottomborder{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .fotterbottomborder .footerbottomprivacyborder{
    width: 40%;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
  }
  .companyprivacy{
    color: #212529;
    opacity: .85;
  }
  .privacylink{
    color: #1868A4;
  }
</style>