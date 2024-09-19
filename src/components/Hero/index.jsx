import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./style.css";

const Hero = () => {
  return (
    <section className="h-screen sm:h-[600px] flex items-center justify-center text-center bg">
      <div className="bg-slate-800 bg-opacity-70 h-full w-full p-10 flex items-center justify-center">
        <div>
          <h2 className="text-4xl lg:text-[60px] lg:leading-[3.5rem] font-bold text-slate-50 o inline-block sm:text-nowrap">
            <Typewriter
              words={['Welcome to CodeForce']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              delaySpeed={1000}
            />
          </h2>
          <p className="mt-4 lg:mt-8 text-lg text-slate-50">
            We build modern web solutions for your business needs.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-orange-500 text-slate-50 text-xl font-bold px-6 py-2 rounded-full link-animate"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import "./style.css";
// import video from "../../assets/videos/bg.mp4";
// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden h-screen sm:h-[600px] flex items-center justify-center text-center px-4">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="relative h-full w-full p-10 flex items-center justify-center">
//         <div>
//           <h2 className="text-4xl lg:text-[60px] lg:leading-[3.5rem] font-bold text-slate-50 o inline-block sm:text-nowrap">
//             <Typewriter
//               words={["Welcome to CodeForce"]}
//               loop={1}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               delaySpeed={1000}
//             />
//           </h2>
//           <p className="mt-4 lg:mt-8 text-lg text-slate-50">
//             We build modern web solutions for your business needs.
//           </p>
//           <Link
//             to="/contact"
//             className="mt-6 inline-block bg-orange-500 text-slate-50 text-xl font-bold px-6 py-2 rounded-full link-animate"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
