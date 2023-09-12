let someFruit = [
	"mangoes",
	"peaches",
	"apples",
	"blueberries",
	"aubergine",
	"secret banana",
	"papayas",
	"banana",
	"durian",
	"tomatoes",
	"rambutan",
	"mulberries", 
	"kiwis",
	"jackfruit",
	"watermelon",
	"zach fruit",
	"grape",
	"coconut"
]
  
// Process someFruit and build an array of li tags 
let fruitList = someFruit.map((fruit => {
return <li>{fruit}</li>
}));


// Function must return jsx. if you want it as HTML
// aka in place of inline JSX
export default function FruitList(){
	return fruitList;
}