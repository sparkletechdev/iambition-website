<template>
  <main class="about-us-part-border">
    <LandingComponent
      :title="title"
      :contents="contents"
    />
    <CompanyExistPart />
    <CompanyDoingPart />
    <CompanyGoingPart />
    <UpdatePart />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Our History',
      contents: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus
      interdum posuere lorem. Integer eget aliquet nibh praesent tristique magna
      sit amet purus. Metus vulputate eu scelerisque felis imperdiet. Sit amet
      luctus venenatis lectus. Nisi porta lorem mollis aliquam ut porttitor leo
      a diam. Habitasse platea dictumst vestibulum rhoncus. Sagittis eu volutpat
      odio facilisis mauris. Dolor sit amet consectetur adipiscing elit duis
      tristique sollicitudin. Netus et malesuada fames ac turpis egestas sed.`,
        `Nibh ipsum consequat nisl vel. Sed cras ornare arcu dui vivamus. Volutpat
      lacus laoreet non curabitur gravida arcu ac tortor. Lorem mollis aliquam
      ut porttitor leo a diam sollicitudin. Odio ut enim blandit volutpat
      maecenas volutpat. Nisi vitae suscipit tellus mauris a diam maecenas sed
      enim. Enim ut tellus elementum sagittis. Tortor at auctor urna nunc id. Mi
      in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Sagittis
      nisl rhoncus mattis rhoncus urna neque viverra justo nec. Sapien faucibus
      et molestie ac feugiat sed.`,
      ],
    }
  },
}
</script>

<style scoped>
.about-us-part-border {
  overflow: hidden;
}

::v-deep .company-part-container {
  background-image: linear-gradient(rgba(51, 102, 153, 0.75), rgba(39, 50, 68, 1)),
    url('https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/cooperate.jpg');
}
</style>