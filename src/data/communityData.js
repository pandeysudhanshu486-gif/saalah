/**
 * Salaah — The Mentor Community
 * Central Configuration & Community Data
 * 
 * Update this placeholder URL when the official Google Form, Notion page,
 * or community portal registration link becomes available.
 */
export const OFFICIAL_REGISTRATION_URL = "https://forms.gle/placeholder-salaah-registration";

export const COMMUNITY_INFO = {
  name: "Salaah",
  tagline: "The Mentor Community",
  badge: "A COMMUNITY THAT GROWS TOGETHER",
  email: "connect.salaah@example.com", // Placeholder contact email
  instagramHandle: "@salaah.community",
  instagramUrl: "https://instagram.com/salaah.community",
  linkedinUrl: "https://linkedin.com/company/salaah-mentor-community",
  discordUrl: "https://discord.gg/placeholder-salaah",
  githubUrl: "https://github.com/placeholder-salaah",
  location: "Campus & Virtual Student Hub",
  disclaimer: "Salaah is an emerging student-led initiative. Activities, schedules, and partnerships presented here are illustrative proposals for our upcoming community cohort.",
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Contact", href: "#contact" },
];

export const BELIEFS = [
  {
    id: "learn",
    title: "Learn Together",
    subtitle: "Knowledge thrives when shared freely",
    description: "Break away from isolated studying. Share notes, discuss complex concepts openly, and develop real-world practical skills through group learning sessions.",
    icon: "BookOpenCheck",
    tag: "Practical Mastery"
  },
  {
    id: "grow",
    title: "Grow Together",
    subtitle: "Guidance without gatekeeping",
    description: "Support each other's personal and professional growth. Connect with senior peers who have walked the path, navigate college hurdles, and build enduring self-confidence.",
    icon: "Compass",
    tag: "Personal Elevation"
  },
  {
    id: "build",
    title: "Build Together",
    subtitle: "From conversations to reality",
    description: "Collaborate on meaningful ideas, student initiatives, open projects, and hackathons. Turn curiosity into tangible portfolio work alongside driven peers.",
    icon: "Boxes",
    tag: "Collaborative Action"
  }
];

export const ACTIVITIES = [
  {
    id: "mentorship",
    title: "Mentorship Sessions",
    category: "1-on-1 & Small Circles",
    description: "Casual yet structured discussions where senior students and alumni provide candid advice on academics, career paths, and technical journeys.",
    cadence: "Bi-weekly Circles",
    highlight: "Non-judgmental, direct peer advice",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tags: ["Career Roadmaps", "Resume Reviews", "Academic Advice"]
  },
  {
    id: "peer-learning",
    title: "Peer Learning Circles",
    category: "Study Groups & Sprints",
    description: "Collaborative study pods focused on mastering core topics—from software development and design to research writing and public speaking.",
    cadence: "Weekly Sprints",
    highlight: "Active learning over passive tutorials",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    tags: ["Tech Stacks", "Design Critiques", "Problem Solving"]
  },
  {
    id: "workshops",
    title: "Workshops & Interactive Events",
    category: "Hands-on Masterclasses",
    description: "Practical sessions led by students and invited guests breaking down real tools, internship application strategies, and project architectures.",
    cadence: "Monthly Events",
    highlight: "Walk away with tangible outcomes",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    tags: ["Hands-on Labs", "Guest Speakers", "Skill Sprints"]
  },
  {
    id: "collaborative-projects",
    title: "Collaborative Projects",
    category: "Team Initiatives",
    description: "Cross-functional teams formed within the community to build open-source tools, campus solutions, or prepare for competitive hackathons.",
    cadence: "Seasonal Cohorts",
    highlight: "Real team experience for your resume",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    tags: ["Open Source", "Design Systems", "Hackathon Squads"]
  }
];

export const OPPORTUNITIES = [
  {
    title: "Become a Peer Mentor",
    role: "Leadership & Mentorship",
    description: "If you have gained experience in a subject, tech stack, or campus domain, share your learnings and guide newer students finding their footing.",
    badge: "Open for Applications",
    icon: "GraduationCap"
  },
  {
    title: "Lead a Learning Pod",
    role: "Facilitation & Mastery",
    description: "Pick a topic you want to master—like UI design, data structures, or technical writing—and host weekly collaborative check-ins for fellow learners.",
    badge: "Proposed Pods",
    icon: "Users"
  },
  {
    title: "Community Core Team",
    role: "Operations & Creative",
    description: "Help shape the community's culture, organize student gatherings, manage communications, and design visual assets for Salaah.",
    badge: "Initiative Roles",
    icon: "Sparkles"
  },
  {
    title: "Project Pitch & Collaboration",
    role: "Builders & Creators",
    description: "Got an idea for a project or tool? Find enthusiastic team members across different years and disciplines to build it together.",
    badge: "Continuous Pitch",
    icon: "Rocket"
  }
];

export const FAQS = [
  {
    question: "Who can join Salaah?",
    answer: "Salaah is open to any student passionate about learning, sharing skills, and supporting others. Whether you are in your first year seeking direction or an experienced student willing to guide, there is a seat for you."
  },
  {
    question: "Is there any membership fee?",
    answer: "No. Salaah is a student-first, accessible initiative. Participation in mentorship circles and peer learning is entirely free."
  },
  {
    question: "How are mentors selected?",
    answer: "Mentors are senior students and enthusiastic peers who have demonstrated proficiency and a genuine desire to uplift others with empathy and patience."
  },
  {
    question: "How do I get involved initially?",
    answer: "Fill out the preliminary interest form via the 'Join Salaah' button. You'll be notified as soon as introductory cohort meetups and peer groups open."
  }
];
