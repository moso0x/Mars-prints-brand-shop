import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // WhatsApp icon
import { eventsData } from "@/data/eventsData";

export const TicketsGallery = () => {
  const navigate = useNavigate();

  // Use tickets from eventsData
  const tickets = eventsData.map((event) => ({
    id: event.id,
    title: event.title,
    image: event.image,
    price: event.price,
  }));

  // Redirect to Event Details page
  const handleBookNow = (ticket: any) => {
    navigate(`/event/${ticket.id}`, { state: ticket });
  };

  const handleBookViaWhatsApp = (ticket: any) => {
    const phoneNumber = "254704904678"; // Replace with your WhatsApp number
    const message = `Hello! I’d like to book a ticket for *${ticket.title}* at Ksh ${ticket.price}. Please guide me through the booking.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="py-6 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-dark">
          Your Gateway to Unforgettable Events & Experiences!
          <p className="text-lg py-6">Upcoming Events</p>
        </h2>

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
              {/* Image */}
              <div className="relative w-full h-72 bg-gray-100 flex items-center justify-center">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 justify-between p-4 text-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{ticket.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    Ticket Price: <span className="font-medium">Ksh {ticket.price}</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-auto justify-center">
                  {/* WhatsApp Booking */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBookViaWhatsApp(ticket)}
                    className="flex items-center justify-center gap-2 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-medium px-5 py-2 rounded-full transition-colors duration-200 w-44"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </motion.button>

                  {/* Event Details Booking */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBookNow(ticket)}
                    className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-medium px-5 py-2 rounded-full transition-colors duration-200 w-36"
                  >
                    Book Now
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
