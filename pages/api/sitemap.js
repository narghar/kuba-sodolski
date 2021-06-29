import { SitemapStream } from 'sitemap';
import { createGzip } from 'zlib';
import { getConfig } from 'utils/config';

const { url } = getConfig();

export default async function handler(req, res) {
  try {
    const smStream = new SitemapStream({
      hostname: url,
      lastmodDateOnly: true
    });
    const pipeline = smStream.pipe(createGzip());

    const pages = await getPages();
    pages.forEach(page => smStream.write(page));
    smStream.end();

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');
    pipeline
      .pipe(res)
      .on('error', (e) => {throw e});
  } catch (e) {
    console.log('e', e);
    res.status(500).end()
  }
}

async function getPages() {
  const staticPages = [
    { url: '/' }
  ];

  return [
    ...staticPages
  ];
}
