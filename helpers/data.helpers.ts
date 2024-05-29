export const extractH2Elements = (str: string) => {
  const h2Regex = /<h2>(.*?)<\/h2>/gm;
  const matches = str?.match(h2Regex);

  if (!matches) {
    return [];
  }

  const h2Elements: string[] = [];

  for (const match of matches) {
    const titleStart = match.indexOf(">") + 1;
    const titleEnd = match.lastIndexOf("</");
    const title = match.substring(titleStart, titleEnd);

    h2Elements.push(title);
  }

  return h2Elements;
};

export const convertToSlug = (str: any, symbol?: string) => {
  if (str && typeof str === "string") {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase().trim();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, symbol || "-");

    // Xóa ký tự - liên tiếp
    str = str.replace(/-+/g, symbol || "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  } else return str;
};

export const formatPrice = (price: number) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +' đ';
};
