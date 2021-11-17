//დავალება:
//1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// დაბეჭდეთ მასივისი ახალი ელემენტები.

let array = [5, 25, 89, 120, 36];
array.push('javascript', 'python');
array.unshift('HTML', 'css');

console.log(array);

array.shift();
array.pop();

console.log(array);


//------------------------

//დავალება 2
// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits = ["Orange", "Bananas", "Pear"];
console.log(fruits);

fruits.push("Aplle", "Pineapple");
fruits.unshift('Watermelon');
console.log(fruits);

fruits.splice(2,0, 'Mango');
fruits.shift();
fruits.pop();
console.log(fruits);

//-----------------------------------------------------------------------


//დავალება 3
// 3. მოცემულია მასივი:

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray1 = array1.map(number => newNumber * 3);
console.log(newArray1);

//---------------------------------------------------

//დავალება 4
// 4.  მოცემულია მასივი:

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newArray = array.filter(item => typeof item === 'number');
console.log(newArray); 

//------------------------------------------------------

//დავალება 5
// 5.მოცემულია მასივი:

// let languages = ['html', 'css', 'javascript', 'python, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;


let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newArrayOfLanguages = languages.filter(language => language.length > 3);
console.log(newArrayOfLanguages);


//----------------------------------------------------------


//დავალება 6
// 6.მოცემულია მასივი:
// let array= ['academy', 'of', 'digital', 'industries']

// Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

let array= ['academy', 'of', 'digital', 'industries'].reduce((accumulator,currentValue)=>accumulator + ' ' + currentValue, '');

console.log(array);

//---------------------------------------------------

//დავალება 7

// 7. მოცემულია მასივი:
// let item = [12, ‘google’, 32, null, ‘yahoo’, 25];

// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

let item = [12, 'google', 32, null, 'yahoo', 25];

let newItem1 = item.map( item => {
    if(typeof item == 'number') {
        return item*item;
    } else if ( typeof item == 'string'){
        return item.toUpperCase();
    } else {
        return item;
    }
})
console.log(newItem1);


//--------------------------------------------------

//დავალება 8

// 8. Მოცემულია მასივი:
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newWordsArray = words.filter(item1 => item1.includes('m') || item1.includes('M'));     // item1.toLowerCase().includes('m')); 

console.log(newWordsArray);

//-----------------------------------------------------