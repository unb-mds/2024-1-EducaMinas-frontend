import { axios } from '@/lib/axios';
import { Enrollment } from '@/types/Enrollment';

type getDataProps = {
  level: string;
  city: string;
};

class EnrollmentService {
  private path = '/api/matriculas';

  async get(filters: getDataProps): Promise<Enrollment | null> {
    const { city, level } = filters;

    try {
      const response = await axios.get<Enrollment>(this.path, {
        params: { municipio: city, etapa: level },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados de matrícula:', error);
      return null;
    }
  }
}

export const enrollmentService = new EnrollmentService();
