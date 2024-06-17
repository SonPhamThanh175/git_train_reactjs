// import React from "react";
// import PropTypes from "prop-types";
// import Slider from "react-slick";
// import { Image } from "antd";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function SlideShow(props) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   const slideList = [
//     {
//       url: "/assets/imgs/slide1.jpg",
//       title: "Image 1",
//       description: "This is the first image",
//     },
//     {
//       url: "/assets/imgs/slide2.jpg",
//       title: "Image 2",
//       description: "This is the second image",
//     },
//     {
//       url: "/assets/imgs/slide3.jpg",
//       title: "Image 3",
//       description: "This is the third image",
//     },
//     {
//       url: "/assets/imgs/slide4.jpg",
//       title: "Image 4",
//       description: "This is the fourth image",
//     },
//   ];

//   return (
//     <Slider {...settings}>
//       {slideList.map((image, index) => (
//         <div key={index}>
//           <Image
//             src={image.url}
//             alt={image.title}
//             preview={false}
//             width="100%"
//             height="274px"
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// }

// SlideShow.propTypes = {};

// export default SlideShow;

import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideShow(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Hiển thị 2 slide cùng một lúc
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slideList = [
    {
      url: "/assets/imgs/slide1.jpg",
      title: "Image 1",
      description: "This is the first image",
    },
    {
      url: "/assets/imgs/slide2.jpg",
      title: "Image 2",
      description: "This is the second image",
    },
    {
      url: "/assets/imgs/slide3.jpg",
      title: "Image 3",
      description: "This is the third image",
    },
    {
      url: "/assets/imgs/slide4.jpg",
      title: "Image 4",
      description: "This is the fourth image",
    },
  ];

  return (
    <Slider {...settings}>
      {slideList.map((image, index) => (
        <div key={index} style={{ padding: "0 20px", margin: "20px" }}>
          <Image
            src={image.url}
            alt={image.title}
            preview={false}
            style={{ width: "100%", height: "274px", borderRadius: "20px" , padding: "10px" }}
          />
        </div>
      ))}
    </Slider>
  );
}

SlideShow.propTypes = {};

export default SlideShow;
