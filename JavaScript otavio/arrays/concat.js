const nums1 = [1,2,3]
const nums2 = [4,5,6]
const nums3 = [7,8,9]


const a4 = (nums1.concat(nums2.concat(nums3)))
//...rest -> ...spread
const a5 = [...nums1,'OLLLA', ...nums2, ...nums3, ...[1,5,9,7]]
 
console.log(a4)
console.log(a5)
