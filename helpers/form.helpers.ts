import { isArray, isEqual } from "lodash";
import { v4 } from "uuid";

export const isValidEmail = (email: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

export const isVietnamesePhoneNumber = (number?: string) => {
  const phoneRegex = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
  if (number) {
    return phoneRegex.test(number);
  } else return true;
};

export const isValidUrl = (string: string) => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};

const LIST_TYPE_NODES = ["ul", "ol"];

export const getText = (node: any, parents: any = [], res: any = []) => {
  if (node.nodeName === "#text") {
    const text = node.textContent.trim();

    if (text) {
      res.push({
        id: v4(),
        data: { text },
        type: "paragraph",
      });
    }
  } else if (LIST_TYPE_NODES.includes(node.nodeName.toLowerCase())) {
    res.push({
      id: v4(),
      data: {
        style: node.nodeName.toLowerCase() === "ul" ? "unordered" : "ordered",
        items: Array.from(node.childNodes)
          ?.map((child: any) => ({ content: child.innerText, items: [] }))
          ?.filter((item) => item?.content),
      },
      type: "list",
    });
  } else if (node.nodeName.toLowerCase() === "img") {
    res.push({
      id: v4(),
      type: "image",
      data: {
        file: { url: node.getAttribute("src") },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    });
  } else {
    node.childNodes.forEach((node: any) =>
      getText(
        node,
        parents.concat(
          node.classList?.[0]
            ? `${node.nodeName.toLowerCase()} class="${node.classList?.[0]}"`
            : node.nodeName.toLowerCase(),
        ),
        res,
      ),
    );
  }

  return res;
};

export const extractContent = (input?: string) => {
  if (input) {
    let container = document.createElement("div");
    container.innerHTML = input;
    return getText(container);
  } else return [];
};

export const validJSON = (text: string) => {
  try {
    const json = JSON.parse(text);
    if (!json || isArray(json)) {
      return false;
    } else return typeof json === "object";
  } catch (error) {
    return false;
  }
};

export const isFormDirty = (init: any, current: any) => {
  const { description: initDes, ...restInit } = init;
  const { description: currentDes, ...restCurrent } = current;

  if (!currentDes) {
    return false;
  }

  const { blocks: currentBlocks } =
    typeof currentDes === "string" ? JSON.parse(currentDes) : currentDes;

  if (!initDes) {
    return currentBlocks?.blocks?.length > 1;
  }

  const { blocks: initBlocks } = validJSON(
    typeof initDes === "string" ? initDes : JSON.stringify(initDes),
  )
    ? typeof initDes === "string"
      ? JSON.parse(initDes)
      : initDes
    : extractContent(initDes);

  const isDiffDes = isEqual(initBlocks, currentBlocks);
  const isDiffRest = isEqual(restInit, restCurrent);

  return !isDiffDes || !isDiffRest;
};
