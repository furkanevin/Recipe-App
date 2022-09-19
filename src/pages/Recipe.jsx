import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="detailWrapper">
      <div>
        <h2 className="recipe-title"> {details.title} </h2>
        <img src={details.image} className="recipe-img" />
      </div>
      <div className="info">
        <button
          onClick={() => setActiveTab('instructions')}
          className={
            activeTab === 'instructions' ? 'active buttons' : 'buttons'
          }
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab('ingredients')}
          className={activeTab === 'ingredients' ? 'active buttons' : 'buttons'}
        >
          {' '}
          Ingredients
        </button>
        {activeTab === 'instructions' && (
          <div>
            <h3
              className="instructions"
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></h3>
            <h3
              className="instructions"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}> {ingredient.original} </li>
            ))}
          </ul>
        )}
        ;
      </div>
    </div>
  );
}

export default Recipe;
