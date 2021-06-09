<template>
  <div class="container">

    <News title="Najčítanejšie"/>
    <div id="nav">
      <router-link to="/">24h</router-link>
      /
      <router-link to="/3d">3d</router-link>
      /
      <router-link to="/7d">7d</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style scoped lang="scss">
@import "~@/scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 100%;
}
.container {
  max-width: 25%; //use column width is max 25% of page width, tested 1440px
  margin: 1em auto;
  font-family: PT Sans, sans-serif;
}

#nav {
  cursor: pointer;
  font-size: 1.17em;
  display: block;
  float: right;
  a {
    font-weight: bold;
    color: $color-grey;
    text-decoration: underline;

    &.router-link-exact-active {
      color: $color-title;
      text-decoration: none;
    }
  }

}
</style>

<script>
import News from "@/components/News";


export default {
  components: {News}

}
</script>