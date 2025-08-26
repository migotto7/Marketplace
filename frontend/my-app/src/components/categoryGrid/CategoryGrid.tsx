import Image from "next/image"

const categories = [
    { name: "Camisas", image: "/categories/shirt.jpg" },
    { name: "Calças", image: "/categories/pants.jpg" },
    { name: "Moletons", image: "/categories/hoddie.jpg" },
    { name: "Futebol", image: "/categories/soccer.jpg" },
]

export default function CategoryGrid() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Explore por categorias
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {categories.map((categorie) => (
                        <a
                            key={categorie.name}
                            href={`/category/${categorie.name.toLowerCase()}`}
                            className="group block rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition"
                        >
                            <div className="relative w-full h-40">
                                <Image 
                                    src={categorie.image}
                                    alt={categorie.name}
                                    fill={true}
                                    className="group-hover:scale-105 transition-transform object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-indigo-600">
                                    {categorie.name}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}