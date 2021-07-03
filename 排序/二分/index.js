/* let left = 0
let right = 4
//  * \     + -   >>
let mid = left + ((right - left) >> 1);
console.log(mid);//2  
let gg = left + ((right - left) /2);
console.log("gg", gg) */
console.log(1<<4);

let ret = 0;
for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
        ret++;
    }
}
return ret;

