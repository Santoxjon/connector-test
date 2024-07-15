export interface Rocket {
  readonly id: string;
  readonly company: string;
  readonly country: string;
  readonly main_image: string;
  readonly cost_per_launch: {
    readonly amount: number;
    readonly currency: string;
  };
}
