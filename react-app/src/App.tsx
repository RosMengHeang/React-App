import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import  Button  from "./components/Button";
import Alert2 from "./components/Alert2";
import { useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  // let items = ["New York", "Los Angeles", "Phnom Penh", "Tokyo", "Paris"];
  // const handleSelectItem = (item: string) => {console.log(item)}

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup></div>
  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // )

  // return (
  //   <div>
  //     <Button color="primary"onClick={() => console.log('Clicked')}>My button</Button>
  //   </div>
  // )

  // const [alertVisible, setAlertVisible] = useState(false);

  // const handleClick = () => {
  //   setAlertVisible(true);
  //   console.log(alertVisible);
  // }

  // return (
  //   <div>
  //     {alertVisible && <Alert2 onClose={() => setAlertVisible(false)}>Holyyyy</Alert2>}
  //     <Button color="primary"onClick={() => setAlertVisible(true)}>My button</Button>
  //     <BsArrowDownCircleFill size="50" color="red"/>
  //   </div>
    
  // )

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [person, setPerson] = useState({
  //   firstName: '',
  //   lastName: '',
  //   contact: {
  //     address: {
  //       street: '',
  //     }
  //   } 
  // });
  // const [drink, setDrink]= useState({
  //   title : "Coffee",
  //   price : 5,
  // });
  
  // const handleClick = () => {
  //   // const newDrink = {
  //   //   title : drink.title,
  //   //   price : 6,
  //   // }
  //   setDrink({ ...drink , price : 6});
  // }

  // const [user , setUser] = useState({
  //   title : "Heang",
  //   info : {
  //     major : "SE",
  //     batch : 11,
  //   }
  // })

  // const handleClick = () => {
  //   setUser({...user,info: {...user.info,major : "TM",batch : 12}})
  // }

  // const [fruits , setFruits] = useState(['apple ','orange']);

  // const handleClick = () => {
    //add
    // setFruits([...fruits,' banana'])
    //remove
    // setFruits(fruits.filter(fruit => fruit !== 'apple' ));
    //update
    // setFruits(fruits.map(fruit => fruit === 'apple' ? 'apples' : fruit));
  // }
  // const [bugs, setBugs] = useState([
  //   { id: 1, name: 'bug 1' , fixed : false},
  //   { id: 2, name: 'bug 2' , fixed : false}
  // ]);

  // const handleClick = () => {
  //   // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed : true} : bug));

  //   setBugs(produce(draft => {
  //     const bug = draft.find(bug => bug.id === 1);
  //     if (bug) bug.fixed = true;
  //   }))
  // }

  const [cartItems, setCartItems] = useState(['Product 1','Product 2']);

  return (
    <div>
      {/* {bugs.map(bug => <p key={bug.id}>{bug.name} {bug.fixed ? 'Fixed' : 'New'}</p>)} */}
      {/* <br />
      <button onClick={handleClick}>Clcik me</button> */}

      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems}></Cart>
    </div>
  )
}

export default App;