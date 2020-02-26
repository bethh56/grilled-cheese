// breadData will have array of bread objects, export a getBread function
// each bread object = type, color, price, id
 
const bread = [
    {
    type: "white",
    color: "white",
    price: 1,
    id: 1,
    },
    {
    type: "Wheat",
    color: "brown",
    price: 5,
    id: 2,
    },
    {
    type: "Rye",
    color: "Dark Brown",
    price: 7,
    id: 3,
    }
]

const getBread = () => {
    return bread;
};

export default { getBread }