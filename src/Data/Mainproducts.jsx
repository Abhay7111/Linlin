import React, { useEffect, useState } from 'react';
import { data as localData } from './Data/Mainproducts';

const useProducts = () => {
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          try {
               setProducts(localData);
          } catch (err) {
               setError(err);
          } finally {
               setLoading(false);
          }
     }, []);

     return { products, loading, error };
};

export { useProducts };