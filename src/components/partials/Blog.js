import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Fashion Trends for 2024",
      excerpt: "Stay ahead of the curve with the latest fashion trends that are taking the world by storm in 2024. From bold prints to minimalist styles, we've got you covered.",
      date: "October 10, 2024",
      author: "Fashion Expert",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Gift",
      excerpt: "Stuck on what to buy for that special someone? Our ultimate gift guide will help you find the perfect present for any occasion.",
      date: "September 28, 2024",
      author: "Shopping Guru",
    },
    {
      id: 3,
      title: "The Best Gadgets to Buy in 2024",
      excerpt: "From smartwatches to wireless earbuds, discover the hottest gadgets that you need to upgrade your tech game this year.",
      date: "September 15, 2024",
      author: "Tech Enthusiast",
    },
    {
      id: 4,
      title: "Healthy Eating Habits to Adopt in 2024",
      excerpt: "Start your journey to a healthier lifestyle with these easy-to-follow eating habits that will improve your well-being.",
      date: "August 25, 2024",
      author: "Nutritionist",
    },
    {
      id: 5,
      title: "Travel Destinations You Must Visit in 2024",
      excerpt: "Looking for a getaway? Explore our list of top travel destinations for 2024 that offer adventure, relaxation, and culture.",
      date: "August 10, 2024",
      author: "Travel Blogger",
    },
    {
      id: 6,
      title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
      excerpt: "Learn how to make eco-conscious fashion choices that not only look great but also help save the planet.",
      date: "July 30, 2024",
      author: "Eco Fashion Advocate",
    },
    {
      id: 7,
      title: "Top Fitness Trends to Follow in 2024",
      excerpt: "From virtual fitness classes to wearable tech, discover the trends that are revolutionizing the fitness world.",
      date: "July 15, 2024",
      author: "Fitness Expert",
    },
    {
      id: 8,
      title: "How to Create a Cozy Home Office",
      excerpt: "Whether you're working remotely or just need a quiet space, our guide to creating a cozy home office will help you stay productive.",
      date: "June 25, 2024",
      author: "Interior Designer",
    },
    {
      id: 9,
      title: "Mastering Personal Finance: Tips for 2024",
      excerpt: "Take control of your finances with these expert tips for budgeting, saving, and investing in 2024.",
      date: "June 10, 2024",
      author: "Finance Advisor",
    },
    {
      id: 10,
      title: "The Future of Electric Cars: What to Expect in 2024",
      excerpt: "Electric cars are the future of transportation. Learn about the latest advancements and models coming in 2024.",
      date: "May 20, 2024",
      author: "Automobile Enthusiast",
    },
    {
      id: 11,
      title: "Mindfulness Practices for a Calmer Life",
      excerpt: "Reduce stress and find peace in your daily routine with these simple mindfulness techniques.",
      date: "May 5, 2024",
      author: "Wellness Coach",
    },
    {
      id: 12,
      title: "Top 5 Smart Home Devices for 2024",
      excerpt: "Upgrade your home with these must-have smart devices that bring convenience and security to your fingertips.",
      date: "April 15, 2024",
      author: "Tech Guru",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-gray-500 text-sm mb-2">
              <span>{post.date} • </span>
              <span>By {post.author}</span>
            </div>
            <button className="text-blue-500 hover:underline font-semibold">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
