
const data=[
    {
        "id": 1,
        "image_url": "https://m.media-amazon.com/images/I/5165He67NEL.jpg",
        "name": "Harry ",
        "author": "J. K. Rowling",
        "qty": 1,
        "edition": "2021",
        "publisher": "Bloomsbury",
        "cost": 1299,
        "borrowed": false
      },
      {
        "id": 2,
        "image_url": "https://m.media-amazon.com/images/I/5165He67NEL.jpg",
        "name": "Harry ",
        "author": "J. K. Rowling",
        "qty": 1,
        "edition": "2021",
        "publisher": "Bloomsbury",
        "cost": 1000,
        "borrowed": false
      },
      {
        "id": 3,
        "image_url": "https://m.media-amazon.com/images/I/5165He67NEL.jpg",
        "name": "Harry ",
        "author": "J. K. Rowling",
        "qty": 1,
        "edition": "2021",
        "publisher": "Bloomsbury",
        "cost": 400,
        "borrowed": true
      }
]
const initdata={
    Products: []
}
let Addtocart_reducer = (state = initdata, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        state = {
          ...state,
          Products: [...state.Products, action.payload],
        };
  
        break;
      case "INCREASE_QUANTITY":
        const items = state.Products.map((e) => {
          if (e.id=== action.payload) {
            e.qty += 1;
          }
          return e;
        });
        state = {
          ...state,
          Products: items,
        };
        //localStorage.setItem("Cartdata1", JSON.stringify(items));
        break;
      case "DECREASE_QUANTITY":
        const products = state.Products.map((e) => {
          if (e.id === action.payload) {
            if (e.qty > 1) {
              e.qty -= 1;
            }
          }
          return e;
        });
        state = {
          ...state,
          Products: products,
        };
        //localStorage.setItem("Cartdata1", JSON.stringify(products));
        break;
      case "RMV_CART":
        const list = state.Products.filter((e) => {
          return e.id !== action.payload;
        });
        state = {
          ...state,
          Products: list,
        };
        //localStorage.setItem("Cartdata1", JSON.stringify(list));
        break;
    }
    return state;

  };
  export default Addtocart_reducer;