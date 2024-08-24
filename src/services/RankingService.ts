import { axios } from '@/lib/axios';
import { RankingItem } from '@/types/Ranking';
import { toast } from 'sonner';

export interface RankingFilter {
  year: string;
  level: string;
}

class RankingService {
  private path = '/api/ranking';

  async get(filters: RankingFilter): Promise<RankingItem[] | null> {
    const { year, level } = filters;

    try {
      const response = await axios.get<RankingItem[]>(this.path, {
        params: { ano: year, etapa: level },
      });
      return response.data;
    } catch (error) {
      if ((error as any).response.data.message) toast.error((error as any).response?.data?.message);
      return null;
    }
  }
}

export const rankingService = new RankingService();
