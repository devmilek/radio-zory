<template>
  <section class="aboutUs" id="o-nas">
    <SectionTitle title="O Radio Żory" />
    <p>Radio Żory – miejsce, instytucja z misją społeczną i edukacyjną, obywatelską, dla mieszkańców od mieszkańców. Przestrzeń gdzie odnajdują się ludzie z pasją, determinacją, otwartością i mający coś do przekazania, czasami informacje, czasami emocje, czasami zainteresowania – chcemy być z Wami i dla Was. Dzięki Wam wyszliśmy poza granice miasta, państwa – oznacza to, że dla nas nie ma granic. Dla nas najważniejsze jest i będzie to, że z nami jesteście i nas słuchacie!</p>
    <div class="row">
      <div class="tile">
        <img src="./assets/instagram.svg" alt="">
        <a href="">@radiozory</a>
      </div>
      <div class="tile">
        <img src="./assets/facebook.svg" alt="">
        <a href="">Radio Żory</a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/Public/SectionTitle";
export default {
  name: "TheAboutUs",
  components: {SectionTitle}
}
</script>

<style scoped>
.aboutUs {
  text-align: center;
  background: white;
}
.aboutUs h1 {
  margin-bottom: 16px;
}
.aboutUs p {
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 40px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.aboutUs .tile {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  font-size: 14px;
}
.tile img {
  margin-right: 8px;
}
@media screen and (max-width: 660px) {
  .aboutUs p {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (max-width: 430px) {
  .aboutUs p {
    font-size: 14px;
    line-height: 22px;
  }
  .aboutUs .tile {
    margin: 0 10px;
  }
}
</style>
