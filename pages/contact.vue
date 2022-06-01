<template>
  <main class="contact-us-border">
    <LandingComponent
      :title="$t('contact.landingTitle')"
      :contents="$t('contact.landingContent')"
      image="contact-us.jpg"
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
</style>