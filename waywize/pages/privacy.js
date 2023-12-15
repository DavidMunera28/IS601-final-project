import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Card, Box, Heading, Text } from '@chakra-ui/react';

// For storing Privacy Policy Markdown contents
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/editable-content/privacy-policy-text.md');
  const markdownContent = fs.readFileSync(filePath, 'utf-8');

  // Create a 'props' object with Markdown content constant name as key
  return {
    props: {
      markdownContent,
    },
  };
}

export default function Privacy({ markdownContent }) {
    return (
      <Card
        className="privacy-policy"
        bg="#EFE9DC"
        borderRadius="0px"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        {/* Begin privacy policy static section */}
        <Heading as="h1">WayWize Privacy Policy</Heading>
        <Text className="privacy-static">Privacy is a paramount concern for our mapping and wayfinding company, and we are committed to implementing robust measures to safeguard your personal information. Here are several key ways we prioritize and protect your privacy:</Text>
        {/* Begin privacy policy static section */}
        {/* Begin privacy policy dynamic (Markdown) section */}
        <Box className="privacy-dynamic">
        <MarkdownRenderer content={markdownContent} />
        </Box>
        {/* End privacy policy dynamic (Markdown) section */}
      </Card>
    )
  }