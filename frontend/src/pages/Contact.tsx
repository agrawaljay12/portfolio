const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 py-16 flex items-center"
    >
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
          
          <div>
            <label className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export {Contact};
