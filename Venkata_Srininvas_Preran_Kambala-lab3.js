// Venkata Srinivas Preran Kambala
// ITMD 541-01 Graduate Student

// Exercise #1
function minMaxAverage(arr) {
    let totalNumbers = arr.length;
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / totalNumbers;
    
    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}

// Test case 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
// Test case 2
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
// Test case 3
minMaxAverage([7, 12, 19, 3, 15]);


// Exercise #2
function countVowels(word) {
    let vowels = 'aeiou';
    let count = 0;
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`${word}: ${count} vowels`);
}

// Test case 1
countVowels("Winter");
// Test case 2
countVowels("Programming");
// Test case 3
countVowels("Apple");


// Exercise #3
function sortNumbers(arr) {
    let sortedArray = [...arr].sort((a, b) => a - b);
    console.log(`Original Array: [${arr}], Sorted Array: [${sortedArray}]`);
}

// Test case 1
sortNumbers([9, 4, 6, 2]);
// Test case 2
sortNumbers([12, 3, 8, 7, 10]);
// Test case 3
sortNumbers([21, 18, 9, 6]);


// Exercise #4
function celsiusToFahrenheit(celsius) {
    // Check if input is a string and convert to number
    if (typeof celsius === 'string') {
        celsius = parseFloat(celsius);
    }
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test case 1
celsiusToFahrenheit(30);
// Test case 2
celsiusToFahrenheit("25");
// Test case 3
celsiusToFahrenheit(0);




// Exercise #5
function sortPeopleByAge(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age);
    sortedPeople.forEach(person => {
        console.log(`${person.name} is ${person.age} and from ${person.city}`);
    });
}

// Test case 1
let people1 = [
    {name: 'John', age: 23, city: 'Chicago'},
    {name: 'Jane', age: 29, city: 'New York'},
    {name: 'Steve', age: 21, city: 'Los Angeles'},
    {name: 'Alice', age: 35, city: 'San Francisco'},
    {name: 'Bob', age: 19, city: 'Miami'}
];
sortPeopleByAge(people1);

// Test case 2
let people2 = [
    {name: 'Liam', age: 25, city: 'Boston'},
    {name: 'Emma', age: 28, city: 'Seattle'},
    {name: 'Olivia', age: 30, city: 'Austin'},
    {name: 'James', age: 22, city: 'Dallas'},
    {name: 'Isabella', age: 27, city: 'Portland'}
];
sortPeopleByAge(people2);
