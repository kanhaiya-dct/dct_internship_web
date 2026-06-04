export interface SuccessStory {
  name: string;
  track: string;
  quote: string;
  outcome: string;
}

export const stories: SuccessStory[] = [
  {
    name: "Frontend Intern",
    track: "React + Tailwind",
    quote:
      "Pehle main sirf tutorials dekhta tha. Yahan first hi week mein mujhe production code mein PR raise karna pada — wahi se confidence build hua.",
    outcome: "Extended internship by 3 months. Now leads UI for an internal tool.",
  },
  {
    name: "UI/UX Intern",
    track: "Product Design",
    quote:
      "Maine pehli baar dekha ki real design system kaise banta hai. Mentor ne har design pe detail feedback diya — ye coaching mein kabhi nahi milta.",
    outcome: "Built the DCT internal design system. Portfolio + 2 client case studies.",
  },
  {
    name: "Full Stack Intern",
    track: "Node + React",
    quote:
      "Sirf certificate ke liye nahi aaya tha — actual engineer banna tha. DCT mein database design se UI tak sab kuch khud handle kiya.",
    outcome: "Shipped a feature live for an active client. Extended by 2 months.",
  },
];
