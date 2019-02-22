import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import { PlayersList, SearchBar, Title } from './../components/index';
import { fetchPlayers } from './../actions/playersActions';
import { playersSelector } from './../selectors/PlayersSelector';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container } from 'react-bootstrap';

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

const mapToStateProps = (state) => ({ players: playersSelector(state) });

export default connect(mapToStateProps, { fetchPlayers } )(App);
