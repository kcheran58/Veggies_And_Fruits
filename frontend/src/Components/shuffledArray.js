import axios from 'axios';

var a=[];
 async function handleChange(){
  try{

   const res = await axios.get("http://localhost:3500/products");
    
    a=res.data;
  
  //  console.log(mixedArray);
  }
  catch(error) {
    console.log(error.message);
  }
  return a;
}
 
var mixedArray = handleChange();
  console.log(a);
  
  // Function to shuffle an array using Fisher-Yates algorithm
  function shuffledArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffling the mixedArray
  const shuffleArray= shuffledArray([...mixedArray]);
  
  // Log the shuffled array to the console
  console.log(shuffleArray);
  export default a;

  