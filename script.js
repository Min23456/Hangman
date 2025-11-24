const words = [
"apple","banana","orange","grape","pear","peach","plum","kiwi","mango","lemon",
"lime","watermelon","cantaloupe","strawberry","blueberry","raspberry","blackberry","cherry","pineapple","papaya",
"carrot","broccoli","spinach","lettuce","cabbage","onion","garlic","potato","tomato","pepper",
"cucumber","zucchini","eggplant","celery","radish","beet","pumpkin","squash","corn","peas",
"rice","bread","pasta","noodles","oats","cereal","flour","sugar","salt","pepper",
"butter","cheese","milk","yogurt","cream","egg","chicken","beef","pork","fish",
"shrimp","crab","lobster","tofu","beans","lentils","nuts","almonds","cashews","peanuts",
"water","juice","soda","tea","coffee","wine","beer","whiskey","cocktail","smoothie",
"table","chair","sofa","bed","pillow","blanket","curtain","carpet","rug","lamp",
"ceiling","floor","door","window","wall","shelf","cabinet","drawer","mirror","clock",
"phone","laptop","computer","tablet","keyboard","mouse","monitor","printer","camera","headphones",
"speaker","microphone","remote","charger","cable","plug","switch","socket","fan","heater",
"airconditioner","refrigerator","oven","microwave","stove","toaster","kettle","blender","dishwasher","washingmachine",
"dryer","iron","vacuum","broom","mop","bucket","soap","shampoo","toothpaste","toothbrush",
"towel","comb","brush","mirror","razor","lotion","perfume","deodorant","sunscreen","glasses",
"sunglasses","hat","cap","scarf","gloves","jacket","coat","shirt","t-shirt","pants",
"jeans","shorts","skirt","dress","shoes","sneakers","boots","sandals","socks","belt",
"bag","backpack","purse","wallet","key","coin","bill","card","ticket","passport",
"map","book","magazine","newspaper","pen","pencil","notebook","eraser","ruler","marker",
"paint","brush","scissors","tape","glue","stapler","clip","folder","paper","envelope",
"stamp","calendar","clock","watch","alarm","light","bulb","battery","remote","fan",
"doorbell","lock","handle","window","curtain","blind","chair","table","sofa","couch",
"armchair","bed","mattress","pillow","blanket","sheet","duvet","cover","rug","carpet",
"floor","tile","wood","glass","metal","plastic","ceramic","stone","soap","shampoo",
"conditioner","lotion","cream","perfume","deodorant","toothpaste","toothbrush","floss","razor","comb",
"brush","mirror","towel","shower","bathtub","sink","faucet","toilet","paper","pen",
"pencil","notebook","book","magazine","newspaper","envelope","stamp","letter","phone","mobile",
"laptop","tablet","computer","monitor","keyboard","mouse","printer","scanner","camera","headphones",
"speaker","microphone","charger","cable","adapter","battery","remote","television","radio","alarm",
"clock","watch","calendar","map","guide","ticket","passport","id","wallet","bag",
"backpack","purse","key","coin","bill","card","hat","cap","scarf","gloves",
"jacket","coat","shirt","t-shirt","pants","jeans","shorts","skirt","dress","shoes",
"sneakers","boots","sandals","socks","belt","umbrella","sunglasses","glasses","water","juice",
"soda","tea","coffee","milk","wine","beer","cocktail","smoothie","bread","rice",
"pasta","noodles","flour","sugar","salt","pepper","butter","cheese","egg","chicken",
"beef","pork","fish","shrimp","crab","lobster","tofu","beans","lentils","peas",
"nuts","almonds","cashews","peanuts","honey","jam","syrup","oil","vinegar","spice",
"herb","sauce","ketchup","mustard","mayonnaise","soy sauce","cinnamon","nutmeg","ginger","garlic",
"chili","paprika","basil","oregano","parsley","cilantro","mint","rosemary","thyme","sage",
"dill","chives","tarragon","bayleaf","breakfast","lunch","dinner","snack","dessert","meal",
"drink","fruit","vegetable","meat","seafood","grains","cereal","oatmeal","muffin","croissant",
"toast","waffle","pancake","crepe","cake","cookie","pie","pudding","ice cream","chocolate",
"candy","chips","popcorn","crackers","salad","sandwich","burger","pizza","hotdog","soup",
"stew","casserole","potato","rice","noodles","pasta","beans","lentils","tofu","cheese",
"butter","milk","yogurt","egg","chicken","beef","pork","fish","shrimp","lobster",
"crab","apple","banana","orange","grape","pear","peach","plum","kiwi","mango",
"lemon","lime","watermelon","cantaloupe","strawberry","blueberry","raspberry","blackberry","cherry","pineapple","papaya","carrot","broccoli","spinach","lettuce","cabbage","onion","garlic","potato","tomato",
"pepper","cucumber","zucchini","eggplant","celery","radish","beet","pumpkin","squash","corn",
"peas","beans","lentils","tofu","almonds","cashews","peanuts","walnuts","hazelnuts","pistachios",
"bread","bagel","roll","bun","muffin","croissant","toast","waffle","pancake","crepe",
"cereal","oatmeal","granola","flour","sugar","salt","pepper","oil","vinegar","butter",
"cheese","milk","yogurt","cream","egg","chicken","beef","pork","fish","shrimp",
"lobster","crab","clams","mussels","scallops","squid","octopus","salad","lettuce","spinach",
"kale","arugula","cabbage","broccoli","cauliflower","zucchini","cucumber","tomato","carrot","radish",
"onion","garlic","potato","sweetpotato","pumpkin","squash","peas","beans","lentils","corn",
"avocado","mushroom","bellpepper","chilipepper","jalapeno","banana","apple","orange","grape","pear",
"peach","plum","kiwi","mango","lemon","lime","watermelon","cantaloupe","honeydew","strawberry",
"blueberry","raspberry","blackberry","cherry","pineapple","papaya","fig","date","pomegranate","grapefruit",
"nectarine","apricot","coconut","tomato","cucumber","lettuce","spinach","kale","chard","arugula",
"beet","radish","celery","carrot","onion","garlic","potato","sweetpotato","pumpkin","squash",
"zucchini","eggplant","corn","peas","beans","lentils","tofu","tempeh","seitan","almonds",
"cashews","peanuts","walnuts","hazelnuts","pecans","pistachios","macadamia","bread","bagel","roll",
"bun","muffin","croissant","toast","waffle","pancake","crepe","cereal","oatmeal","granola",
"rice","pasta","noodles","flour","sugar","salt","pepper","oil","vinegar","butter",
"cheese","milk","yogurt","cream","egg","chicken","beef","pork","fish","shrimp",
"lobster","crab","clam","mussel","scallop","octopus","squid","bread","bagel","bun",
"roll","muffin","croissant","toast","waffle","pancake","crepe","cake","cookie","pie",
"pudding","icecream","chocolate","candy","chips","popcorn","crackers","pretzel","nuts","trailmix",
"fruit","vegetable","salad","sandwich","burger","pizza","hotdog","soup","stew","casserole",
"rice","pasta","noodles","beans","lentils","tofu","chicken","beef","pork","fish",
"shrimp","lobster","crab","egg","cheese","milk","yogurt","butter","cream","oil",
"vinegar","spice","herb","salt","pepper","cinnamon","nutmeg","ginger","garlic","onion",
"basil","oregano","parsley","cilantro","mint","rosemary","thyme","sage","dill","chives",
"tarragon","bayleaf","cumin","paprika","turmeric","curry","chili","mustard","ketchup","mayonnaise",
"soy sauce","sriracha","hot sauce","vinegar","oil","butter","margarine","honey","jam","syrup",
"tea","coffee","milk","juice","soda","water","wine","beer","whiskey","cocktail",
"smoothie","bread","bagel","roll","bun","muffin","croissant","toast","waffle","pancake",
"crepe","cake","cookie","pie","pudding","icecream","chocolate","candy","chips","popcorn",
"cracker","pretzel","nuts","trailmix","fruit","vegetable","salad","sandwich","burger","pizza",
"hotdog","soup","stew","casserole","rice","pasta","noodles","beans","lentils","tofu",
"chicken","beef","pork","fish","shrimp","lobster","crab","egg","cheese","milk",
"yogurt","butter","cream","oil","vinegar","spice","herb","salt","pepper","cinnamon",
"nutmeg","ginger","garlic","onion","basil","oregano","parsley","cilantro","mint","rosemary",
"thyme","sage","dill","chives","tarragon","bayleaf","cumin","paprika","turmeric","curry",
"chili","mustard","ketchup","mayonnaise","soy sauce","sriracha","hot sauce","vinegar","oil","butter",
"margarine","honey","jam","syrup","bread","bagel","roll","bun","muffin","croissant",
"toast","waffle","pancake","crepe","cake","cookie","pie","pudding","icecream","chocolate",
"candy","chips","popcorn","cracker","pretzel","nuts","trailmix","fruit","vegetable","salad",
"sandwich","burger","pizza","hotdog","soup","stew","casserole","rice","pasta","noodles",
"beans","lentils","tofu","chicken","beef","pork","fish","shrimp","lobster","crab",
"egg","cheese","milk","yogurt","butter","cream","oil","vinegar","spice","herb",
"salt","pepper","cinnamon","nutmeg","ginger","garlic","onion","basil","oregano","parsley",
"cilantro","mint","rosemary","thyme","sage","dill","chives","tarragon","bayleaf","cumin",
"paprika","turmeric","curry","chili","mustard","ketchup","mayonnaise","soy sauce","sriracha","hot sauce",
"vinegar","oil","butter","margarine","honey","jam","syrup","soap","shampoo","conditioner",
"lotion","cream","perfume","deodorant","toothpaste","toothbrush","floss","razor","comb","brush",
"mirror","towel","shower","bathtub","sink","faucet","toilet","paper","pen","pencil",
"notebook","book","magazine","newspaper","envelope","stamp","letter","phone","mobile","laptop",
"tablet","computer","monitor","keyboard","mouse","printer","scanner","camera","headphones","speaker",
"microphone","charger","cable","adapter","battery","remote","television","radio","alarm","clock",
"watch","calendar","map","guide","ticket","passport","id","wallet","bag","backpack",
"purse","key","coin","bill","card","hat","cap","scarf","gloves","jacket",
"coat","shirt","t-shirt","pants","jeans","shorts","skirt","dress","shoes","sneakers",
"boots","sandals","socks","belt","umbrella","sunglasses","glasses","water","juice","soda",
"tea","coffee","milk","wine","beer","cocktail","smoothie","table","chair","sofa",
"bed","pillow","blanket","curtain","carpet","rug","lamp","ceiling","floor","door",
"window","wall","shelf","cabinet","drawer","mirror","clock","fan","heater","airconditioner",
"refrigerator","oven","microwave","stove","toaster","kettle","blender","dishwasher","washingmachine","dryer",
"iron","vacuum","broom","mop","bucket","soap","shampoo","toothpaste","toothbrush","towel"
];



