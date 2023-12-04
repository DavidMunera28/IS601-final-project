import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
    return (
      <nav>
        <List>
            <ListItem><Link href="/">Home</Link></ListItem>
            <ListItem>About</ListItem>
            <ListItem>Subscribe</ListItem>
        </List>
      </nav>
    )
  }