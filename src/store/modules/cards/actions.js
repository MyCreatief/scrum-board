export default {
  addCard: (context, payload) => {
    context.commit("ADD_CARD", payload)
  },
  deleteCard: (context, payload) => {
    context.commit("DELETE_CARD", payload)
  },
  moveCard: (context, payload) => {
    context.commit("MOVE_CARD", payload)
  },
  setCardToActive: (context, payload) => {
    context.commit("SET_CARD_ACTIVE", payload)
  },
  dropCard: (context, payload) => {
    context.commit("SET_CARD_UNACTIVE", payload)
  }
}