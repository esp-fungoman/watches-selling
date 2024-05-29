"use client";

import { FC, ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface RecoilContextProviderProps {
  children: ReactNode;
}

const RecoilContextProvider: FC<RecoilContextProviderProps> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
