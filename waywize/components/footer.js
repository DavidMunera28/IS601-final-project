import { Text, List, ListItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FacebookIcon } from '@chakra-ui/icons';

export default function Footer() {
    return (
      <footer>
        <div className="internal-links">
        <List>
            <ListItem><Link href="/">Home</Link></ListItem>
            <ListItem><Link href="about">About</Link></ListItem>
            <ListItem><Link href="privacy">Privacy</Link></ListItem>
        </List>
        </div>
        <div className="social-links">
        <Text>Connect On Our Social Media</Text>
        <List>
          <ListItem><Link href="https://www.facebook.com/WaywizeFakeAccount">Facebook</Link></ListItem>
            <ListItem><Link href="https://www.linkedin.com/company/waywizefakeaccount">LinkedIn</Link></ListItem>
            <ListItem><Link href="https://twitter.com/waywizefake">X</Link></ListItem>
        </List>
        </div>
        <div className="subscribe">
          <Text>Newsletter</Text>
          <Button>Subscribe</Button>
        </div>
      </footer>
    )
  }