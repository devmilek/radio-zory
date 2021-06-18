<template>
  <div class="card">
    <img :src="imageUrl" alt="">
    <div class="card-body">
      <div>
        <h1>{{ title }}</h1>
        <p>{{desc.substring(0,150) + '...'}}</p>
      </div>
      <router-link :to="{name: 'Audycja', params: {slug: slug}}">Zobacz więcej</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudycjaCard",
  props: [
      'title',
      'desc',
      'imageUrl',
      'slug',
  ]
}
</script>

<style scoped>
  .card {
    box-shadow: 0 0 18px rgba(51, 51, 51, 0.1);
    background: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
  }
  .card-body {
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .card-body h1 {
    font-weight: bold;
    font-size: 20px;
  }
  .card-body p {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .card-body a {
    color: #D0483E;
    font-weight: bold;
    font-size: 16px;
  }
  .card img {
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    .card-body {
      padding: 20px;
    }
  }
  @media screen and (max-width: 610px) {
    .card-body h1 {
      font-size: 18px;
    }
    .card-body p {
      font-size: 14px;
    }
    .card-body a {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1100px) {
    .card-body {
      padding: 20px;
    }
  }
  @media screen and (max-width: 530px) {
    .card-body p {
      margin-bottom: 10px;
    }
    .card-body h1 {
      font-size: 16px;
    }
  }
</style>
