// import type { Metadata } from "next";
// import "./globals.css";
// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
// import ErrorReporter from "@/components/ErrorReporter";
// import Script from "next/script";

// export const metadata: Metadata = {
//   title: "Local",
//   description: "",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="antialiased">
//         <ErrorReporter />
//         <Script
//           src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
//           strategy="afterInteractive"
//           data-target-origin="*"
//           data-message-type="ROUTE_CHANGE"
//           data-include-search-params="true"
//           data-only-in-iframe="true"
//           data-debug="true"
//           data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
//         />
//         {children}
//         <VisualEditsMessenger />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Local",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add Google Fonts here */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">
        <ErrorReporter />

        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />

        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
