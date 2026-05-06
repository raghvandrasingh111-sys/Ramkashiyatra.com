import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions for Ram Kashi Yatra bookings, cancellations, and website usage.",
  alternates: {
    canonical: "https://www.ramkashiyatra.com/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="container" style={{ padding: "80px 5%", maxWidth: "900px" }}>
      <h1 style={{ marginBottom: "20px" }}>Terms and Conditions</h1>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        By using this website or booking a tour with Ram Kashi Yatra, you agree to the following terms.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>Booking and Payments</h2>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        Tour booking confirmation is subject to availability and receipt of the required advance payment.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>Cancellations and Refunds</h2>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        Cancellations and refunds are processed according to the policy shared at booking time and mentioned in
        package details.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>Travel Responsibility</h2>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        Travelers are responsible for carrying valid identification and following local regulations at all
        destinations.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>Website Usage</h2>
      <p style={{ color: "#4b5563" }}>
        Content on this website is for information purposes and may be updated without prior notice.
      </p>
    </main>
  );
}
