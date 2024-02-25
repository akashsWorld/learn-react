import React from 'react'
import {useParams,Link} from 'react-router-dom'

const ProductDetails = () => {

    // if any dynamic route value or path avriable present then 
    // it present in the params object as a key.
    const params = useParams();

  return (
    <div className='product-details'>
    <h1>This is Product Details page for Product {params.productId}</h1>
    {/* ".." means one step back to the previous page.
        For this case if this button is clicked then we back on Home page. Not the previous page.
        Because it takes to parent route url which is in this case /. 
    
    */}
    <button ><Link to= '..'>Go Back Root</Link></button>
    {/* But for this case only one step is back because it use relative path. so only
        One segemnt of the url is back.
    */}
    <button ><Link to= '..' relative='path' >Go Back Products Page</Link></button>
    </div>
  )
}

export default ProductDetails
