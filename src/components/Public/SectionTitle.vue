<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name: "SectionTitle",
  props: [
      'title'
  ]
}
</script>

<style scoped>
  h1 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 26px;
      margin-bottom: 36px;
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 22px;
      margin-bottom: 30px;
    }
  }
</style>
