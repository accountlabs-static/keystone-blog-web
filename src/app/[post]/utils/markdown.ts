import { Marked, marked, Renderer } from 'marked';

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const renderer = new Renderer();

renderer.heading = function(text, depth) {
  const slug = slugify(text); 
  return `<h${depth} id="${slug}">${text}</h${depth}>`;
};

const markedWithHeadingDepthIncreasing = new Marked({
  renderer: renderer,
  walkTokens: (token) => {
    if (token.type === 'heading') {
      token.depth += 1;
    }
  }
})

marked.use({ renderer }); 

const hasHeading1 = (postBody: string): boolean => {
  const tokensList = marked.lexer(postBody)
  return tokensList.some(token => token.type === 'heading' && token.depth === 1);
}

export interface HeadingItem {
  text: string;
  depth: number;
  slug: string;
}

export const getHeadings = (markdownText: string): HeadingItem[] => {
  const tokens = marked.lexer(markdownText);
  const shouldIncreaseDepth = hasHeading1(markdownText);
  
  const headings: HeadingItem[] = [];

  marked.walkTokens(tokens, (token) => {
    if (token.type === 'heading') {
      const depth = shouldIncreaseDepth ? token.depth + 1 : token.depth;
      const slug = slugify(token.text);

      headings.push({
        text: token.text,
        depth: depth,
        slug: slug
      });
    }
  });

  return headings;
}

export const getMarkDownParser = (markdownText: string) => {
  if(hasHeading1(markdownText)) {
    return markedWithHeadingDepthIncreasing
  }
  return marked
}
