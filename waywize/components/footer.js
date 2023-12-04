import { List, ListItem } from "@chakra-ui/react";

export default function Footer() {
    return (
      <footer>
        <List className="internal-links">
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Subscribe</ListItem>
            <ListItem>Privacy Policy</ListItem>
        </List>
      </footer>
    )
  }