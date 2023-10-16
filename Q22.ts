// Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.

let guest= ["ushba", "bisma", "hamza", "syed"];
console.log(guest[5]);
console.log(guest[0]);


const items = [
    {
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
    },
    {
      name: "Book",
      price: 12.99,
      category: "Education",
    },
    {
      name: "T-shirt",
      price: 19.99,
      category: "Clothing",
    },
  ];
  
  // Attempt to access an item with an invalid index (out of bounds)
  const invalidIndex = 2 // This index is out of bounds
  
  try {
    console.log("Name:", items[invalidIndex]["name"]);
    console.log("Price:", items[invalidIndex]["price"]);
    console.log("Category:", items[invalidIndex]["category"]);
  } catch (error) {
    console.error("An error occurred:", error);
  }
  
  // This code block will never be reached due to the error
  console.log("This code will not be executed because of the error.");