import React from 'react'

const Login = () => {
    return (
        <section>
            <div class="flex h-screen md:flex-row flex-col">
                <div class="w-full md:w-1/2 bg-[#40534C] md:px-4">
                    <div class="h-screen flex items-center justify-center">
                        <div class='grid'>
                            <h2 className="text-3xl font-bold leading-tight text-[black] sm:text-4xl">Login</h2>
                            <p className="mt-2 text-base text-[#D6BD98] mb-5"> Don&apos;t have an account?{' '}
                                <a href="#" title="" className="font-semibold text-black transition-all duration-200 hover:underline">Create a free account
                                </a> </p>
                            <form action="POST">
                                <div class='flex flex-col gap-2 text-lg'><p>Email Address</p>
                                    <input className="w-full rounded-lg px-2 py-2 bg-inherit border-2 border-[#D6BD98]" type="email" placeholder='Email' /> </div>
                                <div class="flex flex-col gap-2 mt-5">
                                    <div class='flex justify-between'>
                                        <p className='text-lg'>Password</p>  <a href="#" title="" className="font-semibold text-black transition-all duration-200 hover:underline"> Forgot your password?</a>
                                    </div>
                                    <input className='w-full rounded-lg px-2 py-2 bg-inherit border-2 border-[#D6BD98]' type="password" placeholder='Password' />
                                </div>
                            </form>
                        <div className=''>
                            <div>
                                <button type="button" className="mb-3 mt-5 inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                                    Log In
                                </button>
                            </div>
                            <button type="button" className="mb-3 relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                                <span className="mr-2 inline-block">
                                    <svg className="h-6 w-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                    </svg>
                                </span>
                                Sign in with Google
                            </button>
                            <button type="button" className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                                <span className="mr-2 inline-block">
                                    <svg className="h-6 w-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </span>
                                Sign in with Facebook
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 bg-[#677D6A] flex justify-center items-center">
                    <img src="/login.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Login
