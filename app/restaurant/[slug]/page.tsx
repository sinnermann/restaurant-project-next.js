import Link from "next/link";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <>
      
      {/* DESCRIPTION PORTION */}
     
        <div className="bg-white w-[70%] rounded p-3 shadow">
          {/* RESAURANT NAVBAR */}
          <nav className="flex text-reg border-b pb-2">
            <Link href="/restaurant/milestones-grill" className="mr-7">
              Overview
            </Link>
            <Link href="/restaurant/milestones-grill/menu" className="mr-7">
              Menu
            </Link>
          </nav>
          {/* RESAURANT NAVBAR */} {/* TITLE */}
          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-6xl">Milesstone Grill</h1>
          </div>
          {/* TITLE */} {/* RATING */}
          <Ratings />
          {/* RATING */}
          {/* DESCRIPTION */}
          <Description />
          {/* DESCRIPTION */}
          {/* IMAGES */}
          <Images />
          {/* IMAGES */}
          {/* REVIEWS */}
          <Reviews />
          {/* REVIEWS */}
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
      
    </>
  );
}
