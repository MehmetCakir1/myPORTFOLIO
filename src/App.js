import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import DataContextProvider from './context/DataContext';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <>
        <DataContextProvider>
      <AppRouter/>
    </DataContextProvider>
    </>

  )
}

export default App