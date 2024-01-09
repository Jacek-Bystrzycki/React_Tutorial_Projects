import { ReactElement } from 'react';
import { InitState } from '../context/GroceryContext';
import { SingleItem } from './SingleItem';

type ComponentProps = {
  state: InitState[];
};

const ItemsList = ({ state }: ComponentProps): ReactElement => {
  return (
    <div>
      {state.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default ItemsList;
