import card from './../card/card.vue';
import toolbar from './../toolbar/toolbar.vue';

export default {
  name: 'scrumboard',
  components: {
    card,
    toolbar
  },
  data() {
    return {
      mouseTouchPositionX: 0,
      mouseTouchPositionY: 0,
      oldPositionX: 0,
      oldPositionY: 0,
      targetId: false
    }
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    }
  },
  methods: {
    mouseDown: function (mouseTouchPositionX, mouseTouchPositionY, oldPositionX, oldPositionY, currentId) {
      this.mouseTouchPositionX = mouseTouchPositionX;
      this.mouseTouchPositionY = mouseTouchPositionY;
      this.oldPositionX = oldPositionX;
      this.oldPositionY = oldPositionY;
      this.targetId = currentId;
    },
    doDrag: function (event) {
      if( this.targetId !== false ) {
        let current = this.targetId;

        let oldPositionX = this.oldPositionX;
        let oldPositionY = this.oldPositionY;

        let moveX = this.mouseTouchPositionX - event.clientX;
        let moveY = this.mouseTouchPositionY - event.clientY;

        this.$store.dispatch("moveCard", {moveX, moveY, current, oldPositionX, oldPositionY});
      }
    },
    stopDrag() {
      if( this.targetId !== false ) {
        let current = this.targetId;
        this.$store.dispatch("dropCard", current);
        this.targetId = false;
      }
    }
  },
  mounted() {
    window.addEventListener('mouseup', this.stopDrag);
  }
}