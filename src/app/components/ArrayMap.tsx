import Image from "next/image";

const ArrayMap = () => {
  const CarName = [
    {
      carName: "Honda",
      price: "PKR 35.5 - 85.5 lacs",
      image: "/images/Honda Civic.jpeg",
    },
    {
      carName: "Toyota",
      price: "PKR 80.5 - 100.5 lacs",
      image: "/images/toyota cross.jpg",
    },
    {
      carName: "Suzuki",
      price: "PKR 40.5 - 45.5 lacs",
      image: "/images/suzuki vitara.jpeg",
    },
    {
      carName: "Hyundai",
      price: "PKR 99.95 - 112.200 lacs",
      image: "/images/Hyundai Sonata.jpeg",
    },
  ];

  return (
    <div>
      {/* Heading */}
      <h1 className="text-2xl text-center">Featured New Cars with Array Map </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {CarName.map((cars, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center bg-green-500 p-4 rounded-md w-60"
            >
              {/* Image */}
              <div className="mb-4">
                <Image
                  src={cars.image}
                  alt={cars.carName}
                  width={200}
                  height={160}
                  className="object-cover rounded-md"
                />
              </div>
              {/* Car Name and Price */}
              <div className="text-center">
                <h1 className="font-semibold text-lg">{cars.carName}</h1>
                <p className="text-sm text-gray-700">{cars.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrayMap;
