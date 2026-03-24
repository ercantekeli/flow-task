import Navbar from "@/components/landing/Navbar";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex items-center justify-center gap-12 pt-16 px-9 pb-12">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-primary-dark font-semibold text-xs bg-primary/12 px-3 py-1  rounded-18 border border-primary/25">
              <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>Task
              management, reimagined
            </div>
            <h1 className="font-bold text-5xl tracking-tighter leading-13">
              Manage your work <br /> with{" "}
              <em className="text-primary not-italic">flow</em> and focus.
            </h1>
            <div>
              <p className="text-text-muted leading-7 max-w-96 mb-8">
                FlowTask helps teams organize, track, and complete work — with a
                clean kanban board, smart deadlines, and zero clutter.
              </p>
              <div className="flex gap-4 ">
                <Button
                  name="Start for free →"
                  style="purple"
                  className="font-semibold py-2.5 px-6"
                />
                <Button
                  name="See how it works"
                  style="white"
                  className="font-semibold py-2.5 px-6"
                />
              </div>

              <p className="text-text-light text-xs mt-4">
                No credit card required · Free forever for individuals
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
