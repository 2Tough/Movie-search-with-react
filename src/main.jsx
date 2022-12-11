import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'


class Main extends React.Component {
  render() {
    return (
      <div className="container">
          <h1>Hello world updated!</h1>
      </div>
      
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
