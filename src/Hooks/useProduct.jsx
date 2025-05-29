import React from 'react';
import { useEffect, useState } from "react";

const useProduct = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
          
    }, [])
      console.log(product);
    return [product, loading]

};

export default useProduct;


