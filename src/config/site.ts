import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Ahmed B.K.",
  links: {
    mail: "ahmedbenkhalifa1997@gmail.com",
    linkedin: "https://www.linkedin.com/in/ben-khalifa-ahmed/",
    github: "https://github.com/Ahmedbenkhalifa",
    facebook: "https://www.facebook.com/ahmed.benkhalifa.0/",
    instagram: "https://www.instagram.com/ben_khalifa_ahmed",
  },
  header: {
    logo: "/images/logo.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  heroBanner: {
    title: {
      1: [
        { text: "Hey there. I'm " },
        { text: "Ahmed Bk", highlighted: true },
        { text: "." },
      ],
    },
    subtitle:
      "A tech enthusiast who loves building and launching solid web applications.",
    callToActions: [
      {
        label: "Read the blog",
        href: "/blog",
      },
      {
        label: "Explore my projects",
        href: "/#projects",
      },
    ],
  },
  about: {
    avatar: "/images/avatar.png",
    title: "I'm a passionate web developer working from Sousse,Tunisia.",
    description: [
      "Hello! I'm a passionate software developer with 2.5 years of valuable experience in the field. I've had the privilege of working at Pengguin, where I honed my skills in software development.My journey in the world of technology has been a thrilling one, and I've had the opportunity to work on diverse projects that have expanded my knowledge and expertise.",
      "If you're curious about my work, feel free to check out my portfolio. I believe in the power of continuous learning and innovation, and I'm always excited to take on new challenges.",
      "Let's code the future together!",
    ],
  },
  experience: [
    {
      title: "Front-end Developer",
      company: "Pengguin Inc.",
      link: "https://app.pengguin.com/",
      location: "Delaware, United States",
      startDate: "August 2022",
      endDate: "Present",
      projects: [
        {
          name: "",
          description: [
            "Created a video call feature similar to Google Meet, enabling teachers to conduct interactive lessons with students.",
            "Integrated a whiteboard functionality into the video call feature using agora, facilitating real-time collaboration and teaching.",
            "Implemented a feedback system for lessons, using lesson recordings and AI-based grammar detection APIs to provide students with personalized feedback on their language skills",
            "Designed and implemented a booking system, allowing students to schedule lessons and enabling teachers to accept and manage lesson requests.",
            "Improved website performance through code optimization and implementing lazy loading techniques.",
            "Built a design system on top of Material-UI, utilizing Storybook to ensure a consistent and high-quality user interface throughout the learning platform.",
          ],
        },
      ],
      tags: [
        "Reactjs",
        "Nextjs",
        "redux toolkit",
        "rtk-query",
        "GraphQL",
        "storybook",
        "Material-ui",
      ],
    },
    {
      title: "Some featured projects",
      company: "Innofab",
      link: "https://www.ahmedbk.com",
      location: "United States",
      startDate: "Jun 2017",
      endDate: "Dec 2018",
      projects: [
        {
          name: "Digital2Value",
          description: [
            "Designed an interactive mind map interface, allowing users to navigate through the consultation process by clicking on nodes representing different stages of the company management journey.",
            "Used advanced algorithms to generate dynamic, context-sensitive questions within each node of the mind map, providing customized and relevant consultation",
            "Implemented features for saving and exporting mind maps, enabling users to revisit or share their consultation progress at any time.",
          ],
        },
        {
          name: "Devoo",
          description: [
            "Designed and developed the WinDev License and Support platform.",
            "Implemented a user-friendly interface for browsing and selecting WinDev licenses,providing detailed information about each version and the associated updates.",
            "Developed a client dashboard where registered users can access articles, guides, and resources related to WinDev.",
            "Designed and integrated a community forum feature, allowing users to post questions,seek assistance, and receive responses from other platform users.",
            "Implemented a comment system within the forum, enabling users to engage in discussions, share insights, and provide helpful responses to posted queries.",
            "Integrated analytics tools to track user interactions, forum engagement, and article popularity, providing insights to improve the platform's performance and usability.",
          ],
        },
      ],
      tags: [
        "ReactJs",
        "redux toolkit",
        "NodeJs",
        "Express",
        "MongoDb",
        "Material-ui",
      ],
    },
  ],
  education: [
    {
      school: "ESPRIT Higher School of Engineering",
      link: "https://esprit.tn/",
      degree: "Engineering degree",
      fieldOfStudy: "web development",
      startDate: "2018",
      endDate: "2021",
    },
    {
      school: "Preparatory Institute for Engineering Studies",
      link: "https://ipeis.rnu.tn/",
      degree: "Preparatory School for Engineer Studies",
      startDate: "2016",
      endDate: "2018",
    },
  ],
  projects: [
    {
      title: "Notionfolio",
      slug: "my-portfolio",
      image: "/images/screenshots/my-portfolio/screenshot-01.png",
      screenshots: [
        "/images/screenshots/my-portfolio/screenshot-01.png",
        "/images/screenshots/my-portfolio/screenshot-02.png",
        "/images/screenshots/my-portfolio/screenshot-03.png",
      ],
      summary:
        "its a versatile platform that empowers users to create their personalized portfolios and blogs seamlessly using Next.js and Vercel. It leverages the power of Notion as a content management system, offering features such as SEO-friendly URLs, responsive design, and incremental static regeneration.",
      tags: ["Nextjs", "Typescriot", "Tailwind CSS"],
      description: [
        "This repo is what I use to power my personal blog and portfolio website.",
        "It's perfect for building your own personal website if you are a developer, a designer, a researcher, a writer with almost everything customizable.",
        "Features include writing posts using Notion as CMS, pretty URLs, SEO-friendly, entirely customizable through one config file, fast page views, sleek portfolio showcase, dark and light mode, responsive design, incremental static regeneration, RSS feed, deploy on Vercel in minutes, search posts instantly, analytics with Vercel Analytics, and the ability to display your courses.",
      ],
      links: {
        website: "https://www.ahmedbk.com",
        github: "https://github.com/Ahmedbenkhalifa/my-potfolio",
      },
      createdAt: "2022",
      featured: true,
    },
    {
      title: "Pengguin UI",
      slug: "pengguin-ui",
      image: "/images/projects/project-pengguin-ui.png",
      screenshots: [
        "/images/screenshots/pengguin-ui/screenshot-01.png",
        "/images/screenshots/pengguin-ui/screenshot-02.png",
        "/images/screenshots/pengguin-ui/screenshot-03.png",
      ],
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
      tags: ["React", "Storybook", "Typescript", "Material UI"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.ahmedbk.com",
        github: "https://github.com/Ahmedbenkhalifa/my-potfolio",
      },
      createdAt: "2022",
      featured: true,
    },
    {
      title: "mind map app",
      image: "/images/projects/project01.png",
      slug: "mind-map-app",
      screenshots: [
        "/images/screenshots/mind-map-app/screenshot-01.png",
        "/images/screenshots/mind-map-app/screenshot-02.png",
        "/images/screenshots/mind-map-app/screenshot-03.png",
        "/images/screenshots/mind-map-app/screenshot-04.png",
      ],
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
      tags: ["React", "NodeJs", "redux", "react-flow"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://d2v.ahmedbk.com/",
      },
      createdAt: "2021",
      featured: true,
    },
    {
      title: "Codehub Website",
      slug: "codehub-website",
      image: "/images/screenshots/codehub-website/screenshot-01.png",
      screenshots: [
        "/images/screenshots/codehub-website/screenshot-01.png",
        "/images/screenshots/codehub-website/screenshot-03.png",
        "/images/screenshots/codehub-website/screenshot-02.png",
      ],
      summary:
        "Create a weather forecast web application that allows users to check the weather for different locations. The project will involve using APIs, front-end technologies like React, and integrating with a weather data provider.",
      tags: ["Nextjs", "Material-ui", "Typescript"],
      links: {
        website: "https://www.ahmedbk.com",
        github: "https://github.com/Ahmedbenkhalifa/my-potfolio",
      },
      createdAt: "2021",
      featured: true,
    },
    {
      title: "Weather Forecast App",
      slug: "weather-app",
      image: "/images/projects/project02.png",
      screenshots: [
        "/images/screenshots/weather-app/screenshot-01.png",
        "/images/screenshots/weather-app/screenshot-02.png",
        "/images/screenshots/weather-app/screenshot-03.png",
      ],
      summary:
        "Create a weather forecast web application that allows users to check the weather for different locations. The project will involve using APIs, front-end technologies like React, and integrating with a weather data provider.",
      tags: ["React", "API Integration", "Weather"],

      links: {
        website: "https://www.ahmedbk.com",
        github: "https://github.com/Ahmedbenkhalifa/my-potfolio",
      },
      createdAt: "2019",
      featured: false,
    },
  ],
  contact: {
    title: "Get in touch",
    description:
      "Ready to elevate your React projects? Let's collaborate! Drop me a line, and let's discuss turning your ideas into stunning web experiences.",
    callToAction: {
      label: "Say hello",
      href: "mailto:ahmedbenkhalifa1997@gmail.com",
    },
  },
}
