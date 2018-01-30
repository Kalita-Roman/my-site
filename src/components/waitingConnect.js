import React from 'react';
import { connect } from 'react-redux';

const Wait = (Tag) => (props) => {
  if(props.allow) {
    return <Tag/>;
  }
  return null;
} 

export default function waitingConnect(check) {
  return function(...maps) {
    return function (component) {
      return connect(check)(Wait(connect.apply(null, maps)(component)));
    }
  } 
}