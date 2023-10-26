import React from "react";

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => {
        const { id, title, date = "January 1, 1970", preview, minutes } = post;
        return (
          <article key={id}>
            <h3>{title}</h3>
            <small>
              {date}.{"  "}
              {minutes < 30 ? (
                <span>{minutes} minutes read</span>
              ) : (
                <span>{minutes} minutes read</span>
              )}
            </small>

            <p>{preview}</p>
          </article>
        );
      })}
    </main>
  );
};

export default ArticleList;
