<template>
  <section class="timetable" id="ramowka">
    <SectionTitle title="Ramówka" />
    <div class="grid-container">
      <TimeTableTile
          v-for="day in days"
          v-bind:key="day.id"
          :day="day.name"
          :programs="day.timeTables"
      />
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import TimeTableTile from "@/components/HomeTimetable/components/TimeTableTile";
import SectionTitle from "@/components/Public/SectionTitle";
export default {
  name: "TheTimetable",
  components: {SectionTitle, TimeTableTile},
  apollo: {
    // Simple query that will update the 'hello' vue property
    days: gql`query {
          days {
            timeTables {
              nazwaAudycji
              id
              godzina
            }
          name
          id
      }
    }`,
  }
}
</script>

<style scoped>
  .timetable {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .timetable h1 {
    /*margin-bottom: 43px;*/
  }
  .grid-container {
    display: grid;
    row-gap: 38px;
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    .grid-container {
      row-gap: 20px;
    }
  }
</style>
