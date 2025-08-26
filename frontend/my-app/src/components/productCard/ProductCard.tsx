import { Product } from "@/types/ProductType";
import Image from "next/image";
import { useCartStore } from "@/lib/store/useCartStore";

export default function ProductCard(prod: Product) {
    const { addItem } = useCartStore();

    return (
        <div
            key={prod.id}
            className="group rounded-xl shadow-md hover:shadow-xl transition bg-gray-50 overflow-hidden">
            <div className="relative w-full h-60">
                {prod.badge && (
                    <span className="absolute top-2 left-2 z-1 bg-purple-600 text-white text-xs px-2 py-1 rounded-lg">
                        {prod.badge}
                    </span>
                )}
                <Image
                    src={prod.image}
                    alt={prod.name}
                    fill={true}
                    className="group-hover:scale-105 z-0 transition-transform object-cover"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                    {prod.name}
                </h3>
                <p className="text-purple-600 font-bold mt-2">{prod.price}</p>
                <button
                    onClick={() => addItem(prod)}
                    className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
                >
                    Ver produto
                </button>
            </div>
        </div>
    )
}