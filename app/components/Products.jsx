'use client'

const Products = () => {
    const products = [
        // { id: 1, name: 'Product 1', price: 100 },
        // { id: 2, name: 'Product 2', price: 200 },
        // { id: 3, name: 'Product 3', price: 300 },
    ]
// if(products.length === 0) {
//     return <p>No products available</p>
// }
    return (

        // products.length === 0 ? (
        //     <p>No products available</p>
        // ) : (
        products && (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
        )
    )
    // )
}

export default Products