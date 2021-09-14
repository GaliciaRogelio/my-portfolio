import React from "react";
import { skills } from "../Data";
import { List, ListItem } from "@chakra-ui/react";
import {SiHtml5, SiCss3, SiJavascript, SiReact,  SiMysql, SiNodeDotJs, SiGraphql, SiMongodb} from "react-icons/si"

function Skills() {
  return (
    <section>
      <List spacing={3} p={10}>
      <ListItem>
          <SiHtml5 /> HTML5
        </ListItem>
        <ListItem>
          <SiCss3 /> CSS3
        </ListItem>
        <ListItem>
          <SiJavascript /> JavaScript
        </ListItem>
        <ListItem>
         <SiReact /> React
        </ListItem>
        <ListItem>
         <SiMysql/> MySQL
        </ListItem>
        <ListItem>
          <SiNodeDotJs /> Node
        </ListItem>
        <ListItem>
          <SiGraphql/> GraphQL
        </ListItem>
        <ListItem>
          <SiMongodb />MongoDB
        </ListItem>
      </List>
    </section>
  );
}

export default Skills;
