import React, {useEffect, useState, useCallback} from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { aufoFetch } from '../axiosFetch';

const url = '/lookup.php?i=';

const SingleCocktail = () => {

  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const [notFound, setNotFound] = useState(false);
  const [drink, setDrink] = useState({name: "",
        glass: "",
        image: "",
        info: "",
        instructions: "",
        category: "",
        ingriedients: []});

  const {name, glass, image, info, instructions, category, ingriedients} = drink;
  
  const fetchCocktail = useCallback( async () => {
    try {
      let ingriedients = [];
      const urlQuery = url + id;
      const resp = await aufoFetch.get(urlQuery);
      if (resp.data.drinks){
        const drink = resp.data.drinks[0];
        for (let i = 1; i < 16; i++) {
          const prop = `strIngredient${i}`;
        if (drink[prop]){
          ingriedients.push(drink[prop]);
        };
      };
      const newDrink = {
        name: drink.strDrink,
        glass: drink.strGlass,
        image: drink.strDrinkThumb,
        info: drink.strAlcoholic,
        instructions: drink.strInstructions,
        category: drink.strCategory,
        ingriedients
      };
      setDrink(newDrink);
      } else setNotFound(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setNotFound(true);
    };
  },[id]);

  useEffect(() => {
    setLoading(true);
    fetchCocktail();
  },[fetchCocktail,id]);

  if (loading) {
    return <Loading />
  };

  if (notFound) {
    return <section className='section cocktail-section'>
        <h2 className='section-title'>oops! cocktail with id: {id} not found</h2>
        <Link to="/" className='btn btn-primary'>back home</Link>
    </section>;
  };

  return <section className='section cocktail-section'>
    <Link to="/" className='btn btn-primary'>back home</Link>
    <h2 className="section-title">{name}</h2>
    <div className="drink">
      <img src={image} alt={name}/>
      <div className="drink-info">
        <p>
          <span className="drink-data">name:</span>
          {name}
        </p>
        <p>
          <span className="drink-data">category:</span>
          {category}
        </p>
        <p>
          <span className="drink-data">info:</span>
          {info}
        </p>
        <p>
          <span className="drink-data">glass:</span>
          {glass}
        </p>
        <p>
          <span className="drink-data">instructions:</span>
          {instructions}
        </p>
        <p>
          <span className="drink-data">ingriedients</span>
          {ingriedients.map((item, index) => {
            return <span key={index}>{item}</span> 
          })}
        </p>
      </div>
    </div>
  </section>
};

export default SingleCocktail;
 