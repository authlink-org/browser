type StrippedProject = {
  id: string;
  title: string;
  description: string;
  views: number;
  createdAt: Date;
};

type TopProjectsReturn = Array<StrippedProject>;
