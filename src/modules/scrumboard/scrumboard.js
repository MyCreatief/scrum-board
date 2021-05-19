import card from './../card/card.vue';

export default {
  name: 'scrumboard',
  components: {
    card
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  }
}