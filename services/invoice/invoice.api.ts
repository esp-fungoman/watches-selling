import { message } from "antd";
import Api from "../api";

const list = async (params?: any): Promise<any> => {
  try {
    const res = await Api({
      method: "GET",
      url: "/invoice/my",
    });
    if (res.status === "OK") {
      return res.data;
    }
  } catch (err: any) {
    message.error(err?.message);
  }
};

const detail = async (id: string): Promise<any> => {
  try {
    const res = await Api({
      method: "GET",
      url: `/invoice/${id}`,
    });
    if (res.status === "OK") {
      return res.data;
    }
  } catch (err: any) {
    message.error(err?.message);
  }
};
const InvoiceApi = { list, detail };
export default InvoiceApi;
