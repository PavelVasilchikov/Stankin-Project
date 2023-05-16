
import './App.css';
import Navbar from"./components/NavBar";
function App() {
  return (
    
    <div className="wrapper">
      
      <header> 
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        <Navbar/>
      </header>
      <div className='SalesName'>
      <h1 className='SalesName' > Новинки недели </h1>
      </div>
  
      <div className="items">
        
      <div className="card"> 
          <img  width={415} height={304} src="img/1.png"alt=""/>
          
            <button className='button'>
              <s className="colorBlack">600 p </s>
              300 p
            </button>
          </div>
          <div className="card"> 
          <img  width={415} height={304} src="img/2.png"alt=""/>
          
            <button className='button'>
              <s className="colorBlack">1000 p </s>
              500 p
            </button>
            
          </div>
          
          <div className="card"> 
          <img  width={415} height={304} src="img/3.png"alt=""/>
          
            <button className='button'>
              <s className="colorBlack">1000 p </s>
              300 p
            </button>
          </div>
          <div className="card"> 
          <img  width={415} height={304} src="img/4.png"alt=""/>
          
            <button className='button'>
              <s className="colorBlack">1000 p </s>
              300 p
            </button>
          </div>
          <div className="card"> 
          <img  width={415} height={304} src="img/5.png"alt=""/>
          
            <button className='button'>
              <s className="colorBlack">1000 p </s>
              300 p
            </button>
          </div>
          <div className="card"> 
          <img  width={415} height={304} src="img/6.png"alt=""/>
          
            <button className='button'>
              <s className="colorBlack">1000 p </s>
              300 p
            </button>
          </div>
      </div>
        </div>

     
   
  );
}

export default App;
