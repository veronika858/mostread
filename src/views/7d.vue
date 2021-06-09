<template>
  <div class="7d">
    <div v-if="loading" class="loading loader">
    </div>

    <div v-if="error" class="error">
      {{ errorMessage }}
    </div>

    <div v-if="post" class="card">
      <ol class="card__list">
        <li class="card__item" v-for="(newsItem) in newsItems" :key="newsItem.title">
          <a href="{{newsItem.url}}">{{ newsItem.title }}</a></li>
      </ol>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "7d",
  components: {},
  props: [],
  data() {
    return {
      newsItems: null,
      errorMessage: null,
      post: false,
      loading: false,
      error: false
    };
  },
  mounted() {
    this.loading = true;
    axios
        .get('https://public-api.aktuality.sk/articles/mostread/aktuality/?days=7&limit=8')
        .then(response => {
          const data = response.data;
          this.newsItems = data.items;
        })
        .catch(error => {
          console.log(error);
          this.error = true;
          this.errorMessage = error;
        })
        .finally(() => {
          this.loading = false;
          this.post = true;
        });
  }

}
</script>

<style scoped lang="scss">
@import "~@/scss/main.scss";

</style>
