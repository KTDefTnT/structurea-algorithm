// 起始点是maze_array[2][1], 终点是 maze_array[3][5]
const Queue = require('../../structure/Queue/Queue');
var maze_array = [
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0]
];

function Node(x, y) {
  this.x = x;
  this.y = y;
  this.step = 0;
}

function Position(x, y) {
  this.x = x;
  this.y = y;
}

/**
 * 找到pos可以到达的点
 * @param {*} pos 当前节点
 * @param {*} maze 迷宫
 * 
 */
function find_position(pos, maze) {
  let x = pos.x;
  let y = pos.y;

  var pos_arr = [];
  // 上边可以走的节点
  if (x - 1 >= 0) {
    pos_arr.push(new Position(x-1, y));
  }

  // 下面可以走的节点
  if (x + 1 < maze.length) {
    pos_arr.push(new Position(x+1, y));
  }

  // 判断是否可以走左面
  if (y - 1 >= 0) {
    pos_arr.push(new Position(x, y-1));
  }

  // 右面可以走的节点
  if (y+1 < maze[0].length) {
    pos_arr.push(new Position(x, y+1));
  } 

  return pos_arr;
}

function find_path(maze, start_pos, end_pos){
  var maze_node = [];
  // 初始化maze_node,用于记录距离出发点的距离 将所有的节点初始化为 x y表示
  for(var i = 0; i< maze_array.length; i++){
    var arr = maze_array[i];
    var node_arr = [];
    for(var j =0; j< arr.length; j++){
      var node = new Node(i, j);
      node_arr.push(node);
    }
    maze_node.push(node_arr);
  }

  // 初始化队列
  var queue = new Queue();
  // 将出发点放入队列中
  queue.enqueue(start_pos);
  // 标记是否已到达
  var arrived = false;
  var max_step = 0;
  
  while(true) {
    // 从队列中弹出第一个点，计算这个点可以到达的值
    var position = queue.dequeue();
    // 这个点可到达的节点
    var pos_arr = find_position(position, maze);
    // 遍历当前可到达的节点 判断是否已到达终点
    for (let i = 0; i < pos_arr.length; i++) {
      var pos = pos_arr[i];
      // 判断当前是否已到达终点
      if (pos.x === end_pos.x && pos.y === end_pos.y) {
        arrived = true;
        // 已到达，当前花费的步数为当前节点的step
        max_step = maze_node[position.x][position.y].step;
        break;
      }

      // 当前为起始点 继续
      if (pos.x === start_pos.x && pos.y === start_pos.y) {
        continue;
      }

      // 无法通过
      if (maze[pos.x][pos.y] == 1) {
        continue;
      }

      // 已经标识过得步数
      if(maze_node[pos.x][pos.y].step > 0) {
        continue;
      }

      // 未到达终点可通行的节点
      maze_node[pos.x][pos.y].step = maze_node[position.x][position.y].step + 1;

      // 继续往后寻找
      queue.enqueue(pos);
    }

    // 已经找到终点
    if (arrived) {
      break;
    }

    // 队列已空 全部找完毕后仍旧没有找到
    if (queue.isEmpty()) {
      break;
    }
  }

  // 方法查找路径
  var path = [];
  // 判断是否能够找到路径
  if (arrived) {
    path.push(end_pos);
    var old_pos = end_pos;
    var step = max_step;

    while(step > 0) {
      var pos_arr = find_position(old_pos, maze);
      for (let i = 0; i < pos_arr.length; i++) {
        var pos = pos_arr[i];

        // 反向寻找 满足当前节点步数的节点 一步步寻找
        if (maze_node[pos.x][pos.y].step === step) {
          step--;
          old_pos = pos;
          path.push(pos);
          break
        }
      }
    }

    path.push(start_pos);
  }

  console.log(path.reverse());
}

var start_pos = new Position(2, 1);
var end_pos = new Position(3, 5);

find_path(maze_array, start_pos, end_pos);
