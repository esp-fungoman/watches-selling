import qs from "qs";
import { get } from "lodash";

export default async function getServerSideProps<T>(
  url: string,
  params: any
): Promise<T> {
  const encodeParams = qs.stringify(params);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${url}?${encodeParams}`,
    {
      cache: "no-cache",
    }
  );
  const resJson = await res.json();
  return get(resJson, "data");
}
