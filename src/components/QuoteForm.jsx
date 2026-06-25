import { Formik, Form, Field } from "formik";
import Button from "./Button";

export default function QuoteForm() {
    const initialValues = {
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        vehicleType: "Sedan/Coupe",
        serviceNeeded: "Full Detail Package",
        preferredDate: "",
        message: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Treat this slot as your form action destination handler
        console.log("Form Values Submitted: ", values);
        setTimeout(() => {
            alert("Quote Request Sent Successfully!");
            resetForm();
            setSubmitting(false);
        }, 400);
    };

    // Common styles for all input containers to keep the Formik markup clean
    const labelStyles =
        "block font-montserrat text-[12px] md:text-[0.875rem] font-medium uppercase tracking-tighter text-orange_light_active mb-3";
    const inputStyles =
        "w-full bg-grey_dark text-text font-manrope text-m-sm p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange_normal/50 transition-all placeholder:text-grey_light/30";

    return (
        <div className="w-full">
            <h2 className="font-montserrat text-[20px] md:text-h3 font-extrabold text-white mb-8 tracking-tight uppercase ">
                Request A Free Quote
            </h2>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-6">
                        {/* Row 1: Full Name & Phone Number */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className={labelStyles}
                                >
                                    Full Name
                                </label>
                                <Field
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Your Name"
                                    className={inputStyles}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className={labelStyles}
                                >
                                    Phone Number
                                </label>
                                <Field
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="(555) 000-0000"
                                    className={inputStyles}
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 2: Email Address & Vehicle Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="emailAddress"
                                    className={labelStyles}
                                >
                                    Email Address
                                </label>
                                <Field
                                    id="emailAddress"
                                    name="emailAddress"
                                    type="email"
                                    placeholder="email@example.com"
                                    className={inputStyles}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="vehicleType"
                                    className={labelStyles}
                                >
                                    Vehicle Type
                                </label>
                                <Field
                                    id="vehicleType"
                                    name="vehicleType"
                                    as="select"
                                    className={inputStyles}
                                >
                                    <option value="Sedan/Coupe">
                                        Sedan/Coupe
                                    </option>
                                    <option value="SUV">SUV</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Van">
                                        Van / Commercial
                                    </option>
                                </Field>
                            </div>
                        </div>

                        {/* Row 3: Service Needed & Preferred Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="serviceNeeded"
                                    className={labelStyles}
                                >
                                    Service Needed
                                </label>
                                <Field
                                    id="serviceNeeded"
                                    name="serviceNeeded"
                                    as="select"
                                    className={inputStyles}
                                >
                                    <option value="Full Detail Package">
                                        Full Detail Package
                                    </option>
                                    <option value="Interior Detailing">
                                        Interior Detailing
                                    </option>
                                    <option value="Exterior Detailing">
                                        Exterior Detailing
                                    </option>
                                    <option value="Custom Restoration">
                                        Custom Restoration
                                    </option>
                                </Field>
                            </div>
                            <div>
                                <label
                                    htmlFor="preferredDate"
                                    className={labelStyles}
                                >
                                    Preferred Date
                                </label>
                                <Field
                                    id="preferredDate"
                                    name="preferredDate"
                                    type="date"
                                    className={inputStyles}
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 4: Message / Special Instructions */}
                        <div>
                            <label htmlFor="message" className={labelStyles}>
                                Message / Special Instructions
                            </label>
                            <Field
                                id="message"
                                name="message"
                                as="textarea"
                                rows="4"
                                placeholder="Tell us about your vehicle's condition..."
                                className={`${inputStyles} resize-none`}
                            />
                        </div>

                        {/* Row 5: Submit Action (Reuses your clean custom Button layout) */}
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                            className="w-full py-4 mt-2 justify-center text-orange_darker"
                        >
                            {isSubmitting
                                ? "Sending Request..."
                                : "Request A Free Quote"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
