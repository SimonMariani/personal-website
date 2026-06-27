/** @format */

export type ContactLink = {
  /* The text to display */
  text: string;

  /* The link to navigate to */
  link?: string;

  /* Whether to open the link in a new tab */
  openInNewTab?: boolean;
};

// The contact information, grouped so related links (e.g. socials) can be rendered together
const contact: { name: string; groups: ContactLink[][] } = {
  name: "Simon Mariani",
  groups: [
    [{ text: "simon.mariani65@gmail.com", link: "mailto:simon.mariani65@gmail.com" }],
    [
      { text: "Linkedin", link: "https://linkedin.com/in/simon-mariani65", openInNewTab: true },
      { text: "Github", link: "https://github.com/SimonMariani", openInNewTab: true },
    ],
    [
      {
        text: "Berlin, Germany",
        link: "https://www.google.com/maps/place/Berlijn/@52.5069386,13.2599275,11z/data=!3m1!4b1!4m6!3m5!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D",
        openInNewTab: true,
      },
    ],
  ],
};

export const { name: contactName, groups: contactGroups } = contact;
