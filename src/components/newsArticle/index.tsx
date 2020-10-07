import React from "react";
import { ArticleTitle, PTag } from "../typography";
import { LITag, Date, Source } from "../domElements";
import moment from "moment";

export interface NewsArticleProps {
  index?: number;
  title: string;
  id: number;
  name: string;
  publishedAt: string;
  url: string;
  source: NewsArticleSourcesProps;
  articleSources: any;
}

export interface NewsArticleSourcesProps {
  id: number;
  name: string;
}

const NewsArticle: React.SFC<NewsArticleProps> = props => {
  return (
    <LITag>
      <ArticleTitle href={props.url} target="_blank">
        {props.title}
      </ArticleTitle>
      <PTag>
        <Date>{moment(props.publishedAt).format("DD/MM/YYYY")}</Date>
        <Source>
          {props.articleSources} {props.index}
        </Source>
      </PTag>
    </LITag>
  );
};

export default NewsArticle;
