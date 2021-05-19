export default {
  name: 'card',
  props: {
    content: String,
    id: Number
  },
  methods: {
    deleteCard: function(id) {
      this.$store.dispatch("deleteCard", id);
    }
  },
}