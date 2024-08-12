import { axios } from '@/lib/axios';
import { Indicator } from '@/types/Indicator';

export interface IndicatorFilter {
  level: string;
  city: string;
  indicator: string;
  sector: string;
}

class IndicatorsService {
  private path = '/api/indicador';

  async get(filters: IndicatorFilter): Promise<Indicator | null> {
    const { level, city, indicator, sector } = filters;

    try {
      const response = await axios.get<Indicator>(this.path, {
        params: { municipio: city, etapa: level, indicador: indicator, rede: sector },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados de indicador:', error);
      return null;
    }
  }
}

export const indicatorsService = new IndicatorsService();
