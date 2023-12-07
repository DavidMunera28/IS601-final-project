import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/editable-content/overview-text.md');
  const markdownContent = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      markdownContent,
    },
  };
}

export default function About({ markdownContent }) {
    return (
      <>
        <Heading as="h1">About Page</Heading>
        <Image src="/images/OVERVIEW.png" />
        <MarkdownRenderer content={markdownContent} />
      </>
    )
  }