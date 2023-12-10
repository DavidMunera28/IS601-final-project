import { List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
    return (
      <nav>
        <Text className="logo">WayWize</Text>
        <List>
            <ListItem><Link href="/">Home</Link></ListItem>
            <ListItem><Link href="about">About</Link></ListItem>
            <ListItem><Link href="/#subscribe">Subscribe</Link></ListItem>
        </List>
      </nav>
    )
  }