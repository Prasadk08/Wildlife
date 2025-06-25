import React from "react";

const fakeBlogs = [
  {
    id: 1,
    title: "Protecting Forest Corridors in India",
    summary: "Discover how forest corridors connect wildlife habitats and why they’re essential for tiger survival.",
    author: "Dr. Kavita Sharma",
    date: "June 10, 2025",
  },
  {
    id: 2,
    title: "Eco-volunteering: A Rising Trend",
    summary: "Young people across India are joining eco-volunteering camps to support conservation directly.",
    author: "Rohan Deshmukh",
    date: "May 28, 2025",
  },
  {
    id: 3,
    title: "Artificial Waterholes for Wildlife",
    summary: "In dry zones, artificial waterholes are providing critical hydration to endangered species.",
    author: "Niharika Iyer",
    date: "April 30, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-800">Conservation Blogs</h2>
        <p className="text-gray-600 mt-2">
          Learn about initiatives, technologies, and stories making a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {fakeBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-green-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-green-900 mb-2">{blog.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{blog.summary}</p>
            <div className="text-sm text-gray-500">
              <span>{blog.author}</span> · <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
