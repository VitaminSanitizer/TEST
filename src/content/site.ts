/* ==========================================================================
   SINE MORA ADVISORY — SITE CONTENT
   --------------------------------------------------------------------------
   All of the words on the website live in this one file.

   How to edit:
   • Change only the text between the quotes ('like this').
   • If your text needs an apostrophe, use the curly one (’), not ('),
     or the text will break.
   • To add a team member or FAQ, copy one { ... } block, paste it below
     the last one, and edit it. Keep the comma after the closing }.
   • To remove one, delete its whole { ... }, block.
   • Anything marked PLACEHOLDER should be replaced before launch.

   After saving, the site updates automatically if `npm run dev` is running.
   ========================================================================== */

export const site = {
  /* --- Browser tab title and search-engine description ------------------ */
  meta: {
    title: 'Sine Mora Advisory — College Admissions Advising',
    description:
      'Independent college admissions advising from current University of Pennsylvania students. Essay review, one-on-one advising, and full application support in English and Spanish.',
  },

  /* Light/dark mode button (top right). Read aloud by screen readers. */
  themeToggle: {
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },

  /* PLACEHOLDER: the email shown in the footer and form error message. */
  contactEmail: 'hello@example.com',

  /* --- 1. Hero ---------------------------------------------------------- */
  hero: {
    name: 'Sine Mora Advisory',
    tagline: 'A transcript without character behind it is just as empty.',
    button: 'Express interest',
  },

  /* --- 2. Why us -------------------------------------------------------- */
  whyUs: {
    eyebrow: 'Why us',
    heading: 'Admissions have changed. So has the advice.',
    body: [
      'College admissions look nothing like they did a decade ago. Testing policies keep shifting, schools read essays differently since the Supreme Court’s 2023 ruling on race conscious admissions, and every applicant now writes in a world with AI.',
      'We applied through these changes and got into Penn, and we live the result every day as students across its schools and majors. We know what admissions offices are looking for now, not what worked when your parents applied.',
    ],
  },

  /* --- 3. Student perspective ------------------------------------------ */
  perspective: {
    eyebrow: 'Our perspective',
    heading: 'The Penn you won’t find on a campus tour.',
    body: 'A small team of Penn students across multiple schools and disciplines. We take a limited number of applicants each cycle and bring the perspective of every corner of Penn to each one.',
  },

  /* --- 4. Services (no prices or numbers) ------------------------------ */
  services: {
    eyebrow: 'Services',
    heading: 'How we work with you',
    intro: 'Every engagement is personal. Choose the level of support that fits where you are in the process.',
    items: [
      {
        title: 'Essay review',
        body: 'Close, candid reading of your personal statement and supplements, from first draft to final polish. Major essays are reviewed by advisors from different disciplines, so your writing is tested against more than one kind of reader.',
        points: [],
      },
      {
        title: 'One-on-one advising',
        body: 'Ongoing conversations with an advisor who knows your story.',
        points: [
          'Building a balanced college list',
          'Shaping and presenting your activities',
          'Interview preparation',
        ],
      },
      {
        title: 'Full application support',
        body: 'Guidance through every part of the application, from strategy and school selection to essays, activities, and a final review before you submit.',
        points: [],
      },
    ],
    notes: [
      {
        title: 'Matched by field',
        body: 'We pair each student with an advisor from their intended area of study, so your advisor understands the path you want to take.',
      },
      {
        title: 'English y español',
        body: 'Advising is available in English and Spanish, for students and their families. La asesoría está disponible en inglés y en español.',
      },
    ],
  },

  /* --- 5. Team ---------------------------------------------------------
     photo: put an image in the /public/team/ folder and write its file
            name here, e.g. photo: 'team/jane.jpg'. Leave it as '' to show
            the person’s initials instead.
     photoAlt: a short description of the photo, for screen readers,
            e.g. 'Portrait of Jane Doe'.
  ------------------------------------------------------------------------ */
  team: {
    eyebrow: 'The team',
    heading: 'Advisors',
    intro: 'Current Penn students who went through the process recently and remember it clearly.',
    members: [
      {
        name: '[Advisor Name]', // PLACEHOLDER
        school: 'College of Arts & Sciences',
        major: '[Major]',
        bio: '[Two or three sentences about this advisor: where they are from, what they study, and what they bring to the students they work with.]',
        photo: '',
        photoAlt: '',
      },
      {
        name: '[Advisor Name]', // PLACEHOLDER
        school: 'The Wharton School',
        major: '[Major]',
        bio: '[Two or three sentences about this advisor: where they are from, what they study, and what they bring to the students they work with.]',
        photo: '',
        photoAlt: '',
      },
      {
        name: '[Advisor Name]', // PLACEHOLDER
        school: 'School of Engineering and Applied Science',
        major: '[Major]',
        bio: '[Two or three sentences about this advisor: where they are from, what they study, and what they bring to the students they work with.]',
        photo: '',
        photoAlt: '',
      },
      {
        name: '[Advisor Name]', // PLACEHOLDER
        school: 'School of Nursing',
        major: '[Major]',
        bio: '[Two or three sentences about this advisor: where they are from, what they study, and what they bring to the students they work with.]',
        photo: '',
        photoAlt: '',
      },
    ],
  },

  /* --- 6. Founding cohort ---------------------------------------------- */
  cohort: {
    eyebrow: 'Founding cohort',
    heading: 'Now accepting our founding cohort.',
    body: 'We work with a small number of students each cycle.',
    button: 'Express interest',
  },

  /* --- 7. Interest form ------------------------------------------------
     formEndpoint: create a free form at https://formspree.io, then paste
     its endpoint here (it looks like https://formspree.io/f/abcdwxyz).
  ------------------------------------------------------------------------ */
  form: {
    formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID', // PLACEHOLDER
    eyebrow: 'Interest form',
    heading: 'Tell us about yourself',
    intro: 'Share a little about the student and we will be in touch to arrange an introductory conversation.',
    labels: {
      studentName: 'Student name',
      parentName: 'Parent or guardian name',
      email: 'Email',
      highSchool: 'High school',
      gradYear: 'Graduation year',
      areaOfStudy: 'Intended area of study',
      schools: 'Schools of interest',
      message: 'Message',
    },
    hints: {
      areaOfStudy: 'Undecided is a perfectly good answer.',
      schools: 'A few names is plenty.',
      message: 'Anything you would like us to know. Optional.',
    },
    /* Update each year so the list stays current. */
    gradYears: ['2027', '2028', '2029', '2030', 'Other'],
    gradYearPrompt: 'Select a year',
    requiredNote: 'All fields are required except the message.',
    submit: 'Submit',
    sending: 'Sending…',
    successHeading: 'Thank you.',
    successBody: 'We have received your note and will be in touch soon.',
    errorBody: 'Something went wrong and your message was not sent. Please try again, or email us at',
    notConfigured: 'The form is not connected yet. Please email us at',
  },

  /* --- 8. FAQ (PLACEHOLDER answers — review before launch) ------------- */
  faq: {
    eyebrow: 'Questions',
    heading: 'Frequently asked',
    items: [
      {
        question: 'Do you guarantee admission?',
        answer: 'No, and no one honestly can. Admissions decisions rest with each college. What we offer is candid guidance and careful work to help you present yourself clearly and truthfully.',
      },
      {
        question: 'Are you affiliated with Penn?',
        answer: 'No. Sine Mora Advisory is an independent consultancy founded by current Penn students. We are not affiliated with, endorsed by, or sponsored by the University of Pennsylvania.',
      },
      {
        question: 'Do you only help students applying to Penn?',
        answer: 'No. We advise students applying to a wide range of colleges and universities. Our experience is one recent, close-up view of how selective admissions works today.',
      },
      {
        question: 'Do you write essays for students?',
        answer: 'No. Every word of an application should be the student’s own. We ask questions, give honest feedback, and help students find and sharpen what they want to say.',
      },
      {
        question: 'How do sessions work?',
        answer: 'Sessions take place online and are scheduled around the student’s classes and activities. After an introductory conversation, we agree on a plan and match the student with the advisor who fits best.',
      },
      {
        question: 'Can you work with my family in Spanish?',
        answer: 'Yes. Advising is available in English and Spanish, for students and for parents or guardians. Sí, ofrecemos asesoría en español.',
      },
    ],
  },

  /* --- 9. Footer ------------------------------------------------------- */
  footer: {
    disclaimer:
      'Sine Mora Advisory is an independent consultancy founded by current Penn students. We are not affiliated with, endorsed by, or sponsored by the University of Pennsylvania.',
    contactLabel: 'Contact',
    copyrightName: 'Sine Mora Advisory',
  },
};
