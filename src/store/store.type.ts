export type Duration = {
  startTime: string;
  endTime: string;
};

export type Schedule = {
  sun: Array<Duration>;
  mon: Array<Duration>;
  tue: Array<Duration>;
  wed: Array<Duration>;
  thu: Array<Duration>;
  fri: Array<Duration>;
  sat: Array<Duration>;
};
