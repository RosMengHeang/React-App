import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items ,heading, onSelectItem}: Props) {
  

  // let selectiveIndex = 0;
  //Hook
  const [selectiveIndex, setSelectiveIndex] = useState (-1);
  

  //Event Handler
  // const handleClick = (event : MouseEvent) => console.log(event);

  // const message = items.length === 0 ? <p>No Item Found</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No Item Found</p> : null;
  // }

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No Item Found</p>
  //     </>
  //   );

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      {/* if the expression is true it will print the items otherwise it print the paragrph */}
      {items.length === 0 && <p>No Item Found</p>} 
      <ul className="list-group"> 
        {items.map((item,index) => (
          <li className={ selectiveIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => { setSelectiveIndex(index);onSelectItem(item)}}>{item}</li>
        ))}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
