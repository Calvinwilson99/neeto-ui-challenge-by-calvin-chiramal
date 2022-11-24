import dayjs from "dayjs";

export const getTimeFromNow = date => dayjs(date).fromNow();
export const getDayAndTimeFromDate = date => dayjs(date).format("dddd, hh:mmA");
