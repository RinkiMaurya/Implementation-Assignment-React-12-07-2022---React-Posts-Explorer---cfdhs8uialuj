import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PostPreview from "./PostPreview";

const Buttons = ({ pageHandler, length }) => {
  let count = length / 10;
  if (length % 10 > 0) count += 1;
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr.map((button) => (
    <button onClick={() => pageHandler(button)} id={`page-${button}`}>
      {button}
    </button>
  ));
};

export const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        setAllData(json);
        setIsLoading(false);
        manageData();
      })
      .catch((err) => console.log(err));
  }, []);

  const manageData = () => {
    if (allData == null) return;
    let realPage = page * 10;
    let tmp = allData.filter((e) => e.id > realPage - 10 && e.id <= realPage);
    setData(tmp);
  };

  useEffect(() => {
    manageData();
  }, [page, allData]);

  const pageHandler = (buttonId) => {
    setPage(buttonId);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div id="index">
      <ul id="postsList">
        {data.map((e, id) => (
          <li key={e.id}>
            <PostPreview element={e} classId={id} />
          </li>
        ))}
      </ul>
      <Buttons pageHandler={pageHandler} length={allData.length} />
    </div>
  );
};
