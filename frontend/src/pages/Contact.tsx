import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center mb-14 tracking-wide">
          GET IN TOUCH
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">jayagrawal@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+919876543210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-600">
                  Kadodara, Gujarat, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form className="space-y-6">
              
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Contact };
