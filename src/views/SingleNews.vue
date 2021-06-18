<template>
  <div class="single-news">
    <TheNavbar />
    <section class="main">
      <div class="left">
        <h1>{{ wiadomosc.title }}</h1>
        <div class="row">
          <p>Autor: {{wiadomosc.autor}}</p>
          <p>{{wiadomosc.date}}</p>
        </div>
        <p v-html="wiadomosc.content"></p>
      </div>
      <img class="coverImg" :src="wiadomosc.coverImage.url" alt="">
    </section>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/Navbar/TheNavbar";
import gql from "graphql-tag";
import TheFooter from "@/components/Footer/TheFooter";
export default {
  name: "SingleNews",
  components: {TheFooter, TheNavbar},
  data() {
    return {
      slug: this.$route.params.slug,
      wiadomosc: {
        coverImage: {}
      },
    }
  },
  apollo: {
    wiadomosc: {
      query: gql`
      query wiadomoscQuery($slugPing: String!) {
        wiadomosc(where: {slug: $slugPing}) {
          id
          autor
          content
          coverImage {
            url
          }
          date
          title
        }
      }`,
      variables () {
        return {
          slugPing: this.slug,
        }
      },
    },
  }
}
</script>

<style scoped>
  section.main {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 40px;
    padding-top: 120px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .row p {
    color: rgba(0, 0, 0, 0.4);
  }
  section p {
    font-size: 16px;
    line-height: 20px;
  }
  section .coverImg {
    width: 100%;
    position: sticky;
    top: 100px;
  }
  @media screen and (max-width: 750px) {
    .row p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 680px) {
    section.main {
      grid-template-columns: 1fr;
      grid-row-gap: 30px;
    }
  }
  @media screen and (max-width: 680px) {
    section.main p {
      font-size: 14px;
      line-height: 18px;
    }
  }
</style>
