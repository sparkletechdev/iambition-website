<template>
  <div class="contact-us-container">
    <div class="content">
      <div class="left-container">
        <div class="mail-form-container">
          <h3 class="mail-title">{{ $t('contact.formTitle') }}</h3>
          <h5 class="mail-subtitle">{{ $t('contact.formSubtitle') }}</h5>
          <h1
            :class="{
              'send-success': true,
              'send-success-show': show,
            }"
          >
            {{ $t('contact.sendSuccess') }}
          </h1>
          <form
            ref="contactUsForm"
            autocomplete="off"
            :class="{
              'contact-form': true,
              'contact-form-none': show,
            }"
            @submit.prevent="onSubmit"
          >
            <div class="name-inputs-container">
              <div class="name-container">
                <label for="first-name" class="form-label">
                  {{ $t('contact.formFirstName') }}
                </label>
                <input
                  v-model="firstName"
                  name="first-name"
                  class="form-input"
                  type="text"
                  required
                  pattern="[a-zA-Z]{3,}"
                  oninvalid="this.setCustomValidity('Please enter a valid first name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <div class="name-container">
                <label for="last-name" class="form-label">
                  {{ $t('contact.formLastName') }}
                </label>
                <input
                  v-model="lastName"
                  name="last-name"
                  class="form-input"
                  type="text"
                  required
                  pattern="[a-zA-Z]{2,}"
                  oninvalid="this.setCustomValidity('Please enter a valid last name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
            </div>
            <div class="input-container">
              <label for="reply-email" class="form-label">
                {{ $t('contact.formEmail') }}
              </label>
              <input
                v-model="email"
                name="reply-email"
                class="form-input"
                type="email"
                required
                pattern="^\w.+@(.+)$"
                oninvalid="this.setCustomValidity('Please enter a valid email address')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div class="input-container">
              <label for="company" class="form-label">
                {{ $t('contact.formCompany') }}
              </label>
              <input
                v-model="company"
                name="company"
                class="form-input"
                type="text"
                required
              />
            </div>
            <div class="input-container">
              <label for="enquiry-message" class="form-label">
                {{ $t('contact.formMessage') }}
              </label>
              <textarea
                v-model="message"
                name="enquiry-message"
                class="form-input message-text-area"
                rows="5"
                required
              >
              </textarea>
            </div>
            <div class="submit-container">
              <button type="submit" value="Send" class="submit-button">
                {{ $t('contact.formSubmit') }}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="right-container">
        <div class="information-container">
          <h1 class="information-title">
            {{ $t('contact.contactInformation') }}
          </h1>
          <p
            v-for="(content, index) in $t('contact.information')"
            :key="index"
            class="information-content"
          >
            {{ content }}
          </p>
          <div class="social-media-container">
            <!-- <a href="https://www.instagram.com">
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
            </a> -->
            <a href="http://www.linkedin.com/in/科技-雄欣-bb741a243">
              <div class="social-icon">
                <fa :icon="['fab', 'linkedin']" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendForm } from '@emailjs/browser'
export default {
  data() {
    return {
      show: false,
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
    }
  },
  methods: {
    onSubmit(e) {
      if (this.message) {
        const ref = this.$refs
        sendForm(
          'service_sr0rmqz',
          'template-contact-sg',
          ref.contactUsForm,
          'SJgARiRUgNbPJMLhs'
        ).then(
          (result) => {
            this.show = true
            setTimeout(() => {
              this.show = false
              ref.contactUsForm.style.transform = 'translateY(80px)'
            }, 3000)
            setTimeout(() => {
              ref.contactUsForm.style.transform = 'translateY(0px)'
            }, 3050)
            this.message = ''
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.log('FAILED...', error.text)
          }
        )
        // e.preventDefault()

        // fetch("http://localhost:3003/getMailInformation",{
        //   method: 'PUT',
        //   body: JSON.stringify({
        //     mail: reply-email,
        //     firstname: first-name,
        //     lastname: last-name,
        //     company: company,
        //     massage: enquiry-message,
        //   }),
        //   headers: new Headers({
        //     'Content-Type': 'application/json'
        //   })
        // });
      }
    },
  },
}
</script>

<style scoped>
.contact-us-container {
  /* border: 1px solid black; */
  margin: 4rem 8%;
  align-items: center;
}
.content {
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 30%);
  width: 1140px;
  height: 700px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.left-container {
  background: rgba(255, 255, 255, 0.5);
  width: 65%;
}
.mail-form-container {
  padding: 50px 100px 50px 50px;
}
.mail-title {
  color: #273244;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.mail-subtitle {
  color: #273244;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.send-success {
  display: none;
}
.send-success-show {
  display: block;
  text-align: center;
  font-size: 2rem;
  line-height: 10;
  color: #2c75c4;
}
.contact-form {
  padding: 30px 0 0;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease-in-out;
}
.contact-form-none {
  display: none;
}
.name-inputs-container {
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 0.5em;
}
.name-container {
  width: 49%;
  display: flex;
  flex-direction: column;
}
.form-label {
  width: 100%;
  font-size: 14px !important;
  font-weight: lighter;
  color: #273244;
}
.form-input {
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #273244;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #273244;
  border-radius: 0.25rem;
  transition: border-color 0.05s linear, border-width 0.05s linear;
}
.form-input:focus {
  color: #273244;
  background-color: transparent;
  border-color: #369;
  border-width: 2px;
  outline: 0;
}
.message-text-area {
  height: auto;
}
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
}
.submit-container {
  display: flex;
  justify-content: flex-start;
}
.submit-button {
  color: white;
  text-align: center;
  margin-top: 20px;
  padding: 10px 50px;
  border-radius: 30px;
  background: linear-gradient(to right, #145484 50%, #1868a4 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  text-decoration: none;
  font-weight: bold;
}
.submit-button:hover {
  background-position: left bottom;
}
.submit-button:not(:hover) {
  background-position: right bottom;
}
.right-container {
  background: rgba(39, 50, 68, 0.5);
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.information-container {
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-evenly;
  align-items: center;
}
.information-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
}
.information-content {
  color: white;
  align-self: flex-start;
}

.social-media-container {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
}

.social-icon {
  color: white;
  font-size: 2rem;
}

@media screen and (max-width: 1200px) {
  .content {
    display: flex;
    flex-direction: column;
    width: 740px;
    height: auto;
    top: -30%;
  }
  .left-container {
    width: 100%;
  }
  .right-container {
    width: 100%;
    padding: 8% 0;
  }
  .mail-form-container {
    padding: 50px;
  }
}
@media screen and (max-width: 992px) {
  .content {
    width: 480px;
  }
  .right-container {
    padding: 4rem 8% 0;
  }
}
@media screen and (max-width: 576px) {
  .name-inputs-container {
    flex-direction: column;
  }
  .name-container {
    width: 100%;
  }
  .content {
    width: 100%;
    top: -10%;
  }

  .contact-us-container {
    /* border: 1px solid black; */
    margin: 2rem 0;
  }
  .mail-form-container {
    padding: 20px;
  }
  .submit-container {
    justify-content: center;
  }
}
</style>