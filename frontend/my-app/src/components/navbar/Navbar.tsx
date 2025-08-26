"use client"

import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"
import { useCartStore } from "@/lib/store/useCartStore"

export default function Navbar() {
    const { totalItems } = useCartStore();

    return (
        <header className="w-full bg-[#1F2937] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white hover:text-purple-600 transition-colors">
                    Looma
                </Link>

                {/* Links principais 
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
                </nav>*/}

                {/* Campo de busca */}
                <div className="hidden sm:flex items-center bg-white rounded-full px-3 py-3 text-gray-700">
                    <input
                        type="text"
                        placeholder="O que está procurando?"
                        className="outline-none text-sm w-32 sm:w-xl bg-transparent"
                    />
                    <Search className="w-4 h-4 text-gray-400" />
                </div>

                {/* Busca + Ícones */}
                <div className="flex items-center gap-4 sm:gap-10">
                    {/* Ícone Usuário/Login */}
                    <Link href="/login" className="hover:text-purple-600 transition-colors">
                        <div className="flex items-center gap-2">
                            <User className="w-6 h-6" />
                            <div className="hidden sm:flex sm:flex-col">
                                <p className="text-sm">Entre ou</p>
                                <p className="text-sm">Cadastre-se</p>
                            </div>
                        </div>
                    </Link>

                    {/* Ícone Carrinho */}
                    <Link href="/carrinho" className="hover:text-purple-600 transition-colors">
                        <div className="flex items-center gap-2">
                            <ShoppingCart className="w-6 h-6" />
                            <div className="hidden sm:flex sm:flex-col">
                                <p className="text-sm">Carrinho</p>
                                {totalItems === 0 ? (
                                    <p className="text-sm">Carrinho vazio</p>
                                ) : (
                                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}