let selectedWord = "";
let guessedLetters = [];
let remainingGuesses = 6;


const wordDisplay = document.getElementById("word");
const lettersDiv = document.getElementById("letters");


const messageDiv = document.getElementById("message");
const resetBtn = document.getElementById("reset");

function startGame() {
    selectedWord = words[Math.floor(Math.random()* words.length)]
    guessedLetters = [];
    remainingGuesses = 6;
    messageDiv.textContent = "";
    resetBtn.style.display = "none";
    updateWord();
    createLetterButtons();
}




function createLetterButtons() {
    lettersDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i).toLowerCase();
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.classList.add("letter");
        btn.addEventListener("click", () => handleGuess(letter, btn));
        lettersDiv.appendChild(btn);

    }                
}



























function updateWord() {
    const display = selectedWord
        .split("")
        .map((letter)=> (guessedLetters.includes(letter)? letter : "_"))
        .join(" ");
    wordDisplay.textContent = display;
    if (!display.includes("_")){
        messageDiv.textContent = "🎉You Win!";
        endGame();
    }
}






















function handleGuess(letter,btn){
    btn.disabled = true;
    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
        updateWord();
    }else{
        remainingGuesses--;
        messageDiv.textContent = `Wrong guess! Remaining: ${remainingGuesses}`;
        if (remainingGuesses === 0) {
            messageDiv.textContent = `💀 Game OVer! The word was "${selectedWord}"`;
            endGame();
        }
    }
}





















































function endGame() {
    const buttons = document.querySelectorAll(".letter");
    buttons.forEach((btn) =>(btn.disabled = true));
    resetBtn.style.display = "inline-block";
}












































































































resetBtn.addEventListener("click", startGame);

startGame();