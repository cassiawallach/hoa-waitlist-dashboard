import React, { useEffect, useState } from 'react';

export default function WaitlistDashboard() {
  const [waitlist, setWaitlist] = useState([]);

  useEffect(() => {
    fetch('https://75993f04-9841-424a-aced-4599ca7419a4-00-10j35ce1tu9h0.worf.replit.dev/waitlist')
      .then((res) => res.json())
      .then((data) => setWaitlist(data))
      .catch((err) => console.error('Error fetching waitlist:', err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🏠 Arthouse Loft Rental Waitlist</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Timestamp</th>
            <th className="border px-4 py-2">Name / Email</th>
            <th className="border px-4 py-2">Unit</th>
            <th className="border px-4 py-2">Reason</th>
          </tr>
        </thead>
        <tbody>
          {waitlist.map((entry, index) => (
            <tr key={index} className="border-t">
              <td className="border px-4 py-2">{entry.timestamp}</td>
              <td className="border px-4 py-2">{entry.name}</td>
              <td className="border px-4 py-2">{entry.unitNumber}</td>
              <td className="border px-4 py-2">{entry.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
