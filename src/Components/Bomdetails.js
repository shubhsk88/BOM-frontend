import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { publicFetch } from '../utils';

const Bomdetails = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const history = useHistory();
  useEffect(() => {
    async function fetchItem(id) {
      const result = await publicFetch.get(`/bom/${id}`);

      setItem(result.data);
      setLoading(false);
      setCount(result.data.fields.quantity);
    }
    fetchItem(id);
  }, [id]);
  const { fields } = item;
  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedField = { ...fields, quantity: count };
    const updatedItems = { ...item, fields: updatedField };
    await publicFetch.patch(`/bom/${id}`, updatedItems);
    history.push('/');
  };

  return loading ? (
    <p>Loading.....</p>
  ) : (
    <div>
      <div className="m-4">
        <Link
          to="/"
          className="px-4 py-2 bg-purple-600 text-white  rounded  hover:bg-purple-400"
        >
          Back to Home
        </Link>
      </div>

      <div className="flex  max-w-screen-xl mx-auto my-12  p-4 justify-center">
        <img
          className="w-1/3  rounded-lg overflow-hidden"
          src="https://ae01.alicdn.com/kf/HTB1Y8JEKuSSBuNjy0Flq6zBpVXaD/2Pcs-Super-Capacitor-2-7V-100F-Ultra-Capacitor-Farad-New-Electrical-Components-Black-Color-Dropship.jpg_q50.jpg"
          alt="Item Part name"
        />

        <div className="flex flex-col mx-6 px-10 ">
          <div className="text-xl my-2">Product Id:{id}</div>
          <div className="text-2xl my-3">Name Placeholder here</div>
          <div className="text-xl font-bold  py-2">
            Price: ${Number(fields.item_unit_cost).toFixed(2)}/quantity
          </div>

          <div className="my-4 my-2">
            <form onSubmit={onSubmit}>
              <div className="flex">
                <h2 className=" text-xl py-1 px-2">Quantity</h2>
                <button
                  onClick={() => setCount(count - 1)}
                  type="button"
                  className="rounded-lg text-lg p-4 bg-gray-200"
                >
                  -
                </button>
                <input
                  type="number"
                  className="text-lg text-center w-16"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
                <button
                  onClick={() => setCount(count + 1)}
                  type="button"
                  className="rounded-lg p-4 text-lg bg-gray-200"
                >
                  +
                </button>
              </div>
              <div className="px-2 py-3 text-2xl font-bold">
                Overall Cost: {(count * fields.item_unit_cost).toFixed(2)}
              </div>
              <div className="flex justify-center">
                <button className="text-lg px-4 py-2 text-white rounded shadow-lg bg-purple-600 hover:bg-purple-400">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bomdetails;
