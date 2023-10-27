import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

export default function MenuPage() {
  return (
    <>
      
      {/* DESCRIPTION PORTION */}
      
        <div className="bg-white w-[100%] rounded p-3 shadow">
          {/* RESAURANT NAVBAR */}
          <RestaurantNavBar />
          {/* RESAURANT NAVBAR */} 
          {/* MENU */}
          <Menu />
          {/* MENU */}
        </div>
     
      {/* DESCRIPTION PORTION */}
    </>
  );
}
