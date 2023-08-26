const operators = ['+', '-', '*', '/'];

export const generateMathProblem = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const operand1 = Math.floor(Math.random() * 10) + 1;
  const operand2 = Math.floor(Math.random() * 10) + 1;
  return `${operand1} ${operator} ${operand2}`;
};
