"use client";
import { useRouter } from "next/navigation";

import Navbar from "@/components/landing/Navbar";
import Button from "@/components/Button";
import Card from "@/components/Card";

import Footer from "@/components/landing/Footer";

export default function Home() {

  const router = useRouter();

  const tagColors: { [key: string]: string } = {
    Design: "#fbbf24",
    Dev: "#818cf8",
    Review: "#16a34a",
    Bug: "#ef4444",
  };

  const mockTasks = [
    // To Do
    {
      id: 1,
      title: "Design onboarding",
      tag: "Design",
      column: "To Do",
      color: "#94a3b8",
    },
    {
      id: 2,
      title: "API docs",
      tag: "Dev",
      column: "To Do",
      color: "#94a3b8",
    },
    // In Progress
    {
      id: 3,
      title: "Drag & drop",
      tag: "Dev",
      column: "In Progress",
      color: "#818cf8",
    },
    // Done
    {
      id: 4,
      title: "Set up repo",
      tag: "Dev",
      column: "Done",
      color: "#16a34a",
    },


  ];

  const features = [
    {
      icon: "🎯",
      title: "Focus on what matters",
      description: "Highlight priority tasks and filter out the noise. Always know what to work on next.",
    },
    {
      icon: "🤝",
      title: "Built for teams",
      description: "Assign tasks to teammates, leave comments, and track progress together in real time.",
    },
    {
      icon: "🔔",
      title: "Never miss a deadline",
      description: "Smart reminders and overdue alerts keep your team accountable and on schedule.",
    },
    {
      icon: "🌙",
      title: "Works the way you do",
      description: "List, kanban, or calendar — switch between views and work the way you think best.",
    },
  ];

  const todoTasks = mockTasks.filter((t) => t.column === "To Do");
  const progressTasks = mockTasks.filter((t) => t.column === "In Progress");
  const doneTasks = mockTasks.filter((t) => t.column === "Done");

  return (
    <>
      <Navbar />
      <main className="py-36">
        <div className="flex items-center justify-center gap-12 pt-16 pb-12 px-16">
          <div className="flex-1 flex flex-col gap-8">
            <span className="flex items-center self-start gap-2 text-primary-dark font-semibold text-xs bg-primary/12 px-3 py-1 rounded-18 border border-primary/25">
              <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>Task
              management, reimagined
            </span>
            <h1 className="font-bold text-7xl tracking-tighter leading-20">
              Manage your work <br /> with{" "}
              <em className="text-primary not-italic">flow</em> and focus.
            </h1>
            <div>
              <p className="text-text-muted leading-7 mb-8">
                FlowTask helps teams organize, track, and complete work <br /> —
                with a clean kanban board, smart deadlines, and zero clutter.
              </p>
              <div className="flex gap-4 ">
                <Button
                  name="Start for free →"
                  style="purple"
                  className="font-semibold py-2.5 px-6"
                  onClick={() => router.push("/signup")}
                />
                <Button
                  name="See how it works"
                  style="white"
                  className="font-semibold py-2.5 px-6"
                  onClick={() => router.push("/#features")}
                />
              </div>

              <p className="text-text-light text-xs mt-4">
                No credit card required · Free forever for individuals
              </p>
            </div>
          </div>
          <div className="">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">My Board</span>
                <span className="bg-primary-dark/12 text-primary-dark rounded-18 px-2 py-1 text-xs font-semibold">
                  3 active
                </span>
              </div>{" "}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <div className="font-semibold text-xs text-text-muted flex items-center gap-1 mb-2">
                    <div className="h-1.5 w-1.5 bg-text-muted rounded-full"></div>
                    To Do
                  </div>
                  {todoTasks?.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white rounded-10 p-2 border border-border mb-2"
                    >
                      <div className="text-sm font-semibold">{task.title}</div>
                      <div
                        className="text-xxs text-text-muted bg-tag-bg rounded-full px-1.5 py-0.5 font-semibold inline-block mt-2"
                        style={{
                          backgroundColor: tagColors[task.tag] + "20",
                          color: tagColors[task.tag],
                        }}
                      >
                        {task.tag}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-xs text-text-muted flex items-center gap-1 mb-2">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    In Progress
                  </div>
                  {progressTasks?.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white rounded-10 py-2 px-2.5 border border-border mb-4 shadow-primary"
                    >
                      <div className="text-sm font-semibold">{task.title}</div>
                      <div
                        className="text-xxs text-text-muted bg-tag-bg rounded-full px-1.5 py-0.5 font-semibold inline-block mt-2"
                        style={{
                          backgroundColor: tagColors[task.tag] + "20",
                          color: tagColors[task.tag],
                        }}
                      >
                        {task.tag}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-xs text-text-muted flex items-center gap-1 mb-2">
                    <div className="h-1.5 w-1.5 bg-secondary rounded-full"></div>
                    Done
                  </div>
                  {doneTasks?.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white rounded-10 p-2 border border-border mb-4"
                    >
                      <div className="text-sm font-semibold text-text-muted line-through">
                        {task.title}
                      </div>
                      <div
                        className="text-xxs text-text-muted bg-tag-bg rounded-full px-1.5 py-0.5 font-semibold inline-block mt-2"
                        style={{
                          backgroundColor: tagColors[task.tag] + "20",
                          color: tagColors[task.tag],
                        }}
                      >
                        {task.tag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
        <section id="features" className="px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Everything you need to <em className="text-primary not-italic">flow</em>
            </h2>
            <p className="text-text-muted mt-4">Simple tools, powerful results.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((f, i) => (
              <Card key={i}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-6">{f.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
