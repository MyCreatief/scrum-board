export default {
  ADD_CARD: (state, payload) => {
    const newCard = {
      'content': payload.content,
      'color': payload.color
    }

    state.cards.unshift(newCard);
  }
}