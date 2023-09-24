import { useContext } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)
    const onAdd = count => addItem(product, count)

    return (
        <div>
            <h2> {product.title} </h2>
            <img src={product.pictureUrl} alt='product-picture' />
            <div> {product.stock} </div>
            < ItemCount onAdd={onAdd}/>
        </div>
    )
}