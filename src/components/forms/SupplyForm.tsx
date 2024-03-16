/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { Form, Input, InputNumber, Select } from "antd";
import { Button } from "@/components/ui/button";

const TextArea = Input;

const SupplyForm = ({
    onFinish,
    handleImage,
    required = false,
}: {
    onFinish: any;
    handleImage: any;
    required: boolean;
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 30,
                width: "100%",
                height: "100%",
            }}
        >
            <Form
                className="w-full"
                name="form"
                onFinish={onFinish}
                onFinishFailed={() => toast.error("Please fill in the details")}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        { required: required && true, message: "Please enter title name" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[
                        { required: required && true, message: "Please enter image" },
                    ]}
                >
                    <Input onChange={handleImage} type="file" />
                </Form.Item>
                <Form.Item
                    label="Select Category"
                    name="category"
                    rules={[
                        { required: required && true, message: "Please select category" },
                    ]}
                >
                    <Select>
                        <Select.Option value="Cloths">Cloths</Select.Option>
                        <Select.Option value="Personal Protective Equipment">
                            Personal Protective Equipment
                        </Select.Option>
                        <Select.Option value="Medical Equipment">
                            Medical Equipment
                        </Select.Option>
                        <Select.Option value="Medications">Medications</Select.Option>
                        <Select.Option value="Food Supplies">Food Supplies</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        { required: required && true, message: "Please enter description" },
                    ]}
                >
                    <TextArea
                        style={{ height: 100, resize: "none" }}
                        placeholder="Please write a short description of the supply"
                    />
                </Form.Item>
                <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[
                        {
                            required: required && true,
                            message: "Please enter amount number",
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item>
                    <Button type="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SupplyForm;
