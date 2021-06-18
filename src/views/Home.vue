<template>
  <div class="home">
    <TheHero />
    <ThePartners />
    <TheTimetable />
    <TheAudycje />
    <TheArchiwum />
    <TheWiadomosci />
    <TheAboutUs />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src

import TheHero from "@/components/HomeHero/TheHero";
import ThePartners from "@/components/HomePartners/ThePartners";
import TheTimetable from "@/components/HomeTimetable/TheTimetable";
import TheAudycje from "@/components/HomeAudycje/TheAudycje";
import TheArchiwum from "@/components/HomeArchiwum/TheArchiwum";
import TheWiadomosci from "@/components/HomeWiadomosci/TheWiadomosci";
import TheAboutUs from "@/components/HomeAboutUs/TheAboutUs";
import TheFooter from "@/components/Footer/TheFooter";
export default {
  name: 'Home',
  components: {
    TheFooter,
    TheAboutUs,
    TheWiadomosci,
    TheArchiwum,
    TheAudycje,
    TheTimetable,
    ThePartners,
    TheHero
  }
}
</script>
