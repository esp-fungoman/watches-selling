interface URL {
  pathname: string;
  query?: {
    [k: string]: string;
  };
}

export const stringifyParams = (params: { [k: string]: string }) => {
  return "?" + new URLSearchParams(params);
};

export const getCurrentParams = () => {
  const searchParams = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const paramsObject = Object.fromEntries(searchParams);
  return paramsObject;
};

export const pushRouter = (url: string | URL) => {
  if (typeof url === "string") {
    return url;
  } else if (url.query) {
    return `${url.pathname}${stringifyParams(url.query)}`;
  } else {
    return url.pathname;
  }
};
