import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mukul",
  lastName: "Waval",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "SDE Intern",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Marathi"] // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  )
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MukulWaval/"
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mukul-waval-ab4a772a7/"
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mukulwaval2000@gmail.com"
  }
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>SDE Intern</>,
  subline: (
    <>
      I'm Mukul Waval. I enjoy working on projects that challenge me and push me
      to learn more.
    </>
  )
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false
  },
  avatar: {
    display: true
  },
  calendar: {
    display: true,
    link: "https://cal.com/mukul-waval"
  },
  intro: {
    display: true,
    title: "Introduction",
    description: <></>
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Devcreate Solutions",
        timeframe: "2023 - Present",
        role: "SDE Intern",
        achievements: [
          <>Learned and worked with C# and React.</>,
          <>
            Gained experience in software development and building applications.
          </>,
          <>Worked on projects involving front-end and back-end development.</>
        ],
        images: []
      }
    ]
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>
      }
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      { title: "Next.js", description: null, images: [] },
      { title: "React.js", description: null, images: [] },
      { title: "Nest.js", description: null, images: [] },
      { title: "C#", description: null, images: [] },
      { title: "MySQL", description: null, images: [] },
      { title: "Git", description: null, images: [] },
      { title: "Express.js", description: null, images: [] },
      { title: "Vue.js", description: null, images: [] },
      { title: "MongoDB", description: null, images: [] },
      { title: "Figma", description: null, images: [] },
      { title: "Python", description: null, images: [] },
      { title: "C++", description: null, images: [] }
    ]
  }
};

const blog = {
  label: "Blog",
  title: "Writing about...",
  description: `Read what ${person.name} has been up to recently`
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal"
    }
  ]
};

export { person, social, newsletter, home, about, blog, work, gallery };
