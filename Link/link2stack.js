/**
 * push、pop、top、size、isEmpty、clear
 */
const Link  = require("./index");

function Link2Stack() {
  var link = new Link();

  this.push = function(item) {
    link.append(item);
  }

  this.pop = function() {
    let removeItem = link.remove_tail();
    return removeItem ? removeItem.data : null;
  }

  this.top = function() {
    return link.tail() ? link.tail().data : null;
  }

  this.isEmpty = function() {
    return link.isEmpty();
  }

  this.size = function() {
    return link.length();
  }

  this.clear = function() {
    link.clear();
  }
}

var link2stack = new Link2Stack();
link2stack.push('11');
link2stack.push('222');
console.log(link2stack.top());
console.log(link2stack.pop());
link2stack.push('444');
console.log(link2stack.isEmpty());
console.log(link2stack.size());