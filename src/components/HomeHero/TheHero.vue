<template>
  <div class="hero">
    <div class="content">
      <h1>Radio Żory</h1>
      <p>Radio Żory to miejskie radio internetowe działające pod skrzydłami Miejskiej Biblioteki Publicznej w Żorach.</p>
      <div class="btns">
        <a href="" class="filled">Ramówka</a>
        <a href="" class="second">Słuchaj Radia</a>
      </div>
    </div>
    <img class="hero-img" src="./assets/heroimg.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "TheHero"
}
</script>

<style scoped>
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    padding-left: 12%;
  }
  h1 {
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 6px;
  }
  p {
    color: rgba(51, 51, 51, 0.8);
    font-size: 20px;
    width: 70%;
  }
  .btns {
    display: flex;
    align-items: center;
    margin-top: 38px;
  }
  .filled {
    background: #D0483E;
    color: white;
    padding: 14px 26px;
    margin-right: 38px;
  }
  .second {
    color: #D0483E;
    font-weight: bold;
    font-size: 14px;
  }
  .hero-img {
    width: 45%;
    height: 100vh;
    object-fit: cover;
  }
  @media screen and (max-width: 870px) {
    .hero {
      flex-direction: column;
      /*padding-top: 100px;*/
      justify-content: space-between;
      height: 100vh;
    }
    .hero .content {
      width: 100%;
      height: 50%;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 10%;
      display: flex;
      flex-direction: column;
      padding-top: 70px;
    }
    .btns {
      justify-content: center;
    }
    .hero .content p {
      width: 100%;
      line-height: 24px;
    }
    .hero .hero-img {
      width: 100%;
      height: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
    }
    .filled {
      padding: 10px 20px;
    }
    .btns {
      margin-top: 20px;
    }
  }
</style>
