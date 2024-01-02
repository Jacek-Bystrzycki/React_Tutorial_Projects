import { MenuItem } from './MenuItem';

export const MenuList = ({ menu }) => {
  return (
    <div>
      {menu.map((item) => {
        return <MenuItem key={item.id} product={item} />;
      })}
    </div>
  );
};
