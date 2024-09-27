
export default function JobRow() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-sm relative">
                <div className="absolute cursor-pointer top-4 right-4">
                    <svg className="text-gray-300 size-5" xmlns="http://www.w3.org/2000/svg" fill="#D1D5DB" width="800px" height="800px" viewBox="0 0 24 24">
        <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/>
                    </svg>
                </div>
                <div className="flex grow gap-4">
                    <div className="content-center">
                        <img
                        className="size-12"
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Spotify" />
                    </div>
                    <div className="grow sm:flex">
                        <div className="grow">
                        <div
                        className="text-gray-500 text-sm"
                        >Google</div>
                        <div
                        className="font-bold text-lg "
                        >Software Engineer</div>
                        <div
                        className="text-gray-400 text-sm"
                        >Remote &middot; Mumbai, India &middot; Full-time</div>
                        </div>
                        <div className="content-end text-gray-500 text-sm">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}