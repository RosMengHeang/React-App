import React, { useState } from 'react'

interface Props {
    children : String;
    maxChar?: number;
} 

const ExpandableText = ({children,maxChar = 100} : Props) => {
  const [isExpanded, setExpanded] =useState(false);
  
    if(children.length <= maxChar) return <p>{children}</p>

  const text = isExpanded ? children : children.substring(0,maxChar);
  return (
    <p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>
  )
}

export  default ExpandableText
