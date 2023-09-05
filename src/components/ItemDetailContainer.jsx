import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemDetail } from './ItemDetail';


import data from "../data/products.json";

console.log(data);

export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find(product => product.id === id);
                resolve(productById);
            }, 2000);
        });

        getItem.then((data) => setProduct(data));
    }, []);

    if (!product) return <div>Loading...</div>;

    console.log(product);

    return (
        <Container className='mt-4'>
            <h1>Detalle</h1>
            <ItemDetail product={product} />
        </Container>
    );
};