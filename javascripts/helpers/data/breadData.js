// breadData will have array of bread objects, export a getBread function
// each bread object = type, color, price, id
 
const bread = [
    {
    type: "White",
    color: "white",
    price: 1,
    breadId: 1,
    },
    {
    type: "Wheat",
    color: "brown",
    price: 5,
    breadId: 2,
    },
    {
    type: "Rye",
    color: "Dark Brown",
    price: 7,
    breadId: 3,
    }
]
let selectedBreadId = '';

const setSelectedBread = (breadId) => {
  selectedBreadId = breadId;
  console.log('selectedBreadId', selectedBreadId);
};

const getBread = () => {
    return bread;
};

export default { setSelectedBread, getBread }