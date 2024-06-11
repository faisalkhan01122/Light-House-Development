import React from "react";

const Blog = () => {
  return (
    <>
      <div className="container h-[50vh] bg-[#e0e4e9d1] flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Blog</h1>
          <h1 className="text-4xl font-bold pt-5">
            Check our Latest <br /> News and Updates
          </h1>
        </div>
        <button className="btn">Veiw All Articles</button>
      </div>
    </>
  );
};

export default Blog;
