import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './components/Title/Title.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PlayersList from './components/PlayersList/PlayersList.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
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
  </Container>, document.getElementById('root'));
//registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
