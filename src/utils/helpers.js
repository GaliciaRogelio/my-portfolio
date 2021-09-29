import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
  SiNodeDotJs,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "MySQL",
  "Node",
  "GraphQL",
  "MongoDB",
];

export const logos = [
  <SiHtml5 />,
  <SiCss3 />,
  <SiJavascript />,
  <SiReact />,
  <SiMysql />,
  <SiNodeDotJs />,
  <SiGraphql />,
  <SiMongodb />,
];
