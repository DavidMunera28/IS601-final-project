import { List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
    return (
      <nav>
        <Text className="logo">WayWize</Text>
        <List
          className="navlinks"
          display="flex"
          alignItems="center">
            <ListItem><Link href="/" role="link" aria-label="Navigate to WayWize's home page">Home</Link></ListItem>
            <ListItem><Link href="about" role="link" aria-label="Navigate to WayWize's about page">About</Link></ListItem>
        </List>
      </nav>
    )
  }