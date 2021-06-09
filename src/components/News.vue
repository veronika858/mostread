<template>
<h3>{{title}}</h3>
</template>

<script>
export default {
  name: "News",
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
@import "~@/scss/main.scss";

</style>