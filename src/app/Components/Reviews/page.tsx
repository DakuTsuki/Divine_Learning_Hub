"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Reviews() {
  const reviews = [
    {
      avatar: "/images/Profile1.png",
      name: "John Doe",
      rating: 5,
      review: "Amazing experience! The service was exceptional.",
      date: "December 28, 2024",
    },
    {
      avatar: "/images/Profile2.png",
      name: "Jane Smith",
      rating: 4,
      review: "Great product, will definitely recommend to others.",
      date: "December 25, 2024",
    },
    {
      avatar: "/images/Profile3.png",
      name: "Emily Davis",
      rating: 3,
      review: "Good, but there’s room for improvement.",
      date: "December 20, 2024",
    },
    {
      avatar: "/images/Profile4.png",
      name: "Michael Brown",
      rating: 5,
      review: "Exceptional quality, exceeded my expectations!",
      date: "December 18, 2024",
    },
    {
      avatar: "/images/Profile5.png",
      name: "Chris Wilson",
      rating: 4,
      review: "Very satisfied with my purchase.",
      date: "December 15, 2024",
    },
  ]; 

  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] uppercase font-bold text-gray-900 md:leading-[4rem] leading-[3rem] text-center">
        Customer <span className="text-red-600">Reviews</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="px-4" // Add padding between items
          showDots={false}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              avatar={review.avatar}
              name={review.name}
              rating={review.rating}
              review={review.review}
              date={review.date}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
