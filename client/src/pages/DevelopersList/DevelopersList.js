import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './DevelopersList.css'

import UserCard from "../../components/UserCard/UserCard";
import { getdevops } from "../../JS/Actions/developers";

const DevelopersList = () => {

  const listUsers = useSelector(state => state.devReducer.listUsers)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getdevops())
  }, [dispatch]);

  return (
    <div>
      <h2>List of developers</h2>
      <div className="cards">
        {listUsers.map(user =>
          <UserCard user={user} key={user._id} />
        )}
      </div>
    </div>
  );
};

export default DevelopersList;
