import { SubTotal } from "../components/SubTotal";


function CheckoutPage(){
    return <div className="flex pl-5 pt-5 bg-white h-max ">
        <div className="w-3/4">
            <img className="mb-2 w-full" src="https://m.media-amazon.com/images/G/01/GiftCards/2024/Q2/VX-2489/Lifestyle-TEST/VX-2489-Desktop_GCLP_Hero_3400x680_EN_Lifestyle._SX3000_QL85_.jpg"/>
            <div>
            <h2 className="mr-2 p-2 border-b border-b-gray-500">Your shopping baskets</h2>
            </div>
        </div>
        <div className="w-80 ml-5">
            <SubTotal/>    
        </div>
    </div>
}

export default CheckoutPage;