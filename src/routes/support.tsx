import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
  component: Support,
});

function Support() {
  return (
    <main className="min-h-screen bg-[#ffda31] text-[#2f2e29] px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-8 rounded-3xl bg-[#fffae4] px-6 py-8 shadow-lg shadow-[#2f2e29]/10">
        <header>
          <h1 className="text-3xl font-bold mb-3">Support</h1>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Common questions</h2>
          <ul className="space-y-2 text-sm text-[#6b6650]">
            <li>
              <span className="font-medium">
                I can&apos;t see my friend in the app.
              </span>{" "}
              Make sure both of you have verified your phone numbers in Mood
              using the same numbers saved in your contacts.
            </li>
            <li>
              <span className="font-medium">
                My widget isn&apos;t updating.
              </span>{" "}
              Confirm that notifications are enabled for Mood and that you have
              selected a contact for the widget. Opening the app and pulling to refresh the doodles list
              can also help refresh things.
            </li>
            <li>
              <span className="font-medium">A doodle disappeared.</span> Doodles
              are designed to be temporary and may disappear after a few days or
              if you or your friend delete them.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact us</h2>
          <p className="text-sm text-[#6b6650]">
            For anything that needs a human (billing questions, account issues,
            bug reports, or feedback), send us an email at{" "}
            <span className="font-medium">mood@fitousi.com</span>.
            Please include the phone number you use with Mood and, if relevant,
            a short description of what you were trying to do.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Debug info</h2>
          <p className="text-sm text-[#6b6650]">
            When you contact support, it&apos;s helpful if you can also share:
          </p>
          <ul className="list-disc list-inside text-sm text-[#6b6650] space-y-1">
            <li>Which iPhone model and iOS version you&apos;re using.</li>
            <li>Whether the issue happens every time or only sometimes.</li>
            <li>Any screenshots of the problem, if possible.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
