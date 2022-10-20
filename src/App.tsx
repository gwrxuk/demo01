import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PaperSDKErrorCode, CheckoutWithCard, PaperSDKProvider, PaperSDKError} from "@paperxyz/react-client-sdk";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">


<PaperSDKProvider appName='Paper Checkout'>
  <CheckoutWithCard
    sdkClientSecret='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdElkIjoiYTc0MTA5NDMtZWVkOS00MTBkLWExOWYtMDk1ZGE3ZTE2NTA1Iiwid2FsbGV0QWRkcmVzcyI6IjB4Njk1ZUIwMmY3NTc0NGNkOTc5ZmEwMEM1QkREZTUxQTIyMjJDYTU2QSIsImVtYWlsIjoiZ3dyeDIwMDVAZ21haWwuY29tIiwicXVhbnRpdHkiOjExMTEsInVzZVBhcGVyS2V5IjpmYWxzZSwibWV0YWRhdGEiOnt9LCJleHBpcmVzSW5NaW51dGVzIjoxNTAwMDAwLCJoaWRlQXBwbGVQYXlHb29nbGVQYXkiOmZhbHNlLCJ1c2VDaGVja291dERvdENvbSI6ZmFsc2UsInRpdGxlIjoiIiwiY2FwdHVyZVBheW1lbnRMYXRlciI6ZmFsc2UsInByaWNpbmdEZXRhaWxzIjp7InJlYWRhYmxlUHJpY2UiOiIwLjAiLCJjaGFpbk5hbWUiOiJNdW1iYWkiLCJwcmljZUluV2VpIjp7InR5cGUiOiJCaWdOdW1iZXIiLCJoZXgiOiIweDAwIn0sImN1cnJlbmN5QWRkcmVzcyI6IjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImN1cnJlbmN5U3ltYm9sIjoiTUFUSUMiLCJsb2NrZWRQcmljZVVzZENlbnRzIjowfSwidHJhbnNhY3Rpb25JZCI6IjRhNjY3OGY4LWE0MTEtNDcxMS05OTFmLTUxOTJhMjJmN2QxNiIsImlhdCI6MTY2NTk3NDMyOCwiZXhwIjoxNzU1OTc0MzI4LCJpc3MiOiJwYXBlci54eXoifQ.Je9YnKdiDanOekuZae5mr5LS19qyFFkAAiVsShMnXGg'
    onPaymentSuccess={(result) => {}}
    onReview={(result) => {}}
    onError={(error: PaperSDKError) => {}}
    options={{
      colorBackground: '#ffffff',
      colorPrimary: '#7300a8',
      colorText: '#232323',
      borderRadius: 6,
    }}
  />
</PaperSDKProvider>
      </header>
    </div>
  );
}

export default App;
