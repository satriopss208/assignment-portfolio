import ContactForm from "../ContactForm";

const Contact = () => {
    
    return (
        <section id="3" className="my-20 py-15 gap-20 h-[800px]">
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex items-center justify-center">
                    <br />
                    <br />
                </div>
                <h1 className="text-5xl font-semibold mb-10">Contact Me</h1>
                <div className="flex items-start justify-center w-full max-w-4xl gap-10">
                    <div className="flex flex-col items-start w-full  py-8">
                        <div className="w-full">
                            <div className="mb-6">
                                <h2 className="block text-lg font-semibold mb-2">Email :</h2>
                                <p className="block text-lg font-semibold mb-2">satriops20@gmail.com</p>
                                <br />
                                <br />
                                <p className="block text-lg font-semibold mb-2">"Don't hesitate to get in touch with me if you'd like to discuss this further."</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full rounded-lg shadow-lg p-8 border-2 border-white">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
