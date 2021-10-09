import Link from 'next/link'

function Header() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://img.icons8.com/ios-filled/48/000000/circled-a.png"/>
                    <span class="ml-3 text-xl">AAB Tokens</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/"><a class="mr-5 hover:text-gray-900">Home</a></Link>
                    <Link href="/create-item"><a class="mr-5 hover:text-gray-900">Sell Digital Assets</a></Link>
                    <Link href="/my-assets"><a class="mr-5 hover:text-gray-900">My Digital Assets</a></Link>
                    <Link href="/creator-dashboard"><a class="mr-5 hover:text-gray-900">Creator Dashboard</a></Link>
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header
