import { message } from "antd";
import Api from "../api";

const list = async (params?: any): Promise<any> => {
  try {
    const res = await Api({
      method: "GET",
      url: "/v1/orders",
    });
    return res.orders;
  } catch (err: any) {
    message.error(err?.message);
  }
};

const detail = async (id: string): Promise<any> => {
  try {
    const res = await Api({
      method: "GET",
      url: `/v1/orders/${id}`,
    });
    return res.order;
  } catch (err: any) {
    message.error(err?.message);
  }
};
const InvoiceApi = { list, detail };
export default InvoiceApi;
