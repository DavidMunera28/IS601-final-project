import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Subscribe from "@/components/subscribe";
import { Flex, Box, Image, Button, Heading, Card, Text } from "@chakra-ui/react";
import Link from 'next/link';
import DividerLine from '@/components/DividerLine';

// For storing Hero Markdown contents
export async function getStaticProps() {
  const filePathHero = path.join(process.cwd(), '/editable-content/hero-text.md');
  const markdownContentHero = fs.readFileSync(filePathHero, 'utf-8');

  // For storing Testimonial 1 Markdown contents
  const filePathTestimonial1 = path.join(process.cwd(), '/editable-content/testimonial-1.md');
  const markdownContentTestimonial1 = fs.readFileSync(filePathTestimonial1, 'utf-8');

  // For storing Testimonial 2 Markdown contents
  const filePathTestimonial2 = path.join(process.cwd(), '/editable-content/testimonial-2.md');
  const markdownContentTestimonial2 = fs.readFileSync(filePathTestimonial2, 'utf-8');

  // For storing Testimonial 3 Markdown contents
  const filePathTestimonial3 = path.join(process.cwd(), '/editable-content/testimonial-3.md');
  const markdownContentTestimonial3 = fs.readFileSync(filePathTestimonial3, 'utf-8');

  // Create a 'props' object with Markdown content constant name as key
  return {
    props: {
      markdownContentHero,
      markdownContentTestimonial1,
      markdownContentTestimonial2,
      markdownContentTestimonial3,
    },
  };
}

export default function Home({ markdownContentHero, markdownContentTestimonial1, markdownContentTestimonial2, markdownContentTestimonial3, }) {
  return (
    <>
    {/* Begin hero section */}
    <Card className="hero-outer" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" borderRadius="0px" bg="#EFE9DC">
    <Card className="hero-inner" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" borderRadius="20px">
      <Flex className="hero">
      <Box className="hero-img">
        <Image src="/images/HERO.webp" alt="Stylized hand drawn globe/map" />
      </Box>
      <Box className="hero-text">
        <MarkdownRenderer content={markdownContentHero} />
        <Link href="#subscribe" role="link" aria-label="Navigate to the newsletter signup section of WayWize's home page">
          <Button className="hero-button" aria-label="Subscribe to WayWize's newsletter">Subscribe</Button>
        </Link>
      </Box>
      </Flex>
    </Card>
    </Card>
    {/* End hero section */}
    <DividerLine />
    {/* Begin call-to-action (subscribe) section */}
    <Subscribe />
    {/* End call-to-action (subscribe) section */}
    <DividerLine />
    {/* Begin testimonials section */}
      <Box className="testimonials">
        <Heading as="h2">Read What Others Have To Say</Heading>
        <Flex className="quotes">
          {/* Begin testimonial 1 */}
          <Card className="quote">
            <Image className="quote-portrait" src="images/TESTIMONIAL1.webp" alt="Professional portrait of Deborah Stone" />
            <MarkdownRenderer content={markdownContentTestimonial1} />
          </Card>
          {/* End testimonial 1 */}
          {/* Begin testimonial 2 */}
          <Card className="quote">
            <Image className="quote-portrait" src="images/TESTIMONIAL2.webp" alt="Professional portrait of Logan Batts" />
            <MarkdownRenderer content={markdownContentTestimonial2} />
          </Card>
          {/* End testimonial 2 */}
          {/* Begin testimonial 3 */}
          <Card className="quote">
            <Image className="quote-portrait" src="images/TESTIMONIAL3.webp" alt= "Professional portrait of Jason Steele" />
            <MarkdownRenderer content={markdownContentTestimonial3} />
          </Card>
          {/* End testimonial 3 */}
        </Flex>
      </Box>
      {/* End testimonials section */}
    </>
  )
}
