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

    // For storing CEO Bio Markdown contents
    const filePathCeo = path.join(process.cwd(), '/editable-content/ceo-bio.md');
    const markdownContentCeo = fs.readFileSync(filePathCeo, 'utf-8');

    // For storing CFO Bio Markdown contents
    const filePathCfo = path.join(process.cwd(), '/editable-content/cfo-bio.md');
    const markdownContentCfo = fs.readFileSync(filePathCfo, 'utf-8');

    // For storing CTO Bio Markdown contents
    const filePathCto = path.join(process.cwd(), '/editable-content/cto-bio.md');
    const markdownContentCto = fs.readFileSync(filePathCto, 'utf-8');

  return {
    props: {
      markdownContentOverview,
      markdownContentWwsf,
      markdownContentCeo,
      markdownContentCfo,
      markdownContentCto,
    },
  };
}

export default function About({ markdownContentOverview, markdownContentWwsf, markdownContentCeo, markdownContentCfo, markdownContentCto }) {
    return (
      <>
        <Heading as="h1">About Page</Heading>
        <Image src="/images/OVERVIEW.png" />
        <MarkdownRenderer content={markdownContentOverview} />
        <Image src="/images/WHAT-WE-STAND-FOR.png" />
        <MarkdownRenderer content={markdownContentWwsf} />
        <MarkdownRenderer content={markdownContentCeo} />
        <MarkdownRenderer content={markdownContentCfo} />
        <MarkdownRenderer content={markdownContentCto} />
      </>
    )
  }