import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

const itemList = player => {
  const { name, position, nationality, age } = player;

  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{position}</td>
      <td>{nationality}</td>
      <td>{age}</td>
    </tr>
  );
};

const PlayersList = props => {
    const { players } = props;
    return <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Nationality</th>
                <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
            {players.map(itemList)}
        </tbody>
    </table>
}
debugger;
/* PlayersList.defaultProps = {};

PlayersList.propTypes = {
  players: arrayOf(shape({
    name: string.isRequired,
    position: string.isRequired,
    nationality: string.isRequired,
    age: number.isRequired
  }))
};  */

export default PlayersList;