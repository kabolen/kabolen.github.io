
export const profile = {
  name: 'Kade Bolen',
  role: 'Creator and Collaborator',
  location: 'Boise, Idaho',
  tagline: "Always striving to become a better person, developer, and leader.",
  email: 'kadesbolen@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/kabolen' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kade-bolen-65931a253/' },
  ],
  bio: [
    "I am a recent college graduate with a deep passion for learning new concepts, improving my understanding of existing " +
    "ideas, and building useful tools. In my free time I enjoy tinkering with machines both antiquated and modern, " +
    "riding my bike around town or in the mountains, and spending time with friends online!",
  ],
  resume: {
    downloadUrl: '/kb_resume.pdf',
    experience: [
      {
        role: 'Capstone Project Developer',
        org: 'Boise State, Idaho National Laboratory',
        period: 'August 2025 - December 2025',
        summary: 'Created a full stack application for logging and viewing scientific data, enabling ' +
            'researchers to look back on years of recorded metrics to develop solutions for the future.',
      },
      {
        role: 'Makerlab Lead',
        org: 'Albertsons Library Makerlab',
        period: 'September 2023 - December 2025',
        summary: 'Assisted patrons in creating tangible products from ideas and concepts. Spearheaded a ' +
            'new plastic recycling program and facilitated strong connections with outside organizations.',
      },
    ],
    education: [
      {
        school: 'Boise State University',
        credential: 'Bachelor, Computer Science',
        period: '2021 - 2025',
      },
    ],
    skills: ['Java', 'C', 'Python', 'CAD Modeling', 'Troubleshooting'],
  },
}
