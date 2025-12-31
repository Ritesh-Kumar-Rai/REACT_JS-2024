import { Form } from "react-router-dom";

// Contact.jsx
const Contact = () => (
    <div className="container py-5">
        <div className="max-width-500 mx-auto">
            <h3>Get in touch</h3>
            <Form method="POST" className="mt-4">
                <input type="text" name="name" className="form-control mb-3 border-0 bg-light" placeholder="Name" />
                <input type="email" name="email" className="form-control mb-3 border-0 bg-light" placeholder="Email" />
                <textarea name="message" className="form-control mb-3 border-0 bg-light" rows="4" placeholder="Message"></textarea>
                <button type="submit" className="btn btn-dark w-100">Send Message</button>
            </Form>
        </div>
    </div>
);

export const ContactFormAction = async (data) => {
    try {
        const form_data = (await data.request.formData())
        const res = Object.fromEntries(form_data);
        return res;
    } catch (error) {
        console.error(`${error.name} -> ${error.message}`);
    }
}

export default Contact;