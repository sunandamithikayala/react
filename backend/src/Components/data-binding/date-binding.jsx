import { useEffect,useState } from "react";
import moment from "moment";
export function DateBinding(){
    const [mfd] = useState(new Date());
    useEffect(()=>{

    },[]);
    return(
        <div className="container-fluid">
            <h2>{moment(mfd).format('DD dddd,MMMM YYYY')}</h2>
        </div>
        
    )
}