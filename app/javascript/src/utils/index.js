import dayjs from "dayjs";

const sluggify = label => label.toLowerCase().split(" ").join("-");

export const getTimeFromNow = date => dayjs(date).fromNow();
export const getDayAndTimeFromDate = date => dayjs(date).format("dddd, hh:mmA");

export const buildSelectOptions = labels =>
  labels.map(label => ({ label, value: sluggify(label) }));
