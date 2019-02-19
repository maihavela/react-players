import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import './index.css';
import Title from './components/Title/Title.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PlayersList from './components/PlayersList/PlayersList.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
//import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={4} md={8} lg={12}>
            <Title title={'Football Player Finder'} />
          </Col>
          <Col xs={4} md={8} lg={12}>
            <SearchBar />
          </Col>
          <Col xs={4} md={8} lg={12}>
            <PlayersList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
