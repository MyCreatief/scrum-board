export default {
  name: 'toolbar',
  methods: {
    addCard: function() {
      this.content = 'new content...';
      this.color = 'default';
      this.$store.dispatch('addCard', this);
    }
  }
}