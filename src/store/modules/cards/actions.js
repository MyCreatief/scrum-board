export default {
  addCard: (context, payload) => {
    context.commit("ADD_CARD", payload)
  },
  deleteCard: (context, payload) => {
    context.commit("DELETE_CARD", payload)
  }
}