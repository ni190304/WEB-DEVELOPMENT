// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favfruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name:"Pineapple",
    rating: 8,
    review: "Great Fruit!"
});

pineapple.save();

const person = new Person({
    name: "Naresh",
    age: 52,
    favfruit: pineapple
});

person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 3,
    review: "The best fruit!!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 10,
    review: "Wooooow!!"
});

const banana = new Fruit({
    name: "Banana",
    rating: 6,
    review: "Mindblowinggg!!"
});

// Fruit.insertMany([kiwi, orange, banana])
// .then((fruits) => {
//     console.log("Successfully saved all the fruits to the fruitsDB", fruits);
// })
// .catch(function (err) {
//     console.log(err);
// });


Fruit.find().exec().then((fruits) => {
    fruits.forEach(fruit => {
        console.log(`${fruit.name}: ${fruit.review}`);
    });
}).catch((err) => {
    console.log(err);
});

// Fruit.updateOne({ _id: "65a24647b5ceb2cf32b47160" }, { name: "Peach" })
// .then(() => {
//     console.log("Successfully updated the document");
// })
// .catch((err)=>{
//     console.log(err);
// })

// Fruit.deleteOne({name:"Peach"})
// .then(()=>{
//     console.log(`Deleted successfully`);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Person.deleteMany({name:"Nihaal"})
// .then(()=>{
//     console.log(`Deleted all successfully`);
// })
// .catch((err)=>{
//     console.log(err);
// });




