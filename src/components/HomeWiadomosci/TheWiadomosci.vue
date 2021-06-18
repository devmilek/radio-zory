<template>
  <section class="wiadomosci" id="wiadomosci">
    <SectionTitle title="Wiadomości" />
    <div class="grid-container">
      <WiadomosciCard
          :key="wiadomosc.id"
          v-for="wiadomosc in wiadomosci"
          :title="wiadomosc.title"
          :desc="wiadomosc.desc"
          :image-url="wiadomosc.coverImage.url"
          :slug="wiadomosc.slug"
          :date="wiadomosc.date"
      />
    </div>
    <FillButton text="Wyświetl więcej" />
  </section>
</template>

<script>
import SectionTitle from "@/components/Public/SectionTitle";
import WiadomosciCard from "@/components/HomeWiadomosci/components/WiadomosciCard";
import gql from "graphql-tag";
import FillButton from "@/components/Public/FillButton";
export default {
  name: "TheWiadomosci",
  components: {FillButton, WiadomosciCard, SectionTitle},
  apollo: {
    wiadomosci: gql`query {
      wiadomosci {
        id
        coverImage {
          url
        }
        title
        date
        desc
        slug
      }
    }`
  }
}
</script>

<style scoped>
.wiadomosci {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  margin-bottom: 40px;
}
@media screen and (max-width: 1100px) {
  .grid-container {
    grid-column-gap: 22px;
  }
}
@media screen and (max-width: 940px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 530px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
