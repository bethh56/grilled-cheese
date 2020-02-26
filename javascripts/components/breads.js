// event listner on radio button - call breadData.setSelectedBread(breadId)
// setSelectedBread = assign a variable (selectedBreadId) to the id passed in

import util from  '../helpers/util.js' 
import breadData from  '../helpers/data/breadData.js' 


const selectBread = (e) => {
    const breadId = e.target.id;
    breadData.setSelectedBread(breadId);
  }
  
  const radioButtonEvent = (e) => {
    const radioButtons = document.getElementsByClassName('breadRadio');
    for(let i=0; i < radioButtons.length; i++){
      radioButtons[i].addEventListener('click', selectBread);
    }
  }

const makeBreadRadioButtons = () => {
    const breadType = breadData.getBread();
    let domString = '';
    for (let i = 0; i < breadType.length; i++){
    domString += '<div class="form-check form-check-inline">';
    domString += `<input class="form-check-input breadRadio" type="radio" name="exampleRadios" id="${breadType[i].breadId}">`;
    domString += `<label class="form-check-label" for="${breadType[i].breadId}">${breadType[i].type}</label>`;
    domString += '</div>';
    }
    // document.getElementById().addEventListener.('click', )
    util.printToDom('bread-container', domString)
    radioButtonEvent();
}
makeBreadRadioButtons();

export default { makeBreadRadioButtons }