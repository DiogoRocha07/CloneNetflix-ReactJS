import "./MovieRow.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 30
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left">
        <NavigateBeforeIcon
          style={{ fontSize: 50 }}
          onClick={handleLeftArrow}
        />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => {
              return (
                <div key={key} className="movieRow--item">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
