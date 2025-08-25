import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="w-full bg-gray-100 dark:bg-gray-900 py-20">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 md:px-4">

                {/* Texto Principal */}
                <div className="max-w-lg text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                        Descubra moda e estilo <span className="text-purple-600">do seu jeito</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        Conectamos você às melhores peças de roupas e acessórios em um só lugar.
                    </p>
                    {/* Botões */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-xl text-lg">
                            Explorar agora
                        </Button>
                        <Button variant="outline" className="border-1 border-[#2ECC71] text-[#2ECC71] px-6 py-6 rounded-xl text-lg ">
                            Ver promoções
                        </Button>
                    </div>
                </div>

                {/* Imagem de destaque */}
                <div className="mt-10 md:mt-0">
                    <Image
                        src="/clothes_hero.jpg"
                        alt="Looma marketplace fashion"
                        width={450}
                        height={450}
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}