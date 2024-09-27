import Link from "next/link";
import { getUser, getSignInUrl } from "@workos-inc/authkit-nextjs"


export default async function Header() {
    const {user} = await getUser();
    const signInUrl = await getSignInUrl();
    return (
        <header>
            <div className="flex items-center justify-between mx-auto">
                <Link href="/" className="font-bold text-xl">Recruiters Rain</Link>
                <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md">
                    {!user && (
                        <Link className="bg-gray-200" href={'/login'}>Login</Link>
                    )}
                    <Link className="bg-blue-500 text-white" href={'/new-listing'}>Post a job</Link>
                </nav>
            </div>
        </header>
    )
}