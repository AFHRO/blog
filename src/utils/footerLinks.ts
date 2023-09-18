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
        title: "Publishing",
        url: "/",
      },
      {
        title: "AHRO Institute",
        url: "https://afhro.org",
      },
      {
        title: "AHRO Conferences",
        url: "https://ahroconferences.com",
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
    link: "https://www.facebook.com/AHROUNI/",
  },
  {
    name: "twitter",
    Icon: TwitterIcon,
    link: "https://twitter.com/AHROuniversity",
  },
  {
    name: "instagram",
    Icon: InstagramIcon,
    link: "https://www.instagram.com/ahro_uni/",
  },
  {
    name: "linkedin",
    Icon: LinkedinIcon,
    link: "https://uk.linkedin.com/company/africahealthresearchorganisation",
  },
];
