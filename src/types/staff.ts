export interface Staff {
    name: string;
    department: string;
    image: {
      url: string;
      width?: number;
      height?: number;
    };
  }