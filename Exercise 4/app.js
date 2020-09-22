new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    borderclass: 'blueborder',
    tallBool: false,
    wideBool: false,
    myStyle: {
      backgroundColor: 'black',
      height: '100px',
      width: '100px'
    },
    progressBar: {
      width: '0px',
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000)
    },
    startProgress: function () {
      var vm = this;
      var width = 0;
      setInterval(function () {
        width += 2;
        vm.progressBar.width = width + 'px';
      }, 100)
    }
  },

});
