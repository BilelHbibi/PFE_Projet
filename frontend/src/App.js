import { useEffect } from 'react';
import './App.css';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Preloader from './Preloader/Preloader';
import Layout from './components/layout/Layout';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
      Aos.init()
      Aos.refresh()
  },[])
  return(
    <>
     {/* <Preloader/> */}
     <Layout/>
    </>
  )
}

export default App;



// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   // Let create async method to fetch fake data
//   useEffect(() => {
//     const fakeDataFetch = () => {
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 2000);
//     };

//     fakeDataFetch();
//   }, []);
//   return isLoading ? (
//     <Preloader />
//   ) : (
//     <Layout/>
//   );
// }
