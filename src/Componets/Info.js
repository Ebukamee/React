import React from "react";
import Pagination from './pagination'
import '../Styles/users.css'

export default function Info({ data })  {
  return (
    <article className="user">
      {data.map((users, i) => {
        console.log(users);
        return (
          <div className="user-info" key={i}>
              <img src={users.picture.medium} alt="" />
            <h2 className="heading-alt">{users.name.first}</h2>
            <p className="text">
            {users.name.first} {users.name.last}{" "}
            </p>
            <p className="text">{users.gender} </p>
            <p className="text">{users.email}</p>
          </div>
        );
      })}
    </article>
  );
};
