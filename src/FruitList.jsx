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
let listOfListTags = someFruit.map(((fruit, index) => {
return <li key={fruit} fancyNumber={index} >{fruit}</li>
}));


// Function must return jsx. if you want it as HTML
// aka in place of inline JSX
export default function FruitList(props){
	return props.listToShow.map(fruit => {
		return <li key={fruit}>
			{fruit}
		</li>
	});
}