import { ReactElement } from 'react';
import { useGroceryContext } from '../hook/useGroceryContext';
import { InitState } from '../context/GroceryContext';

type PropsType = {
  item: InitState;
};

export const List = ({ item }: PropsType): ReactElement => {
  const { checkGrocery, removeGrocery } = useGroceryContext();

  const onChangeHandler = (): void => {
    checkGrocery({ id: item.id, checked: !item.checked });
  };

  const input: ReactElement = <input type="checkbox" checked={item.checked} onChange={onChangeHandler} />;

  const title: ReactElement = <span className={item.checked ? ' item strike' : 'item'}>{item.title}</span>;

  const removeButton: ReactElement = (
    <button
      type="button"
      onClick={() => {
        removeGrocery(item.id);
      }}
    >
      X
    </button>
  );

  const content: ReactElement = (
    <div>
      {input}
      {title}
      {removeButton}
    </div>
  );
  return content;
};
