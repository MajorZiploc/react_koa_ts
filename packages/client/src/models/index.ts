export type Movie = {
  id: string;
  name: string;
  releaseYear: number;
  rating: number;
};

export type AppSettingsServer = {
  shouldMock: boolean;
};

export type AppSettings = {
  server: AppSettingsServer;
};
