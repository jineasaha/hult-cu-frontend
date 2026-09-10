export interface Person {
  id: string;
  name: string;
  role: string;
  organization: string;
  education: string[];
  image: string;
  linkedin: string;
}

export interface CurrentJudge {
  id: string;
  revealed: boolean;
  name: string;
  role: string;
  organization: string;
  image: string;
}
