import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import './index.css';
import { PlayersList, SearchBar, Title } from './components/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './serviceWorker';
import { arrayOf, object } from 'prop-types';
import { fetchPlayers } from './actions/playersActions';
import { playersSelector } from './selectors/PlayersSelector';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

class App extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const { players } = this.props;

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
              <PlayersList players={players} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  players: arrayOf(object)
};

const mapToStateProps = state => ({ players: playersSelector(state)});

export default connect(mapToStateProps, fetchPlayers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
registerServiceWorker();
