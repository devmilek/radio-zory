<template>
  <a href="" class="fill-btn">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "FillButton",
  props: [
      'text',
  ]
}
</script>

<style scoped>
  .fill-btn {
    font-size: 14px;
    color: white;
    font-weight: bold;
    background: #D0483E;
    padding: 14px 26px;
    display: inline-block;
  }
  @media screen and (max-width: 600px) {
    .fill-btn {
      padding: 12px 22px;
    }
  }
</style>
