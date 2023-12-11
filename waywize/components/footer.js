import { Flex, Box, Text, List, ListItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <Flex as="footer">
        <Box className="internal-links">
        <List>
            <ListItem><Link href="/">Home</Link></ListItem>
            <ListItem><Link href="about">About</Link></ListItem>
            <ListItem><Link href="privacy">Privacy</Link></ListItem>
        </List>
        </Box>
        <Box className="social-links">
        <Text>Connect On Our Social Media</Text>
        <List>
          <ListItem><Link href="https://www.facebook.com/WaywizeFakeAccount"><FaFacebook /></Link></ListItem>
            <ListItem><Link href="https://www.linkedin.com/company/waywizefakeaccount"><FaLinkedin /></Link></ListItem>
            <ListItem><Link href="https://twitter.com/waywizefake"><FaTwitter /></Link></ListItem>
        </List>
        </Box>
        <Box className="subscribe">
          <Text>Newsletter</Text>
          <Link href="/#subscribe">
          <Button className="subscribe-button">Subscribe</Button>
          </Link>
        </Box>
      </Flex>
    )
  }