"use client"

import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"

export default function Navbar() {
    return (
        <header className="w-full bg-[#1F2937] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white hover:text-purple-600 transition-colors">
                    Looma
                </Link>

                {/* Links principais */}
                <nav className="hidden md:flex gap-6 text-base font-medium">
                    <Link href="/" className="hover:text-purple-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/categorias" className="hover:text-purple-600 transition-colors">
                        Categorias
                    </Link>
                    <Link href="/ofertas" className="hover:text-purple-600 transition-colors">
                        Ofertas
                    </Link>
                </nav>
                {/* Busca + Ícones */}
                <div className="flex items-center gap-4">
                    {/* Campo de busca */}
                    <div className="hidden sm:flex items-center bg-white rounded-full px-3 py-1 text-gray-700">
                        <Search className="w-4 h-4 mr-2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="outline-none text-sm w-32 sm:w-48 bg-transparent"
                        />
                    </div>

                    {/* Ícone Carrinho */}
                    <Link href="/carrinho" className="hover:text-[#F97316] transition-colors">
                        <ShoppingCart className="w-6 h-6" />
                    </Link>

                    {/* Ícone Usuário/Login */}
                    <Link href="/login" className="hover:text-[#0EA5E9] transition-colors">
                        <User className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </header>
    )
}