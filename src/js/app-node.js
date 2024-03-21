import fetch from 'isomorphic-fetch';
import {marked} from 'marked';

export const getReleases = async (config) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const url = `https://api.github.com/repos/${config.githubRepo}/releases`;

  const result = await fetch(url);

  try {
    const releases = await result.json();

    return releases.map(item => {
      item.body = marked(item.body);

      const time = new Date(item.published_at);

      item.timeAgo = months[time.getMonth()] + ' ' + time.getDate() + ', ' + time.getFullYear();

      return item;
    }).slice(0, 20);
  } catch (e) {
    return [];
  }
};
