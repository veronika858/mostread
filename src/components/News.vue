<template>
  <div class="news">
    <h3>{{ title }}</h3>
    <div id="nav">
      <ul>
        <li>
          <a
            v-on:click="Chosen('24h')"
            @click="selected = 1"
            :class="{ active: selected === 1 }"
          >
            24h
          </a>
          /
        </li>
        <li>
          <a
            v-on:click="Chosen('3d')"
            @click="selected = 2"
            :class="{ active: selected === 2 }"
          >
            3d
          </a>
          /
        </li>
        <li>
          <a
            v-on:click="Chosen('7d')"
            @click="selected = 3"
            :class="{ active: selected === 3 }"
          >
            7d
          </a>
        </li>
      </ul>
    </div>
    <div v-if="loading" class="loading loader"></div>
    <div class="3d">
      <div v-if="post" class="card">
        <div class="card__body">
          <ol class="card__list">
            <li
              class="card__item"
              v-for="newItem in newsItems"
              :key="newItem.title"
            >
              <a :href="newItem.url">{{ newItem.title }}</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  components: {},
  props: {
    title: String,
  },
  data() {
    return {
      newsItems: null,
      errorMessage: null,
      post: false,
      loading: false,
      error: false,
      selected: 1,
    };
  },
  created() {
    this.loading = true;
    this.selected = 1;
    this.$store.commit("setChoice", "24h");
    this.$store
      .dispatch("fetchData")
      .then((items) => {
        return (this.newsItems = items);
      })
      .finally(() => {
        this.loading = false;
        this.post = true;
      });
  },
  methods: {
    Chosen(selection) {
      this.loading = true;
      this.selected = selection === "24h" ? 1 : selection === "3d" ? 2 : 3;
      this.$store.commit("setChoice", selection);
      this.$store
        .dispatch("fetchData")
        .then((items) => {
          return (this.newsItems = items);
        })
        .finally(() => {
          this.loading = false;
          this.post = true;
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/scss/main.scss";

#nav {
  cursor: pointer;
  font-size: 1.17em;
  display: inline-block;
  float: right;

  ul {
    background: none;
    margin-top: 0;
  }
  li {
    display: inline-block;
  }
  a {
    font-weight: bold;
    color: $color-grey;
    padding: 0 0.3em;
    text-decoration: underline;

    &.active {
      color: $color-title;
      text-decoration: none;
    }
  }
}

.news {
  padding: 2em 0.5em;
}

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
  &__item a:hover {
    text-decoration: underline;
  }

  &__item:first-child {
    padding: 0em 0.5em;
  }
}
ul,
ol {
  padding: 0 0 0 1.5em;
  margin: 0.5em 0em;
  /*background: $color-bg;*/
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

/*loading*/
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
