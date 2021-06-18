<template>
  <section class="wrapper">
    <ThePlayerBox />
  </section>
</template>

<script>
import ThePlayerBox from "@/components/Player/ThePlayerBox";
export default {
  name: "player",
  components: {ThePlayerBox}
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
