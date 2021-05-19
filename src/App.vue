<template>
    <div id="app">
        <scrum-board></scrum-board>
    </div>
</template>

<script>
    import scrumBoard from './modules/scrumboard/scrumboard.vue';

    export default {
      name: 'scrumboard',
      components: {
        scrumBoard
      }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style/global.scss"></style>
