export class Lancamento {

  constructor(
    public data: string,
    private tipo: string,
    public localizacao: string,
    public funcionarioId: string,
    public id?: string
  ){}

}
