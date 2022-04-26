// https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true

function funnyString(s) {
  // Write your code here
    const str = s.split('').map(char => char.charCodeAt(0));
    const reverseStr = JSON.parse(JSON.stringify(str)).reverse()
    // console.log(str, reverseStr)

    const arrSub = (str) => {
      return str.reduce((pre, cur, idx, arr) => {
        // console.log(pre, cur, idx, arr)
        if(idx === 0)
          return []
        
        const diff = arr[idx-1] - cur;
        return [...pre, Math.abs(diff)]
      }, []);
    }

   const strSub = arrSub(str);
   const reverseStrSub = arrSub(reverseStr);
  //  console.log(strSub.toString(), reverseStrSub.toString())
   if(strSub.toString() === reverseStrSub.toString())
     return 'Funny'
   return 'Not Funny'

}

funnyString('bcxz')
funnyString('lmnop')