import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Checkbox, CheckboxProps, message } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Icon } from "../../components/Icon";
import { formatPrice } from "../../helpers/data.helpers";
import ModalReceiver from "./Modal/ModalReceiver";
import { CartDetailApi } from "../../services/cart-detail";
import { log } from "console";
import ModalConfirm from "../../components/Modal/ModalConfirm/ModalConfirm";
import { OrderDetailApi } from "../../services/order-detail";

const Cart = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [orderId, setOrderId] = useState<string>();
  const [modalData, setModalData] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  useEffect(() => {
    CartDetailApi.list().then((res) => {
      if (res) {
        setItems(res)
      }
    })
  }, [])
  useEffect(() => {
    setFilteredItems(items.filter((item) => checkedList.includes(item.title)));
  }, [checkedList, items]);

  const checkAll = items?.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < items.length;



  const [itemIdToRemove, setItemIdToRemove] = useState<string | null>(null);

  const handleRemoveItem = (itemId: string) => {
    setItemIdToRemove(itemId);
    setIsShowModalConfirm(true);
  };


  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? items.map((item) => item.title) : []);
  };

  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleCreateOrder = async () => {
    try {

      const selectedItems = items.filter((item) => checkedList.includes(item.title));

      const itemIds = selectedItems.map((item) => item.id);
      if (itemIds.length > 0) {
        await OrderDetailApi.create(orderId as string, itemIds);
      }
      else {
        messageApi.error("Please select at least 1 item");
      }
    } catch (error) {
      messageApi.error("Error creating order");
    }
  };

  const handleQuantityChange = async (itemId: string, amount: number) => {
    // Update the items state
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
            ...item,
            quantity:
              item.quantity >= 1 && amount === 1
                ? item.quantity + 1
                : item.quantity > 1 && amount === -1
                  ? item.quantity - 1
                  : item.quantity,
          }
          : item
      )
    );
  };

  useEffect(() => {
    const updateCartItem = async (itemIdToUpdate: string) => {
      const updatedItem = items.find((item) => item.id === itemIdToUpdate);
      if (!updatedItem) return;

      try {
        const res = await CartDetailApi.update(itemIdToUpdate, {
          price: updatedItem.price,
          quantity: updatedItem.quantity,
        });

      } catch (error) {
        messageApi.error("Error updating cart");
      }
    };


    items.forEach((item) => {

      if (item.quantity !== item.originalQuantity) {
        const timer = setTimeout(() => {
          updateCartItem(item.id);
        }, 500); // 500 milliseconds delay

        return () => clearTimeout(timer); // Cleanup the timer on component unmount or re-render
      }
    });
  }, [items]); // Watch for changes in the items state




  const getTotalQuantity = (items: any) => {
    return items.reduce((total: any, item: any) => total + item.quantity, 0);
  };

  const getTotalPrice = (items: any) => {
    return items.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="bg-[#FAFAFA] py-[100px]">
      <div className="container">
        <div className="flex px-7 text-[#888] items-center bg-white rounded h-14 mb-3 gap-4">
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          />
          <div className="flex-1">Sản phẩm</div>
          <div className="w-[15%]">Đơn giá</div>
          <div className="w-[15%] text-center">Số lượng</div>
          <div className="w-[15%]">Số tiền</div>
          <div className="w-[10%] text-center">Thao tác</div>
        </div>
        {items.map((item) => (
          <div className="bg-white px-7 rounded mb-3 gap-4 py-3" key={item.id}>
            <div className="flex flex-row gap-4 mb-2 w-full border-b border-[#FAFAFA]">
              <div className="w-[17px] h-1"></div>
              <div>{item?.watch?.brand?.name}</div>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox
                checked={checkedList.includes(item.title)} // Check if item is in the checkedList
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setCheckedList((prev) =>
                    isChecked
                      ? [...prev, item.title]
                      : prev.filter((itemName) => itemName !== item.title)
                  );
                }}
              />
              <div className="flex-1 flex flex-row items-center gap-2">
                <div className="w-[80px] h-[80px] aspect-square relative">
                  <Image src={item.watch?.photo} layout="fill" alt="brand" />
                </div>
                <div className="flex flex-col">
                  <div className="line-clamp-2">{item.title}</div>
                </div>
              </div>
              <div className="w-[15%]">{formatPrice(item.price)} đ</div>
              <div className="w-[15%]">
                <div className="flex items-center mt-2 gap-2 justify-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 rounded-full bg-gray-200"
                  >
                    <MinusOutlined rev={10} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 rounded-full bg-gray-200"
                  >
                    <PlusOutlined rev={10} />
                  </button>
                </div>
              </div>
              <div className="w-[15%]">
                {formatPrice(item.price * item.quantity)} đ
              </div>
              <div className="w-[10%] flex justify-center">
                <Icon
                  name="trash"
                  size={24}
                  className="cursor-pointer"
                  onClick={(e) => handleRemoveItem(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white py-3 px-7 w-full justify-between flex items-center">
          <div className="flex gap-4 ">
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            />
            Chọn tất cả ({getTotalQuantity(items)})
          </div>
          <div className="flex gap-4 items-center">
            <div>
              Tổng thanh toán ({getTotalQuantity(filteredItems)}):{" "}
              {formatPrice(getTotalPrice(filteredItems))} đ
            </div>
            <Button className="!w-[200px]" onClick={handleCreateOrder}>Mua hàng</Button>
          </div>
        </div>
        <div className="bg-white py-3 px-7 w-full flex-col flex  gap-4">
          <div className="flex justify-between">
            <div className="flex  gap-4 ">
              <Icon name="location" size={24} />
              <div className="text-2xl font-semibold text-[#d8342b]">Địa chỉ giao hàng</div>
            </div>
            <Icon name="edit" size={24} onClick={() => setIsShowModal(true)} />
          </div>
          {modalData ? (
            <div className="flex flex-col gap-3">
              <div>Họ và tên: {modalData.full_name}</div>
              <div>Số điện thoại: {modalData.phone_number}</div>
              <div>
                Địa chỉ:
                {modalData?.address +
                  ", " +
                  modalData?.ward_label +
                  ", " +
                  modalData?.district_label +
                  ", " +
                  modalData?.province_label}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <ModalReceiver
        title="Địa chỉ nhận hàng"
        isEdit={isEdit}
        data={{}}
        isVisible={isShowModal}
        addOrderId={(e) => setOrderId(e)}
        onClose={() => setIsShowModal(false)}
        onOpen={(data) => {
          console.log('datamodal', data);

          setModalData(data);
          setIsShowModal(false);
        }}
      />
      <ModalConfirm
        isVisible={isShowModalConfirm}
        titleBody="Xóa sản phẩm này khỏi giỏ hàng?"
        titleConfirm="XOÁ"
        onOk={async () => {
          if (itemIdToRemove) {
            console.log('itemIdToRemove', itemIdToRemove);
            try {
              await CartDetailApi.remove(itemIdToRemove);
              messageApi.success("Xóa sản phẩm thành công");
              const updatedItems = await CartDetailApi.list();
              setItems(updatedItems);
            } catch (error) {
              messageApi.error("Error deleting item");
            }
          }
        }}
        onClose={() => setIsShowModalConfirm(false)}
      />
    </div>
  );
};

export default Cart;
