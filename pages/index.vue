<template>
  <main class="index-container">
    <MajorPart />
    <ProductionPart />
    <Slider />
    <SliderOne />
    <UpdatePart />
  </main>
</template>

<script>
export default {}
</script>
<style>
.hooper-indicator {
  margin: 0 6px;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: none;
  background-color: #fff;
  cursor: pointer;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #0cf;
}
.hooper-next,
.hooper-prev {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 2rem;
  border: none;
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.hooper-next {
  right: 8px;
}
.hooper-prev {
  left: 8px;
}
.hooper-next:hover,
.hooper-prev:hover {
  background-color: rgba(0, 204, 255, 0.4);
}
</style>