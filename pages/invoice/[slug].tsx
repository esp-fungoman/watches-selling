import { notification, Switch, Table } from "antd";
import Divider from "../../components/Divider";
import { useEffect, useMemo, useState } from "react";
import { add, format, parseISO } from "date-fns";
import styles from "./Invoice.module.scss";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/router";
import { InvoiceApi } from "../../services/invoice";
import { formatPrice } from "../../helpers/data.helpers";
const InvoiceDetail = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const id = router?.asPath?.split("/")[2] as string;
    if (id && id !== "[slug]") {
      InvoiceApi.detail(id).then((res) => {
        console.log("🚀 ~ InvoiceApi.detail ~ res:", res);
        setData(res);
      });
    }
    setLoading(false);
  }, [router]);

  const totalMoney = useMemo(() => {
    if (!data?.details) return 0;
    let total = data.details.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );
    return total + total * 0.08;
  }, [data?.details]);

  const dataSource = data?.details?.map((item: any, index: number) => ({
    ...item,
    index: index + 1, // Auto-incrementing index starting from 1
  }));
  const columns: ColumnsType<any> = [
    {
      title: "STT",
      width: 70,
      key: "index",
      align: "center",
      render: (_, record) => <div>{record.index}</div>,
    },
    {
      title: "Sản phẩm",
      width: 400,
      key: "name",
      align: "left",
      render: (_, record) => <div>{record.name}</div>,
    },
    {
      title: "Giá",
      width: 200,
      key: "price",
      align: "center",
      render: (_, record) => <div>{formatPrice(record.price)}</div>,
    },
    {
      title: "Số lượng",
      width: 150,
      key: "quantity",
      align: "center",
      render: (_, record) => <div>{record.quantity}</div>,
    },
    {
      title: "Thành tiền",
      width: 200,
      key: "total",
      align: "center",
      render: (_, record) => (
        <div>{formatPrice(record.quantity * record.price)}</div>
      ),
    },
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className="w-full text-center font-semibold text-4xl mb-4">
            INVOICE
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-start mb-2">
              <div className="flex gap-3 flex-1">
                <div className="font-bold ">Receiver Name:</div>
                <div>{data?.delivery_information?.full_name}</div>
              </div>
              <div className="flex gap-3 w-[250px] justify-start">
                <div className="font-bold ">Phone Number:</div>
                <div>{data?.delivery_information?.phone_number}</div>
              </div>
            </div>
            <div className="flex justify-start mb-2">
              {/* <div className="flex gap-3 flex-1">
                <div className="font-bold ">Bill To:</div>
                <div>{data.delivery_information}</div>
              </div> */}
              {data?.created_at && (
                <div className="flex gap-3 justify-start w-[250px]">
                  <div className="font-bold ">Order Date:</div>
                  <div>{format(parseISO(data?.created_at), "dd/MM/yyyy")}</div>
                </div>
              )}
            </div>
            {/* <div className="flex justify-start  ">
              <div className="flex gap-3 w-max">
                <div className="font-bold ">Delivery Date (estimate)</div>
                <div>{format(data.estimateDeliveryDate, "dd/MM/yyyy")}</div>
              </div>
            </div> */}
          </div>
          <Table
            columns={columns}
            loading={loading}
            dataSource={dataSource}
            pagination={false}
            className="mt-6"
            footer={() => (
              <div className="flex items-center w-full">
                <div className="flex-1"></div>
                <div className="w-[150px] text-center font-bold">
                  Tổng tiền (8% Thuế)
                </div>
                <div className="w-[120px] text-center font-bold">
                  {formatPrice(totalMoney)}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
