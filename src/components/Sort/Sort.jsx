import React from "react";
import "../../helper.css";
import style from "./Sort.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import Breadcrums from "../DetailsPage/Breadcrums";
import Pdata from "../Product/Pdata";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/features/data";

const Sort = () => {
  const dispatch = useDispatch();
  const LtoH= Pdata.slice().sort(function(a,b){
    return Number(a.price.substring(3))- Number(b.price.substring(3))
  })
  console.log(LtoH)
  //dispatch(filter({type: 'brand', value: LtoH}))
  const sortlth=()=>{
    
  }
  return (
    <div className="container">
      <Breadcrums title="Home / Shirts" />
      <div className="flexed">
        <div className="">
          <strong>FILTERS</strong>
        </div>
        <div className="container">

          <select name="Sort" id="sorting" onChange={sortlth}>
              <option value="sortby">Sort by : Recommendation</option>
              <option value="sortprice">Price: Low to High</option>
              <option value="sortprice">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
