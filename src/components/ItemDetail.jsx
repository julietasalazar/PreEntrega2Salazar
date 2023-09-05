export const ItemDetail = ({product}) => (
    <div>
        <h2> {product.title} </h2>
        <img src={product.pictureUrl} alt='product-picture' />
        <div> {product.stock} </div>
    </div>
);