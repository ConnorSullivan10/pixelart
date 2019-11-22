import utilities from '../../helpers/utilities';
import './grid.scss';

const makeGrid = () => {
// for the grid we will make a table and use 2 for loops to create
  let domString = '<table>';
  for (let r = 0; r < 25; r += 1) {
    domString += '<tr>';
    for (let c = 0; c < 25; c += 1) {
      domString += '<td></td>';
    }
    domString += '</tr>';
  }

  domString += '</table>';

  utilities.printToDom('grid', domString);
};

export default { makeGrid };
