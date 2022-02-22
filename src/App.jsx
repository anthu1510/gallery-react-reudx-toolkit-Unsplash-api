import React, {useEffect} from "react";
import Layout from "./components/Layouts/Layout";
import Search from "./components/pages/Search";
import SearchList from "./components/pages/SearchList";

const App = () => {

    /*useEffect(() => {
        const accessKey = "GGQk-Sutf_pQanYTUnjVsGVemursVx6NnuhRemVihdo";
        const urls = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=office`;

       axios.get(urls)
           .then(res => console.log(res));
    }, []);*/

    return (
       <Layout>
           <Search />
           <SearchList />
       </Layout>
    );
};

export default App;