export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : '咪豆猫';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Mi Dou Cat';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  const description = process.env.BLOG_DESCRIPTION
    ? decodeURI(process.env.BLOG_DESCRIPTION)
    : '咪豆猫工作室，让游戏的欢乐在指尖传递。';

  return {
    name,
    blogTitle,
    footerText,
    description
  };
};
