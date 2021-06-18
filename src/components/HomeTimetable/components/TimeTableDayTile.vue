<template>
  <div class="day-tile">
    {{ day }}
  </div>
</template>

<script>
export default {
  name: "TimeTableDayTile",
  props: [
      'day'
  ]
}
</script>

<style scoped>
 .day-tile {
   border: 1px solid rgba(0, 0, 0, 0.1);
   font-weight: bold;
   font-size: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 @media screen and (max-width: 650px) {
   .day-tile {
     padding: 16px 10px;
   }
 }
 @media screen and (max-width: 580px) {
   .day-tile {
     font-size: 14px;
   }
 }
</style>
