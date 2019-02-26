describe('Main', () => {
  // roda uma vez, antes do bloco
  before(() => {
    console.log('before');
  });

  // roda uma vez, depois do bloco
  after(() => {
    console.log('after');
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    console.log('beforeEach');
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(() => {
    console.log('afterEach');
  });

  it('test 1', () => {
    console.log('test 1');
  });

  it('test 2', () => {
    console.log('test 2');
  });
});

// before
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// after
