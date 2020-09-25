<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <!-- component is destroyed and recreated new each time -->
        <component :is="selectedComponent">
          <h1 slot="title">{{ quoteTitle }}</h1>
          <p>A wonderful quote</p>
        </component>
        <!-- component not destroyed anymore -->
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="title">{{ quoteTitle }}</h1>
            <p>A wonderful quote</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote",
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  },
};
</script>

<style>
</style>
