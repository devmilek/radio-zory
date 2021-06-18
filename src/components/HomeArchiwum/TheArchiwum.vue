<template>
  <section class="archiwum" id="archiwum">
    <SectionTitle title="Archiwum" />
    <p>W naszym archiwum znajdują się wywiady przeprowadzone w ramach naszych audycji oraz pełny zapis audycji tematycznych. Materiały w archiwum zostały umieszczone w kategoriach, które odpowiadają audycjom prowadzonym w Radio Żory.</p>
    <FillButton text="Przejdź do archiwum" />
  </section>
</template>

<script>
import SectionTitle from "@/components/Public/SectionTitle";
import FillButton from "@/components/Public/FillButton";
export default {
  name: "TheArchiwum",
  components: {FillButton, SectionTitle}
}
</script>

<style scoped>
  .archiwum {
    text-align: center;
    background: white;
  }
  .archiwum h1 {
    margin-bottom: 10px;
  }
  .archiwum p {
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 660px) {
    .archiwum p {
      font-size: 16px;
    }
  }
</style>
