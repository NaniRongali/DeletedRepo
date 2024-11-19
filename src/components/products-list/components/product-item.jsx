

function Button(){
  return(
    <button>Click</button>
  )
}



function ProductItem({singleProductItem,key}){
  return (
  <div key={key}>
    <p>{singleProductItem}</p>
    <Button/>
  </div>
  )
}

export default ProductItem;