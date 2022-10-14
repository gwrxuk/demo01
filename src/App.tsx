import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PaperSDKErrorCode, CheckoutWithCard, PaperSDKProvider, PaperSDKError} from "@paperxyz/react-client-sdk";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


<PaperSDKProvider appName='Paper Checkout'>
  <CheckoutWithCard
    sdkClientSecret='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdElkIjoiOTE0ZDZjM2ItMWY2Ny00NWU1LTk2OTQtYzQxNzBiMmM4NjhiIiwid2FsbGV0QWRkcmVzcyI6IjB4YzgxODZhMzA0NEQzMTFlZWMxQzFiNTczNDJBYWEyOTBGNmQ5MEFhNSIsImVtYWlsIjoibm8tcmVwbHlAcGFwZXIueHl6IiwicXVhbnRpdHkiOjEsInVzZVBhcGVyS2V5IjpmYWxzZSwibWV0YWRhdGEiOnt9LCJleHBpcmVzSW5NaW51dGVzIjoxNSwiaGlkZUFwcGxlUGF5R29vZ2xlUGF5IjpmYWxzZSwidGl0bGUiOiJIZWxsbyBXb3JsZCIsImNhcHR1cmVQYXltZW50TGF0ZXIiOmZhbHNlLCJtaW50TWV0aG9kIjp7Im5hbWUiOiJjbGFpbVRvIiwiYXJncyI6eyJfdG8iOiIkV0FMTEVUIiwiX3F1YW50aXR5IjoiJFFVQU5USVRZIiwiX3Rva2VuSWQiOjB9LCJjYWxsT3B0aW9ucyI6eyJnYXNQcmlvcml0eSI6Im1lZGl1bSJ9LCJwYXltZW50Ijp7ImN1cnJlbmN5IjoiTUFUSUMiLCJ2YWx1ZSI6IjAuMDAwMSAgKiAkUVVBTlRJVFkifX0sInByaWNpbmdEZXRhaWxzIjp7ImNoYWluTmFtZSI6Ik11bWJhaSIsImN1cnJlbmN5QWRkcmVzcyI6IjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImN1cnJlbmN5U3ltYm9sIjoiTUFUSUMiLCJyZWFkYWJsZVByaWNlIjoiMC4wMDAxIiwicHJpY2VJbldlaSI6eyJ0eXBlIjoiQmlnTnVtYmVyIiwiaGV4IjoiMHg1YWYzMTA3YTQwMDAifSwibG9ja2VkUHJpY2VVc2RDZW50cyI6MH0sInRyYW5zYWN0aW9uSWQiOiI4M2U2MTJmMC0xODZjLTQ4MmMtOGIxZC0wMzA0N2IyMDMwODMiLCJpYXQiOjE2NjU2NzMyMTEsImV4cCI6MTY2NTY3NDExMSwiaXNzIjoicGFwZXIueHl6In0.Z5kC2Dkxf0k4y7-V9qq1u4EwvBUIWCmp3Qk_1OjGbgM'
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
