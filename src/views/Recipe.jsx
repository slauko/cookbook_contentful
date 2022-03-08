import React from 'react';
import { useParams } from 'react-router-dom';
import './recipe.css';

export default function Recipe() {
  const { id } = useParams();
  return <div className="recipe-div">Recipe for ID: {id}</div>;
}
