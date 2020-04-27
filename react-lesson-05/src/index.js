import React from "react";
import ReactDom from "react-dom";
import classNames from 'classnames';
import styled from 'styled-components'

import './index.css';


const Title = styled.h1`
  color: #00F
`;

class App extends React.Component {
  render() {
    console.log(this.props);
    const style = { color: "red" };
    return (
      <div>
        <Title>hello world</Title>
        <ol>
          <li style={style}> 使用style内联</li>
          <li className='has-text-blue'>使用class的方式</li>
          <li className={classNames('a', {'b': true, 'c':false})}>使用class的方式</li>
        </ol>
      </div>
    );
  }
}

const app = new App({
  title: "sssssss",
}).render();

// Render is an method provided by react dom, usually only used once
ReactDom.render(app, document.getElementById("root"));
