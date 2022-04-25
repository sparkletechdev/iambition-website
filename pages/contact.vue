<template>
  <main class="contact-us-border">
    <LandingComponent
      :title="$t('contact.landingTitle')"
      :contents="$t('contact.landingContent')"
    >
      <ContactForm
    /></LandingComponent>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-us-border {
  overflow: hidden;
}

::v-deep .landing-container {
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/contact-us.jpg');
}
</style>