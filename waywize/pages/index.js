import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Subscribe from "@/components/subscribe";
import { Flex, Box, Image, Button, Heading, Card, Text, Avatar } from "@chakra-ui/react";
import Link from 'next/link';
import DividerLine from '@/components/DividerLine';

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
    <Card className="hero-outer" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" borderRadius="0px" bg="#EFE9DC">
    <Card className="hero-inner" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" borderRadius="20px">
      <Flex className="hero">
      <Box className="hero-img">
        <Image src="/images/HERO.png" alt="Stylized hand drawn globe/map" />
      </Box>
      <Box className="hero-text">
        <MarkdownRenderer content={markdownContent} />
        <Link href="#subscribe">
          <Button className="hero-button">Subscribe</Button>
        </Link>
      </Box>
      </Flex>
    </Card>
    </Card>

    <DividerLine />

    <Subscribe />

    <DividerLine />

      <Box className="testimonials">
        <Heading as="h2">Read What Others Have To Say</Heading>
        <Flex className="quotes">
          <Card className="quote">
            <Image className="quote-portrait" src="images/TESTIMONIAL1.png" alt="Professional portrait of Deborah Stone" />
            <Heading as="h3">Deborah Stone</Heading>
            <Heading as="h4">PixelCraft &nbsp; | &nbsp; Business Manager</Heading>
            <Text>WayWize revolutionizes the daily navigation experience by providing intuitive and user-friendly multi-platform applications. Users can effortlessly navigate indoor and outdoor spaces, enhancing their convenience and ensuring they always reach their destination with ease.</Text>
          </Card>
          <Card className="quote">
            <Image className="quote-portrait" src="images/TESTIMONIAL2.png" alt="Professional portrait of Logan Batts" />
            <Heading as="h3">Logan Batts</Heading>
            <Heading as="h4">InnoSphere &nbsp; | &nbsp; Processing Manager</Heading>
            <Text>WayWize caters not only to business owners, space planners, and event organizers but also to the everyday visitors of diverse facilities and venues. Its inclusive design ensures that individuals from all walks of life can benefit from efficient wayfinding, fostering a sense of accessibility and community engagement.</Text>
          </Card>
          <Card className="quote">
            <Image className="quote-portrait" src="images/TESTIMONIAL3.png" alt= "Professional portrait of Jason Steele" />
            <Heading as="h3">Jason Steele</Heading>
            <Heading as="h4">CleverCraft &nbsp; | &nbsp;  CEO</Heading>
            <Text>WayWize goes beyond basic mapping services, fostering a connected community through its applications. By creating a platform that integrates seamlessly into people's daily lives, the company enhances communication and engagement within various localities.</Text>
          </Card>
        </Flex>
      </Box>
    </>
  )
}
