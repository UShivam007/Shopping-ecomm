import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {

    const { search,setSearch,showSearch,setShowSearch } = useContext(ShopContext);
    const [visible,setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
            // console.log(location.pathname)
            
            if(location.pathname.includes('Collection'))
            {
                setVisible(true);
            }
            else
            {
                setVisible(false);
            }
    },[location])


    return showSearch && visible ?(
        <div className="border-t border-b bg-gray-50 text-center">
          <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
            <input type="text" placeholder="search" className="flex-1 outline-none bg-inherit text-sm" value={search}
            onChange={(e)=>(setSearch(e.target.value))}/>
            <img src={assets.search_icon} alt="" className="w-4"/>
          </div>
          <img src={assets.cross_icon} alt="" className="cursor-pointer inline w-3 " onClick={()=>(setShowSearch(false))}/>
        </div>
    ) : null
};
export default SearchBar;