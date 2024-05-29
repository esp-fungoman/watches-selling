import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import { useDebounce } from "usehooks-ts";
import { getCurrentParams, pushRouter } from "../../helpers/router.helper";
import { Icon } from "../Icon";
import Input from "../Input";

interface SearchProps {
  className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [search, setSearch] = useState<string>("");
  const searchDebound = useDebounce(search, 1500);
  const params = getCurrentParams();

  useEffect(() => {
    if (searchDebound) {
      router.push(
        pushRouter({
          pathname: "/product",
          query: { ...params, search: searchDebound, page: "1" },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDebound]);

  useEffect(() => {
    if (!pathname.includes("product")) {
      setSearch("");
    }
  }, [pathname]);

  return (
    <Input
      containerClassName={className}
      className="!bg-transparent !rounded-[32px]"
      placeholder="Search"
      prefix={<Icon size={20} name="new-search" />}
      value={search}
      onClear={() => {
        search.length > 0 && router.push(pushRouter({ pathname: "/product" }));
        setSearch("");
      }}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && searchDebound?.trim()) {
          router.push(
            pushRouter({
              pathname: "/posts",
              query: { ...params, search: searchDebound, page: "1" },
            })
          );
        }
      }}
    />
  );
};

export default Search;
