export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-3xl font-bold">Welcome to Nexx 🎉</h1>

                <p className="mt-3 text-2xl">
                    Nexx is a personal One Drive Index. Continue to setup Nexx
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="/setup"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Setup &rarr;</h3>
                        <p className="mt-4 text-xl">Start the setup process</p>
                    </a>
                </div>
            </main>
        </main>
    );
}
