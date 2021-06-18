<template>
  <div class="name-tile">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "TimeTableNameTIle",
  props: [
      'name'
  ]
}
</script>

<style scoped>
  .name-tile {
    font-size: 16px;
    padding: 18px 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  @media screen and (max-width: 580px) {
    .name-tile {
      font-size: 14px;
      padding: 12px;
    }
  }
  @media screen and (max-width: 400px) {
    .name-tile {
      font-size: 12px;
      padding: 12px;
    }
  }
</style>
