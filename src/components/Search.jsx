import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </form>
  );
}

export default Search;
