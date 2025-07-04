// import React from 'react';
// import { useEffect, useState } from "react";

// const useProduct = () => {
//     const [product, setProduct] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch('http://localhost:5000/product')
//             .then(res => res.json())
//             .then(data => {
//                 setProduct(data);
//                 setLoading(false);
//             });
          
//     }, [])
//       console.log(product);
//     return [product, loading]

// };

// export default useProduct;
// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: product = [], isPending: loading, refetch} = useQuery({
        queryKey: ['product'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/product');
            return res.data;
        }
    })


    return [product, loading, refetch]
}

export default useProduct;


