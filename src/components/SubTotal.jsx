

export function SubTotal({items,totalValue}){
    return <div className="flex flex-col justify-between w-full h-2/3 bg-gray-200 rounded-md">
        <div className="pt-5 pl-5">
            Subtotal ({items} products):$ {totalValue}
        </div>
        <div className="p-5">
            <input type="checkbox" />This order contains a gift
        </div>
        <div className="pl-5 pr-5">
            
            <button type="button" className="justify-center w-full text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none
             focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
Proceed to checkout
</button>
        </div>
    </div>
}