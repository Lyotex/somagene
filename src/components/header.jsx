import React, { useEffect, useState } from "react";

// Header component
export const Header = () => {
  // Define an array of banner contents with multiple images
  const banners = [
    {
      title: "Welcome to Our Website",
      paragraph: "We are glad to have you here. Explore our features!",
      images: [
        "url(../img/banner1.png)"
        // "url(../img/banner2.png)",
        // "url(../img/banner3.png)"
      ]
    },
    {
      title: "Discover Our Services",
      paragraph: "We offer a wide range of services to help you succeed.",
      images: [
        "url(../img/banner2.png)"
        // "url(../img/banner5.png)",
        // "url(../img/banner6.png)"
      ]
    },
    {
      title: "Join Our Community",
      paragraph: "Become part of something amazing and grow with us.",
      images: [
        "url(../img/banner3.png)"
        // "url(../img/banner8.png)",
        // "url(../img/banner9.png)"
      ]
    }
  ];

  // States for storing current banner index and image index
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to handle background image and content change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through the images for the current banner
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banners[currentBannerIndex].images.length);

      // Cycle to the next banner after all images have been cycled
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentBannerIndex]);

  // Get current banner data (title, paragraph, and images)
  const currentBanner = banners[currentBannerIndex];
  const currentBackgroundImage = currentBanner.images[currentImageIndex];

  return (
    <header id="header">
      <div className="intro" style={{ backgroundImage: currentBackgroundImage }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <span className="changing-title">{currentBanner.title}</span>
                </h1>
                <p className="changing-paragraph">{currentBanner.paragraph}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
