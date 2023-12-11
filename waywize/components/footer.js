import { Flex, Box, Text, List, ListItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FacebookIcon } from '@chakra-ui/icons';

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
          <ListItem><Link href="https://www.facebook.com/WaywizeFakeAccount">Facebook</Link></ListItem>
            <ListItem><Link href="https://www.linkedin.com/company/waywizefakeaccount">LinkedIn</Link></ListItem>
            <ListItem><Link href="https://twitter.com/waywizefake">X</Link></ListItem>
        </List>
        </Box>
        <Box className="subscribe">
          <Text>Newsletter</Text>
          <Link href="/#subscribe">
          <Button>Subscribe</Button>
          </Link>
        </Box>
      </Flex>
    )
  }