import React from "react";

type Brand = {
  name: string;
  logo: string; // Image path or URL
};

const brands: Brand[] = [
  { name: "Apple", logo: "src/assets/logos/apple-svgrepo-com.svg" },
  { name: "Logitech", logo: "src/assets/logos/brand-logitech-svgrepo-com.svg" },
  { name: "Google", logo: "src/assets/logos/google-2015-logo-svgrepo-com.svg" },
  { name: "Samsung", logo: "src/assets/logos/samsung-svgrepo-com.svg" },
  { name: "Netflix", logo: "src/assets/logos/netflix-2-logo-svgrepo-com.svg" },
  { name: "Lenovo", logo: "src/assets/logos/lenovo-svgrepo-com.svg" },
];

const BrandLogos: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-6">
      <div className="flex w-full p-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 rounded-2xl overflow-x-auto border border-gray-200 scrollbar-hide">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[90px] sm:min-w-[110px] md:min-w-[130px] h-20 sm:h-24 md:h-28 m-2 rounded-2xl shadow-xl/10 border border-gray-300 bg-white"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-12 sm:max-h-16 md:max-h-20 object-contain w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
