import { Marked, marked } from 'marked';

const markedWithHeadingDepthIncreasing = new Marked({
  walkTokens: (token) => {
    if (token.type === 'heading') {
      token.depth += 1;
    }
  }
})

const hasHeading1 = (postBody: string): boolean => {
  const tokensList = marked.lexer(postBody)
  return tokensList.some(token => token.type === 'heading' && token.depth === 1);
}

export const getMarkDownParser = (markdownText: string) => {
  if(hasHeading1(markdownText)) {
    return markedWithHeadingDepthIncreasing
  }
  return marked
}
