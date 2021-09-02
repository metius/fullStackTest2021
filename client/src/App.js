import './App.css';
import 'bulma/css/bulma.min.css';

import AppRoutes from './routes/AppRoutes.component';
import Header from './components/Header/Header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
