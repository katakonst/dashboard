import React from 'react';
import GenComponent from "./GenComponent";

export default function GenList(props) {
  if(!props.props)
  {
    return (<p>not</p>)
  }
  return (createComponents(props))

}
const createComponents = (props) => {
  let comps = []
  let components = JSON.parse(props.props).components;

  for(let i=0;i<components.length; i++)
    {
      comps.push(<GenComponent props={components[i]}/>)
    }
      return comps;
}
