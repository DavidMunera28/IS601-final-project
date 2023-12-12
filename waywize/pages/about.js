import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Flex, Box, Card, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import DividerLine from '@/components/DividerLine';

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
      <Card className="overview-outer" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" borderRadius="0px" bg="#EFE9DC">
      <Card className="overview-inner" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" borderRadius="20px">
      <Flex className="overview">
        <Image src="/images/OVERVIEW.png" />
        <Box className="overview-text">
          <MarkdownRenderer content={markdownContentOverview} />
        </Box>
      </Flex>
      </Card>
      </Card>

      <DividerLine />
      
      <Box className="people">
        <Heading as="h2">Our People</Heading>
        <Flex className="person">
          <Image src="/images/PEOPLE-CEO.png" />
          <Box className="person-text">
            <MarkdownRenderer content={markdownContentCeo} />
          </Box>
        </Flex>
        <Flex className="person">
        <Image src="/images/PEOPLE-CFO.png" />
        <Box className="person-text">
          <MarkdownRenderer content={markdownContentCfo} />
        </Box>
        </Flex>
        <Flex className="person">
        <Image src="/images/PEOPLE-CTO.png" />
        <Box className="person-text">
          <MarkdownRenderer content={markdownContentCto} />
        </Box>
        </Flex>
      </Box>

      <DividerLine />

      <Card className="wwsf">
          <Image src="/images/WHAT-WE-STAND-FOR.png" />
          <MarkdownRenderer content={markdownContentWwsf} />
      </Card>
      </>
    )
  }