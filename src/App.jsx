import React, { useEffect, useRef, useState } from 'react';
import RecordList from './components/RecordList';
import { getAllRecords } from './db/indexedDB';
import { addData } from './data/generateData';

const App = () => {
  const customerRecordsRef = useRef([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCustomerRecords() {
      await addData();
      const records = await getAllRecords();
      customerRecordsRef.current = records;
      setLoading(true); 
    }
    loadCustomerRecords();
  }, []);

  if (!loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Render Customer Records</h1>
      <RecordList records={customerRecordsRef.current} />
    </div>
  );
};

export default App;
