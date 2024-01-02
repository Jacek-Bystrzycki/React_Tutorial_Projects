import { useEffect, useState } from 'react';
import Title from './Components/Title';
import data from './data.js';
import { MenuList } from './Components/MenuList.jsx';
import Categories from './Components/Categories.jsx';

let uniqueCategories = new Set();
data.forEach((item) => {
  uniqueCategories.add(item.category);
});
uniqueCategories.add('all');

const arrayCategories = Array.from(uniqueCategories);

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(arrayCategories);

  const filter = (category) => {
    const newMenu = data.filter((item) => {
      return item.category === category || category === 'all';
    });
    setMenu(newMenu);
  };

  return (
    <>
      <Title />
      <Categories data={categories} filter={filter} />
      <MenuList menu={menu} />
    </>
  );
};
export default App;
