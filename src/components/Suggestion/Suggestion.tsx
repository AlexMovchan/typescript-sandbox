import React, { FC } from 'react';

export interface ISuggestion {
  suggestion: ISuggestionStructure;
}

export interface ISuggestionStructure {
  id: number;
  title: string;
}

const Suggestion: FC<ISuggestion> = ({ suggestion }) => {
  const { id, title } = suggestion;

  return (
    <div>
      {id} and {title}
    </div>
  );
};

export default Suggestion;
