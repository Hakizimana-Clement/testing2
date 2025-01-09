import basicInfo from "./basicInfo";
import { queries } from "./queries";
import { user } from "./users";

export default {
  ...basicInfo,
  paths: {
    ...queries,
    ...user,
  },
};
