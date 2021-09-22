const convertVal = (str, charVal) => {
  let val = 0;
  for (let i = 0; i < str.length; ++i) {
    val = val * 10 + charVal.get(str[i]);
  }
  return val;
};

if (R*1000 + E*100 + A*10 + D + W*10000 + R*1000 + I*100 + T*10 + E + T*1000 + A*100 + L*10 + K === S*1000 + K*100 + I*100 + L*10 + L) {
	console.log(true)
}
