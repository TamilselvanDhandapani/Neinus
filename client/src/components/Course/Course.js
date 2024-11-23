import { BsStopwatch } from "react-icons/bs";

const courses = [
  {
    id: 1,
    courestitle: "React JS for Beginners",
    title: "Master the Power of React Beginner Course",
    description:
      "Dive into the lifecycle of React components   and harness its power to control your application's behavior.",
    icon: BsStopwatch,
    rating: "4.8/5",
    duration: "8 Weeks",
    cardtitle:"React Js ",
    carddetail:" React JS is a powerful JavaScript library used for building user interfaces. It enables the creation of dynamic, responsive, and component-based web applications.",
    image: "./react.png",
    output:
      "Our React Course is your gateway to becoming a proficient React developer. Learn to build dynamic and interactive web applications using one of the most popular JavaScript libraries in the industry.",
    highlights: [
      {
        title: "8 Weeks Program",
        description:
          "An intensive 8-week curriculum designed to give you hands-on experience in React development.",
      },
      {
        title: "5 Real-Time Projects",
        description:
          "Work on five real-world projects to build a strong portfolio and gain practical experience.",
      },
      {
        title: "100% Placements",
        description:
          "Guaranteed placement assistance to help you land your dream job after completing the course.",
      },
    ],

    basicTopics: [
      {
        title: "React Fundamentals ",
        description:
          "Start with the basics. Understand React's core concepts, component structure, and the virtual DOM.",
      },
      {
        title: " State and Props",
        description:
          " Learn how to manage  component state and utilize props to pass data between components.",
      },
      {
        title: "Component Lifecycle",
        description:
          "Dive into the lifecycle of React components and harness its power to control your application's behavior.",
      },
    ],
    advancedTopics: [
      {
        title: " Routing with React Router ",
        description:
          "Create single-page applications (SPAs) with seamless navigation using React Router.",
      },
      {
        title: " Handling Forms ",
        description:
          "Master form handling in React and manage user input effectively.",
      },
      {
        title: " State Management ",
        description:
          "Explore state management options, including local component state and global state using Redux or Context API.",
      },
    ],
  },
];

export default courses;
