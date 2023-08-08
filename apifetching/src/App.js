import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "./features/getUserSlice";
const App = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => {
    return state.app;
  });

  
  return (
    <div className="app">
      <h1>hello</h1>
      <button onClick={() => dispatch(getAllData())}>Get Github users</button>
      {
        datas.loading?(<h1 className="">Loading....</h1>):(datas.users.map((ele)=>(
          <li key={ele.id}>{ele.login} = <a href={ele.html_url} target="_blank">{ele.html_url}</a></li>
        )))
      }
    </div>
  );
};

export default App;
