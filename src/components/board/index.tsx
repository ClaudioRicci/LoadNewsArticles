import React, { useState, useEffect, useRef } from "react";
import LoadingCircle from "../loadingCircle";
import NewsArticle from "../newsArticle";
import { H1Tag, H2Tag } from "../typography";
import {
  BoardSurround,
  ShowMoreButton,
  Header,
  Select,
  ULTag
} from "../domElements";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { pure } from "recompose";
import { useMediaQuery } from "react-responsive";
import "./styles/board.scss";

interface IDropDownProps {
  id: any;
  name: string;
}

function Board() {
  const firstUpdate = useRef<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<any | null>([]);
  const [sources, setSources] = useState<any | null>([]);
  const [uniqueSources, setUniqueSources] = useState<any | null>([]);
  const [value, setValue] = useState<string>("Filter by Source");
  const [error, setError] = useState<boolean>(false);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  let index = uuidv4();

  const handleSelect = (event: any) => {
    setValue(event.currentTarget.value);
  };

  const loadMoreArticles = () => {
    setArticlesCount(articlesCount + 5);
  };

  const goBack = () => {
    setArticlesCount(0);
  };

  const isMobile = useMediaQuery({
    query: "(max-device-width: 768px)"
  });

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      axios
        .get(
          `${process.env.REACT_APP_ENDPOINT_URL}${process.env.REACT_APP_KEY}`
        )
        .then(response => {
          if (response.status === 200) {
            setLoaded(true);
            setItems(response.data.articles);
            let sources: any = [];
            response.data.articles.forEach((item: any) => {
              sources.push(item.source);
              setSources(sources);
            });
            const uniques = Array.from(
              new Set(sources.map((a: any) => a.name))
            ).map(name => {
              return sources.find((a: any) => a.name === name);
            });
            setUniqueSources(uniques);
          } else {
            setLoaded(true);
            setError(true);
          }
        });
    }
  }, [error, items]);

  if (loaded) {
    return (
      <main className="selectSurround">
        <div className="test">OK</div>
        <BoardSurround>
          <Header>
            <H1Tag data-testid="title">
              {error ? "Unable to load data" : "News"}
            </H1Tag>
            {isMobile &&
              (articlesCount < items.length ? (
                <ShowMoreButton
                  disabled={!loaded || articlesCount >= items.length}
                  onClick={loadMoreArticles}
                >
                  {loaded ? "Show More" : "Loading..."}
                </ShowMoreButton>
              ) : (
                <>
                  <div className="noMoreArticles">
                    <H2Tag data-testid="noMoreArticlesTitle">
                      {error ? "Unable to load data" : "No more articles"}
                    </H2Tag>
                  </div>
                  <ShowMoreButton disabled={!loaded} onClick={goBack}>
                    {loaded ? "Back to start" : "Loading..."}
                  </ShowMoreButton>
                </>
              ))}
            <Select
              className="selectSurround"
              data-testid="select"
              disabled={!loaded}
              value={value}
              onChange={handleSelect}
            >
              {uniqueSources.map(({ name }: IDropDownProps) => (
                <option key={index + name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </Header>
          <ULTag>
            {items.slice(articlesCount, articlesCount + 5).map((item: any) => {
              let { id, name, title, publishedAt, url, index = [] }: any = item;
              let articleSources: any = [];

              Object.entries(sources).forEach((entries: any) => {
                articleSources.push(entries[1].name);
                for (let i = 0; i < items.length; i++) {
                  index.push(i);
                }
              });

              return (
                <NewsArticle
                  id={id}
                  name={name}
                  title={title}
                  publishedAt={publishedAt}
                  url={url}
                  source={sources}
                  articleSources={articleSources[0]}
                />
              );
            })}
          </ULTag>
          {!isMobile &&
            (articlesCount < items.length ? (
              <ShowMoreButton
                disabled={!loaded || articlesCount >= items.length}
                onClick={loadMoreArticles}
              >
                {loaded ? "Show More" : "Loading..."}
              </ShowMoreButton>
            ) : (
              <>
                <H2Tag data-testid="noMoreArticlesTitle">
                  {error ? "Unable to load data" : "No more articles"}
                </H2Tag>
                <ShowMoreButton disabled={!loaded} onClick={goBack}>
                  {loaded ? "Back to start" : "Loading..."}
                </ShowMoreButton>
              </>
            ))}
        </BoardSurround>
      </main>
    );
  } else {
    return (
      <BoardSurround>
        <main data-testid="loadingCircle">
          <LoadingCircle />
        </main>
      </BoardSurround>
    );
  }
}

export default pure(Board);
