import basicInfo from "./basicInfo";
import { queries } from "./queries";
export default {
  ...basicInfo,
  paths: {
    ...queries,
  },
};
