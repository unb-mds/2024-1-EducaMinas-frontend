import { axios } from '@/lib/axios';
import { Indicator } from '@/types/Indicator';
import { toast } from 'sonner';

export interface IndicatorFilter {
  level: string;
  city: string;
  indicator: string;
}

class IndicatorsService {
  private path = '/api/indicador';

  async get(filters: IndicatorFilter): Promise<Indicator | null> {
    const { level, city, indicator } = filters;

    try {
      const response = await axios.get<Indicator>(this.path, {
        params: { municipio: city, etapa: level, indicador: indicator },
      });
      return response.data;
    } catch (error) {
      if ((error as any).response.data.message) toast.error((error as any).response?.data?.message);
      return null;
    }
  }
}

export const indicatorsService = new IndicatorsService();
