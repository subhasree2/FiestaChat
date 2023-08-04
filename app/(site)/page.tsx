import Image from "@/node_modules/next/image"
import Head from "@/node_modules/next/head"

export default function Home() {
    return (
        <>
            <Head>
                <title>FiestaChat</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="flex min-h-full flex-col justify-center py-12 px-8 bg-gray-100">
                <div className="flex items-center flex-col">
                    <Image src="/logo.png" height={48} width={48} alt="Logo" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
            </div>
        </>
    )
}
