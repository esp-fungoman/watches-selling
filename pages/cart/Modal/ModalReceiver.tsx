import { Form, Select, message } from "antd";
import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal/Modal/Modal";
import {
  getDistricts,
  getProvinces,
  getWards,
} from "../../../services/address/address.api";
import { OrderApi } from "../../../services/order";

interface ModalReceiverProps {
  isVisible: boolean;
  isEdit: boolean;
  title?: string;
  iconClose?: ReactNode;
  onClose?: (event?: any) => void;
  onOpen?: (event?: any) => void;
  data?: any;
  addOrderId?: (id: string) => void;
}

const ModalReceiver = (props: ModalReceiverProps) => {
  const {
    isVisible,
    isEdit,
    title,
    data,
    iconClose = "Đóng",
    addOrderId = () => { },
    onClose,
    onOpen,
  } = props;

  const [form] = Form.useForm();
  const [orderId, setOrderId] = useState<string>()
  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  const province_id = Form.useWatch("province_id", form);
  const district_id = Form.useWatch("district_id", form);
  const ward_id = Form.useWatch("ward_id", form);

  useEffect(() => {
    getProvinces().then((provinceData) => {
      setProvinces(provinceData);
    });
  }, []);

  useEffect(() => {
    getDistricts(province_id).then((districtData) => {
      setDistricts(districtData);
    });
  }, [province_id]);

  useEffect(() => {
    getWards(district_id).then((wardData) => {
      setWards(wardData);
    });
  }, [district_id, province_id]);

  const handleSaving = async () => {
    console.log('form', form.getFieldsValue());
    let existOrder
    if (orderId) {
      existOrder = await OrderApi.findOne(orderId as string)
    }
    if (!existOrder) {
      await OrderApi.create({
        orderDate: new Date(),
        name: form.getFieldValue('full_name'),
        phoneNumber: form.getFieldValue('phone_number'),
        address:
          form.getFieldValue('address') + " " +
          form.getFieldValue('ward_label') + " " +
          form.getFieldValue('district_label') + " " +
          form.getFieldValue('province_label')
      }).then((res) => {
        console.log('res', res)
        if (res) {
          onOpen && onOpen(form.getFieldsValue())
          setOrderId(res.id)
          addOrderId(res.id)
          messageApi.success('Success saved');
          if (onClose) { // Check if onClose is defined
            onClose(); // Close the modal
            onOpen && onOpen(form.getFieldsValue())
          }
        }
      })
    }
    else {
      await OrderApi.update(orderId as string, {
        orderDate: new Date(),
        name: form.getFieldValue('full_name'),
        phoneNumber: form.getFieldValue('phone_number'),
        address:
          form.getFieldValue('address') + " " +
          form.getFieldValue('ward_label') + " " +
          form.getFieldValue('district_label') + " " +
          form.getFieldValue('province_label')
      }).then((res) => {
        console.log('res', res)
        if (res) {
          messageApi.success('Success update');
          if (onClose) { // Check if onClose is defined
            onClose(); // Close the modal
            onOpen && onOpen(form.getFieldsValue())
          }
        }
      })
    }
  };


  const Footer = () => (
    <div className="flex justify-between pt-[12px]">
      <Button type="outlined" className="!w-[48%]" onClick={onClose}>
        Hủy bỏ
      </Button>
      <Button
        onClick={() => {
          handleSaving()
        }}
        className={classNames(
          "!w-[48%]",
          !ward_id || !province_id || !district_id ? "disabled" : ""
        )}
      >
        Lưu
      </Button>
    </div>
  );

  const handleSubmit = (value: any) => {
    console.log('value', value);

    onOpen && onOpen(value);
    // form.resetFields();
  };

  return (
    <Modal
      isCenterModal
      title={title}
      isVisible={isVisible}
      onClose={onClose}
      onOpen={onOpen}
      iconClose={iconClose}
      width={550}
      footer={<Footer />}
      className="p-[16px] modal-address"
    >
      <Form
        initialValues={data}
        form={form}
        onFinish={handleSubmit}
        className="w-full p-[12px] flex flex-col bg-[#F5F5F6]"
      >
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col justify-start">
            <div className="flex flex-row gap-3 items-center">Họ và tên</div>
            <Form.Item
              name="full_name"
              rules={[
                {
                  required: true,
                  message: "Họ và tên là bắt buộc!",
                },
              ]}
            >
              <Input width={340} placeholder="Nhập họ và tên" />
            </Form.Item>
          </div>
          <div className="w-full flex flex-col justify-start">
            <div className="flex flex-row gap-3 items-center">
              Số điện thoại*
            </div>
            <Form.Item
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Số điện thoại là bắt buộc!",
                },
                {
                  pattern: new RegExp(/^[0-9]+$/),
                  message: "Số điện thoại không hợp lệ",
                },
              ]}
            >
              <Input width={340} placeholder="Nhập SĐT" />
            </Form.Item>
          </div>
          <div className="w-full flex flex-col justify-start">
            <p className="font-medium text-medium my-[8px]">Tỉnh/Thành*</p>
            <Form.Item name="province_id">
              <Select
                showSearch
                // width={340}
                placeholder="Chọn"
                onChange={(value, option) => {
                  console.log("value", value);
                  console.log("option", option);
                  form.setFieldsValue({
                    district_id: null,
                    ward_id: null,
                    province_label: option.label,
                  });
                }}
                options={provinces}
              />
            </Form.Item>
            <Form.Item className="hidden" name="province_label"></Form.Item>
          </div>
          <div className="w-full flex flex-col justify-start">
            <p className="font-medium text-medium my-[8px]">Quận/Huyện*</p>
            <Form.Item name="district_id">
              <Select
                // width={340}
                placeholder="Chọn"
                onChange={(value, option) => {
                  form.setFieldsValue({
                    ward_id: null,
                    district_label: option.label,
                  });
                }}
                options={districts}
              />
            </Form.Item>
            <Form.Item className="hidden" name="district_label"></Form.Item>
          </div>
          <div className="w-full flex flex-col justify-start">
            <p className="font-medium text-medium my-[8px]">Xã/Phường*</p>
            <Form.Item name="ward_id">
              <Select
                placeholder="Chọn"
                options={wards}
                onChange={(value, option) => {
                  form.setFieldsValue({
                    ward_label: option.label,
                  });
                }}
              />
            </Form.Item>
            <Form.Item className="hidden" name="ward_label"></Form.Item>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-row gap-3 items-center">Địa chỉ*</div>
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Địa chỉ là bắt buộc!",
              },
            ]}
          >
            <Input width={340} placeholder="Nhập địa chỉ" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalReceiver;
