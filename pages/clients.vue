<template>
  <main class="customers-part-border">
    <!-- <CustomerPart /> -->
    <LandingComponent
      :title="$t('clients.landingTitle')"
      :contents="$t('clients.landingContent')"
      image="client.jpg"
    >
      <!-- <div
        v-for="(client, i) in $t('clients.data')"
        :key="i"
        class="client-links"
      >
        <a :href="`/clients/#${client.id}`">{{ client.clientName }}</a>
      </div> -->
    </LandingComponent>
    <ClientComponent
      v-for="(client, i) in $t('clients.data')"
      :key="i"
      :client="client"
    />
    <!-- <div v-for="(client, i) in $t('clients.data')" :key="i">
      {{ client.clientName }}
    </div> -->
    <!-- <CustomerIntroducePart /> -->
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.customers-part-border {
  width: 100%;
  position: relative;
  padding: 0 0 4rem;
}

::v-deep .landing-container {
  background-position: 50%;
}
</style>
