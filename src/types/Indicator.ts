export interface Indicator {
  categories: number[];
  series: { name: string; data: number[] }[];
}
