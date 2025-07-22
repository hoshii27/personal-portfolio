import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20 "
    >
    <div className="px-4 w-150">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 text-black text-center">
            Get In touch
          </h2>

          <form
            action="https://formsubmit.co/hoshiviva98@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
                className="w-full bg-white/10 border border-r-black/10 rounded  px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full bg-white/10 border border-r-black/10 rounded  px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message..."
                required
                className="w-full bg-white/10 border border-r-black/10 rounded  px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black flex justify-center cursor-pointer px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] py-3 text-white"
            >

              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
    </section>
  )
}

export default Contact