type StrippedProject = {
  id: string;
  title: string;
  description: string;
  views: number;
  createdAt: Date;
};

type ViewableProject = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  views: number;
  monetization_method: string;
  allowFreeLicenses: boolean;
  Profile: {
    username: string;
  } | null;
} | null;

type ViewMore = {
  title: string;
  description: string;
  createdAt: string;
  views: number;
};

type TopProjectsReturn = Array<StrippedProject>;
