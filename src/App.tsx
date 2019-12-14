import React, { useState } from 'react';
import { AutosuggestInput } from './components/AutosuggestInput/AutosuggestInput';
import SuggestionList from './components/SuggestionsList/SuggestionList';

const suggestions = [
  {id: 1, title: 'first'},
  {id: 2, title: 'second'},
  {id: 3, title: 'third'},
];

export interface ICustomOnChange {
  target: {
    value: string;
  };
}

const App: React.FC = () => {
  const [inputValue, changeInputValue] = useState('');

  const customOnChange = (e: ICustomOnChange) => {
    changeInputValue(e.target.value);
  };

  return (
    <div className='App'>
      <AutosuggestInput inputValue={inputValue} onChange={customOnChange} />
      <SuggestionList suggestions={suggestions} />
    </div>
  );
};

export default App;
