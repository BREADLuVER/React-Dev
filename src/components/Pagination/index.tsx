import React, { useState } from "react";
import Pagination from "./Pagination";

interface Item {
  id: number;
  title: string;
}

const data: Item[] = [
  { id: 1, title: "First" },
  { id: 2, title: "Second" },
  { id: 3, title: "Third" },
  { id: 4, title: "First" },
  { id: 5, title: "Second" },
  { id: 6, title: "Third" },
  { id: 7, title: "First" },
  { id: 8, title: "Second" },
  { id: 9, title: "Third" },
  { id: 10, title: "First" },
  { id: 11, title: "Second" },
  { id: 12, title: "Third" },
  { id: 13, title: "First" },
  { id: 14, title: "Second" },
  { id: 15, title: "Third" },
];

function ShowPages() {
  const [page, setPage] = useState(1);

  return (
    <Pagination<Item>
      data={data}
      page={page}
      pageSize={5}
      onPageChange={setPage}
      renderItem={(item) => <div>{item.title}</div>}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ShowPages;
