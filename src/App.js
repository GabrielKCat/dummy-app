import React, { useState, useEffect } from 'react';
import GoogleSignin from './googleSignin';

import './style.css';
const propId = '235015454';
const requestBody = {
  dimensions: [
    {
      name: 'date',
    },
  ],
  dimensionFilter: {
    filter: {
      fieldName: 'eventName',
      stringFilter: {
        value: 'app_sched_christtheking',
      },
    },
  },
  metrics: [
    {
      name: 'eventCount',
    },
  ],
  dateRanges: [
    {
      startDate: '300daysAgo',
      endDate: 'today',
    },
  ],
};

export default function App() {
  const [authState, setAuthState] = useState();

  useEffect(() => {
    if (authState) {
      console.log(authState);
      fetch(
        `https://analyticsdata.googleapis.com/v1beta/properties/${propId}:runReport`,
        {
          method: 'POST',
          body: requestBody,
          credentials: 'include',
        }
      )
        .then((res) => res.json())
        .then(console.log);
    }
  }, [authState]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <GoogleSignin credentialCallback={setAuthState} />
    </div>
  );
}
