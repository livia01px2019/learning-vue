<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types.js";

export default {
  computed: {
    //   ... is es6 spread
    // npm install --save-dev babel-preset-stage-2
    // add ["stage-2"] to babel presets
    ...mapGetters({
      counter: types.DOUBLE_COUNTER,
    }),
  },
};
</script>