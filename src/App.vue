<template>
  <div id="app">
    <TheNavbar />
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     color: #333333;
     font-family: 'Montserrat', sans-serif;
   }
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .slide-enter,
  .slide-enter-to {
    opacity: 0;
    transform: translateX(-30%);
  }
  body {
    background: #fafafa;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
  section {
    padding: 55px 12%;
  }

  @media screen and (max-width: 1000px) {
    section {
      padding: 40px 10%;
    }
  }
  @media screen and (max-width: 800px) {
    section {
      padding: 40px 5%;
    }
  }
  @media screen and (max-width: 800px) {
    section {
      padding: 40px 5%;
    }
  }
  @media screen and (max-width: 600px) {
    section {
      padding: 40px 30px;
    }
  }
</style>
<script>
import TheNavbar from "@/components/Navbar/TheNavbar";
export default {
  components: {TheNavbar}
}
</script>
