import Navbar from "../components/Navbar"
import TopHeader from "../components/topHeader"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="bg-whiteh-screen bg-gray-100"> {/* Outer padded component */}
            <TopHeader />
            <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42">
                {/* Scrollable content */}
                <div className="overflow-auto  h-full">
                    {/* Frame with background image */}
                    <div className="h-10 bg-white">

                    </div>
                    <section className="relative h-[300px] md:h-[400px] xl:h-[500px] flex items-start justify-between text-white">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-fixed bg-center bg-cover"
                            style={{
                                backgroundImage: "url('https://fineproxy.org/wp-content/uploads/2023/05/Register.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Content over image */}
                        <div className="relative z-10 w-full h-full">
                            <Navbar stripPadding={'true'} />
                            <div className="flex flex-col items-start justify-end h-5/7">
                                <div className="h-1 bg-primary w-30 mb-8"></div>
                                <h1 className="text-neutral-100 text-6xl xl:text-9xl font-bold">Register</h1>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-white p-10 py-30">
                        <form className="flex flex-col gap-4 lg:w-2/5 m-auto">
                            <label className="font-semibold -mb-2">Username or Email</label>
                            <div className="flex gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="First"
                                    className="w-full p-2 border border-gray-300 focus:outline-none focus:border-1 focus:border-dotted focus:border-gray-600 bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <label className="font-semibold -mb-2">Password</label>
                            <input
                                type="password"
                                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:border-dotted focus:border-gray-600 bg-gray-50 focus:bg-white w-full"
                            />

                            <label className="font-semibold -mb-2">Confirm password</label>
                            <input
                                type="password"
                                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:border-dotted focus:border-gray-600 bg-gray-50 focus:bg-white w-full"
                                placeholder="Confirm password"
                            />

                            <div className="w-full flex items-center justify-between gap-3">
                                <button
                                    type="submit"
                                    className="px-10 py-3 rounded bg-blue-400 text-white hover:bg-blue-500 transition-colors cursor-pointer w-1/2"
                                >
                                    Register
                                </button>
                                <Link
                                    type="submit"
                                    className="px-10 py-3 bg-gray-100 rounded text-secondary-dark hover:bg-gray-200 transition-colors cursor-pointer w-1/2 shadow-md text-center"
                                    to={'/login'}
                                >
                                    Login
                                </Link>
                            </div>
                        </form>
                    </section>

                    <section className="bg-secondary-dark p-10 py-15 md:py-20 lg:py-30 flex flex-col md:flex-row items-center justify-between mb-40 gap-10 md:gap-0">
                        <h4 className="text-4xl font-bold text-neutral-100 w-full md:w-1/2">Let us together build a flourishing business</h4>
                        <p className="text-neutral-100 w-full md:w-1/2">
                            When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
                        </p>
                    </section>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;




// {/* <div
// className="inset-0 z-0  m-auto pt-10"
// style={{
//     backgroundImage: "url('https://advancedtechcomputercenter.site/wp-content/uploads/2025/04/pexels-photo-792199-1.webp')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat'
// }}
// />
// {/* Color Overlay */}
// <div className="fixed inset-0 z-0" style={{ backgroundColor: '#1d3951cc' }}></div> */}