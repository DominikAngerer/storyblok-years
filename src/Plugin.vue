<template>
  <div class="uk-form-row">
    <select class="uk-width-1-1" v-model="model">
        <option></option>
        <option v-for="year in data.years" v-bind:value="year">{{ year }}</option>
      </select>
  </div>
</template>

<script>
  export default {
    plugin: 'years',
    mixins: [window.Storyblok.plugin],
    data: {
      years: []
    },
    methods: {
      initWith: function () {
        return ''
      }
    },
    events: {
      'plugin:created': function () {
        var options = {
          start: 1990,
          end: new Date().getFullYear()
        }
        if (!this.schema.options) {
          console.error('years: Define the following options: 0 : start, 1 : end (default current Year)');

        }
        for (option in this.schema.options) {
          if (options[option.name]) {
            options[option.name] = option.value;
          }
        }
        let years = [];
        for (var i = options.end; i >= options.start; i--) {
          years.push(i);
        }
        this.$set('data.years', years);
      },
      'plugin:destroyed': function () {
      }
    },
    watch: {
      'model': {
        handler: function (value) {
          this.$emit('changed-model', value);
        },
        deep: true
      }
    }
  }

</script>