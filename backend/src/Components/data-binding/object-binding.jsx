import { useEffect,useState } from "react";

export function ObjectBinding(){

    const[product ,setProduct] = useState({});
    useEffect(()=>{
        setProduct({Name:'panasonic',price:56000,stock:'true'})
    },[]);
    return (
        <div className="container-fluid">
            <h2>product details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>price</dt>
                <dd>{product.price}</dd>
                <dt>stock</dt>
                <dd>{product.stock}</dd>
            </dl>
            <h2>keys</h2>
            <ul>
                {
                    Object.keys(product).map(key=><li key={key}>{key}:{product[key]}</li>)
                }
            </ul>
        </div>
    )
}