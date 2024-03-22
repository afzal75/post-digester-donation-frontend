/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Form, Input, Row } from "antd";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TestimonialForm = ({
    onFinish,
    handleImage,
}: {
    onFinish: any;
    handleImage: any;
}) => {
    return (
        <div className="w-full max-w-xl mx-auto">
            <Form
                className="border p-5"
                layout="vertical"
                name="testimonials"
                onFinish={onFinish}
                onFinishFailed={() => toast.error("Please fill in all required fields")}
            >
                <Row gutter={5}>
                    <Col span={12}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please enter your name" }]}
                        >
                            <Input placeholder="Please enter your name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Designation"
                            name="designation"
                            rules={[
                                { required: true, message: "Please enter your designation" },
                            ]}
                        >
                            <Input placeholder="Please enter your designation" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    label="Testimonial"
                    name="testimonial"
                    rules={[{ required: true, message: "Please enter your testimonial" }]}
                >
                    <Input.TextArea
                        placeholder="Please enter your testimonial"
                        rows={4}
                    />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: "Please enter image" }]}
                >
                    <Input onChange={handleImage} type="file" />
                </Form.Item>
                <Form.Item>
                    <Button variant={"default"} type="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default TestimonialForm;
