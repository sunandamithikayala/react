import { useEffect,useState } from "react";
export function NestedBinding(){
    const [ items,setItems] = useState(
        
            [
                {category:'Electronics',products:['watches','mobiles','fridge']},
                {category:'Footwear',products:['shoes','causals','sneakers']}

            ]
        

    );
    useEffect(()=>{

    },[]);
    return(
        <div className="container-fluid">
            <h2>Menu</h2>
            <ol>
                {
                    items.map(item=><li key={item}>{item.category}
                    {
                        <ul>
                            {
                                item.products.map(product=><li key={item}>{products}</li>)
                            }
                        </ul>
                    }
                    </li>)
                }
            </ol>
            <h2>Menu</h2>
            <select>
                {
                    items.map(item=><optgroup label={item.category} key={item}>
                        {
                            item.products.map(product=><option key={product}>{product}</option>)
                        }
                    </optgroup>)
                }
            </select>
        </div>
    )
   
}