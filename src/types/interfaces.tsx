export interface TrofeyCardProps {
  id: number;
  fishWeight: number;
  fishingType: string;
  fishermanName: string;
  fishType: string;
  fishPhoto?: string;
  location?: string;
  dateCaught?: string;
  bait?: string;
  feed?: string;
  likes?: number;
}

export interface LakeCardProps {
  id: number;
  title: string;
  instagramLink: string;
  facebookLink: string;
  youtubeLink: string;
  websiteLink: string;
  coverImg: string;
  lakeAddress: string;
}

export interface BloggerCardProps {
  id: number;
  title: string;
  instagramLink: string;
  facebookLink: string;
  youtubeLink: string;
  websiteLink: string;
  coverImg: string;
  description: string;
}
