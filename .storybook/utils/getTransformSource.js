import prettier from 'prettier';
import parserMdx from 'prettier/parser-markdown';
import parserBabel from 'prettier/parser-babel';

import { getLattices } from '../../stories/utils/getLattices';
import { getStringAttributes } from '../../stories/utils/getStringAttributes';

export const getSource = (kind, args) => {
  const getComponentName = kind => kind.slice(kind.indexOf('/') + 1, kind.length)

  if ((/InitialLetter/g).test(kind)){
    return args?.content
  }

  if ((/Heading/g).test(kind)) {
    const { text, headingLevel } = args;

    return `${getLattices(headingLevel)} ${text}`;
  }

  if ((/(Img|Separator|Common)/g).test(kind)) {
    return `<${getComponentName(kind)} ${getStringAttributes(args)}/>`;
  }

  if ((/(Note|Subtitle)/g).test(kind)) {
    const { contentMdx } = args;
    const componentName = getComponentName(kind)

    return `<${componentName}>${contentMdx}</${componentName}>`;
  }

  if ((/(Caption|ParagraphWithImage|Quote|Table)/g).test(kind)) {
    const { contentMdx, ...rest } = args;
    const componentName = getComponentName(kind)

    return `<${componentName} ${getStringAttributes(rest)}>${contentMdx}</${componentName}>`;
  }

  if ((/Video/g).test(kind)) {
    const { content, ...rest } = args || {};

    return content
      ? `<Video ${getStringAttributes(rest)}>${content}</Video>`
      : `<Video ${getStringAttributes(rest)} />`;
  }

  if ((/Blockquote/g).test(kind)) {
    const { contentMdx } = args;

    return `> ${contentMdx}`;
  }

  return args?.contentMdx;
};

export const getTransformSource = (kind, args) =>
  prettier.format(getSource(kind, args), {
    parser: 'mdx',
    plugins: [parserMdx, parserBabel],
  });
