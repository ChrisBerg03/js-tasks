// q.1
let winningNumbers = [1, 76, 2, 78, 16, 7];
console.log(winningNumbers[2]);

// q.2
let vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("Milk");
console.log(vegetables);

// q.3
let randomThings = ["pumpkin", false, 23, true, "tomato"];
for (let i = 0; i < randomThings.length; i++) {
    let randomItems = randomThings[i];
    console.log(randomItems);
}

// q.4
let moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
for (let i = 0; i < moreThings.length; i++) {
    let typeOfItem = typeof moreThings[i];

    if (typeOfItem === "number") {
    console.log(moreThings[i]);
    }
}

// q.5
let ingredients = ["water", "flour", "toothpaste", "fish lips"];
let sortedIngredients = ingredients.sort();

for (let i = 0; i < sortedIngredients.length; i++) {
    console.log(sortedIngredients[i]);
}


// q.6
let characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];
for (let i = 0; i < characters.length; i++) {
    if (i % 2 === 1) {
        console.log(characters[i])
    }
}