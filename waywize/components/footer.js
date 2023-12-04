import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
      <footer>
        <List className="internal-links">
            <ListItem><Link href="/">Home</Link></ListItem>
            <ListItem><Link href="about">About</Link></ListItem>
            <ListItem><Link href="/#subscribe">Subscribe</Link></ListItem>
            <ListItem><Link href="privacy">Privacy Policy</Link></ListItem>
        </List>
        <List className="social-links">
            <ListItem>LinkedIn</ListItem>
            <ListItem>X</ListItem>
            <ListItem>Facebook</ListItem>
        </List>
      </footer>
    )
  }