type User = {
  type: 'user';
  name: string;
  age: number;
 };
 
 type Product = {
  type: 'product';
  id: number;
  price: number;
 };
 
 type Order = {
  type: 'order';
  orderId: string;
  amount: number;
 };

 const handleData = (data: (User | Product | Order)[]): string[]=> {
  /**
   * 
   */
  return data.map(item=>{
    switch (item.type) {
      case "user":
        return `Hello, ${item.name}`
      case "product":
        return `Product id: ${item.id}, price: ${item.price}`
      case "order":
        return `Order Id: ${item.orderId}, amount: ${item.amount}`
      default:
        return "Invalid data"
    }
  })
  
//   return data
//     .map(item=>{
//       if(item.type === "user"){
//         return `Hello, ${item.name}`
//       }else if(item.type === "product"){
//         return `Product id: ${item.id}, price: ${item.price}`
//       }else if(item.type === "order"){
//         return `Order Id: ${item.orderId}, amount: ${item.amount}`
//       }
//     return "Invalid data"
//   })
 
 }

 console.log(
  handleData(
    [
      { type: 'user', name: 'John', age: 25 },
      { type: 'product', id: 101, price: 29.99 },
      { type: 'order', orderId: 'ORD123', amount: 150.75 }
    ]
   )
 )
