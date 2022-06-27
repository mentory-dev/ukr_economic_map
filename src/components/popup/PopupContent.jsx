import React from "react";

import './popup-content-styles.css'

export const ResultItem = ({name, value, isGrowth}) => {
  return (
    <div>
      <strong>{name}: </strong>
      <span className={isGrowth ? 'growth' : 'fall'}>
        {
          isGrowth 
          ? 'Збільшилась на '
          : 'Знизились на ' 
        }
        {value}%
      </span>
    </div>
  )
}

export const PopupContent = ({ content }) => {
  const {label, results} = JSON.parse(content)

  return (
    <>
    <h2>{label}</h2>
      {results.map((result) => <ResultItem {...result} key={result.name}/>  )}
    </>
  );
}
