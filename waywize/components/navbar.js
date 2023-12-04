import { List, ListItem } from "@chakra-ui/react";

export default function Navbar() {
    return (
      <nav>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Subscribe</ListItem>
        </List>
      </nav>
    )
  }