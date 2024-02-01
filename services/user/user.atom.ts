import { atom } from "recoil";
import { User } from ".";

const currentUser = atom<Partial<User>>({
  key: "current-user",
  default: undefined,
});

export default { currentUser };
