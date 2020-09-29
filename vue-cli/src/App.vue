<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <input v-model="filterText" />
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">
            {{ fruit }}
          </li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  data() {
    return {
      text: "Hello world",
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: "",
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  // use computed properties instead of filters for complicated ones becaues they are more performant
  // can replace with mixin
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
  components: {
    appList: List,
  },
};
</script>

<style lang="scss">
</style>
