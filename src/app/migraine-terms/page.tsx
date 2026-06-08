import { LegalDocument, legalMetadata } from "@/components/legal-document";

export const metadata = legalMetadata(
  "Terms of Use",
  "Terms of Use for ClearHead, the migraine tracking app."
);

export default function MigraineTermsPage() {
  return (
    <LegalDocument title="Terms of Use" effectiveDate="June 8, 2026">
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of the{" "}
        <strong>ClearHead</strong> mobile application and related services (&quot;Service&quot;). By
        creating an account or using ClearHead, you agree to these Terms.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 13 years old to use ClearHead. If you are under the age required to
        consent in your jurisdiction, you may use the Service only with permission from a parent or
        legal guardian.
      </p>

      <h2>The Service</h2>
      <p>
        ClearHead helps you log migraines, review patterns, view environmental context such as
        barometric pressure, and export information for personal use. Features may change over time
        as we improve the product.
      </p>

      <h2>Not medical advice</h2>
      <p>
        ClearHead is a wellness and tracking tool only. It does not provide medical advice,
        diagnosis, treatment, or emergency care. Always seek qualified healthcare advice for medical
        decisions. If you think you may have a medical emergency, call emergency services
        immediately.
      </p>
      <p>
        Risk estimates, forecasts, and insights are informational and may be incomplete or
        inaccurate. Do not rely on ClearHead as your sole basis for health decisions.
      </p>

      <h2>Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for
        activity under your account. Notify us promptly if you believe your account has been
        compromised.
      </p>

      <h2>ClearHead Pro subscriptions</h2>
      <p>
        Some features require a paid <strong>ClearHead Pro</strong> auto-renewable subscription
        purchased through the Apple App Store or Google Play.
      </p>
      <ul>
        <li>Payment is charged to your store account at confirmation of purchase</li>
        <li>
          Subscriptions renew automatically unless canceled at least 24 hours before the end of the
          current billing period
        </li>
        <li>
          You can manage or cancel subscriptions in your Apple ID or Google Play account settings
        </li>
        <li>
          Refunds are handled according to the policies of the store where you purchased the
          subscription
        </li>
        <li>Free trial or promotional offers, if offered, convert to paid plans unless canceled</li>
      </ul>
      <p>
        Pricing, plan length, and included features are shown in the app paywall and store listing
        at the time of purchase.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for unlawful purposes</li>
        <li>Attempt to reverse engineer, disrupt, or abuse the Service or its infrastructure</li>
        <li>Access another user&apos;s account without authorization</li>
        <li>Misrepresent ClearHead as a regulated medical device or clinical diagnostic tool</li>
      </ul>

      <h2>Your content</h2>
      <p>
        You retain ownership of the information you enter into ClearHead. You grant us a limited
        license to host, process, and display that information solely to operate and improve the
        Service.
      </p>

      <h2>Intellectual property</h2>
      <p>
        ClearHead, including its design, branding, software, and content we provide, is owned by us
        or our licensors and is protected by applicable intellectual property laws. These Terms do
        not grant you any rights to our trademarks or branding except as needed to use the Service.
      </p>

      <h2>Third-party services</h2>
      <p>
        The Service relies on third-party providers such as Supabase, RevenueCat, Apple, Google, and
        analytics vendors. Your use of those services may also be subject to their terms and
        policies.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
        ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
        ERROR-FREE, OR ACCURATE.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL,
        ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE
        SERVICE IS LIMITED TO THE GREATER OF THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE
        CLAIM OR USD $50.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using ClearHead at any time. We may suspend or terminate access if you violate
        these Terms or if needed to protect the Service or other users.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use after changes become effective
        constitutes acceptance of the updated Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of Spain, without regard to conflict-of-law principles,
        except where mandatory consumer protections in your country apply.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:samuelcorsanyt@gmail.com">samuelcorsanyt@gmail.com</a>
      </p>

      <h2>Related policies</h2>
      <p>
        See also our{" "}
        <a href="/migraine-privacy">Privacy Policy</a>.
      </p>
    </LegalDocument>
  );
}
