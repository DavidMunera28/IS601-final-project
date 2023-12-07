// pages/somepage.js
import fs from 'fs';
import path from 'path';
import remark from 'remark';
import MarkdownRenderer from '../components/MarkdownRenderer';

const SomePage = ({ markdownContent }) => {
  return (
    <div>
      <h1>Your Page Title</h1>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/test.md');
  const markdownContent = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      markdownContent,
    },
  };
}

export default SomePage;