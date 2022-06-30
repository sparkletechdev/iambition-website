<template>
  <main class="contact-us-border">
    <LandingComponent
      :title="$t('contact.landingTitle')"
      :contents="$t('contact.landingContent')"
      :show-arrow="false"
      image="contact-us.jpg"
    >
      <ContactForm />
    </LandingComponent>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-us-border {
  overflow: hidden;
}

::v-deep .splash-content {
  text-align: center;
}
</style>