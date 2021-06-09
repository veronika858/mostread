<template>
  <div class="24h">
  <div class="card">
    <div class="card__body">
      <ol class="card__list">
        <li class="card__item" v-for="(newItem) in newsItems" :key="newItem.title">
          <a href="{{newItem.url}}">{{ newItem.title }}</a></li>
      </ol>
    </div>
  </div>
  </div>
</template>


<script>
export default {
  name: "24h",
  props: {},
  data() {
    return {
      newsItems: null,
      errorMessage: null,
      post: null
    };
  },
  mounted() {
    fetch('https://public-api.aktuality.sk/articles/mostread/aktuality/?days=1&limit=8')
        .then(async response => {
          const data = await response.json();
          console.log(data.items[0].title);

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

          return this.newsItems = data.items;

        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
  },


  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/scss/main.scss";

.card {
  @include clearfix;

  &__list {
    float: left;
    text-align: left;

  }

  &__item {
    float: left;
    text-align: left;
    padding: 0.5em;
    letter-spacing: em(0.3);

  }

  &__item:first-child {
    padding: 0em 0.5em;
  }
}

ul, ol {
  padding: 0 em(21);
  background: $color-bg;

}

ol li {
  font-weight: bold;
  font-size: 1.17em;
}

li > * {
  font-weight: normal;
  font-size: 1em;
}

a {
  color: $color-black;
  text-decoration: none;
}

//loading
.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #51484f; /* Grey */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 80% auto;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>