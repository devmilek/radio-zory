<template>
  <div class="navbar">
    <router-link to="/" >
      <img src="./assets/logo-min.png" alt="" class="logo">
    </router-link>
    <ul class="items">
      <li class="item">
        <a href="#ramowka">Ramówka</a>
      </li>
      <li class="item">
        <a href="#audycje">Audycje</a>
      </li>
      <li class="item">
        <a href="#wiadomosci">Wiadomości</a>
      </li>
      <li class="item">
        <a href="#archiwum">Archiwum</a>
      </li>
      <li class="item">
        <a href="#o-nas">O nas</a>
      </li>
      <li class="item play">
        <router-link to="/sluchaj">Słuchaj Radia</router-link>
      </li>
    </ul>
    <img src="./assets/menu.svg" alt="" class="toggle" v-on:click="navbarToggle">
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  methods: {
    navbarToggle() {
      document.querySelector('.navbar .items').classList.toggle('active');
    }
  }
}
</script>

<style scoped>
  .navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    position: fixed;
    padding: 20px 12%;
    z-index: 10;
  }
  .items {
    list-style-type: none;
    display: flex;
  }
  .item a {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    margin-left: 28px;
  }
  .item.play a {
    font-weight: bold;
    color: #D0483E;
  }
  .toggle {
    height: 26px;
    cursor: pointer;
    display: none;
  }


  @media screen and (max-width: 1140px) {
    .navbar {
      padding: 16px 12%;
    }
    .toggle {
      display: block;
    }
    .items {
      flex-direction: column;
      position: absolute;
      left: 0;
      width: 100%;
      background: white;
      justify-content: center;
      text-align: center;
      padding-bottom: 40px;
      height: 100vh;
      z-index: -1;
      transform: translateX(100%);
      top: 0;
      transition: 0.5s all ease;
    }
    .items.active {
      transform: translateX(0%);
    }
    .item {
      margin: 16px 0;
    }
  }
  @media screen and (max-width: 1000px) {
    .navbar {
      padding: 16px 10%;
    }
  }
  @media screen and (max-width: 800px) {
    .navbar {
      padding: 16px 5%;
    }
  }
  @media screen and (max-width: 800px) {
    .navbar {
      padding: 16px 5%;
    }
  }
  @media screen and (max-width: 600px) {
    .navbar {
      padding: 16px 30px;
    }
  }
</style>
