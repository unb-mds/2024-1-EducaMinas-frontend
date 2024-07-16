type getDataProps = {
  year: string;
  level: string;
  order: string;
};

class RankingService {
  async get(params: getDataProps) {
    // logica de requisição
    console.log(`Ano: ${params.year} | Etapa: ${params.level} | Ordem: ${params.order}`);
  }
}
export const rankingService = new RankingService();
