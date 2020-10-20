import React, { useEffect, useState } from 'react';
import { publicFetch } from '../utils';
import Table from './Table';

const Bomlist = () => {
  useEffect(() => {
    async function fetchApi() {
      const result = await publicFetch.get('/bom');
      setLists(result.data);
    }
    fetchApi();
  }, []);
  const [lists, setLists] = useState([]);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-4 mb-16 ">
        Bills of Material for Component 1001
      </h1>
      {lists.length ? <Table tables={lists} /> : null}
    </div>
  );
};

export default Bomlist;
