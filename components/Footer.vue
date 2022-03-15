<template>
  <div class="footer-container">
    <div class="footer-border">
      <div class="footer-top-border">
        <div class="footer-top-partners-border">
          <p class="footer-partners">Our Partners</p>
          <span class="footer-partners-line-hidden"></span>
          <div class="footer-partners-icon">
            <fa :icon="['fas', 'apple-alt']" class="partner-icon" />
            <fa :icon="['fas', 'chess-knight']" class="partner-icon" />
            <fa :icon="['fas', 'dice-d20']" class="partner-icon" />
            <fa :icon="['fas', 'dice']" class="partner-icon" />
            <fa :icon="['fas', 'wind']" class="partner-icon" />
          </div>
        </div>
        <div class="footer-top-partners-border">
          <a href="https://www.instagram.com">
            <div class="social-icon">
              <fa :icon="['fab', 'instagram-square']" />
            </div>
          </a>
          <a href="https://zh-tw.facebook.com">
            <div class="social-icon">
              <fa :icon="['fab', 'facebook-square']" />
            </div>
          </a>
          <a href="https://twitter.com">
            <div class="social-icon">
              <fa :icon="['fab', 'twitter-square']" />
            </div>
          </a>
          <a href="https://tw.linkedin.com">
            <div class="social-icon">
              <fa :icon="['fab', 'linkedin']" />
            </div>
          </a>
          <a href="https://www.youtube.com">
            <div class="social-icon">
              <fa :icon="['fab', 'youtube-square']" />
            </div>
          </a>
        </div>
      </div>
      <!-- <span class="footerspan"></span> -->
      <div class="footer-bottom-border">
        <div class="footer-bottom-privacy-border">
          <p class="company-privacy">© 2022 iAmbition Technology Pte. Ltd.</p>
          <!-- <nuxt-link to="/privacy" class="privacy-link">
            Privacy Policy
          </nuxt-link> -->
        </div>
        <div class="footer-bottom-location">
          <p class="location">Singapore | Taiwan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.location {
  color: white;
  font-size: 0.8rem;
}

.footer-container {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 2rem 0;
}
.footer-container .footer-border {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  width: 1140px;
}
.footer-border .footer-top-border {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 0.4px solid #c9c9c9;
}
.footer-top-border .footer-top-partners-border {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-partners {
  font-size: 16px;
  color: white;
  font-weight: 400;
  margin-right: 25px;
  opacity: 0.85;
}
.partner-icon {
  color: white;
  font-size: 2rem;
  margin-right: 32px;
}
.social-icon {
  color: white;
  font-size: 1.5rem;
  margin-left: 18px;
}
.social-icon :hover {
  color: #0cf;
}
.footer-container .footer-bottom-border {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.footer-bottom-border .footer-bottom-privacy-border {
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.company-privacy {
  color: white;
  opacity: 0.85;
  font-size: 0.8rem;
}
.privacy-link {
  color: white;
}
@media screen and (max-width: 1300px) {
  .footer-container .footer-border {
    width: 900px;
  }
}
@media screen and (max-width: 992px) {
  .footer-container .footer-border {
    width: 700px;
  }
  .footer-border .footer-top-border {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .footer-top-border .footer-top-partners-border {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  }
}
@media screen and (max-width: 786px) {
  .footer-container .footer-border {
    width: 100%;
  }
  .footer-border .footer-top-border {
    border-bottom: none;
  }
  .footer-container .footer-bottom-border {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .footer-bottom-border .footer-bottom-privacy-border {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 576px) {
  .footer-top-border .footer-top-partners-border {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer-partners {
    margin-bottom: 20px;
  }
  .partner-icon {
    margin: 0 10px;
  }
}
@media screen and (max-width: 414px) {
  .updatemail {
    width: 260px;
  }
  .updatebutton {
    width: 90px;
    font-size: 1rem;
    height: 50px;
  }
}
</style>