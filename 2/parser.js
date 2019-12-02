export function parser(opcodeString) {
  const opcodes = opcodeString
    .trim()
    .split(",")
    .map(Number);

  opcodes.find((opcode, index) => {
    if (index % 4 !== 0) {
      return false;
    }

    let [a, b, c, d] = opcodes.slice(index, index + 4);

    if (a === 1) {
      opcodes[d] = opcodes[b] + opcodes[c];
    } else if (a === 2) {
      opcodes[d] = opcodes[b] * opcodes[c];
    } else if (a === 99) {
      return true;
      // todo
    } else {
      // todo error;
    }
    return false;
  });
  return opcodes.join(",");
}
