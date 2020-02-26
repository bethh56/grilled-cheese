import util from  '../helpers/util.js' 
import breadData from  '../helpers/data/breadData.js' 

const makeBreadRadioButtons = () => {
    let domString = '';
    domString += `<h1>It is working</h1>`;
    
    util.printToDom('bread-container', domString)
}

makeBreadRadioButtons();

export default { makeBreadRadioButtons }