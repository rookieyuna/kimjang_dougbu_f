
export default function Tailwind01 () {
    return (
        <div className="w-96 bg-slate-400 py-10 px-10 grid gap-4 h-fit min-g-screen">
            <div className="rounded-xl bg-white px-4 py-5 shadow-xl">
                <div className="font-bold text-2xl">Select Item</div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Grey hair</span>
                    <span className="font-semibold">$19</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Perfect Chair</span>
                    <span className="font-semibold">$19</span>
                </div>
                <div className="flex justify-between text-sm border-t-2 border-dashed border-r-slate-500 mb-4">
                    <span className="font-bold text-gray-600">Total</span>
                    <span className="font-semibold">$38</span>
                </div>
                <div className="text-center bg-blue-500 text-white text-sm rounded-md p-1 w-24 mx-auto">Checkout</div>
            </div>

            <div className="rounded-xl overflow-hidden bg-white shadow-xl">
                <div className="bg-blue-500 text-white text-lg pt-4 pl-4 pb-10">Profile</div>
                <div className="rounded-xl bg-white relative my-2 -top-7 pt-4 px-4">
                    <div className="flex justify-between text-center -mb-4">
                        <div>
                            <div className="text-gray-500 text-xs">Orders</div>
                            <div className="font-bold">340</div>
                        </div>
                        <div className="relative rounded-full bg-red-300 w-20 h-20 -top-10"></div>
                        <div>
                            <div className="text-gray-500 text-xs">Spent</div>
                            <div className="font-bold">$340</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-sm">Soocone</div>
                        <div className="text-xs text-gray-500">한국</div>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg flex flex-col">
                <div className="flex justify-between mb-3">
                    <button>
                        ⬅
                    </button>
                    <div className="space-x-2">
                        <span>⭐4.9</span>
                        <button className="shadow-xl shadow-slate-400">💓</button>
                    </div>
                </div>
                <div className="h-60 bg-gray-400 text-center align-middle text-9xl mb-5 p-10">🎄</div>
                <div>
                    <div className="font-bold text-lg">Swoon Lounge</div>
                    <div className="text-xs text-gray-500">Chair</div>
                    <div className="flex justify-between my-3">
                        <div className="space-x-2">
                            <button className="w-5 h-5 rounded-full bg-yellow-300"></button>
                            <button className="w-5 h-5 rounded-full bg-teal-900"></button>
                            <button className="w-5 h-5 rounded-full bg-violet-400"></button>
                        </div>
                        <div className="space-x-4">
                            <button className="aspect-square w-7 h-7 rounded-lg bg-orange-300 text-gray-500 font-semibold text-base">-</button>
                            <span className="font-semibold text-base">1</span>
                            <button className="aspect-square w-7 h-7 rounded-lg bg-orange-300 text-gray-500 font-semibold text-base">+</button>
                        </div>
                    </div>
                    <div className="flex justify-between align-middle text-center">
                        <span className="font-bold text-2xl">$450</span>
                        <button className="rounded-lg bg-rose-300 text-sm text-white px-6 py-1">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="rounded-xl bg-white"></div>
        </div>
    )
}