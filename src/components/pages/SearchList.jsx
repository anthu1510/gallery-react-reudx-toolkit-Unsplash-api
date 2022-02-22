import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getGalleryPhotos, updateLimit } from "../../redux/reducers/gallerySlice";

const SearchList = () => {
    const dispatch = useDispatch();
    const gallery = useSelector(state => state.gallery);
    useEffect(() => {
        // const accessKey = "GGQk-Sutf_pQanYTUnjVsGVemursVx6NnuhRemVihdo";
        // const urls = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&perPage=8&query=random`;
        //
        // //const urls = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=office`;
        //
        // axios.get(urls)
        //     .then(res => {
        //         setGallery(oldData => [...oldData, ...res.data.results]);
        //     });
        //
        // console.log(gallery);

        const getPhotos = () => {
            dispatch(getGalleryPhotos({query: gallery.search, limit: gallery.limit}));
        }
        getPhotos();
       /* const query  = {
            client_id: "GGQk-Sutf_pQanYTUnjVsGVemursVx6NnuhRemVihdo",
            query: "office",
            page: 1,
            per_page: 5
        };
        console.log(queryString.stringify(query));*/
    }, [gallery.search, gallery.limit]);


    const handleIncreaseLimit = (e) => {
        e.preventDefault();
        dispatch(updateLimit(8));
    }

    return (
        <div className="row mt-5">
            <div className="col-xl-12">
                <div className="row mb-3 text-white">
                    <div className="col-xl-12">
                        <h2>{gallery.search}</h2>
                    </div>
                </div>
               <div className="row">
                   {
                       gallery?.galleryList?.results?.length
                           ?
                           gallery?.galleryList?.results?.map(img => {
                               return (
                                       <div key={img.id} className="col-xl-4">
                                           <img src={img.urls.small} className="img-thumbnail mb-3" alt=""/>
                                       </div>
                               );
                           })
                           : <p>list is Empty...</p>
                   }
               </div>
               <div className="row">
                    <div className="col-xl-12 d-flex justify-content-center mb-5">
                        <button onClick={handleIncreaseLimit} className="btn btn-dark">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SearchList;