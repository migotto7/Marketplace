import { Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1F2937] text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo + Descrição */}
                <div>
                    <h2 className="text-2xl font-bold">Looma</h2>
                    <p className="mt-3 text-sm text-gray-200">
                        Seu marketplace vibrante para encontrar produtos únicos e criativos.
                    </p>
                </div>

                {/* Links rápidos */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-purple-600">Home</Link></li>
                        <li><Link href="/categories" className="hover:text-purple-600">Catergorias</Link></li>
                        <li><Link href="/about" className="hover:text-purple-600">Sobre</Link></li>
                        <li><Link href="/contact" className="hover:text-purple-600">Contato</Link></li>
                    </ul>
                </div>

                {/* Suporte */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Suporte</h3>
                    <ul className="space-y-2">
                        <li><Link href="/faq" className="hover:text-purple-600">FAQ</Link></li>
                        <li><Link href="/help" className="hover:text-purple-600">Central de Ajuda</Link></li>
                        <li><Link href="/returns" className="hover:text-purple-600">Trocas & Devoluções</Link></li>
                    </ul>
                </div>

                {/* Redes Sociais */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-purple-600"><Youtube /></a>
                        <a href="#" className="hover:text-purple-600"><Instagram /></a>
                        <a href="#" className="hover:text-purple-600"><Twitter /></a>
                    </div>
                </div>
            </div>

            {/* Linha final */}
            <div className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-300">
                © {new Date().getFullYear()} Looma. Todos os direitos reservados.
            </div>
        </footer>
    )
}