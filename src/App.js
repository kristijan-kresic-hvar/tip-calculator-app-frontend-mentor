import TipCalculator from './components/TipCalculator'

import logo from './assets/images/logo.svg'

function App() {

  const tipOptions = [5,10,15,25,50]

  return (
    <div className="app">
      <div className="app__logo">
        <img src={logo} alt="application logo" />
      </div>
      <main>
        <TipCalculator tipOptions={tipOptions} customTip={true}  />
      </main>
    </div>
  );
}

export default App;
