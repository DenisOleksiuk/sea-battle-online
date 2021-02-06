interface GameState {
  player0: object;
}

const state: GameState = {
  player0: {
    ships: [{
      location: [],
      hits: [],
    }],
  },
};

export default state;
