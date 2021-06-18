<template>
  <section class="footer">
    <h1>Radio Żory</h1>
    <div class="hr"></div>
    <div class="row">
      <p>Radio Żory 2021. Wszelkie Prawa Zastrzeżone</p>
      <div class="container">
        <router-link to="/">Polityka Prywatności</router-link>
         |
        <router-link to="/">Źródła Informacji</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
  .footer {
    background: #1C1C1C;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  h1 {
    color: white;
  }
  p, a {
    font-size: 14px;
    color: white;
  }
  .hr {
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 2px;
    margin-bottom: 16px;
    margin-top: 40px;
  }
  @media screen and (max-width: 760px) {
    .row {
      flex-direction: column;
      align-items: center;
    }
    .container {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 560px) {
    .hr {
      margin-top: 20px;
    }
    p,a {
      font-size: 12px;
    }
  }
</style>
