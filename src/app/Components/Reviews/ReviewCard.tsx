import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import solid and outline star icons

interface ReviewCardProps {
  avatar: string;
  name: string;
  rating: number; // Assuming a scale of 1-5
  review: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ avatar, name, rating, review, date }) => {
  return (
    <div className="max-w-sm p-6 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Profile Section */}
      <div className="flex
                      items-center 
                      space-x-4 
                      border-b 
                      pb-4"
      >
        <img
          src={avatar}
          alt={name}
          className="w-14 
                     h-14 
                     rounded-full 
                     object-cover 
                     ring-2 
                     ring-yellow-500"
        />
        <div>
          <h3 className="text-xl 
                         font-semibold 
                         text-gray-800"
           >
            {name}
          </h3>
          <p className="text-sm 
                      text-gray-500"
          >
            {date}
         </p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mt-4 
                      flex 
                      items-center"
      >
        {[...Array(5)]
        .map((_, i) => (
          i < rating ? (
            <FaStar key={i} className="text-yellow-400 
                                         h-5 
                                         w-5" 
            />
          ) : (
            <FaRegStar key={i} className="text-gray-300 
                                          h-5 
                                          w-5" 
            />
                                        
          )
        ))}
      </div>

      {/* Review Section */}
      <p className="mt-4 
                    text-gray-700 
                    italic 
                    leading-relaxed"
       >
        "{review}"
      </p>
    </div>
  );
};

export default ReviewCard;
