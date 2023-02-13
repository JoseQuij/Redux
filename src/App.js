import Counter from './features/counter/Counter';
import './app.css';
function App() {
  return (
    
            <div className="App">
            <div class="fire">
        <div class="logs">
          <div class="log l1"></div>
          <div class="log l2"></div>
        </div>
        <div class="flames">
          <div class="flame f1"></div>
          <div class="flame f2"></div>
          <div class="flame f3"></div>
        </div>
        <div class="sparks">
          <div class="spark s1"></div>
          <div class="spark s2"></div>
          <div class="spark s3"></div>
          <div class="spark s4"></div>
          <div class="spark s5"></div>
          <div class="spark s6"></div>
          <div class="spark s7"></div>
          <div class="spark s8"></div>
        </div>
      </div> 
      <Counter />
          </div>

     
 
  );
}

export default App;
