type getDataProps = {
  level: string;
  city: string;
};

class EnrollmentService {
  async get(params: getDataProps) {
    // logica de requisição
    console.log(`Municipio: ${params.city} | Etapa: ${params.level}`);
  }
}
export const enrollmentService = new EnrollmentService();
