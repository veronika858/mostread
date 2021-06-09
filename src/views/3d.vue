<template>
  <div class="3d">
    <div v-if="loading" class="loading loader">
    </div>

    <div v-if="error" class="error">
      {{ errorMessage }}
    </div>

    <div v-if="post" class="card">
      <ol class="card__list">
        <li class="card__item" v-for="newsItem in newsItems" :key="newsItem.title">
          <a href="{{newsItem.url}}">{{ newsItem.title }}</a></li>
      </ol>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "3d",
  components: {},
  props: [],
  data() {
    return {
      newsItems: null,
      errorMessage: null,
      post: null,
      loading: false,
      error: null
    };
  },
  created() {

    /*if (localStorage["dataItems"]) {
      console.log('true', localStorage["dataItems"]);
      this.newsItems = localStorage["dataItems"];
      this.error = false;
      this.loading = false;
      this.post = true;
    } else */
      this.fetchData();

  },

  methods: {

    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      fetch('https://public-api.aktuality.sk/articles/mostread/aktuality/?days=3&limit=8')
          .then(async response => {
            const data = await response.json();
            // data.map(val => {val = data; console.log(val)});
            console.log(data.items[0].title);
            const n = localStorage["dataItems"] = data.items;
            console.log('localstorage', n);
            this.loading = false;

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response statusText
              const error = (data && data.message) || response.statusText;
              this.errorMessage = error;
              this.error = true;
              return Promise.reject(error);
            }
            this.post = true;
            return this.newsItems = n;


          })
          .catch(error => {
            this.errorMessage = error;
            this.error = error;
            console.error("There was an error!", error);
          });
    }
  },


};
</script>

<style lang="scss">
@import "~@/scss/main.scss";


</style>
