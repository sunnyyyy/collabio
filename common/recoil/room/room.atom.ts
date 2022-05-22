import { atom } from 'recoil';

export const roomAtom = atom<ClientRoom>({
  key: 'room',
  default: {
    id: '',
    users: new Map(),
    movesWithoutUser: [],
    myMoves: [],
  },
});
