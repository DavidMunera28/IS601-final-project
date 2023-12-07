import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Heading, Text } from "@chakra-ui/react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/editable-content/privacy-policy-text.md');
  const markdownContent = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      markdownContent,
    },
  };
}

export default function Privacy({ markdownContent }) {
    return (
      <>
        <MarkdownRenderer content={markdownContent} />
      </>
    )
  }