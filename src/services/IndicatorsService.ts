type getDataProps = {
  level: string;
  city: string;
  indicator: string;
  sector: string;
};

class IndicatorsService {
  async get(params: getDataProps) {
    // logica de requisição
    console.log(
      `Municipio: ${params.city} | Etapa: ${params.level} | Indicador: ${params.indicator} | Rede: ${params.sector}`,
    );
  }
}
export const indicatorsService = new IndicatorsService();
