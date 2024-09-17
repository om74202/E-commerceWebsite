import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="h-24  flex items-center bg-black mt-0 sticky z-50" >
            <Link to={'/'}><img className="w-24 ml-5 mr-5 mt-4 object-contain" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img></Link>
            <div className="flex items-center rounded-3xl flex-1 mr-9">
                <input type="text" className="p-2.5 h-8 w-full"></input>
                <SearchIcon className="bg-orange-600 p-1.5 !h-8 !w-9 hover:bg-orange-800"/> 
            </div>
            <div className="flex justify-between ">
                <div className="flex ml-4 mr-4 text-white flex-col">
                    <span className="text-xs">
                        Hello
                    </span>
                    <span className="text-sm font-extrabold">
                        Sign in
                    </span>
                </div>
                <div className="flex ml-4 mr-4 text-white flex-col">
                <span className="text-xs">
                        Returns
                    </span>
                    <span className="text-sm font-extrabold">
                        & Orders
                    </span>
                </div>
                <div className="flex ml-4 mr-4 text-white flex-col">
                <span className="text-xs">
                        Your
                    </span>
                    <span className="text-sm font-extrabold">
                        Prime
                    </span>
                </div>
                <div className="flex ml-3 mr-3 text-white flex-row">
                    <Link to={'/checkout'}><ShoppingBasketIcon className="flex items-cente mr-2 text-white"/></Link>
                    <span className="text-white  items-center">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header