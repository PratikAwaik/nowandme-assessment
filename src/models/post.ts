export interface IPost {
  author: {
    name: string;
    profilePic: string;
  };
  createdAt: string;
  updatedAt: string | null;
  emotion: string;
  content: string;
  commentsCount: number;
}
