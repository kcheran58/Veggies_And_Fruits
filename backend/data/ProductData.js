const mongoose = require('mongoose');
const Product = require('../model/Product');

const mixedArray = [
    { url: 'https://images.pexels.com/photos/2343169/pexels-photo-2343169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Apple', company: 'FruitCo', content: 'Crisp and sweet, perfect for snacking or recipes.', price: 56.75 },
    { url: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Carrot', company: 'Veggie Fresh', content: 'Crunchy and vibrant carrots, a versatile and nutritious addition to your meals.', price: 123.45 },
    { url: 'https://images.pexels.com/photos/6249452/pexels-photo-6249452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Banana', company: 'FruitCo', content: 'Healthy and delicious choice for any time of the day.', price: 72.30 },
    { url: 'https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Broccoli', company: 'Green Harvest', content: 'Nutrient-packed broccoli, known for its health benefits and delicious taste.', price: 89.99 },
    { url: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Orange', company: 'CitrusCo', content: 'Zesty flavor, rich in vitamin C, ideal for juicing or snacking.', price: 150.25 },
    { url: 'https://images.pexels.com/photos/1751149/pexels-photo-1751149.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Spinach', company: 'Leafy Greens', content: 'Leafy spinach, rich in iron and perfect for salads, smoothies, or sautés.', price: 95.50 },
    { url: 'https://images.pexels.com/photos/5875696/pexels-photo-5875696.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Mango', company: 'Exotic Fruits', content: 'Exotic mangoes, known for their rich flavor and smooth texture.', price: 178.60 },
    { url: 'https://images.pexels.com/photos/858093/pexels-photo-858093.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Bell Pepper', company: 'Colorful Harvest', content: 'Colorful bell peppers, a flavorful and vitamin C-rich choice for cooking.', price: 67.80 },
    { url: 'https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Grapes', company: 'Vineyard Fresh', content: 'Juicy grapes, a tasty and convenient snack.', price: 120.00 },
    { url: 'https://images.pexels.com/photos/237635/pexels-photo-237635.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Zucchini', company: 'Zesty Zucchinis', content: 'Zesty zucchinis, a low-calorie option for grilling, roasting, or sautéing.', price: 55.25 },
    { url: 'https://images.pexels.com/photos/407040/strawberry-water-splashes-splash-drop-of-water-407040.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Strawberry', company: 'Berry Bliss', content: 'Sweet and vibrant strawberries, perfect for desserts or on their own.', price: 63.75 },
    { url: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Potato', company: 'Golden Spuds', content: 'Golden potatoes, perfect for mashing, roasting, or making crispy fries.', price: 76.90 },
    { url: 'https://images.pexels.com/photos/2067412/pexels-photo-2067412.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Pear', company: 'Pear Perfection', content: 'Smooth and sweet pears, a classic fruit for snacks and desserts.', price: 99.99 },
    { url: 'https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Cucumber', company: 'Cool Veggies', content: 'Cool', price: 44.5 },
    { url: 'https://images.pexels.com/photos/5218037/pexels-photo-5218037.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'Cherry', company: 'Fruit Haven', content: 'Sweet and juicy cherries, perfect for snacking or adding to desserts.', price: 42.50 },
    { url: 'https://images.pexels.com/photos/6157056/pexels-photo-6157056.jpeg?auto=compress&cs=tinysrgb&w=400E', name: 'Pineapple', company: 'Tropical Delight', content: 'Tropical pineapple, known for its refreshing taste and versatility.', price: 88.75 }
];

mongoose.connect('mongodb://localhost:27017/veggies_and_fruits')
.then(() => {
    console.log('MongoDB connected');
    return Product.insertMany(mixedArray);
}).then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
}).catch(err => {
    console.error('Error:', err);
});
