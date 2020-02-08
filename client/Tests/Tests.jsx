const validQuery = (props) =>{
  // console.log(props);
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validQueryTest = \`\n${props.writeTest}\`
    tester.test(true, validQueryTest)
  })`;
  return newTest;
};

const invalidQuery = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const invalidQueryTest = \`${props.writeTest}\`
    tester.test(false, invalidQueryTest)
  })`;
  return newTest;
};

const validArgField = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validArgFieldTest = \`${props.writeTest}\`
    tester.test(true, validArgFieldTest)
  })`;
  return newTest;
};

const invalidArgField = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const invalidArgFieldTest = \`${props.writeTest}\`
    tester.test(false, invalidArgFieldTest)
  })`;
  return newTest;
};

const validArgDataType = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validArgValueTypeTest = \`${props.writeTest}\`
    tester.test(true, validArgValueTypeTest)
  })`;
  return newTest;
};

const invalidArgDataType = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const invalidArgValueTypeTest = \`${props.writeTest}\`
    tester.test(false, invalidArgValueTypeTest)
  })`;
  return newTest;
};

export  {
    validQuery,
    invalidQuery,
    validArgField,
    invalidArgField,
    validArgDataType,
    invalidArgDataType
};