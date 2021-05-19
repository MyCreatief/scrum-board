export default {
  ADD_CARD: (state, payload) => {
    const newCard = {
      'content': payload.content,
      'color': payload.color
    }

    state.cards.unshift(newCard);
  },
  DELETE_CARD: (state, payload) => {
    const index = state.cards.findIndex(card => card.id === payload);
    state.cards.splice(index, 1);
  }
}