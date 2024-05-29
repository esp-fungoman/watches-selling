import { notification, Switch, Table } from "antd";
import Divider from "../../components/Divider";
import { useEffect, useState } from "react";
import { add, format } from "date-fns";
import styles from "./Invoice.module.scss";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/router";
import { InvoiceApi } from "../../services/invoice";
import { formatPrice } from "../../helpers/data.helpers";
const InvoiceDetail = () => {
  const [data, setData] = useState<any>({
    receiverName: "Nam",
    receiverAddress: "Hue",
    receiverPhoneNumber: "0209291991",
    orderDate: new Date(),
    estimateDeliveryDate: add(new Date(), { days: 3 }),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const id = router?.asPath?.split("/")[2] as string;
    if (id && id !== "[slug]") {
      InvoiceApi.detail(id).then((res) => setData(res));
    }
    setLoading(false);
  }, [router]);

  const dataSource = data?.orderDetails?.map((item: any, index: number) => ({
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
      render: (_, record) => <div>{record.watch.name}</div>,
    },
    {
      title: "Giá",
      width: 200,
      key: "price",
      align: "center",
      render: (_, record) => <div>{formatPrice(record.watch.price)}</div>,
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
        <div>{formatPrice(record.quantity * record.watch.price)}</div>
      ),
    },
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className="w-full text-center font-semibold text-4xl mb-4">
            HOÁ ĐƠN
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-start mb-2">
              <div className="flex gap-3 flex-1">
                <div className="font-bold ">Người nhận:</div>
                <div>{data?.receiverName}</div>
              </div>
              <div className="flex gap-3 w-[250px] justify-start">
                <div className="font-bold ">Số điện thoại:</div>
                <div>{data?.receiverPhoneNumber}</div>
              </div>
            </div>
            <div className="flex justify-start mb-2">
              <div className="flex gap-3 flex-1">
                <div className="font-bold ">Gửi đến:</div>
                <div>{data?.receiverAddress}</div>
              </div>
              <div className="flex gap-3 justify-start w-[250px]">
                <div className="font-bold ">Ngày đặt:</div>
                <div>{format(data?.orderDate, "dd/MM/yyyy")}</div>
              </div>
            </div>
            <div className="flex justify-start  ">
              <div className="flex gap-3 w-max">
                <div className="font-bold ">Ngày giao dự kiến</div>
                <div>{format(data?.estimateDeliveryDate, "dd/MM/yyyy")}</div>
              </div>
            </div>
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
                <div className="w-[150px] text-center font-bold">Tổng tiền (8% Thuế)</div>
                <div className="w-[120px] text-center font-bold">
                  {formatPrice(data.totalPriceAfterTax)} 
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
