/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 链表相加 （二） 可以用栈来做
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param head1 ListNode类 
 * @param head2 ListNode类 
 * @return ListNode类
 */
 function addInList( head1 ,  head2 ) {
  // write code here
  // 首先反转链表
  head1=reverseList(head1)
  head2=reverseList(head2)
  let dummy=new ListNode(0)
  let cur=dummy
  let carry=0

  while (head1 || head2) {
    let x=head1!==null? head1.val:0
    let y=head2!==null?head2.val:0
    let sum=x+y+carry
    carry=sum>=10?1:0
    sum=sum%10
    cur.next=new ListNode(sum)
    cur=cur.next
  }
  if(carry>0){
    cur.next=new ListNode(carry)
    cur=cur.next
  }
  return dummy.next
  
}
function reverseList(head) {
  if(head===null ||head.next===null) return head
  let cur=head
  let pre=null
  while (cur) {
    temp=cur.next
    cur.next=pre
    pre=cur
    cur=temp
  }
  return pre
}