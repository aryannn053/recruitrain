
export default async function Hero() {
        return (
        <section className="container my-16">
            <h1 className="text-4xl font-bold text-center py-4">
                Explore and find your <br/> dream job 
            </h1>
            <p className="text-center text-gray-600 pb-4">
                Looking for a job that you wanted from such a long time? Don't worry this job board project can help you find new jobs! Start the journey by searching for a role!
            </p>
            <form className="flex gap-2 mt-4 max-w-md mx-auto">
                <input type="search" className="border border-gray-400 w-full py-2 px-3 rounded-md" placeholder="Search phrase..."/>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
            </form>
        </section>
    );
}1