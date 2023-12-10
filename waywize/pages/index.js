import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Subscribe from "@/components/subscribe";
import { Image, Button, Heading, Card } from "@chakra-ui/react";
import Link from 'next/link';

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
      <Image src="/images/HERO.png" />
      <MarkdownRenderer content={markdownContent} />
      <Link href="#subscribe">
        <Button>Subscribe</Button>
      </Link>
      <Subscribe />

      <div className="testimonials">
        <Heading as="h2">Read What Others Have To Say</Heading>
        <div className="quotes">
          <Card className="quote">1</Card>
          <Card className="quote">2</Card>
          <Card className="quote">3</Card>
        </div>
      </div>
    </>
  )
}
