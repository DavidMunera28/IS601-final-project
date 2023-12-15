import { Flex, Box, Text, List, ListItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <Box as="footer">
      <Flex className="footer-content">
        {/* Begin first section - internal links */}
        <Box className="internal-links">
        <List>
            <ListItem><Link href="/" role="link" aria-label="Navigate to WayWize's home page">Home</Link></ListItem>
            <ListItem><Link href="about" role="link" aria-label="Navigate to WayWize's about page">About</Link></ListItem>
            <ListItem><Link href="privacy" role="link" aria-label="Navigate to WayWize's privacy policy page">Privacy</Link></ListItem>
        </List>
        </Box>
        {/* End first section - internal links */}
        {/* Begin second section - social media links */}
        <Box className="social-links">
        <Text>Connect On Our Social Media</Text>
        <List>
          <ListItem><Link href="https://www.facebook.com/WaywizeFakeAccount" role="link" aria-label="Navigate to WayWize's Facebok account"><FaFacebook /></Link></ListItem>
            <ListItem><Link href="https://www.linkedin.com/company/waywizefakeaccount" role="link" aria-label="Navigate to WayWize's LinkedIn account"><FaLinkedin /></Link></ListItem>
            <ListItem><Link href="https://twitter.com/waywizefake" role="link" aria-label="Navigate to WayWize's Twitter account"><FaTwitter /></Link></ListItem>
        </List>
        </Box>
        {/* End second section - social media links */}
        {/* Begin third section - subscribe link */}
        <Box className="subscribe">
          <Text>Newsletter</Text>
          <Link href="/#subscribe" role="link" aria-label="Navigate to the newsletter signup section of WayWize's home page">
          <Button className="subscribe-button" aria-label="Subscribe to WayWize's newsletter">Subscribe</Button>
          </Link>
        </Box>
        {/* End third section - subscribe link */}
      </Flex>
      </Box>
    )
  }