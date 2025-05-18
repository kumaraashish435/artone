const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Design",
      excerpt: "Exploring the latest trends and innovations in the design industry.",
      category: "Design",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Web Development Best Practices",
      excerpt: "Essential tips and tricks for modern web development.",
      category: "Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      excerpt: "Master the fundamentals of creating exceptional user experiences.",
      category: "UX Design",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Mobile App Development",
      excerpt: "A comprehensive guide to building successful mobile applications.",
      category: "Mobile",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:py-12 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Latest Articles
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Discover insights, tutorials, and best practices
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-black text-sm sm:text-base">
              All
            </button>
            <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
              Design
            </button>
            <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
              Development
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative h-40 sm:h-48 md:h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs sm:text-sm text-gray-500">{article.readTime}</span>
                  <button className="text-black hover:text-black font-medium text-xs sm:text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-lg border border-black hover:bg-blue-50 transition-colors text-sm sm:text-base">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;