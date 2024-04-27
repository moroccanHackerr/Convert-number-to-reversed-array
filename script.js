function reversnum(n) {
  return n
    .toString()
    .split("")
    .map((i) => 
      Number(i)
    )
    .reverse();
}

console.log(reversnum(2458));
