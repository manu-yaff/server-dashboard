export interface File {
  Name: string;
  Size: number;
  Channels: string[];
}

export interface ChannelFiles {
  Channel: string;
  NumberFiles: number;
  Files: File[];
}

export interface FilesResponse {
  TotalFiles: string;
  TotalData: string;
  FilesByChannel: ChannelFiles[];
}
