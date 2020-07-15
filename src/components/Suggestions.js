import React from 'react';

const SuggestionItem = ({ suggestion = {} }) => (
  <div className='SuggestionItem'>
    <strong className='SuggestionItem-title'>{suggestion.title}</strong>
    <p className='SuggestionItem-date'>{suggestion.date}</p>
  </div>
);

export function Suggestions({ suggestions = [] }) {
  return (
    <div className='Suggestions'>
      <h2>Sugeridos</h2>
      {suggestions.map((suggestion) => (
        <SuggestionItem suggestion={suggestion} key={suggestion.id} />
      ))}
    </div>
  );
}
