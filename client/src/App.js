import './App.css';
import ApolloClient from 'apollo-boost';
import {
  ApolloProvider
} from 'react-apollo';
import logo from './SpaceXLogo.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return ( <
    ApolloProvider client = {
      client
    } >
    <
    div className = "Container" >
    <
    img src = {
      logo
    }
    alt = "SpaceX"
    style = {
      {
        width: 300,
        display: 'block',
        margin: 'auto'
      }
    }
    /> <
    /div> <
    /ApolloProvider>
  );
}

export default App;