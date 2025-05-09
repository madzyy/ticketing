import Link from "next/link";
import logo from "@/images/logo.png"
import Image from "next/image";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

export default function Header(){
    return(
        <div className="border-b">
            <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
                <div className="flex items-center justify-between w-full lg:w-auto"> 
                    <Link href="/" className="font-bold shrink-0">
                    <Image src={logo} alt="logo" width={100} height={100} className="w-24 lg:w-28"/>
                    </Link>

                    <div className="lg:hidden">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">Sign In</button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
                
                {/* search bar - full width on mobile */}
                <div className="w-full lg:max-w-2">
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}