var mergeKLists = function(lists) {
  function merge_list(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let merge_head = null;
    let merge_tail = null;

    let curr_node1 = list1;
    let curr_node2 = list2;
    while(curr_node1 && curr_node2) {
        let min_data;
        if (curr_node1.val <= curr_node2.val) {
            min_data = curr_node1.val;
            curr_node1 = curr_node1.next;
        } else {
            min_data = curr_node2.val;
            curr_node2 = curr_node2.next;
        }

        // 合并
        let new_node = new ListNode(min_data);
        if(!merge_head) {
            merge_head = new_node;
            merge_tail = new_node;
        } else {
            merge_tail.next = new_node;
            merge_tail = merge_tail.next;
        }
    }

    

    // 判断两个合并链表是否都完成
    let res_link = null;
    if (curr_node1) {
        res_link = curr_node1;
    }
    if (curr_node2) {
        res_link = curr_node2;
    }

    while(res_link) {
        merge_tail.next = res_link;
        merge_tail = merge_tail.next;
        res_link = res_link.next;
    }

    return merge_head;
  }


  if (!lists) return lists;

  let init_list = lists.pop();
  while(lists.length) {
      let next_list = lists.pop();
      init_list = merge_list(init_list, next_list);
  }

  return init_list;
};