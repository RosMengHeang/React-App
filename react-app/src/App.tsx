import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import  Button  from "./components/Button";
import Alert2 from "./components/Alert2";
import { useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

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
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    contact: {
      address: {
        street: '',
      }
    } 
  });
  const [isLoading, setLoading] = useState(false);
  // const fullName = firstName + " " + lastName

  return (
    <div>
      
    </div>
  )
}

export default App;