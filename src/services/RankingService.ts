import { axios } from '@/lib/axios';
import { RankingItem } from '@/types/Ranking';

type getDataProps = {
  year: string;
  level: string;
  order: string;
};

class RankingService {
  private path = '/api/ranking';

  async get(filters: getDataProps): Promise<RankingItem[] | null> {
    const { year, level, order } = filters;

    try {
      const response = await axios.get<RankingItem[]>(this.path, {
        params: { ano: year, etapa: level, ordem: order },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados de ranking:', error);
      return null;
    }
  }
}

export const rankingService = new RankingService();
