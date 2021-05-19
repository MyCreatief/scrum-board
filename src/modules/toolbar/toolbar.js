export default {
  name: 'toolbar',
  methods: {
    addCard: function() {
      this.$store.dispatch('addCard', this);
      this.content = 'new content';
      this.color = 'default';
    }
  }
}