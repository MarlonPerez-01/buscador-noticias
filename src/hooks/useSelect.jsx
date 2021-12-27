import React, { useState } from 'react';

export const useSelect = () => {
  let initialState = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  const [state, setState] = useState(initialState);
  const [categoria, setCategoria] = useState(initialState[0]);

  const Select = () => (
    <select
      className="form-select"
      aria-label="Large select"
      name="categoria"
      value={categoria}
      onChange={(e) => setCategoria(e.target.value)}
    >
      {state.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );

  return [categoria, setState, Select];
};
