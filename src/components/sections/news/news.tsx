import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './news.scss';
import NewsCard from './newsCard/newsCard';

interface MediumPostData {
  date: Date;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

const News = () => {
  const [posts, setPosts] = useState<MediumPostData[]>([]);

  useEffect(() => {
    const fetchPostsFromMedium = async () => {
      const response = await (
        await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tempusfinance')
      ).json();

      const lastThreePosts: MediumPostData[] = response.items.slice(0, 3).map((item: any) => {
        const publicationDate = new Date(item.pubDate);

        const tag = document.createElement('div');
        tag.innerHTML = item.description;

        return {
          date: format(publicationDate, 'd MMM y'),
          title: item.title,
          description: `${tag.innerText.slice(0, 200)}...`,
          link: item.link,
          thumbnail: item.thumbnail,
        };
      });
      setPosts(lastThreePosts);
    };
    fetchPostsFromMedium();
  }, []);

  return (
    <div className="tf__news__container">
      <Typography variant="h3" color="inverted">
        News
      </Typography>
      <Spacer size={41} orientation="vertical" />
      <div className="tf__news__cards-container">
        {posts.map((post) => (
          <NewsCard
            date={post.date}
            description={post.description}
            title={post.title}
            link={post.link}
            thumbnail={post.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};
export default News;
