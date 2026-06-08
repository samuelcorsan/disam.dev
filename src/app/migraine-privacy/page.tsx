import { LegalDocument, legalMetadata } from "@/components/legal-document";

export const metadata = legalMetadata(
  "Privacy Policy",
  "Privacy Policy for ClearHead, the migraine tracking app."
);

export default function MigrainePrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" effectiveDate="June 8, 2026">
      <p>
        This Privacy Policy describes how <strong>ClearHead</strong> (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) collects, uses, and protects information when you use the ClearHead mobile
        application and related services. By using ClearHead, you agree to this policy.
      </p>

      <h2>Who we are</h2>
      <p>
        ClearHead is a migraine tracking and wellness app. Contact for privacy questions:{" "}
        <a href="mailto:samuelcorsanyt@gmail.com">samuelcorsanyt@gmail.com</a>.
      </p>

      <h2>Information we collect</h2>
      <h3>Account information</h3>
      <ul>
        <li>Email address and authentication credentials when you sign up or sign in</li>
        <li>
          If you use Sign in with Apple on iOS, we receive the identifiers and profile details Apple
          provides for authentication
        </li>
      </ul>

      <h3>Health and wellness data you provide</h3>
      <ul>
        <li>Migraine attack logs, including severity, timing, symptoms, and medications taken</li>
        <li>Onboarding profile details you choose to provide (for example sex-related education preferences)</li>
        <li>Pain location selections on the in-app head map</li>
        <li>Medication lists and doctor report exports you generate in the app</li>
      </ul>

      <h3>Location information</h3>
      <p>
        With your permission, ClearHead may access coarse or fine location to show local barometric
        pressure and related environmental context. You can deny or revoke location access in your
        device settings at any time.
      </p>

      <h3>Usage and technical data</h3>
      <ul>
        <li>App interactions and feature usage collected through analytics (PostHog)</li>
        <li>Device type, app version, and diagnostic information needed to operate and improve the service</li>
        <li>Subscription and purchase status processed through RevenueCat and the Apple App Store or Google Play</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>Provide migraine tracking, history, statistics, forecasts, and related app features</li>
        <li>Authenticate your account and keep your data synced across sessions</li>
        <li>Process subscriptions and restore purchases</li>
        <li>Improve reliability, security, and product experience</li>
        <li>Respond to support requests</li>
      </ul>

      <h2>What ClearHead is not</h2>
      <p>
        ClearHead is for personal wellness tracking and education. It does not provide medical
        diagnosis, treatment, or emergency services. Risk estimates and patterns are informational
        only and are not a substitute for professional medical advice.
      </p>

      <h2>How we store and protect data</h2>
      <p>
        Account and app data are stored using Supabase and related cloud infrastructure with
        industry-standard safeguards. Data is encrypted in transit. We limit access to systems that
        need it to operate the service.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Supabase</strong> — authentication and database hosting
        </li>
        <li>
          <strong>RevenueCat</strong> — subscription management and purchase validation
        </li>
        <li>
          <strong>Apple / Google</strong> — in-app purchases and platform sign-in where applicable
        </li>
        <li>
          <strong>PostHog</strong> — product analytics
        </li>
      </ul>
      <p>
        These providers process data according to their own privacy policies and our agreements with
        them.
      </p>

      <h2>Data retention and deletion</h2>
      <p>
        We retain your information while your account is active and as needed to provide the
        service. You may request account deletion through the in-app flow where available, or by
        contacting us at the email above.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Manage location permissions in device settings</li>
        <li>Manage subscription renewal or cancellation through the App Store or Google Play</li>
        <li>Request access, correction, or deletion of your data by contacting us</li>
      </ul>

      <h2>Children</h2>
      <p>
        ClearHead is not directed to children under 13, and we do not knowingly collect personal
        information from children under 13.
      </p>

      <h2>International users</h2>
      <p>
        Your information may be processed in countries where our service providers operate. By using
        ClearHead, you consent to that processing as described in this policy.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the revised version on
        this page and update the effective date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this Privacy Policy:{" "}
        <a href="mailto:samuelcorsanyt@gmail.com">samuelcorsanyt@gmail.com</a>
      </p>
    </LegalDocument>
  );
}
