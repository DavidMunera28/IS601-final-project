import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Subscribe from "@/components/subscribe";
import { Heading, Image, Text } from "@chakra-ui/react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/editable-content/hero-text.md');
  const markdownContent = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      markdownContent,
    },
  };
}

export default function Home({ markdownContent }) {
  return (
    <>
      <Heading>Landing Page</Heading>
      <Image src="/images/HERO.png" />
      <MarkdownRenderer content={markdownContent} />
      <Subscribe />
    </>
  )
}
