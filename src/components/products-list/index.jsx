import ProductItem from "./components/product-item";
import "./style.css";


const dummyProducts = ["Product1","Product2","Product3"];

function ProductList({name,city,listofProduct}){

  return (
  <div>
    <h3 class="title">E commerce Project</h3>
   {/* <ProductItem/> */}
   <h4>My name is {name} is Belongs to {city}</h4>
   <ul>
    { listofProduct.map((item,index)=>(
      <ProductItem singleProductItem={item} key={index}/>
    ))
    }
   </ul>
  </div>
  )
}

export default ProductList;