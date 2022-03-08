import React from 'react';
import { useParams } from 'react-router-dom';

export default function Recipe() {
  const { id } = useParams();
  return <div>Recipe for ID: {id} </div>;
}
