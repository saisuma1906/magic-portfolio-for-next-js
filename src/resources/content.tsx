import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sai Suma",
  lastName: "Bolla",
  name: `Sai Suma Chandana Bolla`,
  role: "Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "bollas2@sunypoly.edu",
  location: "America/New_York",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on my data science work and projects</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saisuma1906",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sai-suma-chandana-bolla-519794244",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/resume final.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name}, M.S. Data Science graduate building ML pipelines, multi agent AI systems, and BI dashboards.`,
  headline: <>Building data systems that make decisions clearer</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Capstone Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/ai-demand-forecasting-resilience-system",
  },
  subline: (
    <>
      I am a recent M.S. Data Science graduate from <Text as="span" size="xl" weight="strong">SUNY Polytechnic Institute</Text>, building machine learning pipelines, <br /> multi agent AI systems, and BI dashboards across supply chain, healthcare, and music analytics.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Utica, NY`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I work with messy real world data and turn it into things people can actually use. Over the past two years at SUNY Poly I have built machine learning pipelines, multi agent AI systems, and interactive dashboards across supply chain forecasting, healthcare, and music analytics. My favorite kind of project starts with a vague question, figures out what data actually answers it, and ends with results clear enough that someone outside of data science can act on them.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SUNY Polytechnic Institute",
        timeframe: "Aug 2024 to May 2026",
        role: "Graduate Assistant",
        achievements: [
          <>
            Mentored graduate students on Python programming, data wrangling, and analytics coursework while supporting faculty research with data collection, cleaning, and statistical analysis.
          </>,
          <>
            Built reproducible analytics workflows and reports that informed departmental decision making and student outcome tracking.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "SUNY Polytechnic Institute",
        description: <>Master of Science in Data Science and Analytics. CGPA 3.8 of 4.0. Graduating May 2026.</>,
      },
      {
        name: "Sreyas Institute of Engineering and Technology",
        description: <>Bachelor of Technology in Electronics and Communication Engineering. CGPA 7.5 of 10. Hyderabad, India.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning and AI",
        description: (
          <>Building end to end ML pipelines and multi agent AI systems with Scikit learn, XGBoost, LSTM, Prophet, and LLM integration through Groq.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Programming",
        description: (
          <>Python, R, and SQL for data analysis, modeling, and automation across diverse problem types.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "BI and Visualization",
        description: (
          <>Power BI, Tableau, Streamlit, Plotly, Matplotlib, and Seaborn for stakeholder facing dashboards and reports.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "NLP and Text Analytics",
        description: (
          <>VADER sentiment analysis, LDA topic modeling, text similarity, and API based data collection from sources like YouTube Data API.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Data and Tools",
        description: (
          <>Pandas, NumPy, MySQL, PostgreSQL, Excel, Git, GitHub, Jupyter, VS Code, and Google Colab.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on data, ML, and analytics",
  description: `Read what ${person.name} has been working on recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Data science and ML projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
