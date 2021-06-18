<template>
  <div class="time-tile">
    {{ time }}
  </div>
</template>

<script>
export default {
  name: "TimeTableTimeTile",
  props: [
      'time',
  ]
}
</script>

<style scoped>
  .time-tile {
    padding: 0px 20px;
    height: 100%;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 580px) {
    .time-tile {
      font-size: 14px;
    }
  }
</style>
