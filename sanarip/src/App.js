import { Routes, Route } from 'react-router-dom';
import { Signin, Transaction, Table } from './views';
import { Layout } from './components/layout';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Signin /> } />
      <Route element={ <Layout /> } >
        <Route index path="/main" element={ <Transaction /> } />
        <Route path="/table" element={ <Table /> } />
      </Route>
    </Routes>
  );
}
export default App;
 