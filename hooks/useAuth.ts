import { useRouter } from "next/router";

import { useRecoilValue } from "recoil";
import { UserAtom } from "../services/user";

const useAuth = () => {
  const router = useRouter();
  const currentUser = useRecoilValue(UserAtom.currentUser);
  const checkAuth = () => {
    if (!currentUser) {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/connect/google`);
    }
  };

  return checkAuth;
};

export default useAuth;
