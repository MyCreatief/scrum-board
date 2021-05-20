export default {
  ADD_CARD: (state, payload) => {
    state.cards = [ ...state.cards, {
      'content': payload.content,
      'color': payload.color,
      'positionx': 0,
      'positiony': 0,
      'dragging': false
    } ]
  },
  DELETE_CARD: (state, payload) => {
    state.cards.splice(payload, 1);
  },
  MOVE_CARD: (state, payload) => {

    let newX = payload.oldPositionX - payload.moveX;
    let newY = payload.oldPositionY - payload.moveY;

    state.cards[payload.current].positionx = newX;
    state.cards[payload.current].positiony = newY;
  },
  SET_CARD_ACTIVE: (state, payload) => {
    state.cards[payload].dragging = true;
  },
  SET_CARD_UNACTIVE: (state, payload) => {
    state.cards[payload].dragging = false;
  },
  UPDATE_CONTENT: (state, payload) => {
    state.cards[payload.id].content = payload.submittedContent;
  }
}