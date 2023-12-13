import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Heading, Text } from '@chakra-ui/react';

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
        <Heading as="h1">WayWize Privacy Policy</Heading>
        <Text>Privacy is a paramount concern for our mapping and wayfinding company, and we are committed to implementing robust measures to safeguard your personal information. Here are several key ways we prioritize and protect your privacy:</Text>
        <MarkdownRenderer content={markdownContent} />
      </>
    )
  }