import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Apply / Contact — DCT Technology",
  description:
    "Apply for an internship at DCT Technology Pvt. Ltd. or get in touch with our mentors directly.",
  openGraph: {
    title: "Apply / Contact — DCT Technology",
    description: "Apply for the next intern batch. Talk to our team directly on WhatsApp.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
