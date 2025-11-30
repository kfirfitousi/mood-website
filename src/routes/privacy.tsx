import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <main className="min-h-screen bg-[#ffda31] text-[#2f2e29] px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-8 rounded-3xl bg-[#fffae4] px-6 py-8 shadow-lg shadow-[#2f2e29]/10">
        <header>
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-[#6b6650] text-sm">
            Last updated: {new Date().getFullYear()}
          </p>
          <p className="mt-4 text-[#6b6650] text-sm">
            This page describes how the Mood app ("we", "us") handles your
            information.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What Mood is</h2>
          <p className="text-sm text-[#6b6650] ">
            Mood is a small iOS app that lets you send hand-drawn doodles to
            friends and display them in Home Screen widgets. The app is designed
            for close, personal connections and uses your phone number and
            contacts to help you find and stay in touch with people you know.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Information we collect</h2>
          <ul className="list-disc list-inside text-sm text-[#6b6650] space-y-1">
            <li>
              <span className="font-medium">Phone number:</span> used to create
              your account and let friends find you.
            </li>
            <li>
              <span className="font-medium">Contacts (optional):</span> with
              your permission, we access selected contacts so you can send
              doodles to people you know. We do not store your entire address
              book.
            </li>
            <li>
              <span className="font-medium">Doodles and metadata:</span> the
              doodles you send, and basic information like sender, recipient,
              and timestamps so the app and widgets can work.
            </li>
            <li>
              <span className="font-medium">
                Notifications and device data:
              </span>{" "}
              information required to deliver push notifications and keep
              widgets up to date.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How we use your information</h2>
          <ul className="list-disc list-inside text-sm text-[#6b6650] space-y-1">
            <li>To create and secure your Mood account.</li>
            <li>To send and receive doodles between you and your friends.</li>
            <li>To show the latest doodles in widgets on your device.</li>
            <li>
              To send optional notifications when friends send you a doodle.
            </li>
            <li>To maintain and improve the reliability of the service.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How long we keep data</h2>
          <p className="text-sm text-[#6b6650]">
            Doodles are meant to be temporary. In the app, doodles are removed
            after a limited time and may also be deleted earlier by you or the
            recipient. Account-level information (such as your phone number)
            stays as long as your account is active, or until you request
            deletion from within the app or via support.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Third-party services</h2>
          <p className="text-sm text-[#6b6650]">
            Mood uses third-party services for storage and payments. These
            services process data on our behalf and are subject to their own
            privacy policies.
            <br />
            Services used: Supabase (Database), RevenueCat (payments).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Your choices</h2>
          <ul className="list-disc list-inside text-sm text-[#6b6650] space-y-1">
            <li>You can turn notifications on or off at any time.</li>

            <li>
              You can add or remove favorite contacts used inside the app and
              widgets.
            </li>
            <li>
              You can delete doodles from within the app, and ask us to delete
              your account and associated data.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-sm text-[#6b6650]">
            If you have any questions about this policy or about how Mood
            handles your data, please contact us at{" "}
            <span className="font-medium">mood@fitousi.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
