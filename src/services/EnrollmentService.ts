import { axios } from '@/lib/axios';
import { Enrollment } from '@/types/Enrollment';
import { toast } from 'sonner';

export interface EnrollmentFilter {
  city: string;
  level: string;
}

class EnrollmentService {
  private path = '/api/matriculas';

  async get(filters: EnrollmentFilter): Promise<Enrollment | null> {
    const { city, level } = filters;

    try {
      const response = await axios.get<Enrollment>(this.path, {
        params: { municipio: city, etapa: level },
      });
      return response.data;
    } catch (error) {
      if ((error as any).response.data.message) toast.error((error as any).response?.data?.message);
      return null;
    }
  }
}

export const enrollmentService = new EnrollmentService();
