import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import './RecordList.css';

const RecordList = ({ records }) => {
  const parentRef = useRef();
  const customerRecordsRow = useVirtualizer({
    count: records.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 140,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: 'calc(100vh - 100px)',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <div>
        {customerRecordsRow.getVirtualItems().map((row) => {
          const record = records[row.index];
          return (
            <div
              key={row.key}
              ref={row.measureElement}
              className="record-container"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${row.start}px)`,
              }}
            >
              <div className="customer-name">Full Name : {record.fullName}</div>
              <div className="customer-info">
                <span>Email:</span> {record.email}
              </div>
              <div className="customer-info">
                <span>Job Title:</span> {record.jobTitle}
              </div>
              <div className="customer-info">
                <span>Company:</span> {record.company}
              </div>
              <div className="customer-info">
                <span>Location:</span> {record.location}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecordList;
