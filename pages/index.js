import Link from "next/link"

export default function HomePage() {
    return (
        <div>
            <h1>Alura Cases - Home page</h1>
            <Link href="/faq">
                Ir para a página do FAQ
            </Link>
        </div>
    )
}