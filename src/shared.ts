import { site as astroSite, base } from 'astro:config/server'

export const title = "Letters By Krish";
export const description =
  'Letters to the Internet. Not a blog, but rather a column about things I cannot fit into a single tweet.';
export const topics = [];
export const site = new URL(base, astroSite) || new URL('https://letters.krishg.com')
