import { useEffect,useState } from "react";
export function TableBinding(){
    const [products] = useState([{Name:'apple',price:120},{Name:'guava',price:400}]);
    useEffect(()=>{

    },[]);
    return(
        <div className="container-fluid">
            <h2>product Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=><tr key={product.Name}><td>{product.Name}</td><td>{product.price}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}