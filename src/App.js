import Layout from './Componets/Layout';
import React from 'react';
import './App.css';
import Home from './Home';
import Users from './users';
import Support from './support';
import { Routes, Route } from 'react-router-dom';
import { Contact, About } from './support';
import Error from './Componets/Error';
import { Link } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
// function fallBack({error,resetError}) {
//   return (
//     <div role='alert'>
//     <h3>Something went wrong!</h3>
//     <summary>{error.messaged}</summary>
//     <button onClick={resetError}>Reload</button>
//     </div>
//   )
// }
// g

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
      <Route path='*' element={<Error />} />
    </Route>
   </Routes>
  );
    </ErrorBoundary>
  )
  }

export default App;
