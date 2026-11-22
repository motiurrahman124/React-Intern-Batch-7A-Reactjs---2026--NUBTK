import { useParams } from "react-router"
import Footer from "./common/Footer"
import Header from "./common/Header"

function ProductDetails(){
    const params = useParams();
    console.log(params.id);
    
    return(
        <div>
            <h1>This is product details page</h1>
            <p>The id is: {params.id}</p>
        </div>
    )
}

export default ProductDetails