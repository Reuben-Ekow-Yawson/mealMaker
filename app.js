const menu = {
    _courses : {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(appetizers){
        this._courses.appetizers = appetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    set mains(mains){
        this._courses.mains = mains;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set desserts(desserts){
        this._courses.desserts = desserts;
    },
    get courses(){
        return {
     
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name:  dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);

    },
    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    },
    generateRandomMeal(){
        const myAppetizer = this.getRandomDishFromCourse("appetizers");
        const myMain = this.getRandomDishFromCourse("mains");
        const myDessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = myAppetizer.price+ myMain.price + myDessert.price;
        return "A " + myAppetizer.name + ", " + myMain.name + ", " + myDessert.name + " and the price will be:  gh₵" + totalPrice;    
    }
}


menu.addDishToCourse('appetizers', 'kelewele', 3);
menu.addDishToCourse('appetizers', 'meatpie', 2);
menu.addDishToCourse('appetizers', 'atsomo', 1);

menu.addDishToCourse('mains', 'beef', 4);
menu.addDishToCourse('mains', 'salmon', 5);
menu.addDishToCourse('mains', 'shrimp', 10);

menu.addDishToCourse('desserts', 'Brukina', 5);
menu.addDishToCourse('desserts', 'Asaana', 1);
menu.addDishToCourse('desserts', 'Sobolo', 1);

let meal = menu.generateRandomMeal();
console.log(meal);