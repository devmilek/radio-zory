<template>
  <div class="tile">
    <TimeTableDayTile :day="day"/>
    <div class="tiles">
      <div class="row" v-for="program in programs" v-bind:key="program.id">
        <TimeTableNameTIle :name="program.nazwaAudycji"  />
        <TimeTableTimeTile :time="program.godzina"/>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import TimeTableDayTile from "@/components/HomeTimetable/components/TimeTableDayTile";
import TimeTableTimeTile from "@/components/HomeTimetable/components/TimeTableTimeTile";
import TimeTableNameTIle from "@/components/HomeTimetable/components/TimeTableNameTile";
export default {
  name: "TimeTableTile",
  components: {TimeTableNameTIle, TimeTableTimeTile, TimeTableDayTile},
  props: {
    day: String,
    name: String,
    time: String,
    programs: Array,
  },
}
</script>

<style scoped>
  .tile {
    display: grid;
    grid-template-columns: 140px 1fr;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 180px;
  }
  @media screen and (max-width: 650px) {
    .tile {
      grid-template-columns: 1fr;
    }
  }
</style>
