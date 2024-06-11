import React, { useState } from "react";

const testimonials = [
  {
    text: "Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id.",
    name: "Alex Loverty",
    title: "Product Designer",
    imgSrc: "https://quiety-vue.themetags.com/img/author1.6c8a7484.jpg", // replace with the correct image path
  },
  {
    text: "Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id.",
    name: "Alex Loverty",
    title: "Product Designer",
    imgSrc: "https://quiety-vue.themetags.com/img/author1.6c8a7484.jpg", // replace with the correct image path
  },
  {
    text: "Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id.",
    name: "Alex Loverty",
    title: "Product Designer",
    imgSrc: "https://quiety-vue.themetags.com/img/author1.6c8a7484.jpg", // replace with the correct image path
  },
  {
    text: "Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id.",
    name: "Alex Loverty",
    title: "Product Designer",
    imgSrc: "https://quiety-vue.themetags.com/img/author1.6c8a7484.jpg", // replace with the correct image path
  },
  // Add more testimonials here
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <button onClick={prevTestimonial} className="text-2xl">
        &lt;
      </button>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-md ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <p className="text-gray-600">{testimonial.text}</p>
          <div className="flex items-center mt-4">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
      <button onClick={nextTestimonial} className="text-2xl">
        &gt;
      </button>
    </div>
  );
};

export default TestimonialCarousel;
