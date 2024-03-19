import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
const Gallery = () => {
    return (
        <motion.div
            initial="hidden"
            className="container my-10"
        >
            <SectionTitle name="Gallery" title="Explore captivating scenes" />
            <LightGallery
                elementClassNames="max-w-5xl mx-auto columns-1 sm:columns-2  md:columns-4  lg:columns-5 "
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="images/donation0.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation0.jpg"
                    />
                </a>
                <a href="images/donation1.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation1.jpg"
                    />
                </a>
                <a href="images/donation3.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation3.jpg"
                    />
                </a>
                <a href="images/donation4.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation4.jpg"
                    />
                </a>
                <a href="images/donation5.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation5.jpg"
                    />
                </a>
                <a href="images/donation6.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation6.jpg"
                    />
                </a>
                <a href="images/donation7.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation7.jpg"
                    />
                </a>
                <a href="images/donation8.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation8.jpg"
                    />
                </a>
                <a href="images/donation9.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation9.jpg"
                    />
                </a>
                <a href="images/donation10.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation10.jpg"
                    />
                </a>
                <a href="images/donation11.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation11.jpg"
                    />
                </a>
                <a href="images/donation12.png">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation12.png"
                    />
                </a>
                <a href="images/donation13.jpg">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation13.jpg"
                    />
                </a>
                <a href="images/donation14.webp">
                    <img
                        className="my-3"
                        alt=""
                        loading="lazy"
                        src="images/donation14.webp"
                    />
                </a>
            </LightGallery>
            <div></div>
        </motion.div>
    );
};

export default Gallery;












// import donation0 from "../../assets/donation0.jpg";
// import donation1 from "../../assets/donation1.jpg";
// import donation2 from "../../assets/donation2.jpg";
// import donation3 from "../../assets/donation3.jpg";
// import donation4 from "../../assets/donation4.jpg";
// import donation5 from "../../assets/donation5.jpg";
// import donation6 from "../../assets/donation6.jpg";
// import donation7 from "../../assets/donation7.jpg";
// import donation8 from "../../assets/donation8.jpg";
// // import donation0 from "../../assets/donation0.jpg";
// // import donation0 from "../../assets/donation0.jpg";
// // import donation0 from "../../assets/donation0.jpg";
// // import donation0 from "../../assets/donation0.jpg";
// // import donation0 from "../../assets/donation0.jpg";
// import { FreeMode, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// // import AnimatedUnderline from "../layout/AnimatedUnderline";

// const Gallery = () => {
//     const view = useRef<HTMLDivElement>(null);
//     const inView = useInView(view);
//     return (
//         <div className="py-20  bg-slate-100 dark:bg-zinc-950">
//             <div className="text-center mb-20">
//                 <h4 className="text-secondary text-lg font-semibold mb-3">
//                     OUR PHOTO GALLERY
//                 </h4>
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary dark:text-white font-bold mb-2">
//                     Photos of Donations and Humanitarian Works
//                 </h2>
//                 {/* <AnimatedUnderline className="mx-auto" /> */}
//             </div>
//             <motion.div
//                 ref={view}
//                 animate={
//                     inView
//                         ? { opacity: 1, y: 0, transition: { duration: 1 } }
//                         : { opacity: 0, y: 150, transition: { duration: 1 } }
//                 }
//             >
//                 <Swiper
//                     slidesPerView={2}
//                     spaceBetween={10}
//                     freeMode={true}
//                     breakpoints={{
//                         640: {
//                             slidesPerView: 2,
//                             spaceBetween: 20,
//                         },
//                         // when window width is >= 768px
//                         768: {
//                             slidesPerView: 3,
//                             spaceBetween: 30,
//                         },
//                         // when window width is >= 1024px
//                         1024: {
//                             slidesPerView: 4,
//                             spaceBetween: 40,
//                         },
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     modules={[FreeMode, Pagination]}
//                     className="mySwiper w-[95%] text-white"
//                 >
//                     <SwiperSlide className="mb-20">
//                         <img src={donation0} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         <img src={donation1} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         <img src={donation2} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         <img src={donation3} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         <img src={donation4} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         {" "}
//                         <img src={donation5} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         <img src={donation6} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         <img src={donation7} alt="" />
//                     </SwiperSlide>
//                     <SwiperSlide className="mb-20">
//                         <img src={donation8} alt="" />
//                     </SwiperSlide>
//                 </Swiper>
//             </motion.div>
//         </div>
//     );
// };

// export default Gallery;
