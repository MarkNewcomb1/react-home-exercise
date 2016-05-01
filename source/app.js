var React = require('react');
var ReactDom = require('react-dom');
var FilteredList = require('./filteredlist');

//ReactDom.render(<ToDo name="hey" />, document.getElementById('app'));
ReactDom.render(<FilteredList/>, document.getElementById('mount-point'));