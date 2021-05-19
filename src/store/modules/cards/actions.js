export default {
  addCard: (context, payload) => {
    context.commit("ADD_CARD", payload)
  },
}