import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Brokers() {
  const [brokers, setBrokers] = useState([]); // State to store brokers
  const [error, setError] = useState(""); // State for handling errors
  const [content, setContent] = useState(false); // State to toggle content visibility

  // Function to fetch all brokers from the API
  function fetchAllBrokers() {
    axios
      .get("https://api.tillahealthinsurance.com/brokers/") // Endpoint to get all brokers
      .then((response) => {
        const data = response.data; // Assuming response contains an array of brokers
        setBrokers(data); // Set brokers data in state
        setContent(true); // Set content to true to display data
        setError(""); // Clear any previous errors
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.message || "Failed to fetch brokers.");
        } else if (error.request) {
          setError("No response from the server. Please try again.");
        } else {
          setError("An error occurred. Please try again.");
        }
        setContent(false); // Hide content if there was an error
      });
  }

  // Fetch brokers when the component mounts
  useEffect(() => {
    fetchAllBrokers();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-red-700 to-white flex flex-col items-center p-6">
      {error && (
        <p className="text-red-700 bg-white px-4 py-2 rounded-lg shadow">
          ⚠️ {error}
        </p>
      )}{" "}
      {/* Display error if exists */}

      {content && brokers.length > 0 ? (
        <div className="w-full max-w-6xl bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            All Brokers
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-4 py-2">#</th>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-200 px-4 py-2">Phone</th>
                <th className="border border-gray-200 px-4 py-2">Business</th>
                <th className="border border-gray-200 px-4 py-2">Address</th>
                <th className="border border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brokers.map((broker, index) => (
                <tr
                  key={broker.id}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="border border-gray-200 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {broker.first_name} {broker.last_name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {broker.email_address}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {broker.phone_number}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {broker.company_name} ({broker.business_type})
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {broker.business_address_line_1}, {broker.business_city},{" "}
                    {broker.business_state}, {broker.business_zip_code}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 space-x-2">
                    <Link
                      to={{
                        pathname: "./Update",
                        state: { brokerId: broker.id },
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </Link>
                    <Link
                      to={{
                        pathname: "./Delete",
                        state: { brokerId: broker.id },
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-800 mt-4">
          No brokers available or content not loaded yet.
        </p>
      )}
    </div>
  );
}

export default Brokers;
