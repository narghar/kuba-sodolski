import { getConfig } from 'utils/config';

const { title } = getConfig();

export default {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    site_name: 'SiteName'
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
};
