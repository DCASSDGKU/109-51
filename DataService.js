

const catalog = [
    {
        title:"Tomatoes",
        image:"Tomato.jpg",
        price:3.99,
        category:"Vegetables",
        _id:"12345"
    },
    {
        title:"Japanese Wagyu Beef",
        image:"Beef.jpg",
        price:8.99,
        category:"Meat",
        _id:"12346"
    },
    {
        title:"Spinach",
        image:"Spinach2.jpg",
        price:5.99,
        category:"Vegetables",
        _id:"12347"
    },
    {
        title:"King Salmon",
        image:"King Salmon.jpg",
        price:6.99,
        category:"Seafood",
        _id:"12348"
    },
    {
        title:"Organic Chicken",
        image:"Chicken1.jpg",
        price:5.99,
        category:"Poultry",
        _id:"12344"
    },
    {
        title:"Orange Juice",
        image:"Orange.jpg",
        price:4.99,
        category:"Beverages",
        _id:"12425"
    },
    {
        title:"Strawberry",
        image:"Strawberry.jpg",
        price:3.99,
        category:"Fruits",
        _id:"12426"
    },
    {
        title:"Organic Bread of Heaven",
        image:"Bread.jpg",
        price:2.99,
        category:"Bakery",
        _id:"12426"
    },
];

class DataService{
    getProducts(){
        return catalog;
    }

    getCategories() {
        return ["Fruits", "Vegetables", "Beverages", "Bakery", "Seafood"];
        
    }
}

export default DataService;

