import React, { useState, useEffect, useRef } from "react";
import LoadingCircle from "../loadingCircle";
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
  let index = uuidv4();

  const handleSelect = (event: any) => {
    setValue(event.currentTarget.value);
  };

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
      <BoardSurround>
        <main className="selectSurround" data-testid="selectSurround">
          <Header>
            <H1Tag data-testid="title">
              {error ? "Unable to load data" : "News"}
            </H1Tag>

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
        </main>
      </BoardSurround>
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
