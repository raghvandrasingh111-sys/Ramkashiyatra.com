import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Ram Kashi Yatra and learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://www.ramkashiyatra.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container" style={{ padding: "80px 5%", maxWidth: "900px" }}>
      <h1 style={{ marginBottom: "20px" }}>Privacy Policy</h1>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        At Ram Kashi Yatra, we respect your privacy and are committed to protecting your personal information.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>Information We Collect</h2>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        We may collect your name, phone number, email address, and travel preferences when you submit enquiry
        forms or contact us for bookings.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>How We Use Information</h2>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        We use this information to respond to enquiries, provide package details, process bookings, and improve
        our services.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>Data Protection</h2>
      <p style={{ marginBottom: "16px", color: "#4b5563" }}>
        We implement reasonable safeguards to protect your data and do not sell personal information to third
        parties.
      </p>

      <h2 style={{ marginTop: "24px", marginBottom: "10px" }}>Contact</h2>
      <p style={{ color: "#4b5563" }}>
        If you have questions about this policy, please contact us via the enquiry form on our website.
      </p>
    </main>
  );
}
