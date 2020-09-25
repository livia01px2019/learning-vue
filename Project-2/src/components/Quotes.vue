<template>
  <div>
    <div class="row">
      <new-quote @quoteAdded="addQuote"></new-quote>
    </div>
    <br />
    <div class="row">
      <quote
        v-for="(q, index) in myQuotes"
        :key="index"
        @deleteQuote="myQuotes.splice(index, 1)"
      >
        {{ q }}
      </quote>
    </div>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
import NewQuote from "./NewQuote.vue";

export default {
  data() {
    return {
      myQuotes: [],
    };
  },
  components: {
    quote: Quote,
    newQuote: NewQuote,
  },
  methods: {
    addQuote(quote) {
      if (this.myQuotes.length < 10) {
        this.myQuotes.push(quote);
      } else {
        alert("Too many quotes. Delete some before adding.");
      }
    },
  },
  watch: {
    myQuotes() {
      this.$emit("quotesUpdated", this.myQuotes.length);
    },
  },
};
</script>