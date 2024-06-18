// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProjectShow = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const projects = [
    {
      name: "Workout",
      image: "https://i.ibb.co/c2d6xgy/Untitled-design-5.png",
      description:
        "The Workout website is designed to streamline the process of booking personal trainers and scheduling workout sessions. Users can easily book trainers, make payments, and manage their profiles, while trainers have access to their own dashboards to add session slots and track bookings. Admins have the authority to manage trainers and user requests.",
      livelink: "https://workout-03.web.app/",
    },
    {
      name: "BookZone",
      image: "https://i.ibb.co/QN7Qykj/Untitled-design-10.png",
      description:
        "BookZone is an online platform where users can browse, borrow, and review books from a diverse collection organized by separate categories. It provides a convenient and user-friendly experience for book lovers to explore new reads and share their opinions.",
      livelink: "https://bookzone-7c036.web.app/",
    },
    {
      name: "Naturalcraft",
      image: "https://i.ibb.co/Sw7vZjq/Untitled-design-11.png",
      description:
        "**Crafty Showcase** is a user-friendly platform designed to highlight your handmade creations. With a sleek Swiper UI, navigating through products is a breeze. Easily add and manage your items through My Craft Items, with options to update or delete listings as needed. Secure authentication ensures personalized experiences, while dark and light themes offer viewing flexibility.",
      livelink: "https://naturalcraft-7d1c8.web.app/",
    },
    {
      name: "Elite estate",
      image: "https://i.ibb.co/MMgMkBg/Untitled-design-12.png",
      description:
        " Personalize your experience with profile management, including name and profile photo updates. Enjoy an interactive property showcase with a swiper slider, presenting stunning images of luxury listings. Detailed property pages provide comprehensive descriptions, photos, and specifications for each listing. Navigate effortlessly with a responsive footer featuring quick links and contact information/social media icons.",
      livelink: "https://elite-estate-d93f4.web.app/",
    },
    {
      name: "Book vibe",
      image: "https://i.ibb.co/YjLjYmW/Untitled-design-7.png",
      description:
        "Book Haven offers a comprehensive reading experience with a variety of features. Access every book directly from the home section for easy browsing. Add books to your wishlist and reading list for future reference. View detailed book information by clicking on each book card. Organize your reading list by sorting books by date or page rating. Explore detailed author information.",
      livelink: "https://bookvibe1.netlify.app/",
    },
    {
      name: "ChefsPalette",
      image: "https://i.ibb.co/tJrsSnp/Untitled-design-8.png",
      description:
        "ChefsPalette offers a delightful culinary experience with a host of features. Access every recipe directly from the home section for easy browsing. Add recipes to your wishlist and cooking list for future reference. View detailed recipe information by clicking on each recipe card. Organize your cooking list by sorting recipes by date or rating. Explore detailed chef profiles and their culinary creations.",
      livelink: "https://chefspalette.netlify.app/",
    },
    {
      name: "Retroverse",
      image: "https://i.ibb.co/jyqDDgR/Untitled-design-9.png",
      description:
        "RetroVerse provides an immersive retro gaming experience with a variety of features. Access every game directly from the home section for easy browsing. Add games to your wishlist and playing list for future reference. View detailed game information by clicking on each game card. Organize your playing list by sorting games by date or rating.",
      livelink: "https://retroverse1.netlify.app/",
    },
    {
      name: "Habib's HQ",
      image: "https://i.ibb.co/54sCsTy/Untitled-design-6.png",
      description:
        "Habib's HQ is a user-friendly food ordering platform that brings delicious meals to your doorstep. Browse a wide selection of dishes directly from the home section. Easily add your favorite meals to your wishlist and order list. View detailed information about each dish by clicking on the meal cards. Organize your order list by sorting items by date or rating.",
      livelink: "https://habibshq.netlify.app/",
    },
  ];
  return (
    <div id="projects">
      {" "}
      <div className="project-slider">
        <h1 className="capitalize text-5xl mb-7 font-bold text-center">
          Projects{" "}
        </h1>
        <div className="container m-auto px-3">
          {" "}
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="hero pb-5">
                <div className="hero-content flex-col lg:flex-row">
                  <div className="w-full lg:w-[50%]">
                    <img
                      src={project.image}
                      className="rounded-lg shadow-2xl  lg:w-full object-cover  "
                      alt={project.name}
                    />
                  </div>
                  <div className="text-left w-full lg:w-[50%] mt-5 lg:mt-0 lg:pl-10">
                    <h1 className="text-2xl lg:text-5xl font-bold">
                      {project.name}
                    </h1>
                    <p className="py-6 text-base lg:text-lg">
                      {project.description}
                    </p>
                    <a
                      href={project.livelink}
                      className="shadow-sm shadow-white px-5 py-2 bg-gradient-to-r from-[#FE54F5] via-[#CE3AEE] to-[#4C9BE4] capitalize rounded-full cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit the site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
