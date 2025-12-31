import { Form, useActionData, useNavigation, useNavigate } from "react-router-dom";
import { Fetch } from "../api/APiSimulation";
import { useEffect, useState } from "react";

// Contact.jsx
const Contact = () => {

    const navigation = useNavigation();
    const navigate = useNavigate();
    const actionData = useActionData();
    const isSubmitting = navigation.state === 'submitting';
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (actionData?.success && actionData?.response === 'ok') {
            setIsSubmitted(true);
            alert("Form Submitted Successfully. 🥳");
            const timer = setTimeout(() => {
                setIsSubmitted(false);
                navigate('/');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [actionData]);


    return <div className="container py-5">
        <div className="max-width-500 mx-auto">
            <h3>Get in touch</h3>
            <Form method="POST" className="mt-4">
                <input type="text" name="name" className="form-control mb-3 border-0 bg-light" placeholder="Name" />
                <input type="email" name="email" className="form-control mb-3 border-0 bg-light" placeholder="Email" />
                <textarea name="message" className="form-control mb-3 border-0 bg-light" rows="4" placeholder="Message"></textarea>
                <button type="submit" disabled={isSubmitting} className="btn btn-dark w-100">{isSubmitting ? 'Sending...' : "Send Message"}</button>
            </Form>
        </div>
        {isSubmitted && (<>
            <button type="button" className="my-5 mx-auto btn btn-dark px-3">Redirecting...</button>
            <pre className="m-5 mx-auto container text-danger p-5 rounded-3 shadow-lg bg-body-tertiary">
                <code>
                    {`{
    name: ${actionData.data.name},
    email: ${actionData.data.email},
    message: ${actionData.data.message}
}`}
                </code>
            </pre>
        </>)}
    </div>
};

export const ContactFormAction = async (data) => {
    try {
        const form_data = (await data.request.formData())
        const contactFormData = Object.fromEntries(form_data);
        // using custom Fetch() API function
        return Fetch("https://ritesh.kumar.rai/api/v1/submit-contact-form", {
            method: 'POST',
            body: JSON.stringify(contactFormData)
        }).then((response) => {
            const obj = JSON.parse(response)
            console.log(obj)
            return obj;
        }).catch(error => {
            console.error(`ErrorCaptured:\n${error}`);
        })

    } catch (error) {
        console.error(`${error.name} -> ${error.message}`);
    }
}

export default Contact;