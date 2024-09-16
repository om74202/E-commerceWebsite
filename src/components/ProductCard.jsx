import React from "react"; 
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';



 function ProductCard({description,rating,price,imgSource}){
    return <div className="flex flex-col items-center bg-white z-10 min-w-24 max-h-96 justify-end m-2 p-5 hover:scale-110 duration-300 ">
        <div >
            <p className="max-h-24 ">{description}</p>

            <div className="">
                <small>$ </small><strong>{price}</strong>
            </div>

            <div>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarBorderPurple500OutlinedIcon/>
                ))}
            </div>

            <img src={imgSource} className="object-contain w-full max-h-52 mb-4"/>

            <div className="flex justify-center">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"> Add to cart </button>
            </div>
        </div>
    </div>
}

export default ProductCard;