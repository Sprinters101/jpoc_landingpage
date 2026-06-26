import { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { toast } from "sonner"; // Using Sonner for clean submission toasts
import Button from "./Button";

export default function QuoteForm() {
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        vehicleType: "Sedan/Coupe",
        serviceNeeded: "Full Detail Package",
        preferredDate: "",
        message: "",
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        // Construct the Web3Forms submission payload structure
        const payload = {
            // access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            access_key: "2b1ef8ed-3ec6-45fe-ae73-f1c1f4563d4b",
            name: values.fullName,
            phone: values.phoneNumber,
            email: values.emailAddress,
            vehicle_type: values.vehicleType,
            service_needed: values.serviceNeeded,
            preferred_date: values.preferredDate,
            message: values.message,
            subject: `New Quote Request from ${values.fullName}`,
            from_name: "JPOC Mobile Detail System",
        };

        // Fire a live asynchronous network request wrapped in a Sonner promise toast
        const sendFormPromise = fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        }).then(async (response) => {
            const data = await response.json();
            if (data.success) {
                resetForm();
                return data;
            } else {
                throw new Error(data.message || "Submission failed");
            }
        });

        toast.promise(sendFormPromise, {
            loading: "Transmitting your detailing quote request...",
            success:
                "Thank you! Your request has been sent to James successfully.",
            error: (err) =>
                `Submission error: ${err.message || "Please try again."}`,
        });

        try {
            setIsLoading(true);
            await sendFormPromise;
        } catch (error) {
            console.error("Web3Forms Submission Error:", error);
        } finally {
            setIsLoading(false);
            setSubmitting(false);
        }
    };

    // Common styles for all input containers to keep your markup identical
    const labelStyles =
        "block font-montserrat text-[12px] md:text-[0.875rem] font-medium uppercase tracking-tighter text-orange_light_active mb-3";
    const inputStyles =
        "w-full bg-grey_dark text-text font-manrope text-m-sm p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange_normal/50 transition-all placeholder:text-grey_light/30 text-left";

    return (
        <div className="w-full">
            <h2 className="font-montserrat text-[20px] md:text-h3 font-extrabold text-white mb-8 tracking-tight uppercase ">
                Request A Free Quote
            </h2>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting, setFieldValue, values }) => (
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
                                <Field name="fullName">
                                    {({ field }) => (
                                        <input
                                            {...field}
                                            id="fullName"
                                            type="text"
                                            placeholder="Your Name"
                                            className={inputStyles}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className={labelStyles}
                                >
                                    Phone Number
                                </label>
                                <Field name="phoneNumber">
                                    {({ field }) => (
                                        <input
                                            {...field}
                                            id="phoneNumber"
                                            type="text"
                                            placeholder="(555) 000-0000"
                                            className={inputStyles}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>

                        {/* Row 2: Email Address & Headless Vehicle Type Select */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="emailAddress"
                                    className={labelStyles}
                                >
                                    Email Address
                                </label>
                                <Field name="emailAddress">
                                    {({ field }) => (
                                        <input
                                            {...field}
                                            id="emailAddress"
                                            type="email"
                                            placeholder="email@example.com"
                                            className={inputStyles}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                            <div>
                                <label
                                    htmlFor="vehicleType"
                                    className={labelStyles}
                                >
                                    Vehicle Type
                                </label>
                                <HeadlessSelect
                                    name="vehicleType"
                                    value={values.vehicleType}
                                    onChange={setFieldValue}
                                    options={[
                                        "Sedan/Coupe",
                                        "SUV",
                                        "Truck",
                                        "Van",
                                    ]}
                                    inputStyles={inputStyles}
                                />
                            </div>
                        </div>

                        {/* Row 3: Headless Service Needed Select & Preferred Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="serviceNeeded"
                                    className={labelStyles}
                                >
                                    Service Needed
                                </label>
                                <HeadlessSelect
                                    name="serviceNeeded"
                                    value={values.serviceNeeded}
                                    onChange={setFieldValue}
                                    options={[
                                        "Full Detail Package",
                                        "Interior Detailing",
                                        "Exterior Detailing",
                                        "Custom Restoration",
                                    ]}
                                    inputStyles={inputStyles}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="preferredDate"
                                    className={labelStyles}
                                >
                                    Preferred Date
                                </label>
                                <Field name="preferredDate">
                                    {({ field }) => (
                                        <input
                                            {...field}
                                            id="preferredDate"
                                            type="date"
                                            className={inputStyles}
                                            required
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>

                        {/* Row 4: Message / Special Instructions */}
                        <div>
                            <label htmlFor="message" className={labelStyles}>
                                Message / Special Instructions
                            </label>
                            <Field name="message">
                                {({ field }) => (
                                    <textarea
                                        {...field}
                                        id="message"
                                        rows="4"
                                        placeholder="Tell us about your vehicle's condition..."
                                        className={`${inputStyles} resize-none`}
                                    />
                                )}
                            </Field>
                        </div>

                        {/* Row 5: Submit Action Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting || isLoading}
                            className="w-full py-4 mt-2 justify-center text-orange_darker"
                        >
                            {isLoading || isSubmitting
                                ? "Sending Request..."
                                : "Request A Free Quote"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

/* ==========================================================================
   Headless Dropdown Select Primitive Component (Unchanged)
   ========================================================================== */
function HeadlessSelect({ name, value, onChange, options, inputStyles }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        onChange(name, option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`${inputStyles} flex items-center justify-between cursor-pointer focus:ring-1 focus:ring-orange_normal/50`}
            >
                <span>{value}</span>
                <svg
                    className={`w-4 h-4 text-grey_light/60 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <ul className="absolute left-0 mt-2 w-full bg-grey_dark border border-grey_dark_active rounded-lg shadow-2xl z-30 max-h-60 overflow-y-auto py-1.5 divide-y divide-grey_dark_active/30">
                    {options.map((option) => (
                        <li key={option}>
                            <button
                                type="button"
                                onClick={() => handleSelect(option)}
                                className={`w-full text-left px-4 py-3 font-manrope text-m-sm transition-colors text-text hover:bg-grey_dark_active hover:text-orange_normal ${
                                    value === option
                                        ? "text-orange_normal bg-grey_dark_active/40"
                                        : ""
                                }`}
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
