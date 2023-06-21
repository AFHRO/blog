import FacebookIcon from "src/components/icons/FacebookIcon.svelte";
import InstagramIcon from "src/components/icons/InstagramIcon.svelte";
import LinkedinIcon from "src/components/icons/LinkedinIcon.svelte";
import TwitterIcon from "src/components/icons/TwitterIcon.svelte";

export default [
  {
    title: "About",
    links: [
      {
        title: "Our People",
        url: "/",
      },
      {
        title: "FAQs",
        url: "/",
      },
      {
        title: "Blog",
        url: "/blog",
      },
      {
        title: "Feedback and Appeals",
        url: "/",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "Scientific Publishing",
        url: "/",
      },
      {
        title: "Conferences",
        url: "/",
      },
      {
        title: "Clinical Research",
        url: "/",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "info@afhro.org",
        url: "mailto:info@afhro.org",
      },
      {
        title: "+447503568624",
        url: "tel:+447503568624",
      },
      {
        title:
          "The Pentagon Centre <br/> 38 Washington Street <br/>Glasgow<br/>G3 8AZ <br/>",
        url: "/",
      },
    ],
  },
];

export const footerSocialLinks = [
  {
    name: "facebook",
    Icon: FacebookIcon,
    link: "/",
  },
  {
    name: "twitter",
    Icon: TwitterIcon,
    link: "/",
  },
  {
    name: "instagram",
    Icon: InstagramIcon,
    link: "/",
  },
  {
    name: "linkedin",
    Icon: LinkedinIcon,
    link: "/",
  },
];
