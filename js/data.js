window.PrepPath = window.PrepPath || {};
window.PrepPath.data = {
  exams: [
    { name: "SSC Exams", category: "SSC", icon: "📋", description: "CGL, CHSL, MTS and more", tint: "#edf0ff" },
    { name: "Banking Exams", category: "Banking", icon: "🏦", description: "IBPS, SBI, RBI and more", tint: "#e5f7ef" },
    { name: "Railway Exams", category: "Railway", icon: "🚆", description: "RRB NTPC, Group D and more", tint: "#fff1df" },
    { name: "UPSC", category: "UPSC", icon: "🏛️", description: "Civil Services and CAPF", tint: "#f2eaff" },
    { name: "State PSC", category: "State PSC", icon: "🗺️", description: "State-level public service", tint: "#e9f6f7" },
    { name: "Teaching Exams", category: "Teaching", icon: "📚", description: "CTET, TET, KVS and more", tint: "#ffeded" },
    { name: "Defence Exams", category: "Defence", icon: "🛡️", description: "NDA, CDS, AFCAT and more", tint: "#ecf4e3" },
    { name: "Engineering", category: "Engineering", icon: "⚙️", description: "GATE, JE and technical posts", tint: "#e8f1ff" },
    { name: "Medical Exams", category: "Medical", icon: "🩺", description: "NEET and allied entrances", tint: "#ffeaf1" },
    { name: "State Government", category: "State Govt", icon: "✦", description: "Find opportunities near you", tint: "#fff5d9" }
  ],
  benefits: [
    { title: "Test series that feel real", text: "Get comfortable with the format, timing and rhythm of your target exam.", icon: "◷", tint: "#edf0ff" },
    { title: "Learn from expert faculty", text: "Clear explanations and practical guidance from mentors who know their subject.", icon: "✦", tint: "#fff0df" },
    { title: "See how you’re improving", text: "Understand your strengths, spot gaps and make your next study session count.", icon: "↗", tint: "#e5f7ef" },
    { title: "Practice with purpose", text: "Explore a broad question bank with detailed solutions and useful explanations.", icon: "▤", tint: "#f4eaff" },
    { title: "Join live learning", text: "Ask questions, learn with a class and get unstuck in the moment.", icon: "◉", tint: "#e9f6f7" },
    { title: "A plan that fits you", text: "Build a steady, achievable routine around your goal and your schedule.", icon: "◎", tint: "#ffeded" }
  ],
  series: [
    { title: "SSC CGL Complete Practice", category: "SSC", tests: 42, questions: "4,200+", languages: "English & Hindi", price: "₹499", original: "₹1,499", discount: "Save 67%", tag: "Bestseller", colors: ["#344bab", "#7989ef"] },
    { title: "Banking Exam Master Pack", category: "Banking", tests: 36, questions: "3,600+", languages: "English & Hindi", price: "₹399", original: "₹1,199", discount: "Save 66%", tag: "Popular", colors: ["#147c69", "#6fbea2"] },
    { title: "Railway RRB NTPC Mock Tests", category: "Railway", tests: 30, questions: "3,000+", languages: "English & Hindi", price: "₹349", original: "₹999", discount: "Save 65%", tag: "New", colors: ["#c27038", "#efb35f"] },
    { title: "UPSC Prelims Practice Set", category: "UPSC", tests: 24, questions: "2,400+", languages: "English & Hindi", price: "₹599", original: "₹1,799", discount: "Save 67%", tag: "Expert pick", colors: ["#5d459c", "#a68be6"] },
    { title: "Teaching Eligibility Test Pack", category: "Teaching", tests: 28, questions: "2,800+", languages: "English & Hindi", price: "₹299", original: "₹899", discount: "Save 67%", tag: "Popular", colors: ["#b64c62", "#ef9cab"] },
    { title: "Defence Exams Practice Series", category: "Defence", tests: 22, questions: "2,200+", languages: "English & Hindi", price: "₹399", original: "₹999", discount: "Save 60%", tag: "New", colors: ["#3b7657", "#90c37a"] }
  ],
  courses: [
    { title: "SSC Complete Preparation", category: "SSC", icon: "📊", summary: "Build your confidence for CGL, CHSL and more.", faculty: "Aarav Sharma & team", duration: "6 months", language: "Hindi + English", tint: "#edf0ff" },
    { title: "Banking Exam Foundation", category: "Banking", icon: "💹", summary: "A clear, structured path to your banking career.", faculty: "Meera Nair & team", duration: "5 months", language: "English + Hindi", tint: "#e5f7ef" },
    { title: "UPSC CSE Guided Course", category: "UPSC", icon: "🏛️", summary: "Thoughtful preparation for every stage of CSE.", faculty: "Faculty collective", duration: "12 months", language: "English", tint: "#f2eaff" },
    { title: "Teaching Exams Classroom", category: "Teaching", icon: "🍎", summary: "Strengthen core concepts and classroom readiness.", faculty: "Kavita Joshi & team", duration: "4 months", language: "Hindi + English", tint: "#ffeded" },
    { title: "State Services Prep Course", category: "State PSC", icon: "🗺️", summary: "Focused support for your state-level exam goal.", faculty: "Regional expert faculty", duration: "8 months", language: "Bilingual", tint: "#fff1df" }
  ],
  liveClasses: [
    { subject: "GENERAL STUDIES", status: "LIVE NOW", title: "The Constitution: Fundamental Rights", faculty: "Ananya Rao", icon: "👩🏽‍🏫", description: "Understand the essentials with clear examples and quick revision." },
    { subject: "QUANTITATIVE APTITUDE", status: "TODAY · 6:00 PM", title: "Speed maths: percentages made simple", faculty: "Rohan Mehta", icon: "👨🏽‍🏫", description: "Build accuracy and solve common question types faster." },
    { subject: "ENGLISH", status: "TOMORROW · 5:30 PM", title: "Reading comprehension, step by step", faculty: "Sana Khan", icon: "👩🏻‍🏫", description: "A practical approach to reading, inference and vocabulary." }
  ],
  resources: [
    { title: "Previous year papers", detail: "Learn from real exam questions", icon: "📄", category: "Papers" },
    { title: "Free mock tests", detail: "Practise at your own pace", icon: "⏱️", category: "Practice" },
    { title: "Practice questions", detail: "Sharpen a topic at a time", icon: "✍️", category: "Practice" },
    { title: "Exam syllabus", detail: "Know what to prepare", icon: "🗂️", category: "Guides" },
    { title: "Preparation strategy", detail: "Plan your study routine", icon: "🧭", category: "Guides" },
    { title: "Study notes", detail: "Revise important concepts", icon: "📒", category: "Notes" }
  ],
  affairs: [
    { title: "This week in India: the stories to know", date: "30 Oct 2026", category: "Weekly", description: "A clear, concise round-up of the week's important national updates." },
    { title: "Daily current affairs: 30 October", date: "30 Oct 2026", category: "Daily", description: "Key updates across governance, economy, science and the world." },
    { title: "October current affairs digest", date: "October 2026", category: "Monthly", description: "A month of important events, organised for quick revision." },
    { title: "Quick quiz: test your awareness", date: "Updated today", category: "Quiz", description: "Take five minutes to revisit the latest exam-relevant updates." }
  ],
  stories: [
    { name: "Priya S.", exam: "SSC CGL · 2025", quote: "A simple study plan and regular practice helped me stay consistent. Seeing my progress kept me going.", icon: "👩🏽", bg: "#ffe1d2" },
    { name: "Rahul K.", exam: "IBPS PO · 2025", quote: "The mock tests made the exam format feel familiar. I went in with a calmer mind and a much clearer strategy.", icon: "👨🏽", bg: "#dce6ff" },
    { name: "Aditi M.", exam: "CTET · 2024", quote: "The lessons helped me finally connect the concepts. I could revise at my pace and ask questions when I needed to.", icon: "👩🏻", bg: "#e0f3e5" },
    { name: "Vikram R.", exam: "Railway RRB · 2025", quote: "The practice sets gave me the confidence to understand where I stood and what to work on next.", icon: "👨🏻", bg: "#f3e6ff" }
  ],
  faqs: [
    { question: "What is included in a test series?", answer: "Each series includes exam-style mock tests, practice sets and explanations. The exact test count, language options and included features are listed on each series card." },
    { question: "Can I try a course before enrolling?", answer: "Many courses offer free introductory classes or sample lessons. Visit the course page to explore what is available before choosing a plan." },
    { question: "Are there free mock tests and study resources?", answer: "Yes. PrepPath includes a selection of free practice tests, study notes, previous year papers and exam guides to help you get started." },
    { question: "How do I choose the right preparation plan?", answer: "Start with your target exam and available study time. Compare course and test-series details, and choose a plan that fits your goals and schedule." },
    { question: "Can I use PrepPath on my phone?", answer: "The website is designed to work across phones, tablets and computers. The app promotion above is a demonstration of a planned mobile learning experience." },
    { question: "Does this demo process real payments or sign-ins?", answer: "No. This is a static frontend demonstration. Account, OTP and purchase interactions are illustrative and do not connect to a real service." }
  ]
};
