import './a.css';
import Header from './Header';
import Details from './Details';

function App() {
  return (
    <div className="App">
<div class="ripple-background">
    <div class="circle xxlarge shade1 a" ></div>
    <div class="circle xlarge shade2 a"></div>
    <div class="circle large shade3 a"></div>
    <div class="circle medium shade4 a"></div>
    <div class="circle small shade5 a"></div>
  </div>
    <div className='div1'>
     <Header />
     </div>
     <div style={{marginTop:"50px",marginLeft:"420px"}}>
   <Details />
</div>
    </div>
  );
}

export default App;
