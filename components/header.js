import Link from "next/link"

export default function Header(){
    return(

        <header className=" py-2">

            <nav>
                <div className="flex items-start justify-items-start justify-start">
                    <h1 className="text-pink-300  text-4xl font-bold p-6">theseem.co</h1>
                </div>
            </nav>

            


            <p className=" flex items-center justify-items-center justify-center py-2 ">
                Worldwide Shipping نوصل لجميع دول الخليج
            </p>


            <nav className=" flex items-center justify-items-center justify-center space-x-4 ">


                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>

                <Link href="/product">
                    <a>
                        Products
                    </a>

                </Link>

                <Link href="/about">
                    <a>
                        Our Story
                    </a>
                </Link>

                <Link href="/contact">
                    <a>
                        Contact
                    </a>
                </Link>
            </nav>
        </header>
    )
}