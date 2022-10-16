/**
 * 样例输入
3
5 3 3 3
5 3 3 2
5 3 3 4
样例输出
Tie
Win
Lose

提示
第一组中小美完成第1~k题需要3/3小时，她朋友完成第k~n题需要3/3小时，平局。

第二组中小美完成第1~k题需要2/3小时，她朋友完成第k~n题需要4/3小时，小美赢。

第三组中小美完成第1~k题需要4/3小时，她朋友完成第k~n题需要2/3小时，小美输。
 */

function contest(length,nums) {
  for(let i=0;i<length;i++){
    const x=nums[i][3]/nums[i][1]
    const y=(nums[i][0]+1-nums[i][3])/nums[i][2]
    if(x==y){
      console.log("Tie")
    }else if(x<y){
      console.log("Win")
    }else{
      console.log("Lose")
    }
  }
  
}
console.log(3/3==3/3)


function maxValue(n,p,w) {
  const memo=new Array(n).fill(0) //记录能到达的第i个房间的总价值
  for(let i=0;i<n;i++){
    // 判断一下第i/2或者（i-1）/2是否再数组p中，如在 memo[i]=w[i]+w[i/2] 否则memo[i]=w[i]
    if(p.indexOf(i/2)){
      memo[i]=w[i]+w[i/2]
    }else if(p.indexOf((i-1)/2)){
      memo[i]=w[i]+w[(i-1)/2]
    }else{
      memo[i]=w[i]
    }
  }
  // 遍历memo 取出最大值
  const maxWealth=memo[0]
  for(let i=0;i<n;i++){
    if(memo[i]>maxWealth){
      maxWealth=memo[i]
    }
  }
  return maxWealth
}
console.log(maxValue(4,[2,3,4,5],[2,5,2,4]))
// const memo=new Array(5).fill(0)
// console.log(memo)
console.log(1/2)
console.log((3-1)/2)