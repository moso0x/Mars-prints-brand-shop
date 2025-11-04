import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { motion } from "framer-motion";

import event from "@/assets/Events/event.jpeg";
import event1 from "@/assets/Events/event1.jpeg";
import event2 from "@/assets/Events/event2.jpeg";
import event3 from "@/assets/Events/event3.jpeg";
import event4 from "@/assets/Events/event4.jpeg";
import event5 from "@/assets/Events/event5.jpeg";
import event6 from "@/assets/Events/event6.jpeg";
import event7 from "@/assets/Events/event7.jpeg";
import event8 from "@/assets/Events/event8.jpeg";

interface Ticket {
  id: number;
  title: string;
  image: string;
  price: number;
}

const tickets: Ticket[] = [
  { id: 1, title: "Afro Vibes Festival", image: event, price: 1000 },
  { id: 2, title: "Tech Innovators Summit", image: event1, price: 1500 },
  { id: 3, title: "Comedy Night Live", image: event2, price: 800 },
  { id: 4, title: "Music Carnival", image: event3, price: 1200 },
  { id: 5, title: "Startup Pitch Day", image: event4, price: 1300 },
  { id: 6, title: "Cultural Night", image: event5, price: 900 },
  { id: 7, title: "Art & Design Expo", image: event6, price: 1100 },
  { id: 8, title: "Fashion Gala", image: event7, price: 1600 },
  { id: 9, title: "Street Food Festival", image: event8, price: 700 },
];

export const TicketsGallery = () => {
  const navigate = useNavigate();

  const handleBookNow = (ticket: Ticket) => {
    navigate(`/payment/${ticket.id}`, { state: ticket });
  };

  const handleViewDetails = (ticket: Ticket) => {
    navigate(`/event/${ticket.id}`, { state: ticket });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="py-6 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-dark">
          Upcoming Events
        </h2>

        {/* ✅ Responsive Layout with justify-around */}
        <div className="flex flex-wrap justify-around gap-y-6 gap-x-3">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-all duration-300 w-full sm:w-[45%] lg:w-[22%]"
            >
              {/* Image section */}
              <div className="relative w-full h-60">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content section */}
              <div className="flex flex-col flex-1 justify-between p-4 text-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">
                    {ticket.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    Ticket Price:{" "}
                    <span className="font-medium">Ksh {ticket.price}</span>
                  </p>
                </div>

                <div className="flex flex-co1-2 gap-2 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBookNow(ticket)}
                    className="border rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-medium px-3 py-1.5 rounded-md transition-colors duration-200 w-32 mx-auto"
                  >
                    Book Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(ticket)}
                    className="border rounded-full border-gray-400 text-gray-700 hover:bg-gray-200 font-medium px-3 py-1.5 rounded-md transition-colors duration-200 w-32 mx-auto"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FooterNew />
    </div>
  );
};
