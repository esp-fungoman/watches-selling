import Api from "../api"
import { message } from "antd";

const create = async (data?: any): Promise<any> => {
    try {
        const res = await Api({
            url: '/v1/orders',
            method: 'POST',
            data
        })
        if (res.status === 200) {
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
        if (res.status === 200) {
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
        if (res.status === 200) {
            return res.data;
        }
    } catch (err: any) {
        message.error(err?.message);
    }
}
const OrderApi = { create, update, findOne }
export default OrderApi;