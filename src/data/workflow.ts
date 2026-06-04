export interface WorkflowStep {
  step: string;
  title: string;
  body: string;
  highlight: boolean;
}

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Solid Base",
    body: "Deep dive into core CS and language fundamentals.",
    highlight: false,
  },
  {
    step: "02",
    title: "Guided Tasks",
    body: "Small wins with mentor-supervised exercises.",
    highlight: false,
  },
  {
    step: "03",
    title: "Internal Dev",
    body: "Building tools used by our own company teams.",
    highlight: false,
  },
  {
    step: "04",
    title: "Client Work",
    body: "Solving real problems for real industry clients.",
    highlight: false,
  },
  {
    step: "05",
    title: "Ship & Lead",
    body: "Launch your portfolio and mentor the next batch.",
    highlight: true,
  },
];
