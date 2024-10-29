import Api from "../api"
import { message } from "antd";
import { OrderProps } from "./order.type";

const create = async (data: OrderProps): Promise<any> => {
    try {
        const res = await Api({
            url: '/order/new',
            method: 'POST',
            data
        })
        if (res.status === "OK") {
            return res.data;
        }
    } catch (err: any) {
        message.error(err?.message);
    }
}

const findOne = async (id: string): Promise<any> => {
    try {
        const res = await Api({
            url: `/order/${id}`,
            method: 'GET'
        })
        if (res.status === "OK") {
            return res.data;
        }
    } catch (err: any) {
        message.error(err?.message);
    }
}

const update = async (id: string, data: any) => {
    try {
        const res = await Api({
            url: `/order/update/${id}`,
            method: 'PUT',
            data
        })
        if (res.status === "OK") {
            return res.data;
        }
    } catch (err: any) {
        message.error(err?.message);
    }
}
const OrderApi = { create, update, findOne }
export default OrderApi;