import prettier from 'prettier';
import parserMdx from 'prettier/parser-markdown';
import parserBabel from 'prettier/parser-babel';

import { getLattices } from '../../stories/utils/getLattices';
import { getStringAttributes } from '../../stories/utils/getStringAttributes';

export const getSource = (kind, args) => {
  if (kind === 'Heading') {
    const { text, headingLevel } = args;

    return `${getLattices(headingLevel)} ${text}`;
  }

  if (kind === 'Img' || kind === 'Separator') {
    return `<${kind} ${getStringAttributes(args)}/>`;
  }

  if (kind === 'Note' || kind === 'Subtitle') {
    const { contentMdx } = args;

    return `<${kind}>${contentMdx}</${kind}>`;
  }

  if (
    kind === 'Caption' ||
    kind === 'ParagraphWithImage' ||
    kind === 'Quote' ||
    kind === 'Table'
  ) {
    const { contentMdx, ...rest } = args;

    return `<${kind} ${getStringAttributes(rest)}>${contentMdx}</${kind}>`;
  }

  if (kind === 'Video') {
    const { content, ...rest } = args || {};

    return content
      ? `<Video ${getStringAttributes(rest)}>${content}</Video>`
      : `<Video ${getStringAttributes(rest)} />`;
  }
};

export const getTransformSource = (kind, args) =>
  prettier.format(getSource(kind, args), {
    parser: 'mdx',
    plugins: [parserMdx, parserBabel],
  });
