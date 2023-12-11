import { Text, List, ListItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FacebookIcon } from '@chakra-ui/icons';

export default function Footer() {
    return (
      <footer>
        <List className="internal-links">
            <ListItem><Link href="/">Home</Link></ListItem>
            <ListItem><Link href="about">About</Link></ListItem>
            <ListItem><Link href="privacy">Privacy</Link></ListItem>
        </List>
        <Text>Connect On Our Social Media</Text>
        <List className="social-links">
          <ListItem><Link href="https://www.facebook.com/WaywizeFakeAccount">Facebook</Link></ListItem>
            <ListItem><Link href="https://www.linkedin.com/company/waywizefakeaccount">LinkedIn</Link></ListItem>
            <ListItem><Link href="https://twitter.com/waywizefake">X</Link></ListItem>
        </List>
        <div className="subscribe">
          <Text>Newsletter</Text>
          <Button>Subscribe</Button>
        </div>
      </footer>
    )
  }