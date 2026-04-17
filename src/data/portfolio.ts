import type {
  EducationEntry,
  ExperienceEntry,
  FocusArea,
  HighlightCard,
  Profile,
  Project,
  Publication,
  QuickFact,
  SocialLink,
} from "../types/portfolio";

const baseUrl = import.meta.env.BASE_URL;

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:sshar443@asu.edu",
    note: "sshar443@asu.edu",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ss1511",
    note: "linkedin.com/in/ss1511",
  },
  {
    label: "GitHub",
    href: "https://github.com/shivam15112003",
    note: "github.com/shivam15112003",
  },
];

export const profile: Profile = {
  name: "Shivam Sharma",
  headline:
    "AI and robotics engineer building perception, prompt-to-action, and automation systems.",
  location: "Tempe, Arizona, United States",
  degree: "M.S. Robotics and Autonomous Systems (AI)",
  school: "Arizona State University",
  shortBio:
    "I build systems that connect computer vision, robotics, and LLM-assisted workflows. My recent work spans agentic robot control, autonomous analytics pipelines, and AI-first automation projects that stay grounded in deployable engineering.",
  resumeUrl: `${baseUrl}docs/ai_robotics_resume.pdf`,
  socialLinks,
};

export const heroHighlights: string[] = [
  "Arizona State University",
  "Expected May 2027",
  "AI + Robotics profile",
];

export const quickFacts: QuickFact[] = [
  {
    label: "Current degree",
    value: "M.S. in Robotics and Autonomous Systems (AI)",
  },
  {
    label: "Current focus",
    value: "Prompt-to-action robotics and perception systems",
  },
  {
    label: "Core stack",
    value: "Python, ROS2, OpenCV, PyTorch, TensorFlow",
  },
];

export const aboutCards: HighlightCard[] = [
  {
    title: "What I build",
    description:
      "Shivam's work sits at the intersection of robotics, machine learning, and practical automation, with projects that move from perception to decision-making to execution.",
  },
  {
    title: "Why it stands out",
    description:
      "The strongest portfolio pieces are not generic ML demos. They show Dobot control, camera-driven reasoning, LLM-assisted planning, and recruiter-facing automation systems that solve real tasks end to end.",
  },
  {
    title: "How the site is framed",
    description:
      "This version keeps the cinematic 3D energy from the reference portfolio, but strips away filler so recruiters get a fast read on education, focus areas, projects, publications, and direct contact paths.",
  },
];

export const educationEntries: EducationEntry[] = [
  {
    degree: "Master of Science in Robotics and Autonomous Systems (AI)",
    school: "Arizona State University",
    timeline: "Expected May 2027",
    detail:
      "Current graduate work focused on AI, autonomy, perception, and robotics systems.",
  },
  {
    degree: "Bachelor of Technology in Artificial Intelligence",
    school: "Amity University, Noida",
    timeline: "Graduated May 2025",
    detail:
      "Undergraduate foundation in artificial intelligence, machine learning, and applied software systems.",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Agentic robotics",
    description:
      "Connecting LLM and VLM style planning with Dobot control, camera perception, and safe task execution.",
  },
  {
    title: "Perception pipelines",
    description:
      "Computer vision workflows using OpenCV, calibration, visual detection, and robot-facing scene understanding.",
  },
  {
    title: "Automation systems",
    description:
      "End-to-end pipelines that generate documents, orchestrate workflows, and package outputs in recruiter-friendly or operator-friendly formats.",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Machine Learning Engineer, Remote Mechanical Tree Operator",
    company: "Arizona State University (Global Futures Laboratory)",
    location: "Tempe, USA",
    timeline: "February 2026 - Present",
    summary:
      "Research-facing systems work focused on remote mechanical operations, machine learning analysis, and LLM-assisted reporting.",
    highlights: [
      "Processed 100GB+ of operational datasets weekly and maintained over 98% data integrity for research workflows.",
      "Built machine learning analysis for operational trends and anomaly detection with 95% precision.",
      "Automated Python pipelines and LLM-based reporting to cut manual processing time by 30% and improve insight delivery speed by 25%.",
    ],
  },
  {
    role: "Machine Learning & AI Specialist",
    company: "RSRTechno",
    location: "Noida, India",
    timeline: "April 2022 - June 2024",
    summary:
      "Production ML work spanning churn modeling, deployment-ready pipelines, and explainable dashboards for stakeholders.",
    highlights: [
      "Developed a churn prediction system for 500K+ customers and improved high-risk identification precision by 25%.",
      "Engineered an end-to-end ML pipeline with Optuna-based hyperparameter tuning that streamlined deployment by 20%.",
      "Implemented SHAP and Streamlit explainability dashboards that reduced stakeholder review time by 18%.",
    ],
  },
];

