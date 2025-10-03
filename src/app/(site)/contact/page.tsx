
import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Institute of Corporate Law, Policy, and Governance Global",
    description: "Get in touch with ICLP Global for programs & enrollment, partnerships, research collaborations, or general inquiries.",
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
            <Faq/>
        </main>
    );
};
