import Layout from './Componets/Layout';
import React from 'react';
import './App.css';
import Home from './Componets/Home';
import Users from './Componets/users';
import Support from './Componets/support';
import { Routes, Route } from 'react-router-dom';
import Error from './Componets/Error';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: ""};
  }

  componentDidCatch(error) {
    this.setState({error: `${error.name}: ${error.message}`});
  }

  render() {
    const {error} = this.state;
    if (error) {
      return (
        <div>
          <h2>Something went  Wrong !</h2>
        </div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}
function App() {
  return (
    <ErrorBoundary>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/support' element={<Support />} />
    </Route>
    <Route path='*' element={<Error />} />
   </Routes>
    </ErrorBoundary>
  )
  }

export default App;
