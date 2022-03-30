/**
 * 
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 0;
      let right = n;
      while(left <= right) {
          let middle = left + Math.floor((right - left) >> 1);
          if (isBadVersion(middle)) {
              right = middle - 1;
          } else {
              left = middle + 1;
          }
      }

      return left;
  };
};