/**
 * enqueue、dequeue、head、tail、isEmpty、size、clear
 */
const Link  = require("./index");

function Link2Queue() {
  var link = new Link();

  this.enqueue = function(item) {
    link.append(item);
  }

  this.dequeue = function() {
    let delItem = link.remove_head();
    return delItem ? delItem.data : null;
  }

  this.head = function() {
    let head = link.head();
    return head ? head.data : null;
  }

  this.tail = function() {
    let tail = link.tail();
    return tail ? tail.data : null;
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

var link2queue = new Link2Queue();
link2queue.enqueue('111');
link2queue.enqueue('222');
console.log(link2queue.dequeue()); // 111
link2queue.enqueue('werer');
link2queue.enqueue('4544');
console.log(link2queue.head()); // 222
console.log(link2queue.tail()); // 4544
link2queue.enqueue('sdfsfsf');
console.log(link2queue.tail()); // sdf
console.log(link2queue.size()); // 4
console.log(link2queue.isEmpty()); // false