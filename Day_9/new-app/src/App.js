import logo from './logo.svg';
// import './App.css';
import Button from './Components/Button';
import { useState } from 'react';
// function App() {
//   const [name,setName]=useState("Raksha");
//   return (
//   <div style={{ textAlign: "center", marginTop: "100px" }}>
//     <h1>Hello {name}</h1>
//     <button 
//       style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }} 
//       onClick={() => setName("Superstar Raksha")}
//     >
//       Change Name
//     </button>
//     <input onChange={(e) => setName(e.target.value)} />
//   </div>
//   );
// }
// function App(){
//     const [likes,setlikes]=useState(0);
//   return(
//     <div>
//       <button onClick={() => setlikes(likes+1)}>👍Like</button>
//       <p>Like:{likes}</p>
//     </div>
//   );
// }

// function App(){
//   const [isSubscribed,setSubscription]=useState(false);
//   return(
//     <>
//     {isSubscribed ?
//     (<p>Thanks for subscribing</p>):<button onClick={() => setSubscription(true)} style={{color:'white',backgroundColor:'red',border:'none',borderRadius:'5px'}}>Subscribe</button>}
//     </>
//   );
// }
function App(){
  return(
    <>
    <Button text="Add"/>
    </>
  );
}

export default App;