export const coreStack: string[] = [
  "Python",
  "C/C++",
  "ROS2",
  "OpenCV",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "ONNX",
];

export const featuredProjects: Project[] = [
  {
    title: "Agentic Robot Control via LLM/VLM",
    summary:
      "Turns natural-language block stacking instructions into repeatable Dobot Magician Lite pick-and-place sequences with HSV vision, affine camera-to-robot mapping, persistent state, and safety-aware plan execution.",
    tags: ["Robotics", "LLM", "Computer Vision", "Dobot"],
    githubUrl:
      "https://github.com/shivam15112003/Agentic-Robot-Control-via-LLM-VLM",
    demoUrl:
      "https://www.linkedin.com/posts/ss1511_robotics-dobot-computervision-activity-7401419150549843968-g7lK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOiEBcBfeZohokyDTXwG0fo2BslAbJFwUk",
    featured: true,
  },
  {
    title: "Vision-Centric Robotic Tic-Tac-Toe",
    summary:
      "A fully autonomous Tic-Tac-Toe robot on Dobot Magician Lite that uses an overhead camera to read the board, validate moves from vision, play with Minimax, and write the result directly on paper.",
    tags: ["Robotics", "Computer Vision", "Minimax", "Dobot"],
    githubUrl:
      "https://github.com/shivam15112003/Vision-Centric-Robotic-TicTacToe",
    demoUrl: "https://youtube.com/shorts/80Viijxftmc?si=0B3xEiCY_VNAyPee",
    featured: true,
  },
  {
    title: "LinkedIn LLM AutoApply Bot",
    summary:
      "An intelligent job application assistant that tailors resumes and cover letters with LLM support, detects LinkedIn apply flows, and uses safe click-and-type automation for structured application steps.",
    tags: ["Automation", "LLM", "Selenium", "LaTeX"],
    githubUrl:
      "https://github.com/shivam15112003/LinkedIn-LLM-AutoApply-Bot",
    demoUrl:
      "https://www.linkedin.com/posts/ss1511_artificialintelligence-python-generativeai-activity-7408413956794486784-3F5z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOiEBcBfeZohokyDTXwG0fo2BslAbJFwUk",
    featured: true,
  },
  {
    title: "Dobot Maze Agentic Scene + Local Planner",
    summary:
      "Maze solving and execution on Dobot Magician Lite using pydobot, an agentic AI scene step, and a local Dijkstra-based path planner with both camera capture and saved-image support.",
    tags: ["Robotics", "Planning", "Gemini", "Dijkstra"],
    githubUrl:
      "https://github.com/shivam15112003/dobot-magician-lite-maze-agentic_github",
    demoUrl:
      "https://www.linkedin.com/posts/ss1511_asu-robotics-ai-activity-7394842320443072512-O4I-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOiEBcBfeZohokyDTXwG0fo2BslAbJFwUk",
    featured: true,
  },
  {
    title: "Autonomous Ops Analytics",
    summary:
      "A recruiter-friendly autonomous analytics pipeline scaffold that ingests CSV data, performs profiling and modeling, and produces LaTeX plus PDF reporting with optional Gemini-assisted planning and narrative sections.",
    tags: ["Data", "Analytics", "ML", "Reporting"],
    githubUrl: "https://github.com/shivam15112003/autonomous-data-analytics",
    featured: true,
  },
  {
    title: "AutoML Universal System",
    summary:
      "An enterprise-style AutoML system for automated preprocessing, model selection, hyperparameter tuning, evaluation, and deployment-minded experimentation.",
    tags: ["AutoML", "Model Selection", "Tuning", "Deployment"],
    githubUrl: "https://github.com/shivam15112003/AutoML-Universal-System",
    featured: true,
  },
];

export const publications: Publication[] = [
  {
    title: "Handcrafted AI: Designing Virtual Hardware for Hand Gesture-Based Interaction",
    summary:
      "Explores a virtual hardware simulation layer for gesture-based AI interaction using Mediapipe and OpenCV style pipelines for hands-free control.",
    venueYear: "ICPCT 2025",
    url: "https://ieeexplore.ieee.org/document/10939210",
  },
  {
    title:
      "Smart Interaction: Combining Special Gestures, Virtual Calculations, and IoT for Enhanced User Experience",
    summary:
      "Presents a hybrid interaction framework linking special gestures, virtual calculations, and IoT control for smart environment use cases.",
    venueYear: "ICIMA 2025",
    url: "https://doi.org/10.1109/ICIMA64861.2025.11074109",
  },
];
