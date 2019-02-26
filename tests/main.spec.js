// npm test -- --bail no console para parar no primeiro fail

describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it.skip('should happen blabla', () => {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
        throw new Error('just an error');
      });
    });

    context('Case 2', () => {
      // only para rodar só um bloco
      it('should happen blabla', () => {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
        throw new Error('just an error');
      });

      it('should happen mimimi', () => {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });
  });

  describe('Method B', () => {});
});
