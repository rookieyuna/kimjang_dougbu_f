export default function TailWind01 () {

    return (
        <div className="w-96 bg-slate-300 px-10 py-20 flex flex-col space-y-7">
            <div className="bg-white py-5 px-6 rounded-3xl shadow-2xl">
                <div className="text-3xl font-bold">
                    Select Item
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <div className="text-gray-500">Grey Chair</div>
                        <div className="font-medium">$19</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Grey Chair</div>
                        <div className="font-medium">$19</div>
                    </div>
                    <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
                        <div className="font-bold">Total</div>
                        <div className="font-medium">$38</div>
                    </div>
                </div>
                <div className="bg-blue-400 w-40 py-2 mt-3 rounded-md text-white text-center font-semibold mx-auto">Checkout</div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-blue-600 pt-5 pb-12 px-6">
                    <div className="text-white text-xl">Profile</div>
                </div>
                <div className="bg-white rounded-3xl relative -top-6">
                    <div className="flex justify-between pt-4 px-5 text-center">
                        <div className="">
                            <div className="text-sm text-gray-400 font-semibold">Orders</div>
                            <div className="font-bold">400</div>
                        </div>
                        <div className="bg-pink-400 rounded-full w-20 h-20 relative -m-12"></div>
                        <div>
                            <div className="text-sm text-gray-400 font-semibold">Spent</div>
                            <div className="font-bold">$555</div>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <div className="font-bold">Jang Yuna</div>
                        <div className="text-md text-gray-400">Korea</div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-2xl">
                <div className="flex justify-between">
                    <div>⬅️</div>
                    <div className="flex space-x-2">
                        <div className="font-semibold">⭐ 4.9</div>
                        <div>❤️</div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="bg-gray-500 h-60"></div>
                </div>
                <div className="flex flex-col mt-5">
                    <span className="text-2xl font-bold">Swoon Lounge</span>
                    <span className="text-sm text-gray-500">Chair</span>
                    <div className="flex justify-between items-center mt-3">
                        <div className="space-x-2">
                            <button className="w-5 h-5 rounded-full bg-yellow-200"></button>
                            <button className="w-5 h-5 rounded-full bg-pink-200"></button>
                            <button className="w-5 h-5 rounded-full bg-green-200"></button>
                        </div>
                        <div className="space-x-3 flex items-center">
                            <button className="bg-gray-300 w-8 rounded-lg aspect-square text-xl">-</button>
                            <span>1</span>
                            <button className="bg-gray-300 w-8 rounded-lg aspect-square text-xl">+</button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <span className="text-3xl font-bold">$450</span>
                        <button className="px-5 py-2 bg-blue-700 text-white font-bold text-sm rounded-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}