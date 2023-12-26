import { data } from '../../../data';
import { RESET, REMOVE, CLEAR } from './actions';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case REMOVE:
      const newPeople = state.people.filter(
        (person) => person.id !== payload.id
      );
      return { ...state, people: newPeople };
    case CLEAR:
      return { ...state, people: [] };
    case RESET:
      return { ...state, people: data };
    default:
      return console.log('Wrong action!!!');
  }
};

export default reducer;
