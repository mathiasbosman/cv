import {
  Avatar,
  BorderBox,
  Box,
  Flex,
  Heading,
  Link,
  Pagehead,
  Text
} from "@primer/components";
import Age from "../Age";
import {URL_FLANDERS} from "../../Constants";
import React from "react";

export default class Bio extends React.Component {
  render() {
    return <Flex mx={3} className="flexWrapper">
      <Box>
        <BorderBox className="avatarContainer" mr={0}>
          <Avatar className="avatar" itemProp="image"
                  alt="Mathias Bosman"
                  src="/assets/images/avatar.webp"/>
        </BorderBox>
      </Box>
      <Box flexGrow={1}>
        <Pagehead as="h1" flexGrow={1} px={3} py={1}>
          <Text fontSize={5} itemProp="givenName">Mathias</Text>&nbsp;
          <Text fontSize={5} itemProp="familyName">Bosman</Text>
        </Pagehead>
        <Heading as="aside" fontSize={2} mb={2} px={3}>Web designer,
          Java developer &amp; network engineer</Heading>
        <Box px={3}>
          <Text fontSize={1} as="p" itemProp="description">
            Known as "The little one", I'm a web designer and Java
            developer
            living in the outskirts of <Link target="_blank"
                                             itemProp="homeLocation"
                                             href="https://www.google.com/maps/place/9200+Dendermonde/">Dendermonde,
            Belgium</Link> and currently <Age birthdate="1990-12-05"/> of age.
            Welcome to my online personal resume!<br/>
            At the moment I'm full-time employed at the Department of
            Environment of the <Link target="_blank"
                                     href={URL_FLANDERS}>Flemish
            Government</Link>.<br/>
            In my spare time you will find me on my (not so) super
            expensive Decathlon race bike, setting up some small network
            somewhere or enjoying some quality time with a lovely Beagle
            called <Link target="_blank"
                         href="https://www.instagram.com/luna.the.tricolor.beagle/">Luna</Link>.
          </Text>
        </Box>
      </Box>
    </Flex>;
  }
}