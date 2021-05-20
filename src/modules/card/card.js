export default {
  name: 'card',
  data() {
    return {
      mouseTouchPositionX: 0,
      mouseTouchPositionY: 0,
      oldPositionX: 0,
      oldPositionY: 0
    }
  },
  props: {
    content: String,
    id: Number
  },
  methods: {
    deleteCard: function(id) {
      this.$store.dispatch("deleteCard", id);
    },
    mouseDown: function (id) {
      if (this.$store.getters.getCards[event.target.id]) {
        this.mouseTouchPositionX = event.clientX;
        this.mouseTouchPositionY = event.clientY;
        this.oldPositionX = this.$store.getters.getCards[event.target.id].positionx;
        this.oldPositionY = this.$store.getters.getCards[event.target.id].positiony;

        this.$emit('mouseDown', this.mouseTouchPositionX, this.mouseTouchPositionY, this.oldPositionX, this.oldPositionY, id);

        this.$store.dispatch("setCardToActive", id);
      }
    }
  }
}