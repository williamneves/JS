function createPizza(crustType,sauceType,cheeses,toppings) {
    new_pizza = {}
    new_pizza.crustType = crustType;
    new_pizza.sauceType = sauceType;
    new_pizza.cheeses = cheeses;
    new_pizza.toppings = toppings;

    return new_pizza;
}

var peperoni_pizza = createPizza("deep dish", "traditional",["mozzarella"],["peperoni","sausage"])
var marinara_pizza = createPizza("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var cheese_pizza = createPizza("hand tossed", "traditional", ["double mozzarella"], ["oregano","tomatoes"])
var beef_pizza = createPizza("hand tossed", "marinara", ["muzzarella"], ["beef","olives","onions","mushrooms"])

var pizza_menu = [peperoni_pizza,marinara_pizza,cheese_pizza,beef_pizza]

function randomPizza(pizzaArray) {
    randomIndex = Math.floor(Math.random() * pizzaArray.length)
    return pizzaArray[randomIndex];
}
console.log(randomPizza(pizza_menu))