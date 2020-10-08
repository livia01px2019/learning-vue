<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>
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
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER,
    }),
    otherproperty() {
      return 1;
    },
  },
};
</script>