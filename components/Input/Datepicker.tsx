import "antd/es/date-picker/style/index";

import generatePicker from "antd/es/date-picker/generatePicker";
import { getWeek, startOfWeek } from "date-fns";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";

const DatePicker = generatePicker<Date>({
  ...dateFnsGenerateConfig,
  locale: {
    ...dateFnsGenerateConfig.locale,
    getWeekFirstDay: () => 1,
    getWeekFirstDate: (_, date) => startOfWeek(date, { weekStartsOn: 1 }),
    getWeek: (_, date) => getWeek(date, { weekStartsOn: 1 }),
  },
});

export default DatePicker;
