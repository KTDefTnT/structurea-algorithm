var Node = function(val, flag) {
  this.val = val;
  this.next = null;
  this.flag = flag;
}
var MyCalendar = function() {
  this.linkedList = new Node(0);
  this.tail = this.linkedList;
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
  let { linkedList, tail } = this;
  let endValue = tail.val;
  let startNode = new Node(start, 'start');
  let nextNode = new Node(end, 'end');
  startNode.next = nextNode;

  if (start >= endValue) {
      tail.next = startNode;
      this.tail = nextNode;
      console.log('true');
      return true;
  }
  
  let headValue = linkedList.next.val;
  // 最大日期小于已有日期
  // ! 左闭右开区间， 尾日期可下一个date的首日期可以相等
  if (end <= headValue) {
      nextNode.next = linkedList.next;
      this.linkedList.next = startNode;
      console.log('true');
      return true;
  }

  // 最小日期与最大日期 均位于链表中间，在两个date之间 插入一个date
  let curr_node = this.linkedList.next;
  // 找到 当前预约时间段可插入的时间， 即第一个大于它的时间
  // ! 左闭右开区间， 尾日期可下一个date的首日期可以相等
  while (curr_node && curr_node.val <= start) {
      const node = curr_node.next;
      if (curr_node.flag === 'end' && node.val >= end) {
        nextNode.next = node;
        curr_node.next = startNode;
        console.log('true');
        return true
      }

      curr_node = curr_node.next;
  }

  // 当前即最小日期在已有链表的中间， 不符合要求
  console.log('false');
  return false;
}; 

/**
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/


let date = new MyCalendar();
date.book(48, 50);
date.book(0, 6);
date.book(6, 13);
date.book(8, 13);
date.book(15, 23);
