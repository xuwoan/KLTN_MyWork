import moment from 'moment';

export const parseToDDMMYY = (date) => {
return moment(date).format('DD-MM-YYYY');
}

export const parseToYYYYMMDD =  (date) => {
  return moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD');
}

export const dateCompare = (firstDate, secondDate) => {
  const firstMoment = moment(firstDate);
  if (firstMoment.isAfter(secondDate)) {
    return 1;
  }
  if (firstMoment.isSame(secondDate)) {
    return 0;
  }
  return -1;
}
