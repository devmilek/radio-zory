<template>
  <div v-html="compiledMarkdown" />
</template>

<script>
import marked from "marked";
export default {
  name: "markdownRender",
  props: [
    'markdown'
  ],
  computed: {
    compiledMarkdown() {
      return marked(this.markdown)
    }
  }
}
</script>

<style scoped>

</style>
