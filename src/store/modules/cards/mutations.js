export default {
  ADD_CARD: (state, payload) => {
    state.cards = [ ...state.cards, {
      'content': payload.content,
      'color': payload.color
    } ]
  },
  DELETE_CARD: (state, payload) => {
    state.cards.splice(payload, 1);
  }
}