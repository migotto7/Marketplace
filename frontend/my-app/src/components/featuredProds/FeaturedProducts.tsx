import Image from "next/image"
import ProductCard from "../productCard/ProductCard"

const products = [
    {
        id: 1,
        name: "Camiseta Oversized Looma",
        price: "R$ 119,90",
        image: "/products/noctaJkt.webp",
        badge: "Novo",
    },
    {
        id: 2,
        name: "Camiseta Oversized Looma",
        price: "R$ 119,90",
        image: "/products/pietXoakley.webp",
        badge: "Novo",
    },
    {
        id: 3,
        name: "Camiseta Oversized Looma",
        price: "R$ 119,90",
        image: "/products/nikeJkt.webp",
        badge: "Promoção",
    },
    {
        id: 4,
        name: "Camiseta Oversized Looma",
        price: "R$ 119,90",
        image: "/products/lvJkt.png",
    },
]

export default function FeaturedProducts() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#1F2937] w-full py-4 px-6">
                    <h2 className="text-2xl font-bold text-white">
                        Produtos em destaque
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10">
                    {products.map((product) => (
                        ProductCard(product)     
                    ))}
                </div>
            </div>
        </section>
    )
}