
import Navbar from "../components/Navbar"
import TopHeader from "../components/topHeader"
import Footer from "../components/footer"
import { Link } from "react-router-dom";

const Login = () => {
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
                backgroundImage: "url('https://foundation.blackeconomicalliance.org/app/uploads/2023/08/three-coworkers-having-a-discussion-in-modern-office-social-1024x536.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/0 via-yellow-300/30 to-black/50" />


            {/* Content over image */}
            <div className="relative z-10 w-full h-full">
              <Navbar stripPadding={'true'} />
              <div className="flex flex-col items-center justify-end h-5/7">
                <h1 className="text-neutral-100 text-6xl xl:text-9xl font-bold">Login</h1>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-black p-10 pt-30 mb-30">
            <form className="flex flex-col gap-4 lg:w-2/5 m-auto text-gray-500">
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

              <div className="flex items-center justify-start gap-5 mt-5">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  placeholder="Confirm password"
                />
                <label className="font-semibold">Keep me signed in</label>
              </div>

              <div className="w-full flex items-center justify-between gap-3">
                <button
                  type="submit"
                  className="px-10 py-3 rounded bg-blue-400 text-white hover:bg-blue-500 transition-colors cursor-pointer w-1/2"
                >
                  Login
                </button>
                <Link
                  type="submit"
                  className="px-10 py-3 bg-gray-100 rounded text-secondary-dark hover:bg-gray-200 transition-colors cursor-pointer w-1/2 shadow-md text-center"
                  to={'/register'}
                >
                  Register
                </Link>
              </div>
              <p className="hover:underline hover:cursor-pointer text-center">Forgot your password?</p>
            </form>

            <div className="bg-white text-secondary-dark flex flex-col lg:flex-row items-start justify-between mt-10 gap-4">
              <div className="w-full lg:w-1/2 p-5 lg:p-10 xl:p-15">
                <div className="h-1 bg-primary w-30 mb-4"></div>
                <h4 className="text-4xl lg:text-5xl lg:leading-15 font-bold mb-5"> Innovation and Creativity</h4>
                <p className="">
                  We aim to continuously innovate and bring creative solutions to the table. Our team is passionate about designing custom services—whether it’s a unique t-shirt print or a tailored web design—that reflects the individuality and vision of our clients.
                </p>
              </div>
              <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                <img src="http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/slide-image-free-img.jpg" alt="login-bottom-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;




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