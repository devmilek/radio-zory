<template>
  <div class="audycja">
    <TheNavbar />
    <section class="wrapper">
      <div class="card">
        <img :src="listaAudycji.coverImage.url" alt="">
        <div class="card-body">
          <h1>{{listaAudycji.nazwa}}</h1>
          <p>{{ listaAudycji.opis }}</p>
          <h2>Dni: <span>{{ listaAudycji.kiedy }}</span></h2>
          <h2>Prowadzący: <span>{{ listaAudycji.prowadzacy }}</span></h2>
          <h2>Czas Trwania: <span>{{ listaAudycji.czasTrwania }}</span></h2>
          <div class="row">
            <router-link class="back" to="/">Wróć</router-link>
            <a href="">Przejdź do archiwum</a>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/Navbar/TheNavbar";
import gql from "graphql-tag";
import TheFooter from "@/components/Footer/TheFooter";
export default {
  name: "Audycja",
  components: {TheFooter, TheNavbar},
  data() {
    return {
      slug: this.$route.params.slug,
      listaAudycji: {
        coverImage: {}
      },
    }
  },
  apollo: {
    listaAudycji: {
      query: gql`
      query listaAudycjis($slugPing: String!) {
        listaAudycji(where: {slug: $slugPing}) {
          id
          nazwa
          opis
          kiedy
          prowadzacy
          czasTrwania
          coverImage {
            url
          }
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
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 110px;
  }
  .card {
    background: white;
    width: 600px;
    overflow: hidden;
    box-shadow: 0 0 23px rgba(51, 51, 51, 0.1);
    border-radius: 18px;
  }
  .card-body {
    padding: 30px 30px;
    text-align: center;
  }
  .card h1 {
    font-weight: bold;
    font-size: 26px;
  }
  .card p {
    font-size: 16px;
    margin-top: 14px;
    margin-bottom: 26px;
    line-height: 140%;
  }
  .card img {
    width: 100%;
  }
  .card h2 {
    font-weight: 600;
    font-size: 16px;
    margin: 8px 0;
  }
  .card h2 span {
    font-weight: normal;
  }
  .card .row {
    padding-top: 26px;
    display: flex;
    justify-content: center;
  }
  .card a {
    color: #D0483E;
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin: 0 16px;
  }
  .card a.back {
    font-weight: normal;
    color: rgba(51, 51, 51, 0.44);
  }
  @media screen and (max-width: 620px) {
    .card h1 {
      font-size: 22px;
    }
    .card p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 540px) {
    .card p {
      margin-bottom: 16px;
    }
    .card h2 {
      font-size: 14px;
    }
    .card a {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 460px) {
    .card h1 {
      font-size: 20px;
    }
    .card p {
      margin-top: 8px;
    }
  }
</style>
