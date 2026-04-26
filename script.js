function indexOfIgnoreCase(s1, s2) {
	 if (subStr === "") return 0;

    str = str.toLowerCase();
    subStr = subStr.toLowerCase();

    for (let i = 0; i <= str.length - subStr.length; i++) {
        let j = 0;

        while (j < subStr.length && str[i + j] === subStr[j]) {
            j++;
        }

        if (j === subStr.length) return i;
    }

    return -1;
  // write your code here
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
