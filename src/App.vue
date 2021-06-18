<template>
  <div class="header">
    <div id="container">
      <News title="Najčítanejšie" />
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/scss/main.scss";

.header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 100%;
  background: $color-bg;
  margin: -1em;
  margin-bottom: -2em;
  padding: 24px;
}

#container {
  max-width: 30%;
  margin: 0em auto;
  font-family: PT Sans, sans-serif;
  background: $color-bg-container;
}

/*media screen*/
@media screen and (max-width: 1070px) {
  #container {
    max-width: 40%;
  }
}
@media screen and (max-width: 820px) {
  #container {
    max-width: 50%;
  }
}
@media screen and (max-width: 650px) {
  #container {
    max-width: 60%;
  }
}
@media screen and (max-width: 522px) {
  #container {
    max-width: 70%;
  }
}
@media screen and (max-width: 450px) {
  #container {
    max-width: 80%;
  }
}
@media screen and (max-width: 400px) {
  #container {
    max-width: 90%;
  }
}
@media screen and (max-width: 360px) {
  #container {
    max-width: 100%;
  }
  .header {
    padding: 20px;
  }
}
</style>

<script>
import News from "@/components/News";

export default {
  components: { News },
};
</script>
