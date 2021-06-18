<template>
  <section class="audycje" id="audycje">
    <SectionTitle title="Audycje" />
    <div class="grid-container">
      <AudycjaCard
          :key="audycja.id"
          v-for="audycja in listaAudycjis"
          :title="audycja.nazwa"
          :desc="audycja.opis"
          :image-url="audycja.coverImage.url"
          :slug="audycja.slug"
      />
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/Public/SectionTitle";
import AudycjaCard from "@/components/HomeAudycje/components/AudycjaCard";
import gql from "graphql-tag";
export default {
  name: "TheAudycje",
  components: {AudycjaCard, SectionTitle},
  apollo: {
    listaAudycjis: gql`query {
      listaAudycjis {
        id
        coverImage {
          url
        }
        nazwa
        opis
        slug
      }
    }`
  }
}
</script>

<style scoped>
  .audycje {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 30px;
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
