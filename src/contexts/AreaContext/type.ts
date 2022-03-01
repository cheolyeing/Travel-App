export type AreaInfo = {
  code: number;
  name: string;
};

export type Area = {
  lv1: AreaInfo;
  lv2?: AreaInfo;
};

export type AreaContextType = {
  area: Area;
  setArea?: (area: Area) => void;
};
