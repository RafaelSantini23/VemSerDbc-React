import './App.css';
import Principal from './pages/Principal';
import FormProvider from './context/FormContext';


function App() {
  return (
    <div className="App">
      <FormProvider>
        <Principal />
      </FormProvider>
      
    </div>
  );
}

export default App;
