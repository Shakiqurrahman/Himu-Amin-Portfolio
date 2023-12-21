const ContactForm = () => {
    return (
        <div>
            <div className="my-28 max-width ">
                <form className="flex flex-col gap-5 max-w-[750px] mx-auto bg-[#09101a] sm:p-12 p-5 py-10 sm:py-12  rounded-2xl">
                <div className="mb-5">
                <p className="text-center uppercase tracking-widest mb-1 text-[#0067f6]">Get In Touch</p>
                <h3 className="text-center text-3xl font-bold text-white">Contact Me</h3>
                </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                    <input className="px-3 py-3 w-full outline-none bg-white rounded-md" type="text" placeholder="Your Name" required/>
                    <input className="px-3 py-3 w-full outline-none rounded-md" type="email" placeholder="Your Email" required/>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                    <input className="px-3 py-3 w-full outline-none rounded-md" type="text" placeholder="Phone Number"/>
                    <input className="px-3 py-3 w-full outline-none rounded-md" type="text" placeholder="Email Subject" required/>
                    </div>
                    <textarea className="px-3 py-3 outline-none rounded-md resize-none" name="message" cols="30" rows="7" placeholder="Message" required></textarea>
                    <button className="mt-3 py-3 px-4 w-48 mx-auto border border-transparent text-white bg-blue-600 hover:bg-white hover:text-[#0067f6] hover:border-[#0067f6] text-lg font-semibold  rounded-md duration-300 ">Send Message</button>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;