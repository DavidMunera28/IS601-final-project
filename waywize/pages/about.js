import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export async function getStaticProps() {

  // For storing Overview Markdown contents
  const filePathOverview = path.join(process.cwd(), '/editable-content/overview-text.md');
  const markdownContentOverview = fs.readFileSync(filePathOverview, 'utf-8');

  // For storing What We Stand For Markdown contents
  const filePathWwsf = path.join(process.cwd(), '/editable-content/what-we-stand-for-text.md');
  const markdownContentWwsf = fs.readFileSync(filePathWwsf, 'utf-8');

  return {
    props: {
      markdownContentOverview,
      markdownContentWwsf,
    },
  };
}

export default function About({ markdownContentOverview, markdownContentWwsf }) {
    return (
      <>
        <Heading as="h1">About Page</Heading>
        <Image src="/images/OVERVIEW.png" />
        <MarkdownRenderer content={markdownContentOverview} />
        <Image src="/images/WHAT-WE-STAND-FOR.png" />
        <MarkdownRenderer content={markdownContentWwsf} />
      </>
    )
  }