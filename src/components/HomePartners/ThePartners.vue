<template>
  <section class="partners">
    <img src="./assets/bibl.png" alt="">
    <img src="./assets/kino.png" alt="">
    <img src="./assets/miarka.png" alt="">
    <img src="./assets/mok.png" alt="">
    <img src="./assets/muzeum.png" alt="">
  </section>
</template>

<script>
export default {
  name: "ThePartners"
}
</script>

<style scoped>
  .partners {
    display: flex;
    justify-content: space-between;
    padding-top: 28px;
    padding-bottom: 28px;
  }
  .partners img {
    height: 80px;
  }
  @media screen and (max-width: 750px) {
    .partners img {
      height: 60px;
    }
  }
  @media screen and (max-width: 600px) {
    .partners {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: space-between;
      align-items: center;
      justify-items: center;
      grid-row-gap: 30px;
    }
    .partners img {
      width: 100%;
      object-fit: scale-down;
    }
  }
</style>
