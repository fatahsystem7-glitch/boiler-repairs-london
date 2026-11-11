import type { Metadata } from "next";
import { PlumbingSite } from "@/components/plumbing-site";

export const metadata: Metadata = {
  title: { absolute: "London Plumbing Co. | 24/7 Emergency Plumbers" },
  description:
    "Your local London plumbers since 2012. Emergency leaks, boiler repairs, drain unblocking and bathroom refits. Call 020 7946 0912.",
  openGraph: {
    title: "London Plumbing Co. | Here when you need us.",
    description:
      "24/7 emergency plumbing across London. Clear prices. Local engineers.",
  },
};

export default function Home() {
  return <PlumbingSite />;
}
