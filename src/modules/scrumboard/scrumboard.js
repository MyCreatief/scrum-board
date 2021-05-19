import card from './../card/card.vue';
import toolbar from './../toolbar/toolbar.vue';

export default {
  name: 'scrumboard',
  components: {
    card,
    toolbar
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  }
}