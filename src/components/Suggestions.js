import React from 'react';
import './../sass/components/Suggestions.scss';

const SuggestionItem = ({ suggestion = {} }) => (
  <div className='SuggestionItem'>
    <h4 className='SuggestionItem-title'>{suggestion.title}</h4>
    <small className='SuggestionItem-date'>{suggestion.date}</small>
  </div>
);

export function Suggestions({ suggestions = [] }) {
  return (
    <div className='Suggestions'>
      <h2 className='Suggestions-title'>Sugeridos</h2>
      {suggestions.map((suggestion) => (
        <SuggestionItem suggestion={suggestion} key={suggestion.id} />
      ))}
    </div>
  );
}
