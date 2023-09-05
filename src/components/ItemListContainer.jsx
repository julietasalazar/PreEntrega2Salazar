import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';


import data from "../data/products.json";

console.log(data);

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    const { id } = useParams();



    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 
            2000);
        });

        promise.then((data) => {
            if(!id) {
                setProducts(data);
            } else {
                const productsFiltered = data.filter((product) => product.category === id);
                setProducts(productsFiltered);
            }
        });
    }, []);



    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            <div>
                <ItemList products={products} />
            </div>
        </Container>
    );
}