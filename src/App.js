import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <>
        <h1>Tổng hợp tài liệu</h1>
        <ul>
          <li>
            <p>
              Google Drive chứa tài liệu:&nbsp;
              <a href="">
                Link
              </a>
            </p>
          </li>
          <li>
          <p>
              Link Trello:&nbsp;
              <a href="">
                Link
              </a>
            </p>
          </li>

          </ul>
      </>
    );
  }

}
export default App;