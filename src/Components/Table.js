import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ tables }) => {
  const className =
    'px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider';
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto">
      <div className="-my-2 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className={className}>Item Name</th>
                <th className={className}>Quantity</th>
                <th className={className}>Unit Cost</th>
                <th className={className}>Status</th>
                <th className={className}> Total Cost</th>
                <th class="px-6 py-3 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tables.map((table) => {
                const { fields, id } = table;
                const { is_active, quantity, item_unit_cost } = fields;
                return (
                  <tr key={id} className="min-w-full">
                    <td className="px-6 py-4 whitespace-no-wrap">{id}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{quantity}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {item_unit_cost}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {is_active ? 'Active' : 'No Availability'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {(quantity * item_unit_cost).toFixed(2)}
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <Link
                        className="text-indigo-600 hover:text-indigo-900"
                        to={`/${id}`}
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Table;
