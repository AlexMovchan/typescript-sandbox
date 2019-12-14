import * as React from 'react';
import Suggestion, { ISuggestionStructure } from '../Suggestion/Suggestion';

const SuggestionList: React.FC<{suggestions: ISuggestionStructure[]}> = ({ suggestions }) => {
  return (
    <div>
      {suggestions.map((item: ISuggestionStructure) => <Suggestion key={item.id} suggestion={item} />)}
    </div>
  );
};

export default SuggestionList;
